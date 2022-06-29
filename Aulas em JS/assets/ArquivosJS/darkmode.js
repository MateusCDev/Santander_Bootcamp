function mudarModo(){
    mudarClasses();
    mudartexto();
}

function mudarClasses(){
 botao.classList.toggle(darkModeClass);
 h1.classList.toggle(darkModeClass);
 footer.classList.toggle(darkModeClass);
 body.classList.toggle(darkModeClass);
}

function mudartexto(){
    const lightMode = 'Ligth Mode';
    const darkMode = 'Dark Mode';
    if(body.classList.contains(darkModeClass)){
        botao.innerHTML = lightMode;
        h1.innerHTML = `${darkMode} ON`;
        return;
    }
    botao.innerHTML = darkMode;
    h1.innerHTML = `${lightMode} ON`;
}

const darkModeClass = 'dark-mode';
const botao = document.getElementById('mode-selector');
const h1 = document.getElementById ('page-title');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

botao.addEventListener('dblclick', mudarModo);

