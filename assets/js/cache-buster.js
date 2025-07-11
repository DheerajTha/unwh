// cache-buster.js
document.addEventListener('DOMContentLoaded', function() {
    // Version number (update this when you deploy changes)
    const version = '1.0.0'; 
    // Or use a timestamp: const version = new Date().getTime();
    
    // Function to update URLs with version parameter
    function bustCache(selector, attr) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const url = element.getAttribute(attr);
            if (url) {
                // Add or update version parameter
                const separator = url.includes('?') ? '&' : '?';
                element.setAttribute(attr, url + separator + 'v=' + version);
            }
        });
    }
    
    // Apply to all <link rel="stylesheet"> tags
    bustCache('link[rel="stylesheet"]', 'href');
    
    // Apply to all regular script tags
    bustCache('script[src]:not([data-no-bust])', 'src');
    
    // For dynamically loaded scripts/images/etc., you would need to handle those separately
});

// For dynamic imports/modules
function importWithCacheBust(url) {
    const version = '1.0.0';
    const separator = url.includes('?') ? '&' : '?';
    return import(url + separator + 'v=' + version);
}