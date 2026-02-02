// Elements
const noBtn = document.getElementById("nobutton");
const music = document.getElementById("bg-music");

// Play music immediately on first click (for browsers that block autoplay)
document.addEventListener("click", () => {
  music.volume = 0.5;
  music.play();
}, { once: true });

noBtn.addEventListener("mouseover", () => {
  // Move randomly
  const maxMoveX = 300; // max pixels left/right
  const maxMoveY = 200; // max pixels up/down
  const x = (Math.random() - 0.5) * 2 * maxMoveX;
  const y = (Math.random() - 0.5) * 2 * maxMoveY;

  // Apply movement
  noBtn.style.transition = "all 0.05s ease";
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
