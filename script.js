document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("nobutton");

  noBtn.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.transition = "transform 0.15s ease";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
});
