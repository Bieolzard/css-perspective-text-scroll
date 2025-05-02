document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("theme-audio");
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const intro = document.querySelector(".intro");
  const startScreen = document.querySelector(".start-screen");
  const titles = document.querySelector(".titles > div#crawl-text");
  const episodeSelect = document.getElementById("episode-select");
  const audioToggle = document.getElementById("audio-toggle");
  const volumeSlider = document.getElementById("audio-volume");
  const fullscreenBtn = document.getElementById("fullscreen-btn");

  const episodes = {
    iv: {
      title: "<p>Episódio IV</p><h1>UMA NOVA ESPERANÇA</h1>",
      text: `
        <p>É um período de guerra civil.<br />
        Partindo de uma base secreta,<br />
        naves rebeldes atacam e<br />
        conquistam sua primeira<br />
        vitória contra o perverso<br />
        Império Galáctico.</p>

        <p>Durante a batalha, espiões<br />
        rebeldes conseguem roubar<br />
        os planos secretos da arma<br />
        decisiva do Império, a<br />
        <strong>ESTRELA DA MORTE</strong>, uma<br />
        estação espacial blindada<br />
        com poder suficiente para<br />
        destruir um planeta inteiro.</p>

        <p>Perseguida pelos sinistros<br />
        agentes do Império, a <em>princesa Leia</em><br />
        apressa-se em voltar<br />
        para casa a bordo de sua<br />
        nave estelar, protegendo<br />
        os planos roubados que<br />
        podem salvar seu povo e<br />
        restaurar a liberdade na<br />
        galáxia....</p>`
    },
    v: {
      title: "<p>Episódio V</p><h1>O IMPÉRIO CONTRA-ATACA</h1>",
      text: `
        <p>As forças imperiais lançaram<br />
        uma ofensiva para acabar<br />
        com a Rebelião de uma vez por todas.<br />
        Tropas imperiais conseguiram<br />
        expulsar os rebeldes de sua base escondida<br />
        e os perseguem através da galáxia.</p>

        <p>Fugindo da temida Frota Imperial,<br />
        um grupo de heróis liderado por<br />
        <em>Luke Skywalker</em> estabeleceu<br />
        uma nova base secreta no planeta gelado Hoth.</p>

        <p>Enquanto isso, <strong>Darth Vader</strong>,
        obcecado em encontrar Luke,<br />
        despacha milhares de sondas<br />
        para os confins do espaço....</p>`
    },
    vi: {
      title: "<p>Episódio VI</p><h1>O RETORNO DE JEDI</h1>",
      text: `
        <p>Luke Skywalker retornou<br />
        ao seu planeta natal, Tatooine,<br />
        em uma tentativa de resgatar seu amigo<br />
        <em>Han Solo</em> das garras do vilão<br />
        <strong>Jabba, o Hutt</strong>.</p>

        <p>Luke não sabe que o Império Galáctico<br />
        começou a construção de uma nova
        estação espacial ainda mais poderosa<br />
        que a primeira temida <strong>Estrela da Morte</strong>.</p>

        <p>Protegida por um escudo de energia,
        essa arma mortal se encontra orbitando
        o planeta florestal Endor, onde está<br />
        sendo construída em segredo....</p>`
    }
  };

  function loadEpisode(episodeKey) {
    const episode = episodes[episodeKey];
    if (!episode) return;
    titles.innerHTML = episode.title + episode.text;
  }

  startBtn.addEventListener("click", () => {
    const selectedEpisode = episodeSelect.value;
    loadEpisode(selectedEpisode);
    startScreen.style.display = "none";
    audio.currentTime = 0;
    audio.play();
    intro.classList.remove("hide");
    void intro.offsetWidth; // forçar reflow da animação
    intro.classList.add("intro");
  });

  restartBtn.addEventListener("click", () => {
    const selectedEpisode = episodeSelect.value;
    loadEpisode(selectedEpisode);
    audio.currentTime = 0;
    audio.play();
    titles.style.animation = "none";
    void titles.offsetWidth; // força reflow da animação
    titles.style.animation = null;
  });

  audioToggle.addEventListener("click", () => {
    audio.muted = !audio.muted;
    audioToggle.textContent = audio.muted ? "🔇" : "🔊";
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });

  fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        alert(`Erro ao tentar ativar tela cheia: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });
});