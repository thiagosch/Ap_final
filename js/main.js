function toggle_burger() {
    navigation = document.getElementById("navigation");
    burger_menu = document.getElementById("burger-menu");
    styles = getComputedStyle(navigation);
    displayStatus = styles.visibility;

    if (navigation.classList.contains("nav-open")) {
        navigation.classList.remove("nav-open");

        burger_menu.innerHTML = "menu";
        burger_menu.classList.remove("burger-open");
    } else {
        navigation.classList.add("nav-open");
        
        burger_menu.innerHTML = "close";
        burger_menu.classList.add("burger-open");
    }
}

