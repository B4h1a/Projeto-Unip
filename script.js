const games = [
    {
        title: "EA SPORTS FC™ 25",
        description: "O EA SPORTS FC™ 25 oferece mais maneiras de ganhar pelo clube...",
        releaseDate: "",
        price: "R$ 299",
        imageUrl: "https://cdn1.epicgames.com/offer/b61e8ddd14e94619b7a74cf9d73f86b5/EGS_EASPORTSFC25StandardEdition_EACanada_S2_1200x1600-6e6b5c1d5d30e15b1dbdde721c6bc544"
    },
    {
        title: "Red Dead Redemption",
        description: "Pela primeira vez em seu célebre legado, jogue Red Dead Redemption no PC...",
        releaseDate: "29 de Outubro",
        price: "R$ 249,50",
        imageUrl: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png"
    },
    {
        title: "NBA 2K25",
        description: "Viva o sonho da NBA com gráficos realistas, jogabilidade aprimorada e modos dinâmicos.",
        releaseDate: "Disponível agora",
        price: "R$ 199,90",
        imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202406/0623/cac0e47bd9ff01264779628b75d1f750b93bc4dcf6a56c10.jpg"
    },
    {
        title: "Until Dawn™",
        description: "Recriado e aprimorado para PC, Until Dawn convida você a reviver o pesadelo...",
        releaseDate: "Lançamento em breve",
        price: "R$ 299,90",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2172010/header.jpg?t=1745495247"
    },
    {
        title: "Off The Grid",
        description: "TEARDROP ISLAND DESPERATELY NEEDS A SAVIOR...",
        releaseDate: "Em breve",
        price: "Gratuito",
        imageUrl: "https://cdn1.epicgames.com/spt-assets/6539240b4a2f47fd834a969bdf008ce9/off-the-grid-1bo5l.jpg"
    }
];

let selectedGameIndex = 0;
const highlight = document.getElementById("carousel-highlight");
const sidebar = document.getElementById("carousel-sidebar");

function renderGame(index) {
    const game = games[index];
    highlight.style.backgroundImage = `url(${game.imageUrl})`;
    document.getElementById("game-title").textContent = game.title;
    document.getElementById("game-release").textContent = game.releaseDate;
    document.getElementById("game-desc").textContent = game.description;
    document.getElementById("game-price").textContent = game.price;
}

function renderSidebar() {
    sidebar.innerHTML = "";
    games.forEach((game, index) => {
        const item = document.createElement("div");
        item.className = `sidebar-item ${index === selectedGameIndex ? "active" : ""}`;
        item.innerHTML = `
      <img src="${game.imageUrl}" alt="${game.title}" />
      <div class="sidebar-details"><p>${game.title}</p></div>
      ${index === selectedGameIndex ? '<div class="progress-bar"><div class="progress"></div></div>' : ''}
    `;
        item.addEventListener("click", () => {
            selectedGameIndex = index;
            updateCarousel();
        });
        sidebar.appendChild(item);
    });
}

function updateCarousel() {
    renderGame(selectedGameIndex);
    renderSidebar();
}

updateCarousel();

setInterval(() => {
    selectedGameIndex = (selectedGameIndex + 1) % games.length;
    updateCarousel();
}, 5000);

function renderCards() {
    const cardsContainer = document.getElementById("game-cards");
    games.forEach((game) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${game.imageUrl}" alt="${game.title}" />
            <div class="card-content">
                <h3>${game.title}</h3>
                <p class="price">${game.price}</p>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

renderCards();
