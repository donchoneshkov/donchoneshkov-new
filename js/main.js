function showItems(item) {
    item.classList.add('focused-item');
    item.getElementsByClassName('hidden-list')[0].style.display = 'block';
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

function populateHiddenList(html) {
    document.getElementsByClassName('hidden-list')[0].innerHTML = html;
}

const hiddenList = document.getElementsByClassName('hidden-list')[0];

/*
const header = document.getElementsByTagName('header')[0];
header.addEventListener('mouseout', (event) => hideLists());

function hideLists() {
    let lists = document.getElementsByClassName('hidden-list');
    //console.log(document.getElementsByClassName('hidden-list'));
    Array.from(lists).forEach(item =>{
        item.style.display = 'none';
    });
    //console.log('header out');
}
*/