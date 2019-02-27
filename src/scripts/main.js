console.log("linked main.js");  

    // This code will only return the first section component
    // even though there are three components with the same
    // class

// const sectionEL = document.querySelector(".article__section");
// console.log("Contents of variable sectionEL", sectionEL); 


    // This code will only return the third section component

const footerEl = document.querySelector(".article__footer")
console.log("Contents of variable footerEl", footerEl); 

    // Get reference to the section with the class of `smallText`
    // and remove that class. Then add a new class of `largeText`

const smallTextEl = document.querySelector(".smallText")
console.log("before", smallTextEl)
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")

smallTextEl.textContent = "New Text"

/*
    This code will return all section components
*/
const sectionEl = document.querySelectorAll(".article__section")
console.log("All elements with class article__section", sectionEl) 

for(let i = 0; i < sectionEl.length; i++) {
    sectionEl[i].classList.add("new_class")
}

sectionEl
