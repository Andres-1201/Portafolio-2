let menuBar = document.getElementById("menuBar");
let mainNav = document. getElementById("mainNav");
let mainMenu = document.getElementById("mainMenu");

menuBar.addEventListener("click", function() {
    /*mainNav.classList.remove("main-nav");
    mainNav.classList.add("main-nav-2");
    mainMenu.classList.remove("main-menu")
    mainMenu.classList.add("main-menu-block")*/
    if (mainMenu.classList.contains("main-menu")) {
        mainMenu.classList.add("main-menu-block");
        mainMenu.classList.remove("main-menu");
    }
    else {
        mainMenu.classList.add("main-menu");
        mainMenu.classList.remove("main-menu-block");
    }
   
});


