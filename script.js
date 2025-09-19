document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const menuContent = document.querySelector('.menu-content');
    const langBtn = document.getElementById('lang-btn');
    const heroVideo = document.getElementById('hero-video');

    const content = {
        es: {
            inicio: 'Inicio',
            tours: 'Guías',
            curiosities: 'Curiosidades',
            contacto: 'Contacto',
            heroTitle: 'Viajar a Nueva York',
            heroText: 'Descubre la ciudad que nunca duerme con nuestras guías personalizadas.',
            ctaButton: 'Ver Guías',
            toursTitle: 'NUESTRAS GUÍAS',
            tour1Title: 'Guía de 1 Día',
            tour1Text: 'Explora los lugares más icónicos de Manhattan en un día.',
            tour3Title: 'Guía de 3 Días',
            tour3Text: 'Descubre la esencia de la Gran Manzana, de Central Park a la Estatua de la Libertad.',
            tour5Title: 'Guía de 5 Días',
            tour5Text: 'La experiencia completa: visita barrios, museos y disfruta de la vida nocturna.',
            moreInfo: 'Más info',
            curiositiesTitle: 'Curiosidades de Nueva York',
            whatsappTitle: '¿Quieres viajar a la Gran Manzana?',
            whatsappText: 'Contacta sin compromiso.',
            whatsappLinkText: 'Hola, me gustaría saber más acerca de tus servicios, si puedes contáctame',
            testimonialsTitle: 'Opiniones de nuestros viajeros',
            testimonial1: "La guía de 3 días es perfecta para descubrir los lugares esenciales de Nueva York sin perder tiempo. ¡Disfrutamos mucho!",
            testimonial2: "Los consejos de la guía nos ahorraron mucho dinero y la planificación. ¡Fue un viaje inolvidable!",
            testimonial3: "Gracias a la guía, encontramos un lugar de pizza increíble que nunca habríamos descubierto solos. Totalmente recomendable.",
            footerSocialTitle: 'Síguenos en las redes',
            footerContactTitle: 'Contáctanos',
            footerRights: 'Todos los derechos reservados.'
        },
        en: {
            inicio: 'Home',
            tours: 'Guides',
            curiosities: 'Curiosities',
            contacto: 'Contact',
            heroTitle: 'Travel to New York',
            heroText: 'Discover the city that never sleeps with our personalized guides.',
            ctaButton: 'View Guides',
            toursTitle: 'OUR GUIDES',
            tour1Title: '1-Day Guide',
            tour1Text: 'Explore the most iconic places in Manhattan in one day.',
            tour3Title: '3-Day Guide',
            tour3Text: 'Discover the essence of the Big Apple, from Central Park to the Statue of Liberty.',
            tour5Title: '5-Day Guide',
            tour5Text: 'The complete experience: visit neighborhoods, museums, and enjoy the nightlife.',
            moreInfo: 'More info',
            curiositiesTitle: 'New York Curiosities',
            whatsappTitle: 'Want to travel to the Big Apple?',
            whatsappText: 'Contact without obligation.',
            whatsappLinkText: 'Hello, I would like to know more about your services, please contact me',
            testimonialsTitle: 'Opinions of our travelers',
            testimonial1: "The 3-day guide is perfect for discovering the essential places in New York without wasting time. We enjoyed it a lot!",
            testimonial2: "The guide's tips saved us a lot of money and planning. It was an unforgettable trip!",
            testimonial3: "Thanks to the guide, we found an incredible pizza place that we would have never discovered alone. Totally recommended.",
            footerSocialTitle: 'Follow us on social media',
            footerContactTitle: 'Contact us',
            footerRights: 'All rights reserved.'
        }
    };
    
    const allCuriosities = [
        { 
            es: '🚆 La Gran Estación Central és tan gran que té 44 andanes, el major nombre de qualsevol estació al món.',
            en: '🚆 Grand Central Terminal is so large it has 44 platforms, the most of any station in the world.'
        },
        { 
            es: '🗽 La corona de la Estatua de la Libertad té 7 puntes, que representen els set continents.',
            en: '🗽 The crown of the Statue of Liberty has 7 points, representing the seven continents.'
        },
        { 
            es: '🚇 El 3 de mayo de 2003 fue el último día en que se usaron las fichas de metro en Nueva York.',
            en: '🚇 May 3, 2003 was the last day subway tokens were used in New York.'
        },
        { 
            es: '🌳 Central Park és més gran que el país de Mònaco.',
            en: '🌳 Central Park is larger than the country of Monaco.'
        },
        { 
            es: '🌉 El 24 de mayo de 1883, el Puente de Brooklyn fue inaugurado oficialment.',
            en: '🌉 On May 24, 1883, the Brooklyn Bridge was officially opened.'
        },
        { 
            es: '🚕 Todos los taxis de la ciudad son amarillos porque el primer taxista descubrió que el amarillo era el color más visible desde lejos.',
            en: '🚕 All city taxis are yellow because the first cab driver discovered yellow was the most visible color from a distance.'
        },
        { 
            es: '🍕 A Brooklyn se encuentra la pizzería más antigua de los EE. UU., fundada en 1905.',
            en: '🍕 Brooklyn is home to the oldest pizzeria in the U.S., founded in 1905.'
        },
        { 
            es: '🏙️ El famoso Times Square se llamaba Longacre Square hasta que el New York Times se mudó allí en 1904.',
            en: '🏙️ The famous Times Square was called Longacre Square until the New York Times moved there in 1904.'
        },
        { 
            es: '🗽 La Estatua de la Libertad no fue un regalo de Francia, sino del pueblo de Francia a los EE. UU.',
            en: '🗽 The Statue of Liberty was not a gift from the country of France, but from the people of France to the U.S.'
        },
        { 
            es: '🎉 La bola de Nochevieja de Times Square se usa desde 1907.',
            en: '🎉 The New Year\'s Eve ball in Times Square has been used since 1907.'
        }
    ];
    
    const getRandomCuriosities = () => {
        const shuffled = [...allCuriosities].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    const selectors = {
        inicio: 'a[href="#hero"]',
        tours: 'a[href="#tours"]',
        curiosities: 'a[href="#curiosities"]',
        contacto: 'a[href="#"]',
        heroTitle: '.hero-text h1',
        heroText: '.hero-text p',
        ctaButton: '.cta-button',
        toursTitle: '.tours-section h2',
        tour1Title: '.tour-card:nth-child(1) h3',
        tour1Text: '.tour-card:nth-child(1) p',
        tour3Title: '.tour-card:nth-child(2) h3',
        tour3Text: '.tour-card:nth-child(2) p',
        tour5Title: '.tour-card:nth-child(3) h3',
        tour5Text: '.tour-card:nth-child(3) p',
        moreInfo: '.tour-button',
        curiositiesTitle: '.curiosities-section h2',
        whatsappTitle: '.whatsapp-section h2',
        whatsappText: '.whatsapp-section p',
        whatsappLink: '.whatsapp-button',
        testimonialsTitle: '.testimonials-section h2',
        testimonial1: '.testimonial-card:nth-of-type(1) blockquote',
        testimonial2: '.testimonial-card:nth-of-type(2) blockquote',
        testimonial3: '.testimonial-card:nth-of-type(3) blockquote',
        curiosityMarqueeContent: '.curiosity-marquee-content',
        footerSocialTitle: '.social-media-section h4',
        footerContactTitle: '.contact-section h4',
        footerRights: '.footer-rights'
    };

    const changeLanguage = (lang) => {
        const randomCuriosities = getRandomCuriosities();
        const allCuriositiesText = randomCuriosities.map(c => c[lang]).join(' ✨ ');

        for (const key in selectors) {
            const element = document.querySelector(selectors[key]);
            if (element) {
                if (key === 'moreInfo') {
                    document.querySelectorAll(selectors[key]).forEach(btn => btn.textContent = content[lang][key]);
                } else if (key === 'whatsappLink') {
                    const baseHref = element.href.split('?')[0];
                    const newHref = `${baseHref}?text=${encodeURIComponent(content[lang]['whatsappLinkText'])}`;
                    element.href = newHref;
                } else if (key === 'curiosityMarqueeContent') {
                    element.textContent = `✨ ${allCuriositiesText} ✨`;
                } else {
                    element.textContent = content[lang][key];
                }
            }
        }
        langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
        langBtn.dataset.lang = lang;
        document.documentElement.lang = lang;
    };

    menuToggle.addEventListener('click', () => {
        menuContent.classList.toggle('active');
        menuToggle.textContent = menuContent.classList.contains('active') ? '✖' : '☰';
    });

    document.querySelectorAll('.menu-content a').forEach(link => {
        link.addEventListener('click', () => {
            menuContent.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    langBtn.addEventListener('click', () => {
        const currentLang = langBtn.dataset.lang;
        const newLang = currentLang === 'es' ? 'en' : 'es';
        changeLanguage(newLang);
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menuContent.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInsideMenu && menuContent.classList.contains('active')) {
            menuContent.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const videoSources = [
        'NY1.mp4',
        'NY2.mp4',
        'NY3.mp4'
    ];
    
    let currentVideoIndex = 0;

    function playNextVideo() {
        heroVideo.classList.add('fade-out');
        setTimeout(() => {
            currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
            heroVideo.src = videoSources[currentVideoIndex];
            heroVideo.load();
            heroVideo.play().then(() => {
                heroVideo.classList.remove('fade-out');
            }).catch(error => {
                console.error('La reproducción falló después de la carga:', error);
            });
        }, 500);
    }

    if (heroVideo) {
        heroVideo.addEventListener('ended', playNextVideo);
    }

    heroVideo.src = videoSources[currentVideoIndex];
    heroVideo.play().catch(error => {
        console.error('La reproducción automática falló:', error);
    });
    
    changeLanguage(langBtn.dataset.lang || 'es');
});
