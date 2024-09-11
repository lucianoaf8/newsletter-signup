document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            title: 'Luca Newsletter',
            subscribeTitle: 'Subscribe',
            subscribePlaceholder: 'Enter your email',
            subscribeButton: 'Join the Future',
            unsubscribeTitle: 'Unsubscribe',
            unsubscribePlaceholder: 'Enter your email to unsubscribe',
            unsubscribeButton: 'Leave the Network'
        },
        pt: {
            title: 'Boletim Luca',
            subscribeTitle: 'Inscrever-se',
            subscribePlaceholder: 'Digite seu e-mail',
            subscribeButton: 'Junte-se ao Futuro',
            unsubscribeTitle: 'Cancelar inscrição',
            unsubscribePlaceholder: 'Digite seu e-mail para cancelar a inscrição',
            unsubscribeButton: 'Sair da Rede'
        }
    };

    let currentLanguage = 'en';

    function setLanguage(lang) {
        currentLanguage = lang;
        document.getElementById('title').textContent = translations[lang].title;
        document.getElementById('subscribeTitle').textContent = translations[lang].subscribeTitle;
        document.getElementById('subscribeEmail').placeholder = translations[lang].subscribePlaceholder;
        document.getElementById('subscribeButton').textContent = translations[lang].subscribeButton;
        document.getElementById('unsubscribeTitle').textContent = translations[lang].unsubscribeTitle;
        document.getElementById('unsubscribeEmail').placeholder = translations[lang].unsubscribePlaceholder;
        document.getElementById('unsubscribeButton').textContent = translations[lang].unsubscribeButton;

        document.getElementById('enButton').classList.toggle('activeLanguageButton', lang === 'en');
        document.getElementById('ptButton').classList.toggle('activeLanguageButton', lang === 'pt');
    }

    document.getElementById('enButton').addEventListener('click', () => setLanguage('en'));
    document.getElementById('ptButton').addEventListener('click', () => setLanguage('pt'));

    // Set initial language based on browser settings
    const userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.startsWith('pt') ? 'pt' : 'en');

    // Create background circles
    const background = document.getElementById('background');
    for (let i = 0; i < 3; i++) {
        const circle = document.createElement('div');
        circle.classList.add('background-circle');
        background.appendChild(circle);
    }
});