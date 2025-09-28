
import { images, listPages } from './data.js';

const navbar = document.createElement('nav');
const logo = document.createElement('img');
const desktopLinks = document.createElement('div');
const menuBtn = document.createElement('button');
const iconMenu = document.createElement('i');
const mobileMenu = document.createElement('div');


listPages.forEach(nav => {
  const link = document.createElement('a');
  const icon = document.createElement('i');
  const navItem = document.createElement('div');

  link.textContent = nav.page;
  const match = images.find(item => nav.href.includes(item.name));
  if (match && match.icon) {
    icon.classList.add('fa-solid', match.icon);
  }

  link.classList.add('page');
  link.id = nav.href;
  link.setAttribute("data-page", nav.href);
  link.href = "#";

  navItem.classList.add('nav-item');
  navItem.appendChild(icon);
  navItem.appendChild(link);

  // version desktop
  desktopLinks.appendChild(navItem);

  // version mobile
  const mobileNavItem = navItem.cloneNode(true);
  mobileMenu.appendChild(mobileNavItem);
});

if (images[6] && images[6].icon) {
  iconMenu.classList.add('fa-solid', images[6].icon);
}
menuBtn.appendChild(iconMenu);
menuBtn.classList.add('menu-button');
desktopLinks.classList.add('desktop-links');
mobileMenu.classList.add('mobile-menu', 'hidden');
if (images[2]) {
  logo.src = images[2].src;
  logo.alt = images[2].name;
}

navbar.appendChild(logo);
navbar.appendChild(desktopLinks);
navbar.appendChild(menuBtn);
navbar.appendChild(mobileMenu);


const displayMenu = () => {
  if (window.innerWidth < 900) {
    desktopLinks.classList.add('hidden');
    menuBtn.classList.remove('hidden');
  } else {
    desktopLinks.classList.remove('hidden');
    menuBtn.classList.add('hidden');
    mobileMenu.classList.add('hidden');
  }
};

menuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});




export { navbar, displayMenu };

