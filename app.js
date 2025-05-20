// Dados dos jogos (usados em home e detalhes)
const carouselGames = [
  {
    id: 1,
    title: 'EA SPORTS FC™ 25',
    description: "EA SPORTS FC™ 25 oferece mais maneiras de vencer, com tecnologia HyperMotionV, PlayStyles otimizados pela Opta e motor gráfico Frostbite. Compita com clubes e ligas de futebol do mundo real com autenticidade inigualável.",
    imageUrl: 'assets/fc25.jpg'
  },
  {
    id: 2,
    title: 'Red Dead Redemption 2',
    description: "Red Dead Redemption 2 traz uma história épica do fora da lei Arthur Morgan, membro da gangue Van der Linde. Explore um mundo vasto e atmosférico com gráficos incríveis e liberdade de escolhas.",
    imageUrl: 'assets/rdr2.jpg'
  },
  {
    id: 3,
    title: 'NBA 2K25',
    description: "Viva o sonho da NBA com gráficos realistas, jogabilidade aprimorada e modos dinâmicos. Crie seu legado nas quadras.",
    imageUrl: 'assets/nba2k25.jpg'
  },
  {
    id: 4,
    title: 'Off The Grid',
    description: "Em uma ilha devastada pela guerra corporativa, lute por sobrevivência em um shooter tático cibernético com narrativa interativa e escolhas profundas.",
    imageUrl: 'assets/OffTheGridjpg.jpg'
  },
  {
    id: 5,
    title: 'Assassin’s Creed Shadows',
    description: "Explore o Japão feudal com dois protagonistas distintos e estilos de combate únicos em Assassin’s Creed Shadows.",
    imageUrl: 'assets/ACShadowsThumb.jpg'
  }
];
const cardGames = [
  {
    id: "fc25",
    title: "EA SPORTS FC™ 25",
    description: "EA SPORTS FC™ 25 oferece mais maneiras de vencer, com tecnologia HyperMotionV, PlayStyles otimizados pela Opta e motor gráfico Frostbite. Compita com clubes e ligas de futebol do mundo real com autenticidade inigualável.",
    releaseDate: "27 de setembro de 2025",
    price: "R$ 299",
    imageUrl: "assets/FC-2025.png",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-6600k / AMD Ryzen 5 1600",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570",
      storage: "100 GB disponíveis"
    }
  },
  {
    id: "red2",
    title: "Red Dead Redemption 2",
    description: "Red Dead Redemption 2 traz uma história épica do fora da lei Arthur Morgan, membro da gangue Van der Linde. Explore um mundo vasto e atmosférico com gráficos incríveis e liberdade de escolhas.",
    releaseDate: "29 de Outubro",
    price: "R$ 249,50",
    imageUrl: "assets/red2.jpg",
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
      memory: "12 GB RAM",
      graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 480",
      storage: "150 GB disponíveis"
    }
  },
  {
    id: "nba",
    title: "NBA 2K25",
    description: "Viva o sonho da NBA com gráficos realistas, jogabilidade aprimorada e modos dinâmicos. Crie seu legado nas quadras.",
    releaseDate: "Disponível agora",
    price: "R$ 199,90",
    imageUrl: "assets/nba2k25.jpg",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i3-2100 / AMD FX-4100",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GT 450 / AMD Radeon HD 7770",
      storage: "80 GB disponíveis"
    }
  },
  {
    id: "until",
    title: "Until Dawn™",
    description: "Recriado e aprimorado para PC, Until Dawn é um thriller interativo onde cada decisão afeta o destino dos personagens em uma noite aterrorizante.",
    releaseDate: "Disponível agora",
    price: "R$ 299,90",
    imageUrl: "assets/UntilDawn.jpg",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-8400 / AMD Ryzen 5 1600",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 1060 / AMD RX 580",
      storage: "80 GB disponíveis"
    }
  },
  {
    id: "otg",
    title: "Off The Grid",
    description: "Em uma ilha devastada pela guerra corporativa, lute por sobrevivência em um shooter tático cibernético com narrativa interativa e escolhas profundas.",
    releaseDate: "Disponível agora",
    price: "Gratuito",
    imageUrl: "assets/OffTheGrid.jpg",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-7500 / AMD Ryzen 5 1400",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 970 / AMD R9 390",
      storage: "90 GB disponíveis"
    }
  },
  {
    id: "acs",
    title: "Assassin’s Creed Shadows",
    description: "Explore o Japão feudal com dois protagonistas distintos e estilos de combate únicos em Assassin’s Creed Shadows.",
    releaseDate: "15 de novembro de 2025",
    price: "R$ 349,00",
    imageUrl: "assets/ACShadowsThumb.jpg",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-9700K / AMD Ryzen 7 3700X",
      memory: "16 GB RAM",
      graphics: "NVIDIA RTX 2060 / AMD RX 6700 XT",
      storage: "120 GB disponíveis"
    }
  },
  {
    id: "bmw",
    title: "Black Myth: Wukong",
    description: "Baseado na lenda de Journey to the West, enfrente criaturas mitológicas com artes marciais e magia.",
    releaseDate: "20 de agosto de 2025",
    price: "R$ 299,00",
    imageUrl: "assets/black.png",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-10400F / AMD Ryzen 5 3600",
      memory: "16 GB RAM",
      graphics: "NVIDIA RTX 2060 / AMD RX 5600 XT",
      storage: "110 GB disponíveis"
    }
  },
  {
    id: "kgc",
    title: "Kingdom Come: Deliverance II",
    description: "Continue a jornada de Henry em um mundo medieval realista e brutal, com foco em narrativa, combate e decisões.",
    releaseDate: "Final de 2025",
    price: "R$ 279,00",
    imageUrl: "assets/KingdomI.jpg",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-9600K / AMD Ryzen 5 3600",
      memory: "16 GB RAM",
      graphics: "NVIDIA GTX 1660 Ti / AMD RX 590",
      storage: "100 GB disponíveis"
    }
  },
  {
    id: "gta",
    title: "GTA V",
    description: "Explore Los Santos e Blaine County em um mundo aberto com liberdade total e ação em terceira pessoa.",
    releaseDate: "Já disponível",
    price: "R$ 59,90",
    imageUrl: "assets/gta5.jpeg",
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i5 3470 / AMD FX-8350",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 660 / AMD HD 7870",
      storage: "72 GB disponíveis"
    }
  },
  {
    id: "baldur",
    title: "Baldur’s Gate 3",
    description: "Baseado em Dungeons & Dragons, Baldur’s Gate 3 oferece um RPG profundo com combate tático por turnos.",
    releaseDate: "Disponível",
    price: "R$ 299,00",
    imageUrl: "assets/baldur.png",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-4690 / AMD FX 8350",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 970 / AMD RX 480",
      storage: "150 GB disponíveis"
    }
  },
  {
    id: "tcm",
    title: "The Crew Motorfest",
    description: "Participe de um festival de carros no Havaí com corridas intensas, personalização e mundo aberto.",
    releaseDate: "Já disponível",
    price: "R$ 279,00",
    imageUrl: "assets/thecrewjpg.jpg",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
      memory: "16 GB RAM",
      graphics: "NVIDIA RTX 2060 / AMD RX 5700 XT",
      storage: "90 GB disponíveis"
    }
  },
  {
    id: "marvel",
    title: "Marvel Rivals",
    description: "Um shooter competitivo em equipes com heróis e vilões icônicos do universo Marvel.",
    releaseDate: "2025",
    price: "Gratuito",
    imageUrl: "assets/marvelrivals.png",
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i5-4590 / AMD FX-8350",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 960 / AMD R9 280",
      storage: "60 GB disponíveis"
    }
  }
];



// Dados do carrossel (subset dos jogos)



// FUNÇÕES CARROSSEL - para página home
function setupCarousel() {
  let selectedGameIndex = 0;
  const highlight = document.getElementById("carousel-highlight");
  const sidebar = document.getElementById("carousel-sidebar");

  function renderGame(index) {
    const game = carouselGames[index];
    highlight.style.backgroundImage = `url(${game.imageUrl})`;
    document.getElementById("game-title").textContent = game.title;
    document.getElementById("game-release").textContent = game.releaseDate || "";
    document.getElementById("game-desc").textContent = game.description || "";
    document.getElementById("game-price").textContent = game.price || "";
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
}


// FUNÇÃO PARA RENDERIZAR CARDS - para página home
function renderCards() {
  const cardsContainer = document.getElementById("game-cards");
  if (!cardsContainer) return; // Proteção caso não exista (detalhes.html)

  cardsContainer.innerHTML = "";
  cardGames.forEach((game) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${game.imageUrl}" alt="${game.title}" />
      <div class="card-content">
        <h3>${game.title}</h3>
        <p class="price">${game.price || ""}</p>
        <button class="btn-details" data-id="${game.id}">Ver Mais</button>
      </div>
    `;
    cardsContainer.appendChild(card);
  });

  document.querySelectorAll(".btn-details").forEach(button => {
    button.addEventListener("click", (e) => {
      const gameId = e.target.getAttribute("data-id");
      window.location.href = `detalhes.html?id=${gameId}`;
    });
  });
}

// FUNÇÃO PARA BUSCA - para página home
function setupSearch() {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (!searchInput || !searchResults) return; // Proteção caso não exista (detalhes.html)

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
        <a style="text-decoration: none; color: white;" href="detalhes.html?id=${matchedGame.id}" class="search-result-item">
          <img src="${matchedGame.imageUrl}" alt="${matchedGame.title}">
          <div>
            <h3>${matchedGame.title}</h3>
            <p>${matchedGame.price}</p>
          </div>
        </a>
      `;
    } else {
      searchResults.style.display = "block";
      searchResults.innerHTML = `<p>Nenhum jogo encontrado.</p>`;
    }
  });
}


// FUNÇÃO PARA DETALHES - para página detalhes.html
function carregarProduto() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) return;

  const produto = cardGames.find(p => p.id === id);

  const nomeEl = document.getElementById("produto-nome");
  const descricaoEl = document.getElementById("produto-descricao");
  const precoEl = document.getElementById("produto-preco");
  const imagemEl = document.getElementById("produto-imagem");

  // Spans de requisitos
  const osEl = document.getElementById("req-os");
  const processadorEl = document.getElementById("req-processador");
  const memoriaEl = document.getElementById("req-memoria");
  const graficaEl = document.getElementById("req-grafica");
  const armazenamentoEl = document.getElementById("req-armazenamento");

  if (!produto) {
    if (nomeEl) nomeEl.textContent = "Produto não encontrado";
    return;
  }

  if (nomeEl) nomeEl.textContent = produto.title;
  if (descricaoEl) descricaoEl.textContent = produto.description || "Descrição indisponível";
  if (precoEl) precoEl.textContent = produto.price;
  if (imagemEl) {
    imagemEl.src = produto.imageUrl;
    imagemEl.alt = produto.title;
  }

  if (produto.requirements) {
    osEl.textContent = produto.requirements.os || "-";
    processadorEl.textContent = produto.requirements.processor || "-";
    memoriaEl.textContent = produto.requirements.memory || "-";
    graficaEl.textContent = produto.requirements.graphics || "-";
    armazenamentoEl.textContent = produto.requirements.storage || "-";
  }
}

function voltar() {
  window.history.back();
}

// Chama carregarProduto quando a página terminar de carregar
window.addEventListener('DOMContentLoaded', carregarProduto);


function adicionarAoCarrinho() {
  alert("Jogo Comprado com Sucesso");
  // Aqui você pode implementar funcionalidade real de carrinho
}

// Inicializa funções conforme a página
document.addEventListener("DOMContentLoaded", () => {
  // Se existir o container do carrossel, estamos na home
  if (document.getElementById("carousel-highlight")) {
    setupCarousel();
  }
  // Se existir o container dos cards, estamos na home
  if (document.getElementById("game-cards")) {
    renderCards();
  }
  // Se existir o input de busca, estamos na home
  if (document.getElementById("search-input")) {
    setupSearch();
  }
  // Se existir o container de detalhes, estamos na página detalhes
  if (document.getElementById("produto-nome")) {
    carregarProduto();

    // Botões na página detalhes
    const btnVoltar = document.querySelector(".voltar-btn");
    if (btnVoltar) btnVoltar.onclick = voltar;

    const btnCarrinho = document.querySelector(".adicionar-carrinho-btn");
    if (btnCarrinho) btnCarrinho.onclick = adicionarAoCarrinho;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const lancamentoCards = document.querySelectorAll(".lancamento-card");

  lancamentoCards.forEach(card => {
    card.addEventListener("click", () => {
      const gameId = card.getAttribute("data-id");
      if (gameId) {
        window.location.href = `detalhes.html?id=${gameId}`;
      }
    });
  });
});
function carregarJogos() {
  const container = document.getElementById('lista-jogos');
  if (!container) return;

  container.innerHTML = "";

  cardGames.forEach(game => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${game.imageUrl}" alt="${game.title}" />
      <div class="card-content">
        <h3>${game.title}</h3>
        <p class="price">${game.price || ""}</p>
        <button class="btn-details" data-id="${game.id}">Ver Mais</button>
      </div>
    `;
    container.appendChild(card);
  });

  // Adiciona evento para os botões "Ver Mais"
  container.querySelectorAll(".btn-details").forEach(button => {
    button.addEventListener("click", (e) => {
      const gameId = e.target.getAttribute("data-id");
      window.location.href = `detalhes.html?id=${gameId}`;
    });
  });
}

