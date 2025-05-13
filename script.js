const games = [
    {
        title: "EA SPORTS FC™ 25",
        description: "O EA SPORTS FC™ 25 oferece mais maneiras de ganhar pelo clube...",
        releaseDate: "",
        price: "R$ 299",
        imageUrl: "assets/FC-2025.png"
    },
    {
        title: "Red Dead Redemption 2",
        description: "Pela primeira vez em seu célebre legado, jogue Red Dead Redemption no PC...",
        releaseDate: "29 de Outubro",
        price: "R$ 249,50",
        imageUrl: "assets/red2.jpg"
    },
    {
        title: "NBA 2K25",
        description: "Viva o sonho da NBA com gráficos realistas, jogabilidade aprimorada e modos dinâmicos.",
        releaseDate: "Disponível agora",
        price: "R$ 199,90",
        imageUrl: "assets/nba.png"
    },
    {
        title: "Until Dawn™",
        description: "Recriado e aprimorado para PC, Until Dawn convida você a reviver o pesadelo...",
        releaseDate: "Lançamento em breve",
        price: "R$ 299,90",
        imageUrl: "assets/UntilDawn.jpg"
    },
    {
        title: "Off The Grid",
        description: "TEARDROP ISLAND DESPERATELY NEEDS A SAVIOR...",
        releaseDate: "Em breve",
        price: "Gratuito",
        imageUrl: "assets/OffTheGrid.jpg"
    },
    
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
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  if (!query) {
    searchResults.style.display = "none";
    searchResults.innerHTML = "";
    return;
  }

  const matchedGame = games.find(game =>
    game.title.toLowerCase().includes(query)
  );

  if (matchedGame) {
    searchResults.style.display = "block";
    searchResults.innerHTML = `
      <div class="search-result-item">
        <img src="${matchedGame.imageUrl}" alt="${matchedGame.title}">
        <div>
          <h3>${matchedGame.title}</h3>
          <p>${matchedGame.price}</p>
        </div>
      </div>
    `;
  } else {
    searchResults.style.display = "block";
    searchResults.innerHTML = `<p>Nenhum jogo encontrado.</p>`;
  }
});

