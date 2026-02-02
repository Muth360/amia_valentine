const noBtn = document.getElementById("nobutton");

let hoverCount = 0;
let scale = 1;

noBtn.addEventListener("mouseover", () => {
  hoverCount++;

  // Move button
  const maxMoveX = 300;
  const maxMoveY = 200;

  const x = (Math.random() - 0.5) * maxMoveX;
  const y = (Math.random() - 0.5) * maxMoveY;

  // Shrink button each time
  scale -= 0.05;
  if (scale < 0.4) scale = 0.4; // don't disappear completely

  noBtn.style.transition = "transform 0.15s ease";
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

  // After 10 attempts → show images
  if (hoverCount === 10) {
    document.getElementById("surprise-left").style.display = "block";
    document.getElementById("surprise-right").style.display = "block";
  }
});
