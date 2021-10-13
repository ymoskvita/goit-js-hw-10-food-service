const themeSwitcher = document.getElementById('theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const STORAGE_KEY = 'theme';

themeSwitcher.addEventListener('click', clickHandler);
window.onload = checkTheme();

function clickHandler(event) {
  if (event.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem(STORAGE_KEY, Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  }
}

function checkTheme() {
  const localStorageTheme = localStorage.getItem(STORAGE_KEY);

  if (localStorageTheme) {
    document.body.className = localStorageTheme;
  } else {
        document.body.classList.add(Theme.LIGHT);
  }

  if (localStorageTheme === Theme.DARK) {
        themeSwitcher.checked = true;
  }
}
