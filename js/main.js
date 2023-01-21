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
        if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
           // item.addEventListener("touchend", (event) => hideUntouchedItems(event, item));
           // item.addEventListener("touchend", (event) => showTouchedItems(event, item));
      
        } else {
            item.addEventListener("mouseleave", (event) => hideItems(item));
            item.addEventListener("mouseenter", (event) => showItems(item));
        }
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
const skills = '<div class="skills-preview">\
                    <div class="skill-square">\
                        <img src="css/images/thumb/html.png" alt="HTML logo" class="skill-thumb">\
                        <div class="skill-title">HTML</div>\
                        <div class="skill-description">I have experience creating and designing websites using HTML.I am familiar with the latest HTML5 and CSS3 standards, and I am able to create responsive and mobile-friendly websites.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/css.png" alt="CSS logo" class="skill-thumb">\
                        <div class="skill-title">CSS</div>\
                        <div class="skill-description">I have experience using CSS to style and layout web pages. I am familiar with CSS preprocessors such as Sass and am comfortable using CSS frameworks like Bootstrap.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/js.png" alt="JS logo" class="skill-thumb">\
                        <div class="skill-title">JavaScript</div>\
                        <div class="skill-description">I have experience using JavaScript to create dynamic and interactive web pages. I am familiar with event handling, DOM manipulation and animation.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/php.png" alt="PHP logo" class="skill-thumb">\
                        <div class="skill-title">PHP</div>\
                        <div class="skill-description">I have experience using PHP to create server-side scripts and dynamic web pages.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/mysql.png" alt="MySQL logo" class="skill-thumb">\
                        <div class="skill-title">MySQL</div>\
                        <div class="skill-description"> I have experience using MySQL to create and manage databases. I am familiar with SQL and can write queries to extract and manipulate data.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/sass.png" alt="Sass logo" class="skill-thumb">\
                        <div class="skill-title">Sass</div>\
                        <div class="skill-description">I have experience using Sass to write efficient and maintainable CSS. I am familiar with various Sass features like variables, mixins, and functions.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/jquery.png" alt="Jquery logo" class="skill-thumb">\
                        <div class="skill-title">Jquery</div>\
                        <div class="skill-description">I have experience using Jquery to create interactive and dynamic web pages. I have experience with various Jquery features like event handling, DOM manipulation, and animation.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/bootstrap.png" alt="Bootstrap logo" class="skill-thumb">\
                        <div class="skill-title">Bootstrap</div>\
                        <div class="skill-description"> I have experience using Bootstrap to quickly create responsive and mobile-friendly web pages. I am familiar with the grid system and various built-in components.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/git.png" alt="Git logo" class="skill-thumb">\
                        <div class="skill-title">Git</div>\
                        <div class="skill-description">I have experience using Git for version control and collaboration. I am familiar with various Git commands and concepts such as branching, merging, and rebasing.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/googlecloud.png" alt="Google Cloud logo" class="skill-thumb">\
                        <div class="skill-title">Google Cloud</div>\
                        <div class="skill-description"> I have experience using Google Cloud Platform for web development. This website is hosted on Google Cloud.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/3dsmax.png" alt="3ds Max logo" class="skill-thumb">\
                        <div class="skill-title">3ds Max</div>\
                        <div class="skill-description"> I have experience using 3ds Max to create 3D models and animations. I am familiar with various 3D modeling and animation concepts and techniques.</div>\
                    </div>\
                    <div class="skill-square">\
                        <img src="css/images/thumb/ethicalhacking.png" alt="Ethical Hacking logo" class="skill-thumb">\
                        <div class="skill-title">Ethical Hacking</div>\
                        <div class="skill-description"> I have experience in Ethical Hacking, I am familiar with various hacking techniques and strategies, and have experience with various security tools and methods.</div>\
                    </div>\
                    </div>\
                ';
