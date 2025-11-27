// Render campaigns from external JSON into the .campaigns-grid container
(function(){
    function onReady(fn){
        if(document.readyState !== 'loading') fn();
        else document.addEventListener('DOMContentLoaded', fn);
    }

    onReady(function(){
        var container = document.getElementById('campaigns-grid') || document.querySelector('.campaigns-grid');
        if(!container) return;

        fetch('data/campaigns.json')
            .then(function(res){ return res.json(); })
            .then(function(items){
                container.innerHTML = '';
                items.forEach(function(item){
                    var a = document.createElement('a');
                    a.href = item.href || '#';
                    a.target = '_blank';
                    a.className = 'campaign-card';
                    if(item.type) a.setAttribute('data-type', item.type);

                    var imgWrap = document.createElement('div');
                    imgWrap.className = 'campaign-image';

                    if(item.badge){
                        var badge = document.createElement('div');
                        badge.className = 'campaign-badge';
                        badge.textContent = item.badge;
                        imgWrap.appendChild(badge);
                    }

                    var img = document.createElement('img');
                    img.src = item.image || '';
                    img.alt = item.alt || '';
                    imgWrap.appendChild(img);

                    var content = document.createElement('div');
                    content.className = 'campaign-content';

                    var h3 = document.createElement('h3');
                    h3.className = 'campaign-title';
                    h3.textContent = item.title || '';

                    var p = document.createElement('p');
                    p.className = 'campaign-description';
                    p.textContent = item.description || '';

                    content.appendChild(h3);
                    content.appendChild(p);

                    a.appendChild(imgWrap);
                    a.appendChild(content);

                    container.appendChild(a);
                });
            })
            .catch(function(err){
                console.error('Error loading campaigns.json', err);
            });
    });
})();
