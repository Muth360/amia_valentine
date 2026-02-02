const noBtn = document.getElementById("nobutton");

// Make No button run away when hovered
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100; // random left/right movement
  const y = Math.random() * 100 - 50;  // random up/down movement
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
