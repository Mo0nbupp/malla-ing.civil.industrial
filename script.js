const malla = document.getElementById("malla");

const semestres = [
  { numero: 1, ramos: ["Ramo 1", "Ramo 2"] },
  { numero: 2, ramos: ["Ramo 3", "Ramo 4"] },
  { numero: 3, ramos: ["Ramo 5"] },
  { numero: 4, ramos: ["Ramo 6"] }
];

function renderMalla() {
  malla.innerHTML = "";

  for (let i = 0; i < semestres.length; i += 2) {
    const año = document.createElement("div");
    año.className = "año";

    const titulo = document.createElement("h2");
    titulo.innerText = `Año ${Math.floor(i / 2) + 1}`;
    año.appendChild(titulo);

    const contSemestres = document.createElement("div");
    contSemestres.className = "semestres";

    semestres.slice(i, i + 2).forEach(sem => {
      const divSem = document.createElement("div");
      divSem.className = "semestre";

      const h3 = document.createElement("h3");
      h3.innerText = `Semestre ${sem.numero}`;
      divSem.appendChild(h3);

      sem.ramos.forEach(ramo => {
        const divRamo = document.createElement("div");
       divRamo.className = "ramo disponible";
divRamo.innerText = ramo;

divRamo.onclick = () => {
  divRamo.classList.toggle("aprobado");
};

        divSem.appendChild(divRamo);
      });

      contSemestres.appendChild(divSem);
    });

    año.appendChild(contSemestres);
    malla.appendChild(año);
  }
}

renderMalla();
