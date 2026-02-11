const testimonials = [
    { name: "Amina K.", city: "Dakar", text: "Les produits naturels ont renforcé mon immunité comme jamais ! Une belle découverte.", image: "https://randomuser.me/api/portraits/women/12.jpg" },
    { name: "Marc D.", city: "Abidjan", text: "J'ai retrouvé mon énergie grâce à leurs compléments 100% bio. Très satisfait.", image: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: "Sophie L.", city: "Yaoundé", text: "Je dors enfin paisiblement grâce à leurs produits naturels. Un changement incroyable !", image: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Jean P.", city: "Cotonou", text: "Le service client est aussi naturel et chaleureux que leurs produits.", image: "https://randomuser.me/api/portraits/men/33.jpg" }
];

let testiIndex = 0;

function displayTestimonials(list) {
    const container = document.getElementById("testimonials-grid");
    if (!container) return;

    container.innerHTML = "";

    // Logique Carrousel : On prend 3 éléments à partir de l'index actuel
    const itemsToShow = [];
    for (let i = 0; i < 3; i++) {
        itemsToShow.push(list[(testiIndex + i) % list.length]);
    }

    itemsToShow.forEach(item => {
        // LOGIQUE PRODUIT : createElement + className + innerHTML + appendChild
        const card = document.createElement("div");
        card.className = "testimonial-card bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center border border-white transition-all duration-500 hover:scale-105";

        card.innerHTML = `
                <div class="relative mb-6">
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover">
                </div>
                <div class="p-2 text-center">
                    <h3 class="font-bold text-xl text-[#2F5D3A] mb-1">${item.name}</h3>
                    <div class="flex gap-1 justify-center mb-4 text-[#F7C842]">
                        <i class="fa-solid fa-star text-[10px]"></i>
                        <i class="fa-solid fa-star text-[10px]"></i>
                        <i class="fa-solid fa-star text-[10px]"></i>
                        <i class="fa-solid fa-star text-[10px]"></i>
                        <i class="fa-solid fa-star text-[10px]"></i>
                    </div>
                    <p class="text-gray-600 text-sm mb-6 italic line-clamp-3">"${item.text}"</p>
                    <div class="inline-flex items-center justify-center bg-[#2F5D3A] text-white px-4 py-2 rounded-full font-semibold text-[10px] gap-2">
                        <i class="fa-solid fa-location-dot"></i>
                        ${item.city}
                    </div>
                </div>
            `;
        container.appendChild(card);
    });
}

// Fonctions de navigation pour les boutons HTML
function nextSlide() {
    testiIndex = (testiIndex + 1) % testimonials.length;
    displayTestimonials(testimonials);
}

function prevSlide() {
    testiIndex = (testiIndex - 1 + testimonials.length) % testimonials.length;
    displayTestimonials(testimonials);
}

// LE CHEF D'ORCHESTRE (window.onload unique)
window.onload = () => {
    // 1. Initialisation Produits (si la fonction existe)
    if (typeof filterProducts === "function") {
        const activeBtn = document.querySelector(".filter-btn.active");
        filterProducts("all", activeBtn);
    }

    // 2. Initialisation Témoignages
    displayTestimonials(testimonials);
};