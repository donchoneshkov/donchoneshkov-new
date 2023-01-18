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
/*
function showTouchedItems(event, item) {

    if (item.classList.contains('focused-item') == true) {
        item.classList.remove('focused-item');
        item.getElementsByClassName('hidden-list')[0].style.display = 'none';
    } else {
    item.classList.add('focused-item');
    item.getElementsByClassName('hidden-list')[0].style.display = 'flex';
    console.log('touch item ', item);
    }
    
}

function hideUntouchedItems(event, item) {

    Array.from(expandableItems).forEach(item => {
        if (item.classList.contains('focused-item') == true) {
            item.classList.remove('focused-item');
            item.getElementsByClassName('hidden-list')[0].style.display = 'none';
            console.log('untouch item ', item);

        }
    });

}*/

function addExpandableToItems(items) {

    Array.from(items).forEach(item => {
        /*if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
            item.addEventListener("touchend", (event) => hideUntouchedItems(event, item));
            item.addEventListener("touchend", (event) => showTouchedItems(event, item));
      
        } else {
        }*/
        item.addEventListener("mouseleave", (event) => hideItems(item));
        item.addEventListener("mouseenter", (event) => showItems(item));
    });
        
}


const expandableItems = document.getElementsByClassName('list-item-expandable');

addExpandableToItems(expandableItems);

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

const footer = document.getElementById('footer');
console.log(footer);
footer.onmouseover = () => {
    mainContent.dataset.rain = "rain";
}

footer.onmouseleave = () => {
    mainContent.dataset.rain = "";
}
const left = document.getElementById('header-background-left');

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;
    left.style.width = `${p}%`;
}

header.onmousemove = e => handleOnMove(e);
//header.ontouchmove = e => handleOnMove(e.touches[0]);

function loadContent(content, location) {
    location.innerHTML = content;
}

const contentSection = document.getElementById('content-text');
const welcome = '<div>Greetings!</div> \
                 <div>My name is <span>Doncho</span> and I\'m happy to meet you!</div> \
                 <div>I look forward to working with you!</div>';
const contact = '<div>Email: donchonesh@yahoo.com</div> \
                 <div>Phone: +359 888 690381</div>';
const skills = '';
