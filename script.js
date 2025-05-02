const audio = document.getElementById('theme-audio');
const restartBtn = document.getElementById('restart-btn');
const startBtn = document.getElementById('start-btn');
const startScreen = document.querySelector('.start-screen');
const crawlText = document.getElementById('crawl-text');
const intro = document.querySelector('.intro');

// Botão “Começar” inicia tudo
startBtn.addEventListener('click', () => {
  startScreen.style.display = 'none'; // esconde o overlay
  audio.currentTime = 0;
  audio.play();

  // Inicia animações manualmente
  intro.style.animation = 'intro 6s ease-out 1s forwards';
  crawlText.style.animation = 'titles 81s linear 6s';
});

// Botão “Recomeçar” reinicia tudo
restartBtn.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();

  // Reinicia animação do texto
  crawlText.style.animation = 'none';
  intro.style.animation = 'none';
  void crawlText.offsetWidth;
  void intro.offsetWidth;

  intro.style.animation = 'intro 6s ease-out 1s forwards';
  crawlText.style.animation = 'titles 81s linear 6s';

  // Esconde o botão depois
  restartBtn.style.opacity = '0';
  restartBtn.style.pointerEvents = 'none';
  setTimeout(() => {
    restartBtn.style.display = 'none';
  }, 3000);
});
