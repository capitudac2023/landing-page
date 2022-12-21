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
*///* pass and return element navbar list by id*/
const navlist = document.getElementById("navbar__list");
//**returning all sections by querySelectorAll */
const sections =document.querySelectorAll("section");
//**create DocumentFragment to sure there's no reflow and repaint cost while buliding navbar */
const createfragment = new DocumentFragment();

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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build the navbar using function
function CreateNavbar()
{
    //**loop over the sections using for...of loop */
    for ( const section of sections)
    {
        //**style page by Attributes ,id,data nav */
        const sectionI = section.setAttribute.id
        const sectionname = section.dataset.nav
        //**creating anchor tag and list item */
        const list = document.createElement("li")
        const llink = document.createElement("a")
        //**style page contant by add class to the list,herf,innerHTML,Scroll to section on link click, */
        llink.classList.add("menu__link");
        llink.href =`#${sectionI}`
        llink.innerHTML = sectionname
        //**type of the event we want to respond to like click */
        llink.addEventListener("click", Event =>{
            Event.preventDefault()//**to prevent show or stop #section */
             section.scrollIntoView({   //**scroll the object behavior to visible to user */
                behavior: "smooth"
             })
            })//**using appendChild to the end of the list of children of list node */
            list.appendChild(llink)
            createfragment.appendChild(list)
        }
        navlist.appendChild(createfragment)
        }

        window.addEventListener("load",CreateNavbar)//**using window.addEventListener to Load when the page is fully loaded */
        
// 

//**add highlight while scrolling  */


function activeHighlight() {
   //**loop over the sections using forEach loop */
    sections.forEach(section =>{
        //**linking menu__link for all  */
        const alllink = document.querySelectorAll("a.menu__link")
        //**using getBoundingClientRect to return value to the entire element section at top dimension including its padding and border-width  */
         section.getBoundingClientRect().top
         //** */
        const sectionname = section.dataset.nav
//**setting condition of the  returning value after searching  (-100 and 200)*/
        if(section.getBoundingClientRect().top>-100
         && section.getBoundingClientRect().top <=200){
//**add  active classlist to section named "your-active-class" */
            section.classList.add("your-active-class")
    
    //**loop over all links with section name usinig for... of loop */
            for ( const link of alllink) { 
            if (link.innerHTML === sectionname){
              //**add active classlist to link named active-link */
                    link.classList.add("active-link")
                }else {
                    //**to removed if is not named active-link  */
                    link.classList.remove("active-link")
                }
            }
        }else{
             //**to removed if it is not named "your-active-class"  */
            section.classList.remove("your-active-class")
        }
    })
}       
window.addEventListener("scroll",activeHighlight)//**using window.addEventListener to using all effect we have made all over the page  */

