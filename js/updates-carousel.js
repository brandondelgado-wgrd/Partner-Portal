// updates-carousel.js

let currentIndex = 0;
let updates = [];
let cardsPerView = 3;

// Função para formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Função para determinar quantos cards mostrar baseado na largura da tela
function updateCardsPerView() {
    const width = window.innerWidth;
    if (width <= 768) {
        cardsPerView = 1;
    } else if (width <= 992) {
        cardsPerView = 2;
    } else {
        cardsPerView = 3;
    }
    updateCarousel();
}

// Função para renderizar cards
function renderUpdates(updatesData) {
    updates = updatesData;
    const carousel = document.getElementById('updatesCarousel');
    const dotsContainer = document.getElementById('carouselDots');

    // Criar track do carrossel
    const track = document.createElement('div');
    track.className = 'carousel-track';
    track.id = 'carouselTrack';

    updates.forEach((update, index) => {
        const card = document.createElement('div');
        card.className = 'update-card';
        card.onclick = () => window.location.href = update.link;

        card.innerHTML = `
            <img src="${update.image}" alt="${update.title}" class="update-image" onerror="this.src='assets/placeholder.jpg'">
            <div class="update-content">
                <span class="update-badge">${update.badge}</span>
                <h3 class="update-title">${update.title}</h3>
                <p class="update-date">${formatDate(update.date)}</p>
                <p class="update-description">${update.description}</p>
                <a href="${update.link}" class="update-link" onclick="event.stopPropagation()">Read more</a>
            </div>
        `;
        track.appendChild(card);
    });

    carousel.innerHTML = '';
    carousel.appendChild(track);

    // Criar dots baseado no número de "páginas"
    dotsContainer.innerHTML = '';
    const maxPages = Math.max(0, updates.length - cardsPerView + 1);

    for (let i = 0; i < maxPages; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to page ${i + 1}`);
        dot.addEventListener('click', () => goToIndex(i));
        dotsContainer.appendChild(dot);
    }

    updateButtons();
}

// Função para ir para um índice específico
function goToIndex(index) {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.carousel-dot');
    const maxIndex = Math.max(0, updates.length - cardsPerView);

    currentIndex = Math.max(0, Math.min(index, maxIndex));

    // Calcular o deslocamento
    const cardWidth = 100 / cardsPerView; // Porcentagem de cada card
    const gap = 1.5; // Gap em rem, precisa ser ajustado
    const translateValue = -(currentIndex * (cardWidth + (gap / cardsPerView)));

    track.style.transform = `translateX(${translateValue}%)`;

    // Atualizar dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });

    updateButtons();
}

// Função para próximo
function nextSlide() {
    const maxIndex = Math.max(0, updates.length - cardsPerView);
    if (currentIndex < maxIndex) {
        goToIndex(currentIndex + 1);
    }
}

// Função para anterior
function prevSlide() {
    if (currentIndex > 0) {
        goToIndex(currentIndex - 1);
    }
}

// Função para atualizar carrossel ao redimensionar
function updateCarousel() {
    if (updates.length > 0) {
        goToIndex(Math.min(currentIndex, Math.max(0, updates.length - cardsPerView)));

        // Atualizar dots
        const dotsContainer = document.getElementById('carouselDots');
        dotsContainer.innerHTML = '';
        const maxPages = Math.max(0, updates.length - cardsPerView + 1);

        for (let i = 0; i < maxPages; i++) {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${i === currentIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to page ${i + 1}`);
            dot.addEventListener('click', () => goToIndex(i));
            dotsContainer.appendChild(dot);
        }
    }
}

// Função para atualizar estado dos botões
function updateButtons() {
    const prevBtn = document.getElementById('prevUpdate');
    const nextBtn = document.getElementById('nextUpdate');
    const maxIndex = Math.max(0, updates.length - cardsPerView);

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
}

// Carregar updates do JSON
async function loadUpdates() {
    try {
        const response = await fetch('data/updates.json');
        const data = await response.json();
        renderUpdates(data);

        // Configurar event listeners dos botões
        document.getElementById('prevUpdate').addEventListener('click', prevSlide);
        document.getElementById('nextUpdate').addEventListener('click', nextSlide);

        // Event listener para redimensionamento
        window.addEventListener('resize', updateCardsPerView);

    } catch (error) {
        console.error('Error loading updates:', error);
        document.getElementById('updatesCarousel').innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--medium-gray);">
                <p>Unable to load updates. Please try again later.</p>
            </div>
        `;
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    updateCardsPerView();
    loadUpdates();
});
