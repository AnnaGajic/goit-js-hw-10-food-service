import './sass/main.scss';
import menuCardsTpl from './templates/menu-card.hbs';
import menu from './menu.json';


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
}
// console.log(menuCardsTpl);
const menuList = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(menu);

menuList.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(menu) {
    return menuCardsTpl(menu);
}



const themeSwitcher = document.querySelector('#theme-switch-toggle');

themeSwitcher.addEventListener('change', onThemeSwithToggleClick);

function onThemeSwithToggleClick(event) {
    if (event.target.checked) {
        setDarkTheme()
    }
    else {
        setLightTheme()
    }
}
function setDarkTheme() {
    document.querySelector('body').classList.remove('light-theme');
    document.querySelector('body').classList.add('dark-theme');
    themeSwitcher.checked = true;
    localStorage.setItem('theme', Theme.DARK);
}
function setLightTheme() {
    document.querySelector('body').classList.remove('dark-theme');
    document.querySelector('body').classList.add('light-theme');
    themeSwitcher.checked = false;
    localStorage.setItem('theme', Theme.LIGHT);
}



if (localStorage.getItem("theme")) {
    let theme = localStorage.getItem("theme");
    if (theme === Theme.LIGHT) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
};