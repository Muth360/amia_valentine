const yesBtn = document.getElementById("yesbutton");
const noBtn = document.getElementById("nobutton");

// Yes button → go to another page
yesBtn.addEventListener("click", () => {
  window.location.href = "https://www.example.com"; // change to your page
});

// No button → run away when hovered
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200; // random left
  const y = Math.random() * 100; // random top
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
