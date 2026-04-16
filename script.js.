/* =========================================
   1. GESTÃO DE DADOS (Content Objects)
   ========================================= */
const MODALIDADES = [
    {
        title: "Salto de Obstáculos",
        text: "Uma prova de precisão e agilidade onde cavalo e cavaleiro devem completar um percurso de obstáculos sem faltas no menor tempo possível."
    },
    {
        title: "Walk Horse (Passeio)",
        text: "A equitação de lazer focada no bem-estar. O 'Walk' é o passo natural, ideal para iniciantes e para conexão sensorial com o animal."
    },
    {
        title: "Adestramento (Dressage)",
        text: "Considerado o ballet do hipismo. Foca na harmonia, disciplina e na execução de movimentos complexos com comandos imperceptíveis."
    }
];

const TÉCNICAS_FAQ = [
    { q: "O que é a 'Meia-Parada'?", a: "É um sinal sutil para reequilibrar o cavalo, preparando-o para uma transição ou obstáculo." },
    { q: "Importância do Assento", a: "O peso do cavaleiro é o principal meio de comunicação. Um assento profundo garante estabilidade no galope." }
];

const IMAGENS_GALERIA = [
    "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=800",
    "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=800",
    "https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?q=80&w=800"
];

/* =========================================
   2. RENDERIZAÇÃO DINÂMICA
   ========================================= */
function initApp() {
    const grid = document.getElementById('grid-modalidades');
    const accordion = document.getElementById('info-accordion');
    const track = document.getElementById('carousel-track');

    // Injetar Modalidades
    grid.innerHTML = MODALIDADES.map(m => `
        <article class="card">
            <h3>${m.title}</h3>
            <p>${m.text}</p>
        </article>
    `).join('');

    // Injetar Galeria
    track.innerHTML = IMAGENS_GALERIA.map(img => `
        <img src="${img}" class="slide" alt="Cena de Equitação">
    `).join('');

    // Injetar Acordeões
    accordion.innerHTML = TÉCNICAS_FAQ.map(f => `
        <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">
                ${f.q} <span>+</span>
            </button>
            <div class="accordion-panel">
                <p style="padding: 20px;">${f.a}</p>
            </div>
        </div>
    `).join('');
}

/* =========================================
   3. FUNCIONALIDADES DE ACESSIBILIDADE
   ========================================= */
let fontSize = 16;
function adjustFont(type) {
    fontSize = (type === 'increase') ? fontSize + 2 : fontSize - 2;
    document.documentElement.style.setProperty('--font-size-base', `${fontSize}px`);
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

/* =========================================
   4. COMPONENTES (Carrossel e Acordeão)
   ========================================= */
let carouselIdx = 0;
function moveCarousel(dir) {
    const track = document.getElementById('carousel-track');
    carouselIdx = (carouselIdx + dir + IMAGENS_GALERIA.length) % IMAGENS_GALERIA.length;
    track.style.transform = `translateX(-${carouselIdx * 100}%)
