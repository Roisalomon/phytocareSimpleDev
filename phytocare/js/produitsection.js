const products = [
    { name: "Complément Immunité", desc: "Boostez votre système immunitaire avec notre formule bio.", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5", category: "immunite", featured: true },
    { name: "Propolis Bio", desc: "Protégez votre organisme avec la propolis bio.", image: "https://images.unsplash.com/photo-1585238342028-4bbc1bfa6b77", category: "immunite", featured: true },
    { name: "Vitamine C Naturelle", desc: "Renforcez vos défenses avec de la vitamine C naturelle.", image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6", category: "immunite", featured: true },
    { name: "Gélules d'Échinacée", desc: "Soutenez votre santé avec l'échinacée bio.", image: "https://images.unsplash.com/photo-1542990253-0f3bd8c47f07", category: "immunite", featured: true },
    { name: "Complexe Digestif", desc: "Facilite la digestion et le confort intestinal.", image: "https://images.unsplash.com/photo-1604908177522-0505fd0b78e5", category: "digestion", featured: true },
    { name: "Thé Détox", desc: "Nettoie l'organisme en profondeur.", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62", category: "digestion", featured: true },
    { name: "Huile d'Argan", desc: "Soin naturel d'exception pour la peau.", image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee", category: "beaute", featured: true },
    { name: "Tisane Relax", desc: "Réduit le stress et favorise le calme.", image: "https://images.unsplash.com/photo-1518977956815-dee006d33f79", category: "relaxation", featured: true }
];

const container = document.getElementById("products-grid");

function displayProducts(list) {
    container.innerHTML = "";
    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group";

        card.innerHTML = `
                <div class="relative overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div class="p-6 text-center">
                    <h3 class="font-bold text-xl text-[#2F5D3A] mb-2">${product.name}</h3>
                    <p class="text-gray-500 text-sm mb-6 line-clamp-2">${product.desc}</p>
                    <a href="#" class="inline-flex items-center justify-center w-full bg-[#2F5D3A] text-white py-3 rounded-xl font-semibold hover:bg-[#F7C842] hover:text-[#0C1A2A] transition-all duration-300 gap-2">
                        Voir plus
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            `;
        container.appendChild(card);
    });
}

function filterProducts(category, btnElement) {
    let filtered = (category === "all")
        ? products.filter(p => p.featured)
        : products.filter(p => p.category === category);

    displayProducts(filtered);

    // Mise à jour visuelle des boutons
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");
}

window.onload = () => filterProducts("all", document.querySelector(".filter-btn.active"));
