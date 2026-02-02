document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("nobutton");

  noBtn.addEventListener("mouseover", () => {
    const maxMoveX = 600; // left/right range
    const maxMoveY = 400; // up/down range

    const x = (Math.random() - 0.5) * maxMoveX;
    const y = (Math.random() - 0.5) * maxMoveY;

    noBtn.style.transition = "transform 0.08s ease";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
});
