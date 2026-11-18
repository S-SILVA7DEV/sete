/* ============================================================
   SETE — CONFIGURAÇÃO
   Este é o único arquivo que você precisa editar.
   ============================================================ */
window.Sete = window.Sete || {};

Sete.config = {
  titulo: "Sete",
  subtitulo: "um filme sobre nós dois",

  casal: { ela: "Júlia", ele: "Steven" },

  // Início do namoro (mês de 1 a 12)
  inicio: { ano: 2026, mes: 4, dia: 17 },

  abertura: "Júlia, preparei uma pequena surpresa para você...",

  // Texto opcional abaixo do contador. Deixe vazio para não mostrar nada.
  historia: { texto: "" },

  /* CENAS (fotos e vídeo)
     - src: caminho da foto em assets/fotos/
     - proporcao: [largura, altura] da imagem, para ela aparecer inteira, sem cortes
     - legenda: opcional. Escreva o que quiser; deixe "" para não mostrar legenda.
     - Para um vídeo, use { video: "...", poster: "...", proporcao: [...] }.
     A ordem aqui é a ordem na tela. Para tirar uma cena, apague a linha. */
  fotos: [
    { src: "assets/fotos/foto2.jpg", proporcao: [1050, 1400], legenda: "" },
    { src: "assets/fotos/foto1.jpg", proporcao: [720, 1280],  legenda: "" },
    { src: "assets/fotos/foto3.jpg", proporcao: [720, 730],   legenda: "" },
    { src: "assets/fotos/foto4.jpg", proporcao: [1050, 1400], legenda: "" },
    { src: "assets/fotos/foto5.jpg", proporcao: [720, 1280],  legenda: "" },
    { src: "assets/fotos/foto6.jpg", proporcao: [1020, 1020], legenda: "" },
    { src: "assets/fotos/foto7.jpg", proporcao: [1261, 1400], legenda: "" },
    { src: "assets/fotos/foto8.jpg", proporcao: [720, 1280],  legenda: "" },
    { video: "assets/video/cena.mp4", poster: "assets/video/cena-poster.jpg", proporcao: [576, 1024], legenda: "" }
  ],

  /* MÚSICA — preencha "arquivo" (ex.: "assets/musica/nossa-musica.mp3").
     Vazio = a seção Trilha simplesmente não aparece.
     Use só arquivos que você tem direito de usar. */
  musica: { titulo: "Nossa música", artista: "", arquivo: "" },

  /* CARTA — cada item é um parágrafo. Reescreva com a sua voz. */
  carta: [
     [
    "Mozao,",

    "Sete meses. A gente se conheceu pelas redes sociais e tudo aconteceu tão rápido que, às vezes, eu paro pra pensar em como alguém que chegou na minha vida há tão pouco tempo conseguiu se tornar tão importante.",

    "Hoje a gente divide a mesma casa, e é nas coisas mais simples que eu encontro a felicidade de ter você comigo: nos filmes no sofá, sejam de ação ou, de vez em quando, de terror, na comida que você faz pra mim e nas cosquinhas que sempre acabam em bagunça.",

    "Eu vejo em você uma mulher forte, inteligente, esforçada e cheia de sonhos. Admiro seu jeito, sua timidez, seu cuidado comigo e a maneira como você me faz sentir amado. Você confia em mim, e eu também encontrei em você alguém com quem posso me sentir em casa.",

    "Foi ao seu lado que nasceu em mim a vontade de ser um homem melhor. E quero continuar sendo, todos os dias, não porque você me cobra, mas porque você me inspira.",

    "A gente já conheceu o Rio de Janeiro juntos, mas esse é só um dos tantos lugares que ainda quero conhecer ao seu lado. Quero viver muita coisa com você, construir nossa história, realizar nossos sonhos e, sim, me casar com você. Quero que esse futuro seja nosso.",

    "Obrigado por esses sete meses, amor. Que sejam apenas o começo de tudo que ainda vamos viver.",

    "Do seu mozin. ❤️"
],
  ],

  /* CRÉDITOS FINAIS — { cargo, nome } */
  creditos: [
    { cargo: "Estrelando", nome: "Júlia" },
    { cargo: "Também estrelando", nome: "Steven" },
    { cargo: "Roteiro", nome: "Nós dois" },
    { cargo: "Locação principal", nome: "Nossa casa" },
    { cargo: "Locações especiais", nome: "Rio de Janeiro, e as que ainda virão" },
    { cargo: "Sessões de cinema", nome: "O nosso sofá" },
    { cargo: "Cozinha", nome: "Júlia" },
    { cargo: "Cenas de cosquinha", nome: "Sem dublês" }
  ],

  frase: "Eu te amo, e pra sempre, nós dois.",
  assinatura: "Com amor, do seu mozin. ❤️",
  continua: "Continua…"
};
