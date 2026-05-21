function gerarFrase() {
  let frases = [
    "Hoje tem?? 😍",
    "Só minha princesa mesmo 😍",
    "Minha princesa 🔥",
    "Te amo <3",
    " Minha vida <3"
  ];

  let numero = Math.floor(Math.random() * frases.length);

  document.getElementById("frase").innerText = frases[numero];
}