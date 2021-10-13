import menuTpl from '../templates/menu.hbs';
import menuItems from './menu.json';


const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuItems);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menuItems) {
  return menuTpl(menuItems);
}