const noBtn = document.getElementById("nobutton");

  let hoverCount = 0;

  noBtn.addEventListener("mouseover", () => {
    hoverCount++;

    const maxMoveX = 300;
    const maxMoveY = 200;

    const x = (Math.random() - 0.5) * maxMoveX;
    const y = (Math.random() - 0.5) * maxMoveY;

    noBtn.style.transition = "transform 0.15s ease";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    // After 10 attempts → show images
    if (hoverCount === 10) {
      document.getElementById("surprise-left").style.display = "block";
      document.getElementById("surprise-right").style.display = "block";
    }
  });
