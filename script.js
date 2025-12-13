const malla = document.getElementById("malla");

const ejemplo = ["Sem 1", "Sem 2", "Sem 3"];

ejemplo.forEach(texto => {
  const div = document.createElement("div");
  div.className = "ramo";
  div.innerText = texto;
  malla.appendChild(div);
});

