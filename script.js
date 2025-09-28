import { navbar, displayMenu } from "./nav.js";

window.addEventListener('resize', displayMenu);
const header = document.querySelector('header');
header.appendChild(navbar);





