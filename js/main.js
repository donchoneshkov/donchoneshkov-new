function showItems(item) {
    item.classList.add('focused-item');
    item.appendChild(hiddenList);
    
}

function hideItems(item) {
    item.classList.remove('focused-item');
}

function addExpandableToItems(items) {

    Array.from(items).forEach(item => {
        item.addEventListener("mouseover", (event) => showItems(item));
        item.addEventListener("mouseout", (event) => hideItems(item));

    });
}

addExpandableToItems(document.getElementsByClassName('list-item-expandable'));

function populateHiddenList(html) {
    document.getElementsByClassName('hidden-list')[0].innerHTML = html;
}

const hiddenList = document.getElementsByClassName('hidden-list')[0];


