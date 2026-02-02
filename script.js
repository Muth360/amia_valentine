const noBtn = document.getElementById("nobutton");
const music = document.getElementById("bg-music");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = (Math.random() - 0.5) * 600;
    const y = (Math.random() - 0.5) * 400;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
}

document.addEventListener("click", () => {
  if (music) {
    music.play();
  }
}, { once: true });
