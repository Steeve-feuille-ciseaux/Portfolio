function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('https://denisbeauxarts.com/207973-large_default/pastel-sec-schmincke-teinte-b-bleu-vert-fonce.jpg')",
                   "url('https://colorate.azurewebsites.net/SwatchColor/583353')"];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }