document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            title: 'Luca Newsletter',
            description: 'Welcome to the Luca Newsletter, your daily dose of knowledge, inspiration, and fun! Our carefully curated content is designed to kickstart your day with a perfect blend of information, language learning, and personal growth.',
            subscribeTitle: 'Subscribe',
            subscribePlaceholder: 'Enter your email',
            subscribeButton: 'Join the Future',
            unsubscribeTitle: 'Unsubscribe',
            unsubscribePlaceholder: 'Enter your email to unsubscribe',
            unsubscribeButton: 'Leave the Network',
            weather: 'Weather',
            weatherDesc: 'Stay informed about the day\'s forecast.',
            exchangeRates: 'Exchange Rates',
            exchangeRatesDesc: 'Keep track of the latest currency exchange rates.',
            quoteOfTheDay: 'Quote of the Day',
            quoteOfTheDayDesc: 'Get inspired by thought-provoking quotes.',
            funFact: 'Fun Fact',
            funFactDesc: 'Learn something new and interesting every day.',
            englishWithLuca: 'English with Luca',
            englishWithLucaDesc: 'Improve your English with our Word of the Day and Tip of the Day.',
            onThisDay: 'On This Day',
            onThisDayDesc: 'Discover a significant historical event that occurred on this date.',
            breathingBox: 'Breathing Box',
            breathingBoxDesc: 'Practice mindfulness with our daily breathing exercise gif.',
            dailyChallenge: 'Daily Challenge',
            dailyChallengeDesc: 'Push yourself with a new personal growth challenge each day.',
            subscribeNow: 'Subscribe Now',
            unsubscribe: 'Unsubscribe',
            backToHome: 'Back to Home'
        },
        pt: {
            title: 'Boletim Luca',
            description: 'Bem-vindo ao Boletim Luca, sua dose diária de conhecimento, inspiração e diversão! Nosso conteúdo cuidadosamente selecionado foi projetado para iniciar seu dia com uma mistura perfeita de informação, aprendizado de idiomas e crescimento pessoal.',
            subscribeTitle: 'Inscrever-se',
            subscribePlaceholder: 'Digite seu e-mail',
            subscribeButton: 'Junte-se ao Futuro',
            unsubscribeTitle: 'Cancelar inscrição',
            unsubscribePlaceholder: 'Digite seu e-mail para cancelar a inscrição',
            unsubscribeButton: 'Sair da Rede',
            weather: 'Tempo',
            weatherDesc: 'Fique informado sobre a previsão do dia.',
            exchangeRates: 'Taxas de Câmbio',
            exchangeRatesDesc: 'Acompanhe as últimas taxas de câmbio de moedas.',
            quoteOfTheDay: 'Citação do Dia',
            quoteOfTheDayDesc: 'Inspire-se com citações estimulantes.',
            funFact: 'Curiosidade',
            funFactDesc: 'Aprenda algo novo e interessante todos os dias.',
            englishWithLuca: 'Inglês com Luca',
            englishWithLucaDesc: 'Melhore seu inglês com nossa Palavra do Dia e Dica do Dia.',
            onThisDay: 'Neste Dia',
            onThisDayDesc: 'Descubra um evento histórico significativo que ocorreu nesta data.',
            breathingBox: 'Caixa de Respiração',
            breathingBoxDesc: 'Pratique mindfulness com nosso gif diário de exercício de respiração.',
            dailyChallenge: 'Desafio Diário',
            dailyChallengeDesc: 'Desafie-se com um novo desafio de crescimento pessoal a cada dia.',
            subscribeNow: 'Inscreva-se Agora',
            unsubscribe: 'Cancelar Inscrição',
            backToHome: 'Voltar para a Página Inicial'
        }
    };

    let currentLanguage = 'en';

    function setLanguage(lang) {
        currentLanguage = lang;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        document.getElementById('enButton').classList.toggle('activeLanguageButton', lang === 'en');
        document.getElementById('ptButton').classList.toggle('activeLanguageButton', lang === 'pt');
    }

    document.getElementById('enButton').addEventListener('click', () => setLanguage('en'));
    document.getElementById('ptButton').addEventListener('click', () => setLanguage('pt'));

    // Set initial language based on browser settings
    const userLang = navigator.language || navigator.userLanguage;
    currentLanguage = userLang.startsWith('pt') ? 'pt' : 'en';

    // Create background circles
    const background = document.getElementById('background');
    for (let i = 0; i < 3; i++) {
        const circle = document.createElement('div');
        circle.classList.add('background-circle');
        background.appendChild(circle);
    }

    // Set initial language
    setLanguage(currentLanguage);

    // Handle button clicks (updated to handle "Back Home" correctly)
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('cta-button')) {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            if (href === '/' || href === '/index.html') {
                window.location.href = '/'; // Redirect to home page
            } else {
                const page = href.replace('.html', '');
                loadContent(page);
            }
        }
    });

    function loadContent(page) {
        fetch(page + '.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
                setLanguage(currentLanguage);
                
                // Add styles for the "Back to Home" button
                const style = document.createElement('style');
                style.textContent = `
                    .cta-home {
                        display: inline-block;
                        margin-top: 20px;
                        background-color: #00f7ff;
                        color: #0a0a2a;
                    }
                `;
                document.head.appendChild(style);
            })
            .catch(error => console.error('Error loading content:', error));
    }
});