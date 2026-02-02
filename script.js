const noBtn = document.getElementById("nobutton");
const music = document.getElementById("bg-music");

document.addEventListener("click", () => {
  music.volume = 0.5;
  music.play();
}, { once: true });

let hoverCount = 0;

noBtn.addEventListener("mouseover", () => {
  hoverCount++;

  const maxMoveX = 300; // max pixels left/right
  const maxMoveY = 200; // max pixels up/down

  const x = (Math.random() - 0.5) * maxMoveX * 2; // -maxMoveX to +maxMoveX
  const y = (Math.random() - 0.5) * maxMoveY * 2; // -maxMoveY to +maxMoveY

  noBtn.style.transition = "all 0.05s ease";
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // optional: shrink button slightly each hover
  const scale = Math.max(0.5, 1 - hoverCount * 0.05);
  noBtn.style.transform += ` scale(${scale})`;
});
