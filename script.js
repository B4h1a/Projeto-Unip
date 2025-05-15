// Jogos do carrossel
const carouselGames = [
    {
        id: "fc25",
        title: "EA SPORTS FC™ 25",
        description: "O EA SPORTS FC™ 25 oferece mais maneiras de ganhar pelo clube...",
        releaseDate: "",
        price: "R$ 299",
        imageUrl: "assets/FC-2025.png"
    },
    {
        id: "red2",
        title: "Red Dead Redemption 2",
        description: "Pela primeira vez em seu célebre legado, jogue Red Dead Redemption no PC...",
        releaseDate: "29 de Outubro",
        price: "R$ 249,50",
        imageUrl: "assets/red2.jpg"
    },
    {
        id: "nba",
        title: "NBA 2K25",
        description: "Viva o sonho da NBA com gráficos realistas, jogabilidade aprimorada e modos dinâmicos.",
        releaseDate: "Disponível agora",
        price: "R$ 199,90",
        imageUrl: "assets/nba.png"
    },
    {
        id: "acs",
        title: "Assassin's Creed Shadows",
        description: "Recriado e aprimorado para PC, Until Dawn convida você a reviver o pesadelo...",
        releaseDate: "Lançamento em breve",
        price: "R$ 299,90",
        imageUrl: "assets/ACShadowsThumb.jpg"
    },
    {
        id: "otg",
        title: "Off The Grid",
        description: "TEARDROP ISLAND DESPERATELY NEEDS A SAVIOR...",
        releaseDate: "Em breve",
        price: "Gratuito",
        imageUrl: "assets/OffTheGrid.jpg"
    },
];

// Jogos para os cards (inclui todos acima + novos)
const cardGames = [
        {
        id: "fc25",
        title: "EA SPORTS FC™ 25",
        description: "O EA SPORTS FC™ 25 oferece mais maneiras de ganhar pelo clube...",
        releaseDate: "",
        price: "R$ 299",
        imageUrl: "assets/FC-2025.png"
    },
    {
        id: "red2",
        title: "Red Dead Redemption 2",
        description: "Pela primeira vez em seu célebre legado, jogue Red Dead Redemption no PC...",
        releaseDate: "29 de Outubro",
        price: "R$ 249,50",
        imageUrl: "assets/red2.jpg"
    },
    {
        id: "nba",
        title: "NBA 2K25",
        description: "Viva o sonho da NBA com gráficos realistas, jogabilidade aprimorada e modos dinâmicos.",
        releaseDate: "Disponível agora",
        price: "R$ 199,90",
        imageUrl: "assets/nba.png"
    },
    {
        id: "until",
        title: "Until Dawn™",
        description: "Recriado e aprimorado para PC, Until Dawn convida você a reviver o pesadelo...",
        releaseDate: "Lançamento em breve",
        price: "R$ 299,90",
        imageUrl: "assets/UntilDawn.jpg"
    },
    {
        id: "otg",
        title: "Off The Grid",
        description: "TEARDROP ISLAND DESPERATELY NEEDS A SAVIOR...",
        releaseDate: "Em breve",
        price: "Gratuito",
        imageUrl: "assets/OffTheGrid.jpg"
    },
    {
        id: "acs",
        title: "Assassin’s Creed Shadows",
        price: "R$ 349,00",
        imageUrl: "assets/acshadows.jpg"
    },
    {
        id: "bmw",
        title: "Black Myth: Wukong",
        price: "R$ 299,00",
        imageUrl: "assets/black.png"
    },
    {
        id: "kgc",
        title: "Kingdom Come: Deliverance II",
        price: "R$ 279,00",
        imageUrl: "assets/KingdomI.jpg"
    },
    {
        id: "gta",
        title: "GTA V",
        price: "R$ 59,90",
        imageUrl: "assets/gta5.jpeg"
    },
    {
        id: "baldur",
        title: "Baldur’s Gate 3",
        price: "R$ 299,00",
        imageUrl: "assets/baldur.png"
    },
    {
        id: "tcm",
        title: "The Crew Motorfest",
        price: "R$ 279,00",
        imageUrl: "assets/thecrewjpg.jpg"
    },
    {
        id: "marvel",
        title: "Marvel Rivals",
        price: "Gratuito",
        imageUrl: "assets/marvelrivals.png"
    }
];


// ---------- Carrossel ----------
let selectedGameIndex = 0;
const highlight = document.getElementById("carousel-highlight");
const sidebar = document.getElementById("carousel-sidebar");

function renderGame(index) {
    const game = carouselGames[index];
    highlight.style.backgroundImage = `url(${game.imageUrl})`;
    document.getElementById("game-title").textContent = game.title;
    document.getElementById("game-release").textContent = game.releaseDate;
    document.getElementById("game-desc").textContent = game.description;
    document.getElementById("game-price").textContent = game.price;
}

function renderSidebar() {
    sidebar.innerHTML = "";
    carouselGames.forEach((game, index) => {
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
    selectedGameIndex = (selectedGameIndex + 1) % carouselGames.length;
    updateCarousel();
}, 5000);

// ---------- Cards ----------
function renderCards() {
  const cardsContainer = document.getElementById("game-cards");
  cardsContainer.innerHTML = ""; // limpa os cards antes de renderizar
  cardGames.forEach((game) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${game.imageUrl}" alt="${game.title}" />
      <div class="card-content">
        <h3>${game.title}</h3>
        <p class="price">${game.price}</p>
        <button class="btn-details" data-id="${game.id}">Detalhes</button>
      </div>
    `;
    cardsContainer.appendChild(card);
  });

  // Depois que os cards estão no DOM, adiciona o evento de clique no botão
  document.querySelectorAll(".btn-details").forEach(button => {
    button.addEventListener("click", (e) => {
      const gameId = e.target.getAttribute("data-id");
      // Navega para a página detalhes passando o id do jogo na URL
      window.location.href = `detalhes.html?id=${gameId}`;
    });
  });
}




renderCards();

// ---------- Busca ----------
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        searchResults.style.display = "none";
        searchResults.innerHTML = "";
        return;
    }

    const matchedGame = cardGames.find(game =>
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

function scrollCards(direction) {
  const container = document.getElementById("game-cards");
  const scrollAmount = 220; // ajustado ao tamanho do card
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

