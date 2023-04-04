function toggle_burger() {
    navigation = document.getElementById("navigation");
    burger_menu = document.getElementById("burger-menu");
    styles = getComputedStyle(navigation);
    displayStatus = styles.visibility;
    if (navigation.classList.contains('nav-open')) {
        navigation.classList.remove("nav-open");
        // document.body.classList.remove("body-nav-open");
        burger_menu.innerHTML = "menu";
        burger_menu.style.color = 'black'
    } else {
        navigation.classList.add("nav-open");
        // document.body.classList.add("body-nav-open");
        burger_menu.innerHTML = "close";
        burger_menu.style.color = 'red'
    }
}
