/* =========================================
   GESTÃO DE DADOS (Data Driven)
   ========================================= */
const SERVICOS = [
    { titulo: "Adestramento", desc: "A harmonia perfeita entre cavalo e cavaleiro focado na disciplina." },
    { titulo: "Salto", desc: "Técnica, coragem e precisão para superar obstáculos desafiadores." },
    { titulo: "Equiterapia", desc: "Uso da equitação para desenvolvimento biopsicossocial." }
];

const FAQS = [
    { q: "Qual a idade mínima?", a: "Recomendamos a partir dos 5 anos para iniciação lúdica." },
    { q: "Preciso ter equipamento próprio?", a: "Não, fornecemos o capacete e o cavalo para iniciantes." }
];

/* =========================================
   RENDERIZAÇÃO DINÂMICA
   ========================================= */
function renderContent() {
    const grid = document.getElementById('services-grid');
    const accordion = document.getElementById('faq-accordion');

    // Renderiza Cards
    grid.innerHTML = SERVICOS.map(item => `
        <article class="card" role="article">
            <h3>${item.titulo}</h3>
            <p>${item.desc}</p>
        </article>
    `).join('');

    // Renderiza Acordeão
    accordion.innerHTML = FAQS.map((item, index) => `
        <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(this)" aria-expanded="false">
                ${item.q} <span>+</span>
            </button>
            <div class="accordion-content">
                <p style="padding: 1rem 0;">${item.a}</p>
            </div>
        </div>
    `).join('');
}

/* =========================================
   FUNCIONALIDADES DE ACESSIBILIDADE
   ========================================= */
let currentFontSize = 16;

function changeFontSize(action) {
    const html = document.documentElement;
    if(action === 'increase' && currentFontSize < 24) currentFontSize += 2;
    if(action === 'decrease' && currentFontSize > 12) currentFontSize -= 2;
    html.style.fontSize = currentFontSize + 'px';
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isContrast = document.body.classList.contains('high-contrast');
    localStorage.setItem('contrast', isContrast);
}

/* =========================================
   COMPONENTES E ANIMAÇÃO
   ========================================= */
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isExpanded = element.getAttribute('aria-expanded') === 'true';
    
    element.setAttribute('aria-expanded', !isExpanded);
    content.style.maxHeight = isExpanded ? '0' : content.scrollHeight + 'px';
    element.querySelector('span').innerText = isExpanded ? '+' : '-';
}

// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
