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
            backToHome: 'Back to Home',
            editPreferencesTitle: 'Edit Newsletter Preferences',
            newsletterSections: 'Newsletter Sections',
            deliveryDays: 'Delivery Days',
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
            saturday: 'Saturday',
            sunday: 'Sunday',
            interests: 'Interests',
            interest1Placeholder: 'Interest 1',
            interest2Placeholder: 'Interest 2',
            interest3Placeholder: 'Interest 3',
            language: 'Language',
            languageEnglish: 'English',
            languagePortuguese: 'Portuguese',
            languageBoth: 'Both',
            savePreferences: 'Save Preferences',
            editPreferences: 'Edit Preferences'
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
            backToHome: 'Voltar para a Página Inicial',
            editPreferencesTitle: 'Editar Preferências da Newsletter',
            newsletterSections: 'Seções da Newsletter',
            deliveryDays: 'Dias de Entrega',
            monday: 'Segunda-feira',
            tuesday: 'Terça-feira',
            wednesday: 'Quarta-feira',
            thursday: 'Quinta-feira',
            friday: 'Sexta-feira',
            saturday: 'Sábado',
            sunday: 'Domingo',
            interests: 'Interesses',
            interest1Placeholder: 'Interesse 1',
            interest2Placeholder: 'Interesse 2',
            interest3Placeholder: 'Interesse 3',
            language: 'Idioma',
            languageEnglish: 'Inglês',
            languagePortuguese: 'Português',
            languageBoth: 'Ambos',
            savePreferences: 'Salvar Preferências',
            editPreferences: 'Editar Preferências'
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
                
                if (page === 'subscribe-success' || page === 'unsubscribe-success') {
                    // Show success message
                    const successMessage = document.getElementById('successMessage');
                    if (successMessage) successMessage.style.display = 'block';
                    
                    // Show fireworks or sad face
                    if (page === 'subscribe-success') {
                        const fireworks = document.getElementById('fireworks');
                        if (fireworks) fireworks.style.display = 'block';
                    } else {
                        const sadFace = document.getElementById('sadFace');
                        if (sadFace) sadFace.style.display = 'block';
                    }
                }
    
                // Update the URL without reloading the page
                history.pushState(null, '', '/' + page);
            })
            .catch(error => {
                console.error('Error loading content:', error);
                // If content fails to load, redirect to the page instead
                window.location.href = '/' + page + '.html';
            });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const action = form.getAttribute('action');
        const formData = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');
        
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        const loadingMessage = document.createElement('p');
        loadingMessage.id = 'loadingMessage';
        loadingMessage.textContent = 'Please wait while we process your request...';
        form.appendChild(loadingMessage);
    
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = form.id === 'subscribeForm' ? 'Join the Future' : 
                                       form.id === 'unsubscribeForm' ? 'Leave the Network' : 'Save Preferences';
            
            loadingMessage.remove();
            
            // Show success message
            const successMessage = document.createElement('p');
            successMessage.id = 'successMessage';
            successMessage.textContent = form.id === 'preferencesForm' ? 'Preferences saved successfully!' : 'Form submitted successfully!';
            form.appendChild(successMessage);
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        }, 2000);
    }
    

    // Add event listeners to forms
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', handleFormSubmit);
        });
    });
    
    // Add translations for success pages
    translations.en.subscribeSuccessTitle = 'Subscription Successful!';
    translations.en.subscribeSuccessMessage = 'Thank you for joining the Luca Newsletter!';
    translations.en.unsubscribeSuccessTitle = 'Unsubscribe Successful';
    translations.en.unsubscribeSuccessMessage = 'We\'re sorry to see you go!';

    translations.pt.subscribeSuccessTitle = 'Inscrição bem-sucedida!';
    translations.pt.subscribeSuccessMessage = 'Obrigado por se juntar ao Boletim Luca!';
    translations.pt.unsubscribeSuccessTitle = 'Cancelamento de inscrição bem-sucedido';
    translations.pt.unsubscribeSuccessMessage = 'Lamentamos vê-lo partir!';


});