const noBtn = document.getElementById("nobutton");

// Move No button randomly but only a little
noBtn.addEventListener("mouseover", () => {
  const maxMoveX = 800; // max pixels to move left/right
  const maxMoveY = 600; // max pixels to move up/down

  const x = (Math.random() - 0.5) * maxMoveX; // -75 to +75
  const y = (Math.random() - 0.5) * maxMoveY; // -50 to +50

  noBtn.style.transition = "all 0.02s ease"; // smooth but not too fast
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
const music = document.getElementById("bg-music");

function startMusic() {
  music.play().catch(err => {
    console.log("Music play blocked:", err);
  });
  document.removeEventListener("click", startMusic);
}

// Start music on first user interaction
document.addEventListener("click", startMusic);
