// Simulação de dados para teste (substitua por API real)
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
// Função para carregar o produto com base no ID da URL
function carregarProduto() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  console.log("ID do jogo recebido:", id);

  const produto = cardGames.find((p) => p.id === id);

  if (!produto) {
    document.getElementById("produto-nome").textContent = "Produto não encontrado";
    return;
  }

  document.getElementById("produto-nome").textContent = produto.title;
  document.getElementById("produto-descricao").textContent = produto.description || "Descrição indisponível";
  document.getElementById("produto-preco").textContent = produto.price;
  document.getElementById("produto-imagem").src = produto.imageUrl;
  document.getElementById("produto-imagem").alt = produto.title;
}


function voltar() {
  window.history.back();
}

function adicionarAoCarrinho() {
  alert("Produto adicionado ao carrinho!");
  // Aqui você pode usar localStorage ou fetch para enviar para backend
}

document.addEventListener("DOMContentLoaded", carregarProduto);
