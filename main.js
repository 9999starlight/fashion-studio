const menu = document.querySelector('.menu');
const links = document.querySelector('ul');
const filter = document.querySelector('.filter');
let displayMenu = false;

function toggleMenu() {
    const lines = document.querySelectorAll('.line');
    if (!displayMenu) {
        links.classList.remove('hide');
        links.classList.add('flex');
        filter.classList.remove('hide');
        filter.classList.add('flex');
        lines.forEach(l => l.classList.add('transformMenu'));
        displayMenu = true;
    } else {
        links.classList.remove('flex');
        links.classList.add('hide');
        filter.classList.remove('flex');
        filter.classList.add('hide');
        lines.forEach(l => l.classList.remove('transformMenu'));
        displayMenu = false;
    }
}
menu.addEventListener('click', toggleMenu);

function mediaLinks() {
    if (window.innerWidth > 800) {
        links.classList.remove('hide');
        links.classList.add('flex');

    } else {
        links.classList.add('hide');
        links.classList.remove('flex');
    }
}
window.addEventListener('load', mediaLinks);
window.addEventListener('resize', mediaLinks);