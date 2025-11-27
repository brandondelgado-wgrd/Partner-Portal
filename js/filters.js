// WatchGuard Partner Portal - Filter Functionality
// Reutilizável em múltiplas páginas

(function(){
    function onReady(fn){
        if(document.readyState !== 'loading') fn();
        else document.addEventListener('DOMContentLoaded', fn);
    }

    onReady(function(){
        // Initialize filters - works with any page that has these elements
        initializeFilters();
    });

    function initializeFilters(){
        var filterBtns = document.querySelectorAll('.filter-option-btn');

        // Exit if no filter elements found on this page
        if(filterBtns.length === 0) {
            return;
        }

        // Function to apply filters
        function applyFilters() {
            // Re-query campaign cards to support dynamically rendered content
            var campaignCards = document.querySelectorAll('.campaign-card');
            if(campaignCards.length === 0) return;

            // Get all active filters
            var activeFilters = [];
            filterBtns.forEach(function(btn){
                if(btn.classList.contains('active')) {
                    activeFilters.push(btn.getAttribute('data-filter'));
                }
            });

            // Show/hide cards based on filters
            campaignCards.forEach(function(card){
                var cardType = card.getAttribute('data-type');

                // If no filters are active, show all cards
                if(activeFilters.length === 0) {
                    card.classList.remove('hidden');
                } else {
                    // Show card if its type matches any of the active filters
                    if(activeFilters.indexOf(cardType) !== -1) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        }

        // Filter button toggle
        filterBtns.forEach(function(btn){
            btn.addEventListener('click', function(e){
                e.preventDefault();
                btn.classList.toggle('active');
                applyFilters();
            });
        });

        // Clear filters button
        var clearBtn = document.getElementById('clear-filters');
        if(clearBtn) {
            clearBtn.addEventListener('click', function(e){
                e.preventDefault();
                filterBtns.forEach(function(btn){
                    btn.classList.remove('active');
                });
                applyFilters();
            });
        }
    }
})();
