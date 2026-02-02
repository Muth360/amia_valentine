document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("nobutton");

  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
      // 1. Get random coordinates based on the screen size
      // We subtract the button size so it doesn't go off-screen
      const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
      const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

      // 2. Force the button to move
      noBtn.style.position = "fixed"; // 'fixed' lets it move anywhere on screen
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
      
      console.log("The button moved to:", x, y);
    });
  } else {
    console.error("Could not find the button with ID 'nobutton'");
  }
});
