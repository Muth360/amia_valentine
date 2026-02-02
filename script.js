const noBtn = document.getElementById("nobutton");

let wiggleInterval;

// Function to start wiggling
function startWiggle() {
  if (wiggleInterval) return; // avoid multiple intervals

  wiggleInterval = setInterval(() => {
    const maxMoveX = 50; // max horizontal wiggle
    const maxMoveY = 30; // max vertical wiggle

    const x = (Math.random() - 0.5) * maxMoveX; // -25 to +25
    const y = (Math.random() - 0.5) * maxMoveY; // -15 to +15

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }, 150); // wiggle every 150ms
}

// Function to stop wiggling
function stopWiggle() {
  clearInterval(wiggleInterval);
  wiggleInterval = null;
  noBtn.style.transform = `translate(0, 0)`; // reset position
}

// Start wiggling on mouse over
noBtn.addEventListener("mouseover", startWiggle);

// Stop wiggling on mouse out
noBtn.addEventListener("mouseout", stopWiggle);
