document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    // Mudar estilo da navbar ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.parentElement.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.parentElement.style.padding = '0.5rem 0';
            navbar.parentElement.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            navbar.parentElement.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.parentElement.style.padding = '1rem 0';
            navbar.parentElement.style.boxShadow = 'none';
        }
    });

    // Rolagem suave para os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de revelação ao rolar (Scroll Reveal Simples)
    const revealElements = document.querySelectorAll('.section-title, .about-text, .about-image, .cast-card, .curiosity-item');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Configuração inicial para os elementos de revelação
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executar uma vez no carregamento

    // Mensagem secreta no console (Referência ao filme)
    console.log("%cW.C.K.D. is Good.", "color: #d35400; font-size: 20px; font-weight: bold;");
    console.log("Bem-vindo ao Labirinto, Clareano. Tente encontrar a saída.");
});
