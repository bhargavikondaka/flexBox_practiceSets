let slide = document.getElementById("slidesIcon");
let navItems = document.getElementById("navItems");
let navItemsouter = document.getElementById("navItemsouter");

let navContainer = document.getElementById("navContainer");

slide.addEventListener("click", function() {
    //navItems.classList.toggle("nav-items-toggled");
    navItemsouter.classList.toggle("nav-items");
    //slide.classList.toggle("fa-solid","fa-x");

});











/*

function addNavItems() {
    let feature = document.createElement("p");
    feature.textContent = "Features";
    navContainer.appendChild(feature);
    let About = document.createElement("p");
    About.textContent = "About";
    navContainer.appendChild(About);
    let Contact = document.createElement("p");
    Contact.textContent = "Contact";
    navContainer.appendChild(Contact);
    let button = document.createElement("button");
    button.textContent = "Sign up";
    button.classList.add("signup-btn");
    navContainer.appendChild(button);
    navItems.classList.remove("fa-solid", "fa-bars");
    navItems.classList.add("fa-solid", "fa-x");

}
    */