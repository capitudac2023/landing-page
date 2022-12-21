# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

 converting this project from a static project to an interactive one require modifying the HTML and CSS files, but primarily the JavaScript file so I have opend `js/app.js` to building out the app's functionality
 in this project, I have tried to use all of the dom instructions to trying to implement what in the rubric of the project needs, in an effective way and 
using the method of performance of the code, to sum up, the code as much as I can to reach out good performance code
 the project rubric instruction needs 
to first test 
1-the usability like :
The usability of the navigation bar is responsive too across all these devices and All features are usable across modern desktop, tablet, and phone browsers. inspecting the landing page using the Developer Tools option on Google Chrome Browser and all of this checked and done
2-Styling
 should be added for active states so I have added some codes
to Set CSS class active state when the element is in the viewport.
and add a CSS file under the hover new class active called (navbar__menu .menu__link.active-link )
to reach out to the highlighted active section in the navbar
 (llink.classList.add("menu__link");
        llink.href =`#${sectionI}`
  llink.innerHTML = sectionname,  link.classList.add("active-link")
  3-HTML Structure: 
  must be at least 4 sections so I have added a new section in the HTML file called section4
  4-Navigation
   to build the navigation dynamically I have used the appendChiled and innerHTML like appendChild to the end of the list of children of the list node and loop over all links with section names using for... of the loop to innerHTML 
   5-Section Active State: using getBoundingClientRect to return value to the entire element section at the top dimension including its padding and border-width like this 2 codes :
section.getBoundingClientRect().top
         
        const sectionname = section.dataset.nav
//**setting condition of the  returning value after searching  (-100 and 200)*/
        if(section.getBoundingClientRect().top>-100
         && section.getBoundingClientRect().top <=200){
//**add  active classlist to section named "your-active-class" */
            section.classList.add("your-active-class")
  6-Scroll to Anchor :
When clicking an item from the navigation menu, the link should scroll to the appropriate section so I have added addEventListener('click',....) to listen to the click event and default event occurring we need to stop that like this code:
 llink.addEventListener("click", Event =>{
            Event.preventDefault()//**to prevent show #section */) 
   and finally scrolling and smoothing behavior I have used 
scrollIntoView() to reach out the scrolling and the behavior of the smoothing like this code:Event.preventDefault()//**to prevent show or stop #section */
             section.scrollIntoView({   //**scroll the object behavior to visible to user */
                behavior: "smooth"
             })
and also to make all the effects all over the page I have used window.addEventListener
besides, I have used new DocumentFragment() 
to be sure there's no reflow and repaint cost while building the navbar.        




