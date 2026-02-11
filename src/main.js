async function loadComponent(id, file) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = await (await fetch(file)).text();
}

function openDropdown(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove("opacity-0", "invisible", "-translate-y-2");
    el.classList.add("opacity-100", "visible", "translate-y-0");
}

function closeDropdown(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add("opacity-0", "invisible", "-translate-y-2");
    el.classList.remove("opacity-100", "visible", "translate-y-0");
}

function openSearch() {
    document.getElementById("mobileSearch")?.classList.replace("hidden", "flex");
}

function closeSearch() {
    document.getElementById("mobileSearch")?.classList.replace("flex", "hidden");
}

function openMenu() {
    document.getElementById("mobileMenu")?.classList.remove("translate-x-full");
    document.getElementById("menuOverlay")?.classList.remove("hidden");
}

function closeMenu() {
    document.getElementById("mobileMenu")?.classList.add("translate-x-full");
    document.getElementById("menuOverlay")?.classList.add("hidden");
}
 
window.openMenu = openMenu;
window.closeMenu = closeMenu;
window.openSearch = openSearch;
window.closeSearch = closeSearch;
window.openDropdown = openDropdown;
window.closeDropdown = closeDropdown;

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "../src/components/header.html");
    loadComponent("footer", "/src/components/footer.html");
});
