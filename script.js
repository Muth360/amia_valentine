function showCornerGifs() {
  const leftGif = document.createElement("div");
  const rightGif = document.createElement("div");

  leftGif.className = "corner-gif left";
  rightGif.className = "corner-gif right";

  leftGif.innerHTML = `
    <div class="tenor-gif-embed"
      data-postid="7926424135311815001"
      data-share-method="host"
      data-aspect-ratio="1"
      data-width="150px">
    </div>
  `;

  rightGif.innerHTML = `
    <div class="tenor-gif-embed"
      data-postid="7926424135311815001"
      data-share-method="host"
      data-aspect-ratio="1"
      data-width="150px">
    </div>
  `;

  document.body.appendChild(leftGif);
  document.body.appendChild(rightGif);

  // Reload Tenor script so the new embeds render
  const script = document.createElement("script");
  script.src = "https://tenor.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}
