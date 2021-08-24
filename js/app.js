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

/** * Define Global Variables * */
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section[id^="section"]');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNavMenu = () => {
    for (let i = 1; i <=sections.length; i++) {
        let liItem = document.createElement('li');
        liItem.innerHTML = `<a href="#section${i}" class="menu__link">Section ${i}</a>`;
        navList.appendChild(liItem);
    }
}

// Scroll smoothly - 1. Add anchor class in each section
const addAnchorClass = () => {
    for (let j = 1; j <= sections.length; j++) {
        let eachSection = 'section'+j;
        let sectionClass = document.querySelector('#'+eachSection);
        sectionClass.classList.add('anchor');
    }
}

// Scroll smoothly - 2. Add addEventListener
window.addEventListener("load", function () {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            var idstring = this.getAttribute("href");
            idstring = idstring.slice(1);
            document.querySelector('*[id^="' + idstring + '"]').scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          });
        });
      });

// Add class 'active' to section when near top of viewport
const activeScrolling = () => {
    sections.forEach(section => {
        section.getBoundingClientRect();
        if (section.getBoundingClientRect().top >= -170 && section.getBoundingClientRect().top <= 390) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    })
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavMenu();

// Scroll to section on link click
addAnchorClass();

// Set sections as active
document.addEventListener('scroll', activeScrolling);

