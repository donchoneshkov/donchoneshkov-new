function showItems(item) {
    //item = document.getElementsByClassName(item);
    console.log(item);
    item.classList.add('focused-item');
    //console.log('mouse in');
}

function hideItems(item) {
    //item = document.getElementsByClassName(item);
    console.log(item);
    item.classList.remove('focused-item');
    //console.log('mouse out');
}

function addExpandableToItems(items) {

    Array.from(items).forEach(item => {
        item.addEventListener("mouseover", (event) => showItems(item));
        item.addEventListener("mouseout", (event) => hideItems(item));

    });
}

addExpandableToItems(document.getElementsByClassName('list-item-expandable'));