const malla = document.getElementById("malla");

const semestres = [
  {
    numero: 1,
    ramos: [
      { id: "r1", nombre: "Ramo 1", prereq: [], estado: "disponible" },
      { id: "r2", nombre: "Ramo 2", prereq: [], estado: "disponible" }
    ]
  },
  {
    numero: 2,
    ramos: [
      { id: "r3", nombre: "Ramo 3", prereq: ["r1"], estado: "bloqueado" },
      { id: "r4", nombre: "Ramo 4", prereq: ["r2"], estado: "bloqueado" }
    ]
  }
];

function renderMalla() {
  malla.innerHTML = "";

  for (let i = 0; i < semestres.length; i += 2) {
    const año = document.createElement("div");
    año.className = "año";

    const titulo = document.createElement("h2");
    titulo.textContent = `Año ${Math.floor(i / 2) + 1}`;
    año.appendChild(titulo);

    const contSemestres = document.createElement("div");
    contSemestres.className = "semestres";

    semestres.slice(i, i + 2).forEach(sem => {
      const divSem = document.createElement("div");
      divSem.className = "semestre";

      const h3 = document.createElement("h3");
      h3.textContent = `Semestre ${sem.numero}`;
      divSem.appendChild(h3);

      sem.ramos.forEach(ramo => {
        const divRamo = document.createElement("div");
        divRamo.className = `ramo ${ramo.estado}`;
        divRamo.textContent = ramo.nombre;

        if (ramo.estado === "disponible") {
          divRamo.addEventListener("click", () => aprobarRamo(ramo.id));
        }

        divSem.appendChild(divRamo);
      });

      contSemestres.appendChild(divSem);
    });

    año.appendChild(contSemestres);
    malla.appendChild(año);
  }
}

function aprobarRamo(id) {
  let aprobado = false;

  semestres.forEach(sem => {
    sem.ramos.forEach(r => {
      if (r.id === id && r.estado === "disponible") {
        r.estado = "aprobado";
        aprobado = true;
      }
    });
  });

  if (!aprobado) return;

  semestres.forEach(sem => {
    sem.ramos.forEach(r => {
      if (r.estado === "bloqueado") {
        const cumple = r.prereq.every(req =>
          semestres.some(s =>
            s.ramos.some(x => x.id === req && x.estado === "aprobado")
          )
        );
        if (cumple) r.estado = "disponible";
      }
    });
  });

  renderMalla();
}

renderMalla();
