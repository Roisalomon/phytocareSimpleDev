/* ================= DROPDOWNS ================= */

function openDropdown(id) {
    const el = document.getElementById(id);

    el.classList.remove("opacity-0", "invisible", "-translate-y-2");
    el.classList.add("opacity-100", "visible", "translate-y-0");
}

function closeDropdown(id) {
    const el = document.getElementById(id);

    el.classList.add("opacity-0", "invisible", "-translate-y-2");
    el.classList.remove("opacity-100", "visible", "translate-y-0");
}


/* ================= SEARCH MOBILE ================= */

function openSearch() {
    document.getElementById("mobileSearch").classList.remove("hidden");
    document.getElementById("mobileSearch").classList.add("flex");
}

function closeSearch() {
    document.getElementById("mobileSearch").classList.add("hidden");
    document.getElementById("mobileSearch").classList.remove("flex");
}


/* ================= MOBILE MENU ================= */

function openMenu() {
    document.getElementById("mobileMenu").classList.remove("translate-x-full");
    document.getElementById("menuOverlay").classList.remove("hidden");
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.add("translate-x-full");
    document.getElementById("menuOverlay").classList.add("hidden");
}




const headerBottom = document.getElementById("header-bottom");
const heroSection = document.getElementById("hero");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    // SCÉNARIO A : On dépasse le Hero -> On fait descendre le menu
    if (scrollY > heroHeight) {

        if (!headerBottom.classList.contains("fixed")) {

            // 1. Positionnement instantané hors-écran (en haut)
            headerBottom.style.transition = "none";
            headerBottom.style.transform = "translateY(-100%)";

            // 2. Activation du mode fixe avec Tailwind
            headerBottom.classList.add(
                "fixed",
                "top-0",
                "left-0",
                "w-full",
                "z-50",
                "bg-white",
                "shadow-md"
            );

            // 3. Déclenchement de l'animation vers le bas
            setTimeout(() => {
                headerBottom.style.transition = "transform 1s ease-in-out, background-color 0.5s ease";
                headerBottom.style.transform = "translateY(0)";
            }, 20);
        }

    }
    // SCÉNARIO B : On revient dans le Hero -> Le menu reprend sa place normale
    else if (scrollY <= heroHeight) {

        if (headerBottom.classList.contains("fixed")) {

            // On retire le mode fixe
            headerBottom.classList.remove(
                "fixed",
                "top-0",
                "left-0",
                "w-full",
                "z-50",
                "bg-white",
                "shadow-md"
            );

            // On remet les styles à zéro proprement
            headerBottom.style.transform = "translateY(0)";
            headerBottom.style.transition = "none";
        }
    }
    lastScroll = scrollY;
});