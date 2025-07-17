function includeHTML() {
  var z, i, elmnt, file, xhttp;
  
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    
    file = elmnt.getAttribute("include-html");
    if (file) {
     
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      
      return;
    }
  }
}

// Initialize mobile menu after includes are loaded
function initializeMobileMenuAfterInclude() {
  setTimeout(() => {
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
  }, 100);
}

// Call includeHTML when the page loads
document.addEventListener('DOMContentLoaded', function() {
  includeHTML();
  // Initialize mobile menu functionality after a short delay to ensure components are loaded
  setTimeout(initializeMobileMenuAfterInclude, 200);
});