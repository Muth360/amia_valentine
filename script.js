const noBtn = document.getElementById("nobutton");
const music = document.getElementById("bg-music");

let hoverCount = 0;
let scale = 1;

document.addEventListener("click", () => {
  music.volume = 0.5;
  music.play();
}, { once: true });

noBtn.addEventListener("mouseover", () => {
  hoverCount++;

  const x = (Math.random() - 0.5) * 300;
  const y = (Math.random() - 0.5) * 200;

  scale = Math.max(0.4, scale - 0.05);

  noBtn.style.transition = "transform 0.15s ease";
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

  if (hoverCount === 10) {
    document.getElementById("surprise-left").style.display = "block";
    document.getElementById("surprise-right").style.display = "block";
  }
});
