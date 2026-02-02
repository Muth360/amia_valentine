const noBtn = document.getElementById("nobutton");

noBtn.addEventListener("mouseover", () => {
  const maxMoveX = 400; // max pixels left/right
  const maxMoveY = 300; // max pixels up/down

  const x = (Math.random() - 0.5) * 2 * maxMoveX; // -maxMoveX to +maxMoveX
  const y = (Math.random() - 0.5) * 2 * maxMoveY; // -maxMoveY to +maxMoveY

  noBtn.style.transition = "all 0.05s ease"; // smooth but fast
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
