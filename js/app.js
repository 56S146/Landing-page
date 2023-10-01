/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Get the container element
var btnContainer = document.getElementById("navbar__menu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("menu__link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const menu = document.querySelector('#navbar__list')
const sections = document.querySelectorAll('section');
consolE.log(sections)


function buildNavbar(){
    const list = document.createElement('li');
    const link = document.createElement('a');

    for(let section of sections)
    {
        menu.innerHTML += `<li><a class='menu__link' href='#${section.id}'>${section.id}</a><li>`;
        
    } 
    
}

// smooth scroll to section
function smoothScroll () 
{
        navBar.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollInterView({
                behavior: 'smooth'
            });
        });
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function addActiveClass(){
    sectionList.forEach(section => {
        console.log(`${section.id}`,section.getBoundingClientRect().top)
    if(Window.scrollY > (section.getBoundingClientRect().top) && window.scrollY < (section.getBoundingClientRect().bottom)){
        section.classList.add("your-active-class");
        document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.add("active");
    }
    else{
        section.classList.remove("your-active-class");
        document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.remove("active");
    }
    })
}

// build the nav
buildNavbar();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll',addActiveClass);

// smooth scroll to section
smoothScroll();


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


