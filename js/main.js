function showItems(item) {
    item.classList.add('focused-item');
    item.getElementsByClassName('hidden-list')[0].style.display = 'flex';
    console.log('mouse enter');
}

function hideItems(item) {
    item.classList.remove('focused-item');
    item.getElementsByClassName('hidden-list')[0].style.display = 'none';
    console.log('mouse leave');
}

function addExpandableToItems(items) {

    Array.from(items).forEach(item => {
        item.addEventListener("mouseenter", (event) => showItems(item));
        item.addEventListener("mouseleave", (event) => hideItems(item));
        
    });
}

addExpandableToItems(document.getElementsByClassName('list-item-expandable'));

function toggleMenu() {
    if (clicked == 0) clicked = 1;
    else return;
    if (header.style.display == 'none') { header.style.display = 'flex'; setTimeout( () => { clicked = 0; }, 850); }
    else if (header.style.display == 'flex') { setTimeout( () => { header.style.display = 'none'; clicked = 0; }, 850); }
    menu.classList.toggle('menu-visible');    
}
const header = document.getElementById('header');
const hiddenList = document.getElementsByClassName('hidden-list')[0];
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', toggleMenu);
var clicked = 0;

const mainContent = document.getElementById('main-content');
const sections = document.getElementsByClassName("content-section");
Array.from(sections)
    .forEach((item, index) => {
        item.onmouseover = () => {
            mainContent.dataset.activeIndex = index;
        }
    }); 

const left = document.getElementById('header-background-left');

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;
    left.style.width = `${p}%`;
}

document.onmousemove = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0]);
