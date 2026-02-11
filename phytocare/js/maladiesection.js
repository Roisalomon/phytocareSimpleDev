const diseases = [
    { title: "Fatigue", desc: "Combattez la fatigue chronique, le manque d'énergie et les baisses de vitalité.", icon: "🔋" },
    { title: "Faible Immunité", desc: "Renforcez vos défenses naturelles et protégez-vous des infections.", icon: "🛡️" },
    { title: "Stress & Anxiété", desc: "Diminuez le stress, l'anxiété et retrouvez un état de calme et de sérénité.", icon: "🧠" },
    { title: "Troubles Digestifs", desc: "Améliorez votre digestion, réduisez les ballonnements et inconforts.", icon: "🍽️" },
    { title: "Douleurs Articulaires", desc: "Soulagez les douleurs, l'inflammation et améliorez votre mobilité.", icon: "🦴" },
    { title: "Manque de Sommeil", desc: "Retrouvez un sommeil réparateur et combattez l'insomnie naturellement.", icon: "🌙" },
    { title: "Tension Artérielle", desc: "Équilibrez votre pression artérielle et soutenez votre santé cardiaque.", icon: "❤️" },
    { title: "Sucre & Diabète", desc: "Aidez votre corps à réguler naturellement son taux de glycémie.", icon: "🩸" }
];

function renderDiseases() {
    const grid = document.getElementById('health-grid');
    grid.innerHTML = '';

    diseases.forEach((d, index) => {
        const card = document.createElement('div');
        card.className = 'health-card stagger-card';
        card.style.animationDelay = `${index * 100}ms`;

        card.innerHTML = `
             <div class="w-[80px] h-[80px] bg-[#f0f4f1]  rounded-full flex items-center justify-center text-[2rem] 
                mb-[1.5rem] transition-all duration-400 group-hover:bg-[#2F5D3A] 
                group-hover:text-white group-hover:[transform:rotateY(180deg)]">
                 <span>${d.icon}</span>
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#2F5D3A] transition-colors">
                ${d.title}
            </h3> 

            <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                ${d.desc}
            </p>

            <a href="maladiePlus/${d.id}.html" class="mt-auto bg-[#2F5D3A] text-white px-6 py-[10px] rounded-[12px] text-[0.875rem] 
                            font-semibold inline-flex items-center gap-2 transition-all duration-300 
                            hover:bg-[#F7C842] hover:text-[#0C1A2A] hover:scale-[1.05]">
                Lire plus
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
            `;
        grid.appendChild(card);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', renderDiseases);