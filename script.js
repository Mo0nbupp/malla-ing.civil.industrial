const malla = document.getElementById("malla");

const semestres = [
  {
    numero: 1,
    ramos: [
      { id: "r1", nombre: "Introducción a las matemáticas", prereq: [], estado: "disponible" },
      { id: "r2", nombre: "Introducción a la física", prereq: [], estado: "disponible" },
      { id: "r3", nombre: "Introducción a la ingeniería civil industrial", prereq: [], estado: "disponible" },
      { id: "r4", nombre: "Curso sello institucional I: Inglés I", prereq: [], estado: "disponible" },
      { id: "r5", nombre: "Formación básica para la vida académica I", prereq: [], estado: "disponible" }
    ]
  },
  // ... agrega los demás semestres aquí, siguiendo el mismo formato que antes
];

// ========================
// FUNCIONES DE GUARDADO
// ========================
function guardarEstado() {
  const estadoActual = semestres.map(sem => sem.ramos.map(r => r.estado));
  localStorage.setItem("mallaEstado", JSON.stringify(estadoActual));
}

function cargarEstado() {
  const estadoGuardado = JSON.parse(localStorage.getItem("mallaEstado"));
  if (!estadoGuardado) return;

  semestres.forEach((sem, i) => {
    sem.ramos.forEach((r, j) => {
      r.estado = estadoGuardado[i][j];
    });
  });
}

// ========================
// RENDERIZADO DE MALLA
// ========================
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

        if (ramo.estado !== "bloqueado") {
          divRamo.addEventListener("click", () => toggleRamo(ramo.id));
        }

        divSem.appendChild(divRamo);
      });

      contSemestres.appendChild(divSem);
    });

    año.appendChild(contSemestres);
    malla.appendChild(año);
  }
}

// ========================
// FUNCION TOGGLE RAMO
// ========================
function toggleRamo(id) {
  let aprobado = false;

  semestres.forEach(sem => {
    sem.ramos.forEach(r => {
      if (r.id === id) {
        if (r.estado === "disponible") {
          r.estado = "aprobado";
          aprobado = true;
        } else if (r.estado === "aprobado") {
          r.estado = "disponible";
          aprobado = true;
        }
      }
    });
  });

  if (!aprobado) return;

  // desbloquear ramos que cumplen prereqs
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

  guardarEstado();
  renderMalla();
}

// ========================
// INICIO
// ========================
cargarEstado();
renderMalla();

