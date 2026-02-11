
const teamMembers = [
    { name: "Dr. Koffi Mensah", role: "Phytothérapeute", desc: "Spécialiste en médecine naturelle avec plus de 15 ans d'expérience.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Dr. Amina Diallo", role: "Nutritionniste", desc: "Experte en alimentation saine et accompagnement bien-être.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Dr. Paul Hounkpe", role: "Consultant Santé", desc: "Conseiller spécialisé en solutions naturelles préventives.", image: "https://randomuser.me/api/portraits/men/46.jpg" },
    { name: "Dr. Nadia Traoré", role: "Coach Bien-être", desc: "Accompagnement mental, physique et émotionnel.", image: "https://randomuser.me/api/portraits/women/68.jpg" }
];

const teamContainer = document.getElementById("team-grid");

function displayTeam() {
    // Sécurité : on vérifie si le container existe
    if (!teamContainer) return;

    teamContainer.innerHTML = "";
    
    teamMembers.forEach(member => {
        const card = document.createElement("div");
        // On utilise la classe team-card pour l'animation CSS
        card.className = "team-card group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[#2F5D3A]/10 transition-all duration-500 text-center flex flex-col items-center";

        card.innerHTML = `
            <div class="relative w-32 h-32 mb-6">
                <div class="absolute inset-0 bg-[#f0f4f1] rounded-full scale-110 group-hover:bg-[#2F5D3A]/10 transition-colors duration-500"></div>
                <img src="${member.image}" alt="${member.name}" class="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md transition-transform duration-500 group-hover:scale-105">
            </div>

            <h3 class="text-xl font-bold text-slate-800 mb-1">${member.name}</h3>
            <p class="text-[#2F5D3A] font-medium text-sm mb-4 italic">${member.role}</p>
            <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">${member.desc}</p>

            <a href="#" class="w-full bg-[#2F5D3A] text-white py-3 rounded-xl text-sm font-bold hover:bg-[#F7C842] hover:text-[#2F5D3A] transition-all duration-300 flex items-center justify-center gap-2 mb-6">
                Lire plus
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>

            <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full bg-slate-50 text-[#2F5D3A] flex items-center justify-center hover:bg-[#2F5D3A] hover:text-white transition-all cursor-pointer"><i class="fa-solid fa-globe text-xs"></i></div>
                <div class="w-8 h-8 rounded-full bg-slate-50 text-[#2F5D3A] flex items-center justify-center hover:bg-[#2F5D3A] hover:text-white transition-all cursor-pointer"><i class="fa-brands fa-facebook-f text-xs"></i></div>
                <div class="w-8 h-8 rounded-full bg-slate-50 text-[#2F5D3A] flex items-center justify-center hover:bg-[#2F5D3A] hover:text-white transition-all cursor-pointer"><i class="fa-brands fa-whatsapp text-xs"></i></div>
            </div>
        `;
        teamContainer.appendChild(card);
    });
}

// Même logique d'initialisation que pour les produits
window.addEventListener('load', () => {
    displayTeam();
});
