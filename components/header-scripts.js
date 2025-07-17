// Header Components Loader and Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Function to load component
  function loadComponent(containerId, componentPath) {
    return fetch(componentPath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => console.error('Error loading component:', error));
  }

  // Load all header components
  Promise.all([
    loadComponent('mobile-menu-container', 'components/mobile-menu.html'),
    loadComponent('top-header-container', 'components/top-header.html'),
    loadComponent('marquee-container', 'components/marquee.html'),
    loadComponent('main-header-container', 'components/main-header.html')
  ]).then(() => {
    // Initialize mobile menu functionality after components are loaded
    initializeMobileMenu();
  });

  function initializeMobileMenu() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.toggle-mobileMenu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileCloseBtn = document.querySelector('.mobile-menu-close');

    if (mobileMenuBtn && mobileMenu && mobileOverlay && mobileCloseBtn) {
      mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });

      mobileCloseBtn.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });

      mobileOverlay.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });

      // Dropdown toggles
      const dropdownToggles = document.querySelectorAll('.toggle-dropdown');

      dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
          const dropdown = this.parentElement.querySelector('.mobile-dropdown-menu');
          dropdown.classList.toggle('active');
          this.classList.toggle('active');
          const icon = this.querySelector('i');

          if (dropdown.classList.contains('active')) {
            icon.classList.remove('ph-caret-down');
            icon.classList.add('ph-caret-up');
          } else {
            icon.classList.remove('ph-caret-up');
            icon.classList.add('ph-caret-down');
          }
        });
      });
    }
  }
});