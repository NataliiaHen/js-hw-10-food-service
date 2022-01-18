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

const localTheme = localStorage.getItem('theme');
if (localTheme) {
  body.classList.add(localTheme);
}

if (body.classList.contains(Theme.DARK)) {
  themeSwitchToggle.checked = true;
}

const setInitialTheme = e => {
  body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
};

const setTheme = (newTheme, currentTheme) => {
  body.classList.remove(currentTheme);
  localStorage.removeItem('theme');
  body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
};

themeSwitchToggle.addEventListener('change', e => {
  console.log(localTheme);
  switch (localTheme) {
    case Theme.LIGHT:
      setTheme(Theme.LIGHT, Theme.DARK);
      break;

    case Theme.DARK:
      setTheme(Theme.DARK, Theme.LIGHT);
      break;

    default:
      setInitialTheme();
      break;
  }
});
