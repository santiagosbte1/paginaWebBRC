const navToggle = document.querySelector("#navtoggle")
const navMenu = document.querySelector("#navmenu")

navToggle.addEventListener("click", ()=> {
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
        } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
        }
})
