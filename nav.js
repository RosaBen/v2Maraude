
import { images, listPages } from './data.js';

const navbar = document.createElement('nav');
const logo = document.createElement('img');
const div = document.createElement('div');
const menu = document.createElement('a');
const iconMenu = document.createElement('i');
listPages.forEach(nav => {
  const link = document.createElement('a');
  const icon = document.createElement('i');
  const listNav = document.createElement('div');
  link.textContent = nav.page;
  const match = images.find(item => nav.href.includes(item.name));
  if (match && match.icon) {
    icon.classList.add('fa-solid', match.icon);
  }
  link.classList.add('page');
  link.id = nav.href;
  link.setAttribute("data-page", nav.href);
  link.href = "#";
  listNav.classList.add('nav-item');
  listNav.appendChild(icon);
  listNav.appendChild(link);
  div.appendChild(listNav);
});

if (images[6] && images[6].icon) {
  iconMenu.classList.add('fa-solid', images[6].icon);
}
menu.appendChild(iconMenu);
menu.classList.add('menu');
div.classList.add('links-container');
if (images[2]) {
  logo.src = images[2].src;
  logo.alt = images[2].name;
}
navbar.appendChild(logo);
navbar.appendChild(menu);
const toggleMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  div.classList.toggle('active');
  menuContainer.appendChild(menu);
  menuContainer.appendChild(div);
  navbar.appendChild(menuContainer);
};
const displayMenu = () => {
  if (window.innerWidth < 900) {
    if (div) div.classList.add('hidden');
    if (menu) menu.classList.remove('hidden');
    menu.addEventListener('click', toggleMenu);
  } else {
    if (menu) menu.classList.add('hidden');
    if (div) div.classList.remove('hidden');
    navbar.appendChild(div);
  }
};

displayMenu();




export { navbar, displayMenu };

