// partnership-dashboard.js

// Configuração dos dados do parceiro
const partnerData = {
    name: "Brandon Delgado",
    status: "Gold",
    contacts: "Bob Jones, Alan McNeilly, Patrick Cundiff",
    team: {
        cam: "[First, Last]",
        se: "[First, Last]",
        fmm: "[First, Last]"
    },
    earnings: {
        yearly: 5000000,
        frontEndDiscount: 8000000,
        mdf: 9000000,
        coOp: 8000000,
        currentRebate: 9000000,
        thirdSpecRebate: 9000000
    },
    rebateProgress: 75,
    dealsRegistered: 155,
    specializations: [
        {
            name: "Network Security",
            icon: "Network Security",
            salesCert: true,
            techCert: true,
            nfr: true
        },
        {
            name: "Secure Wi-Fi",
            icon: "Secure Wi-fi",
            salesCert: false,
            techCert: true,
            nfr: false
        },
        {
            name: "Multi-Factor Authentication",
            icon: "MFA",
            salesCert: false,
            techCert: false,
            nfr: true
        },
        {
            name: "Endpoint Security",
            icon: "Endpoint Security",
            salesCert: false,
            techCert: false,
            nfr: false
        }
    ]
};

// Função para calcular total de certificações
function calculateTotalCertifications(specializations) {
    let total = 0;
    specializations.forEach(spec => {
        if (spec.salesCert) total++;
        if (spec.techCert) total++;
        if (spec.nfr) total++;
    });
    return total;
}

// Função para determinar o tier baseado nas certificações
function calculateTier(certCount) {
    if (certCount >= 10) return { name: "Gold", level: 3, next: null, progress: 100 };
    if (certCount >= 3) return { name: "Silver", level: 2, next: "Gold", progress: (certCount / 10) * 100 };
    return { name: "Registered Reseller", level: 1, next: "Silver", progress: (certCount / 3) * 100 };
}

// Função para animar números contando
function animateCounter(element, target, duration = 2000, prefix = "$", decimals = 0) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        const formatted = decimals > 0 
            ? current.toFixed(decimals)
            : Math.floor(current).toLocaleString('en-US');
        
        element.textContent = prefix + formatted;
    }, 16);
}

// Função para animar círculo de progresso
function animateCircleProgress(element, targetPercent) {
    const circle = element.querySelector('.progress-bar');
    const text = element.querySelector('.progress-value');
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    
    let current = 0;
    const increment = targetPercent / 120;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= targetPercent) {
            current = targetPercent;
            clearInterval(timer);
        }
        
        const offset = circumference - (current / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        text.textContent = Math.floor(current) + '%';
    }, 16);
}

// Função para animar barra de progresso de tier
function animateTierProgress(totalCerts) {
    const element = document.getElementById('tierProgressBar');
    const startElement = document.getElementById('tierProgressStart');
    const endElement = document.getElementById('tierProgressEnd');
    const labelElement = document.getElementById('tierProgressLabel');

    // Determinar os limites da categoria atual
    let tierStart = 0;
    let tierEnd = 3;
    let tierName = 'Silver';

    if (totalCerts < 3) {
        tierStart = 0;
        tierEnd = 3;
        tierName = 'Silver';
    } else if (totalCerts < 10) {
        tierStart = 3;
        tierEnd = 10;
        tierName = 'Gold';
    } else {
        tierStart = 10;
        tierEnd = 12;
        tierName = 'Platinum (Max)';
    }

    // Calcular progresso dentro da categoria atual
    const certsInCurrentTier = totalCerts - tierStart;
    const certsNeededForTier = tierEnd - tierStart;
    const progressPercent = Math.min((certsInCurrentTier / certsNeededForTier) * 100, 100);

    // Atualizar números
    startElement.textContent = tierStart;
    endElement.textContent = tierEnd;
    labelElement.textContent = `Progress to ${tierName}: ${totalCerts} of ${tierEnd} certifications`;

    // Animar barra
    let current = 0;
    const increment = progressPercent / 120;

    const timer = setInterval(() => {
        current += increment;
        if (current >= progressPercent) {
            current = progressPercent;
            clearInterval(timer);
        }

        element.style.width = current + '%';
        element.setAttribute('data-percent', Math.floor(current) + '%');
    }, 16);
}

// Função para atualizar marcadores de tier
function updateTierMarkers(tier) {
    const markers = document.querySelectorAll('.tier-marker');
    markers.forEach((marker, index) => {
        if (index < tier.level) {
            marker.classList.add('active');
        }
    });
}

// Função para renderizar badges de especializações com certificações
function renderSpecializationsBadges(specializations) {
    const container = document.getElementById('specializationsBadges');
    container.innerHTML = '';

    specializations.forEach(spec => {
        const badgeItem = document.createElement('div');
        badgeItem.className = 'badge-item';

        badgeItem.innerHTML = `
            <img src="assets/${spec.icon}@2x.png" alt="${spec.name}" class="spec-badge">
            <div class="cert-list">
                <div class="cert-item">
                    <span class="cert-label">Sales Cert</span>
                    <span class="cert-status icon-${spec.salesCert ? 'check' : 'x'}">${spec.salesCert ? '✓' : '✗'}</span>
                </div>
                <div class="cert-item">
                    <span class="cert-label">Tech Cert</span>
                    <span class="cert-status icon-${spec.techCert ? 'check' : 'x'}">${spec.techCert ? '✓' : '✗'}</span>
                </div>
                <div class="cert-item">
                    <span class="cert-label">NFR</span>
                    <span class="cert-status icon-${spec.nfr ? 'check' : 'x'}">${spec.nfr ? '✓' : '✗'}</span>
                </div>
            </div>
        `;

        container.appendChild(badgeItem);
    });
}

// Função principal de inicialização
function initPartnershipDashboard() {
    // Atualizar informações do parceiro
    document.getElementById('partnerName').textContent = partnerData.name;
    document.getElementById('partnerStatus').textContent = `You are a ${partnerData.status} Tier`;
    document.getElementById('partnerStatus').className = `status-badge ${partnerData.status.toLowerCase()}`;
    document.getElementById('partnerContacts').textContent = partnerData.contacts;
    
    // Atualizar equipe
    document.getElementById('camName').textContent = partnerData.team.cam;
    document.getElementById('seName').textContent = partnerData.team.se;
    document.getElementById('fmmName').textContent = partnerData.team.fmm;
    
    // Animar valores monetários
    document.querySelectorAll('.amount-green').forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        animateCounter(element, target, 2000, '$', 0);
    });
    
    // Animar número de deals
    const dealsElement = document.querySelector('.stat-number');
    if (dealsElement) {
        const target = parseInt(dealsElement.getAttribute('data-target'));
        animateCounter(dealsElement, target, 2000, '', 0);
    }
    
    // Animar círculo de progresso de rebate
    const progressCircle = document.querySelector('.progress-circle');
    if (progressCircle) {
        const targetProgress = parseInt(progressCircle.getAttribute('data-progress'));
        setTimeout(() => {
            animateCircleProgress(progressCircle, targetProgress);
        }, 500);
    }
    
    // Calcular certificações e tier
    const totalCerts = calculateTotalCertifications(partnerData.specializations);
    const tierInfo = calculateTier(totalCerts);

    // Animar barra de progresso de tier
    const tierProgressBar = document.getElementById('tierProgressBar');
    if (tierProgressBar) {
        setTimeout(() => {
            animateTierProgress(totalCerts);
            updateTierMarkers(tierInfo);
        }, 1000);
    }
    
    // Renderizar badges de especializações
    renderSpecializationsBadges(partnerData.specializations);
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initPartnershipDashboard);