const noBtn = document.getElementById("nobutton");

// Move No button randomly but only a little
noBtn.addEventListener("mouseover", () => {
  const maxMoveX = 800; // max pixels to move left/right
  const maxMoveY = 600; // max pixels to move up/down

  const x = (Math.random() - 0.5) * maxMoveX; // -75 to +75
  const y = (Math.random() - 0.5) * maxMoveY; // -50 to +50

  noBtn.style.transition = "all 0.02s ease"; // smooth but not too fast
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

<!-- Keep your audio tag exactly like this (no controls) -->
<audio id="myAudio" loop>
  <source src="Frou Frou - A New Kind of Love (Lyrics) _ Are ya falling in love I've a feeling you are 4.mp3" type="audio/mpeg">
</audio>

<script>
  // This function starts the music when she clicks anywhere
  document.addEventListener('click', function() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }, { once: true }); // 'once: true' ensures it only tries to play on the first click
</script>
