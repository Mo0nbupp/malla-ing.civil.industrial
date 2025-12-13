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
  },
  {
    numero: 3,
    ramos: [
      { id: "r5", nombre: "Ramo 5", prereq: ["r3"], estado: "bloqueado" },
      { id: "r6", nombre: "Ramo 6", prereq: ["r4"], estado: "bloqueado" }
    ]
  },
  {
    numero: 4,
    ramos: [
      { id: "r7", nombre: "Ramo 7", prereq: ["r5"], estado: "bloqueado" },
      { id: "r8", nombre: "Ramo 8", prereq: ["r6"], estado: "bloqueado" }
    ]
  },
  {
    numero: 5,
    ramos: [
      { id: "r9", nombre: "Ramo 9", prereq: ["r7"], estado: "bloqueado" },
      { id: "r10", nombre: "Ramo 10", prereq: ["r8"], estado: "bloqueado" }
    ]
  },
  {
    numero: 6,
    ramos: [
      { id: "r11", nombre: "Ramo 11", prereq: ["r9"], estado: "bloqueado" },
      { id: "r12", nombre: "Ramo 12", prereq: ["r10"], estado: "bloqueado" }
    ]
  },
  {
    numero: 7,
    ramos: [
      { id: "r13", nombre: "Ramo 13", prereq: ["r11"], estado: "bloqueado" },
      { id: "r14", nombre: "Ramo 14", prereq: ["r12"], estado: "bloqueado" }
    ]
  },
  {
    numero: 8,
    ramos: [
      { id: "r15", nombre: "Ramo 15", prereq: ["r13"], estado: "bloqueado" },
      { id: "r16", nombre: "Ramo 16", prereq: ["r14"], estado: "bloqueado" }
    ]
  },
  {
    numero: 9,
    ramos: [
      { id: "r17", nombre: "Ramo 17", prereq: ["r15"], estado: "bloqueado" },
      { id: "r18", nombre: "Ramo 18", prereq: ["r16"], estado: "bloqueado" }
    ]
  },
  {
    numero: 10,
    ramos: [
      { id: "r19", nombre: "Ramo 19", prereq: ["r17"], estado: "bloqueado" },
      { id: "r20", nombre: "Ramo 20", prereq: ["r18"], estado: "bloqueado" }
    ]
  },
  {
    numero: 11,
    ramos: [
      { id: "r21", nombre: "Ramo 21", prereq: ["r19"], estado: "bloqueado" }
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
