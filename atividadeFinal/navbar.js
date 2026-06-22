function ajustarNavbar() {
    const nav = document.getElementById("navbar");

    if (window.innerWidth <= 768) {
        nav.style.top = "auto";
        nav.style.bottom = "0";
    } else {
        nav.style.top = "0";
        nav.style.bottom = "auto";
    }
}

ajustarNavbar();
window.addEventListener("resize", ajustarNavbar);