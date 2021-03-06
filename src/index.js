import './sass/main.scss';
import templateFunction from './templates/main.hbs';
import data from './data/menu.json';

const themeSwitchToggle = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');

menu.innerHTML = templateFunction(data);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const lightTheme = Theme.LIGHT;
const darkTheme = Theme.DARK;

const setInitialTheme = e => {
  body.classList.add(lightTheme);
  localStorage.setItem('theme', lightTheme);
};

const setTheme = (newTheme, currentTheme) => {
  body.classList.remove(currentTheme);
  localStorage.removeItem('theme');
  body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
};

const getLokalTheme = () => {
  return localStorage.getItem('theme');
};

const currentLocalTheme = getLokalTheme();
body.classList.add(currentLocalTheme);

if (body.classList.contains(darkTheme)) {
  themeSwitchToggle.checked = true;
}

themeSwitchToggle.addEventListener('change', e => {
  e.preventDefault();
  const localTheme = getLokalTheme();

  switch (localTheme) {
    case lightTheme:
      setTheme(darkTheme, lightTheme);
      break;

    case darkTheme:
      setTheme(lightTheme, darkTheme);
      break;

    default:
      setInitialTheme();
  }
});
