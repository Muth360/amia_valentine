document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("nobutton");

  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
      // Calculate random positions within the viewport bounds
      const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
      const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

      noBtn.style.position = "absolute"; // Switches to absolute to move freely
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    });
  }
});
