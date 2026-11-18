# Sete — um filme sobre nós dois

Site romântico em HTML, CSS e JavaScript puro. Todo o conteúdo pessoal fica
em `js/config.js`.

## Rodar localmente
Abra `index.html` no navegador. Para testar fotos, vídeo e música sem erros
de caminho, use um servidor simples na pasta do projeto:

    python3 -m http.server

e acesse http://localhost:8000.

## Fotos e vídeo
As fotos estão em `assets/fotos/` e o vídeo em `assets/video/`. Para trocar,
substitua o arquivo (mantendo o nome) ou edite a lista `fotos` em
`js/config.js`. Informe `proporcao: [largura, altura]` da imagem, para ela
aparecer inteira. Escreva a `legenda` de cada cena, se quiser.

## Música
Coloque o MP3 em `assets/musica/` e preencha `musica.arquivo` no config.js.
Sem arquivo, a seção "Trilha" não aparece. Use apenas músicas que você
tem direito de usar.

## Publicar no GitHub Pages
1. Crie um repositório e envie todos os arquivos (index.html na raiz).
2. Settings → Pages → Branch `main`, pasta `/ (root)` → Save.
3. O link ficará assim: https://seu-usuario.github.io/nome-do-repositorio/
   Atenção: no plano gratuito o repositório é público, e qualquer pessoa
   com o link pode ver as fotos.
