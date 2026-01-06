// WatchGuard Partner Portal - Common JavaScript

// Load header and footer with absolute paths (works better with GitHub Pages)
document.addEventListener('DOMContentLoaded', function() {
    // Load header - try absolute path first, then fallback to relative
    fetch('/includes/header.html')
        .then(response => {
            if (!response.ok) {
                // Fallback: try relative path
                return fetch('includes/header.html');
            }
            return response;
        })
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
            initializeMenu();
        })
        .catch(error => {
            console.error('Error loading header:', error);
            // Final fallback: try relative path
            fetch('includes/header.html')
                .then(response => response.text())
                .then(html => {
                    document.getElementById('header-placeholder').innerHTML = html;
                    initializeMenu();
                })
                .catch(err => console.error('Error loading header (final fallback):', err));
        });

    // Load footer - try absolute path first, then fallback to relative
    fetch('/includes/footer.html')
        .then(response => {
            if (!response.ok) {
                // Fallback: try relative path
                return fetch('includes/footer.html');
            }
            return response;
        })
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Final fallback: try relative path
            fetch('includes/footer.html')
                .then(response => response.text())
                .then(html => {
                    document.getElementById('footer-placeholder').innerHTML = html;
                })
                .catch(err => console.error('Error loading footer (final fallback):', err));
        });
});

// Initialize menu functionality
function initializeMenu() {
    var toggles = document.querySelectorAll('.submenu-toggle');
    toggles.forEach(function(btn){
        btn.addEventListener('click', function(e){
            e.preventDefault();
            var li = btn.closest('.nav-item');
            var isOpen = li.classList.contains('open');
            // close other open items at same level
            var siblings = li.parentElement.querySelectorAll(':scope > .nav-item.open');
            siblings.forEach(function(s){ if(s !== li) s.classList.remove('open'); });
            if(isOpen) {
                li.classList.remove('open');
                btn.setAttribute('aria-expanded','false');
            } else {
                li.classList.add('open');
                btn.setAttribute('aria-expanded','true');
            }
        });
    });

    // Handle nested submenu groups (3rd level) on mobile
    var nestedSubmenus = document.querySelectorAll('.submenu-group.has-submenu > strong');
    nestedSubmenus.forEach(function(heading){
        // Only make interactive on mobile
        heading.style.cursor = 'pointer';
        heading.addEventListener('click', function(e){
            if(window.innerWidth <= 992) {
                e.preventDefault();
                e.stopPropagation();
                var group = heading.closest('.submenu-group');
                var isOpen = group.classList.contains('open');

                // Close other open nested groups at same level
                var parent = group.parentElement;
                if(parent) {
                    var siblings = parent.querySelectorAll(':scope > .submenu-group.has-submenu.open');
                    siblings.forEach(function(s){ if(s !== group) s.classList.remove('open'); });
                }

                if(isOpen) {
                    group.classList.remove('open');
                } else {
                    group.classList.add('open');
                }
            }
        });
    });

    // Close menus when clicking outside
    document.addEventListener('click', function(e){
        if(!e.target.closest('.multi-nav')){
            document.querySelectorAll('.multi-nav .nav-item.open').forEach(function(i){ i.classList.remove('open'); });
            document.querySelectorAll('.submenu-toggle[aria-expanded]').forEach(function(b){ b.setAttribute('aria-expanded','false'); });
            document.querySelectorAll('.submenu-group.has-submenu.open').forEach(function(g){ g.classList.remove('open'); });
        }
    });

    // Keyboard support: ESC closes
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.querySelectorAll('.multi-nav .nav-item.open').forEach(function(i){ i.classList.remove('open'); });
            document.querySelectorAll('.submenu-group.has-submenu.open').forEach(function(g){ g.classList.remove('open'); });
        }
    });

    // Handle window resize to ensure proper behavior
    var resizeTimer;
    window.addEventListener('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            if(window.innerWidth > 992) {
                // On desktop, remove mobile-specific open states
                document.querySelectorAll('.submenu-group.has-submenu.open').forEach(function(g){ g.classList.remove('open'); });
            }
        }, 250);
    });
}
