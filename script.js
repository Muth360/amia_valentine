const noBtn = document.getElementById("nobutton");

// Move No button randomly around the whole page fast
noBtn.addEventListener("mouseover", () => {
  const pageWidth = window.innerWidth - noBtn.offsetWidth;
  const pageHeight = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * pageWidth;
  const y = Math.random() * pageHeight;

  noBtn.style.transition = "all 0.1s ease"; // very fast
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
