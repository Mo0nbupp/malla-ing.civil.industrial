const malla = document.getElementById("malla");

// =========================
// SEMESTRES Y RAMOS
// =========================

const semestres = [
  // --- Semestre 1 ---
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

  // --- Semestre 2 ---
  {
    numero: 2,
    ramos: [
      { id: "r6", nombre: "Álgebra I", prereq: ["r1"], estado: "bloqueado" },
      { id: "r7", nombre: "Cálculo I", prereq: [], estado: "disponible" },
      { id: "r8", nombre: "Curso sello institucional II: Inglés II", prereq: ["r4"], estado: "bloqueado" },
      { id: "r9", nombre: "Formación básica para la vida académica II", prereq: ["r5"], estado: "bloqueado" },
      { id: "r10", nombre: "Mecánica", prereq: [], estado: "disponible" }
    ]
  },

  // --- Semestre 3 ---
  {
    numero: 3,
    ramos: [
      { id: "r11", nombre: "Álgebra II", prereq: ["r6"], estado: "bloqueado" },
      { id: "r12", nombre: "Cálculo II", prereq: ["r7"], estado: "bloqueado" },
      { id: "r13", nombre: "Química general", prereq: [], estado: "bloqueado" },
      { id: "r14", nombre: "Curso sello institucional III", prereq: [], estado: "bloqueado" },
      { id: "r15", nombre: "Programación computacional", prereq: [], estado: "bloqueado" },
      { id: "r16", nombre: "Administración", prereq: [], estado: "bloqueado" }
    ]
  },

  // --- Semestre 4 ---
  {
    numero: 4,
    ramos: [
      { id: "r17", nombre: "Ecuaciones diferenciales", prereq: [], estado: "bloqueado" },
      { id: "r18", nombre: "Cálculo III", prereq: ["r12"], estado: "bloqueado" },
      { id: "r19", nombre: "Electricidad y magnetismo", prereq: ["r10"], estado: "bloqueado" },
      { id: "r20", nombre: "Curso sello institucional IV", prereq: [], estado: "bloqueado" },
      { id: "r21", nombre: "Taller integrador de competencias básicas", prereq: ["r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","r16"], estado: "bloqueado" },
      { id: "r22", nombre: "Ciclo de la vida y tecnología de los materiales", prereq: [], estado: "bloqueado" }
    ]
  },

  // --- Semestre 5 ---
  {
    numero: 5,
    ramos: [
      { id: "r23", nombre: "Termodinámica", prereq: [], estado: "bloqueado" },
      { id: "r24", nombre: "Probabilidad y estadística", prereq: ["r12"], estado: "bloqueado" },
      { id: "r25", nombre: "Ondas, óptica y calor", prereq: ["r10"], estado: "bloqueado" },
      { id: "r26", nombre: "Contabilidad y costos", prereq: ["r6"], estado: "bloqueado" },
      { id: "r27", nombre: "Dibujo e interpretación de planos", prereq: [], estado: "bloqueado" },
      { id: "r28", nombre: "Interdisciplinar", prereq: [], estado: "bloqueado" }
    ]
  },

  // --- Semestre 6 ---
  {
    numero: 6,
    ramos: [
      { id: "r29", nombre: "Gestión de recursos humanos y liderazgo", prereq: [], estado: "bloqueado" },
      { id: "r30", nombre: "Métodos estadísticos", prereq: ["r24"], estado: "bloqueado" },
      { id: "r31", nombre: "Investigación operativa I", prereq: [], estado: "bloqueado" },
      { id: "r32", nombre: "Sistemas de información", prereq: ["r15"], estado: "bloqueado" },
      { id: "r33", nombre: "Interdisciplinar A+S", prereq: [], estado: "bloqueado" },
      { id: "r34", nombre: "Mecánica de fluidos", prereq: ["r18"], estado: "bloqueado" }
    ]
  },

  // --- Semestre 7 ---
  {
    numero: 7,
    ramos: [
      { id: "r35", nombre: "Marketing", prereq: [], estado: "bloqueado" },
      { id: "r36", nombre: "Investigación operativa II", prereq: ["r31"], estado: "bloqueado" },
      { id: "r37", nombre: "Gestión de operaciones y logística I", prereq: [], estado: "bloqueado" },
      { id: "r38", nombre: "Microeconomía", prereq: [], estado: "bloqueado" },
      { id: "r39", nombre: "Ciencia de datos", prereq: ["r30"], estado: "bloqueado" },
      { id: "r40", nombre: "Procesos industriales", prereq: ["r34"], estado: "bloqueado" },
      {
        id: "r41",
        nombre: "Práctica operacional",
        prereq: [
          "r1","r2","r3","r4","r5","r6","r7","r8","r9","r10",
          "r11","r12","r13","r14","r15","r16","r17","r18","r19","r20",
          "r21","r22","r23","r24","r25","r26","r27","r28","r29","r30",
          "r31","r32","r33","r34","r35","r36","r37","r38","r39","r40"
        ],
        estado: "bloqueado"
      }
    ]
  },

  // --- Semestre 8 ---
  {
    numero: 8,
    ramos: [
      { id: "r42", nombre: "Inteligencia artificial para la gestión", prereq: [], estado: "bloqueado" },
      { id: "r43", nombre: "Simulación", prereq: [], estado: "bloqueado" },
      { id: "r44", nombre: "Gestión de operaciones y logística II", prereq: ["r37"], estado: "bloqueado" },
      { id: "r45", nombre: "Macroeconomía", prereq: ["r38"], estado: "bloqueado" },
      { id: "r46", nombre: "Gestión de sustentabilidad y sostenibilidad", prereq: ["r40"], estado: "bloqueado" },
      { id: "r47", nombre: "Taller integrador de competencias intermedias", prereq: ["r41"], estado: "bloqueado" }
    ]
  },

  // --- Semestre 9 ---
  {
    numero: 9,
    ramos: [
      { id: "r48", nombre: "Inteligencia de negocios", prereq: ["r39"], estado: "bloqueado" },
      { id: "r49", nombre: "Evaluación de proyectos", prereq: [], estado: "bloqueado" },
      { id: "r50", nombre: "Gestión de la innovación", prereq: ["r35"], estado: "bloqueado" },
      { id: "r51", nombre: "Finanzas corporativas", prereq: [], estado: "bloqueado" },
      { id: "r52", nombre: "Econometría", prereq: ["r30"], estado: "bloqueado" }
    ]
  },

  // --- Semestre 10 ---
  {
    numero: 10,
    ramos: [
      { id: "r53", nombre: "Planificación estratégica", prereq: [], estado: "bloqueado" },
      { id: "r54", nombre: "Emprendimiento y liderazgo en negocios", prereq: ["r50"], estado: "bloqueado" },
      { id: "r55", nombre: "Eficiencia energética y energías renovables", prereq: ["r44"], estado: "bloqueado" },
      { id: "r56", nombre: "Proyecto título I", prereq: ["r48","r49","r50","r51","r52"], estado: "bloqueado" }
    ]
  },

  // --- Semestre 11 ---
  {
    numero: 11,
    ramos: [
      { id: "r57", nombre: "Ética y responsabilidad social y empresarial", prereq: [], estado: "bloqueado" },
      { id: "r58", nombre: "Legislación comercial y laboral", prereq: [], estado: "bloqueado" },
      { id: "r59", nombre: "Proyecto título II", prereq: ["r56"], estado: "bloqueado" },
      { id: "r60", nombre: "Práctica profesional", prereq: ["r41"], estado: "bloqueado" }
    ]
  }
];


// =========================
// GUARDAR ESTADO
// =========================

function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(semestres));
}


// =========================
// CARGAR ESTADO
// =========================

function cargarEstado() {

  const guardado = localStorage.getItem("estadoMalla");

  if (!guardado) return;

  try {

    const datos = JSON.parse(guardado);

    datos.forEach((sem, i) => {

      if (!semestres[i]) return;

      semestres[i].ramos.forEach((ramo, j) => {

        if (!sem.ramos[j]) return;

        ramo.estado = sem.ramos[j].estado;

        ramo.promedio =
          sem.ramos[j].promedio ?? null;

        // Historial del promedio anterior
        ramo.promedioAnterior =
          sem.ramos[j].promedioAnterior ?? null;

        // Indica si fue repetido
        ramo.repetido =
          sem.ramos[j].repetido ?? false;

      });

    });

  } catch (error) {

    console.error(
      "No se pudo cargar el estado guardado:",
      error
    );

  }
}


// =========================
// BUSCAR RAMO
// =========================

function buscarRamo(id) {

  for (const sem of semestres) {

    const ramo = sem.ramos.find(
      r => r.id === id
    );

    if (ramo) return ramo;

  }

  return null;
}


// =========================
// PROMEDIO SEMESTRE
// =========================

function calcularPromedioSemestre(semestre) {

  const notas = semestre.ramos
    .map(ramo => ramo.promedio)
    .filter(
      nota =>
        typeof nota === "number" &&
        !isNaN(nota)
    );

  if (notas.length === 0) {
    return null;
  }

  const suma = notas.reduce(
    (total, nota) => total + nota,
    0
  );

  return suma / notas.length;
}


// =========================
// PROMEDIO AÑO
// =========================

function calcularPromedioAño(indiceAño) {

  const semestre1 =
    semestres[indiceAño * 2];

  const semestre2 =
    semestres[indiceAño * 2 + 1];

  const promedios = [];

  if (semestre1) {

    const promedio =
      calcularPromedioSemestre(semestre1);

    if (promedio !== null) {
      promedios.push(promedio);
    }

  }

  if (semestre2) {

    const promedio =
      calcularPromedioSemestre(semestre2);

    if (promedio !== null) {
      promedios.push(promedio);
    }

  }

  if (promedios.length === 0) {
    return null;
  }

  const suma = promedios.reduce(
    (total, promedio) =>
      total + promedio,
    0
  );

  return suma / promedios.length;
}


// =========================
// FORMATO PROMEDIO
// =========================

function mostrarPromedio(promedio) {

  if (promedio === null) {
    return "—";
  }

  return promedio
    .toFixed(2)
    .replace(".", ",");
}


// =========================
// RENDERIZAR MALLA
// =========================

function renderMalla() {

  malla.innerHTML = "";

  for (
    let i = 0;
    i < semestres.length;
    i += 2
  ) {

    const año =
      document.createElement("div");

    año.className = "año";


    // =========================
    // TÍTULO AÑO
    // =========================

    const titulo =
      document.createElement("h2");

    titulo.textContent =
      `Año ${Math.floor(i / 2) + 1}`;

    año.appendChild(titulo);


    // =========================
    // PROMEDIO AÑO
    // =========================

    const promedioAño =
      document.createElement("div");

    promedioAño.className =
      "promedio-año";

    promedioAño.innerHTML = `
      Promedio anual:
      <strong>
        ${mostrarPromedio(
          calcularPromedioAño(
            Math.floor(i / 2)
          )
        )}
      </strong>
    `;

    año.appendChild(promedioAño);


    // =========================
    // CONTENEDOR SEMESTRES
    // =========================

    const contSemestres =
      document.createElement("div");

    contSemestres.className =
      "semestres";


    semestres
      .slice(i, i + 2)
      .forEach(sem => {

        const divSem =
          document.createElement("div");

        divSem.className =
          "semestre";


        // =========================
        // TÍTULO SEMESTRE
        // =========================

        const h3 =
          document.createElement("h3");

        h3.textContent =
          `Semestre ${sem.numero}`;

        divSem.appendChild(h3);


        // =========================
        // PROMEDIO SEMESTRE
        // =========================

        const promedioSemestre =
          document.createElement("div");

        promedioSemestre.className =
          "promedio-semestre";

        promedioSemestre.innerHTML = `
          Promedio:
          <strong>
            ${mostrarPromedio(
              calcularPromedioSemestre(sem)
            )}
          </strong>
        `;

        divSem.appendChild(
          promedioSemestre
        );


        // =========================
        // RAMOS
        // =========================

        sem.ramos.forEach(ramo => {

          const divRamo =
            document.createElement("div");

          divRamo.className =
            `ramo ${ramo.estado}`;

          if (ramo.repetido) {
            divRamo.classList.add(
              "ramo-repetido"
            );
          }

          divRamo.id = ramo.id;


          // =========================
          // NOMBRE
          // =========================

          const nombreRamo =
            document.createElement("div");

          nombreRamo.className =
            "nombre-ramo";

          nombreRamo.textContent =
            ramo.nombre;

          divRamo.appendChild(
            nombreRamo
          );


          // =========================
          // SÍMBOLO REPETIDO
          // =========================

          if (ramo.repetido) {

            const simbolo =
              document.createElement("span");

            simbolo.className =
              "simbolo-repetido";

            simbolo.textContent = "↻";

            simbolo.title =
              "Ramo repetido";

            divRamo.appendChild(
              simbolo
            );

          }


          // =========================
          // PROMEDIO ACTUAL
          // =========================

          if (
            ramo.promedio !== null &&
            ramo.promedio !== undefined
          ) {

            const nota =
              document.createElement("div");

            nota.className =
              "nota-ramo";

            nota.textContent =
              `Promedio: ${
                ramo.promedio
                  .toFixed(2)
                  .replace(".", ",")
              }`;

            divRamo.appendChild(
              nota
            );

          }


          // =========================
          // MINI MENÚ
          // =========================

          const menu =
            crearMenuRamo(ramo);

          divRamo.appendChild(menu);


          // =========================
          // CLIC NORMAL
          // =========================

          divRamo.addEventListener(
            "click",
            evento => {

              // No hacer nada si se
              // está interactuando con
              // el menú o sus botones.

              if (
                evento.target.closest(
                  ".menu-ramo"
                )
              ) {
                return;
              }

              // Si acabamos de abrir
              // el menú con pulsación larga,
              // no aprobar automáticamente.

              if (
                divRamo.dataset.presionLarga ===
                "true"
              ) {

                divRamo.dataset.presionLarga =
                  "false";

                return;

              }

              // Si está bloqueado,
              // no hacer nada.

              if (
                ramo.estado ===
                "bloqueado"
              ) {
                return;
              }

              aprobarRamo(ramo.id);

            }
          );


          // =========================
          // PULSACIÓN LARGA
          // =========================

          let temporizador = null;

          function iniciarPresion(evento) {

            // Si se pulsa sobre el menú,
            // no iniciar temporizador.

            if (
              evento.target.closest(
                ".menu-ramo"
              )
            ) {
              return;
            }

            divRamo.dataset.presionLarga =
              "false";

            temporizador =
              setTimeout(() => {

                divRamo.dataset.presionLarga =
                  "true";

                abrirMenuRamo(ramo.id);

              }, 600);

          }


          function cancelarPresion() {

            if (temporizador !== null) {

              clearTimeout(temporizador);

              temporizador = null;

            }

          }


          // PC

          divRamo.addEventListener(
            "mousedown",
            iniciarPresion
          );

          divRamo.addEventListener(
            "mouseup",
            cancelarPresion
          );

          divRamo.addEventListener(
            "mouseleave",
            cancelarPresion
          );


          // Celular / tablet

          divRamo.addEventListener(
            "touchstart",
            iniciarPresion,
            { passive: true }
          );

          divRamo.addEventListener(
            "touchend",
            cancelarPresion
          );

          divRamo.addEventListener(
            "touchcancel",
            cancelarPresion
          );


          divSem.appendChild(
            divRamo
          );

        });


        contSemestres.appendChild(
          divSem
        );

      });


    año.appendChild(
      contSemestres
    );

    malla.appendChild(año);

  }

}


// =========================
// CREAR MINI MENÚ
// =========================

function crearMenuRamo(ramo) {

  const menu =
    document.createElement("div");

  menu.className =
    "menu-ramo";


  // =========================
  // BOTÓN EDITAR PROMEDIO
  // =========================

  const editar =
    document.createElement("button");

  editar.type = "button";

  editar.textContent =
    "Editar promedio";

  editar.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      editarPromedio(ramo.id);

    }
  );


  // =========================
  // BOTÓN REPETIR
  // =========================

  const repetir =
    document.createElement("button");

  repetir.type = "button";

  repetir.textContent =
    ramo.repetido
      ? "Ver promedio anterior"
      : "Marcar como repetido";


  repetir.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      if (ramo.repetido) {

        mostrarPromedioAnterior(
          ramo.id
        );

      } else {

        repetirRamo(ramo.id);

      }

    }
  );


  // =========================
  // CERRAR
  // =========================

  const cerrar =
    document.createElement("button");

  cerrar.type = "button";

  cerrar.textContent =
    "Cerrar";

  cerrar.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      cerrarMenus();

    }
  );


  menu.appendChild(editar);
  menu.appendChild(repetir);
  menu.appendChild(cerrar);

  return menu;

}


// =========================
// ABRIR MENÚ
// =========================

function abrirMenuRamo(id) {

  cerrarMenus();

  const divRamo =
    document.getElementById(id);

  if (!divRamo) return;

  const menu =
    divRamo.querySelector(
      ".menu-ramo"
    );

  if (!menu) return;

  menu.classList.add(
    "menu-visible"
  );

}


// =========================
// CERRAR MENÚS
// =========================

function cerrarMenus() {

  document
    .querySelectorAll(
      ".menu-ramo.menu-visible"
    )
    .forEach(menu => {

      menu.classList.remove(
        "menu-visible"
      );

    });

}


// =========================
// REPETIR RAMO
// =========================

function repetirRamo(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  // =========================
  // GUARDAR PROMEDIO ANTERIOR
  // =========================

  if (
    ramo.promedio !== null &&
    ramo.promedio !== undefined
  ) {

    ramo.promedioAnterior =
      ramo.promedio;

  } else {

    ramo.promedioAnterior =
      null;

  }


  // Marcar como repetido

  ramo.repetido = true;


  // El ramo vuelve a estar
  // disponible para cursarlo.

  ramo.estado = "disponible";


  guardarEstado();

  renderMalla();


  // =========================
  // ABRIR AUTOMÁTICAMENTE
  // PARA PONER EL NUEVO PROMEDIO
  // =========================

  setTimeout(() => {

    editarPromedio(id);

  }, 50);

}


// =========================
// MOSTRAR PROMEDIO ANTERIOR
// =========================

function mostrarPromedioAnterior(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  if (
    ramo.promedioAnterior === null ||
    ramo.promedioAnterior === undefined
  ) {

    alert(
      "Este ramo no tiene un promedio anterior registrado."
    );

    return;

  }


  alert(
    `Promedio anterior de ${ramo.nombre}: ` +
    `${ramo.promedioAnterior
      .toFixed(2)
      .replace(".", ",")}`
  );

}


// =========================
// EDITAR PROMEDIO
// =========================

function editarPromedio(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  const divRamo =
    document.getElementById(id);

  if (!divRamo) return;


  // Evitar duplicar input

  if (
    divRamo.querySelector(
      ".input-promedio"
    )
  ) {
    return;
  }


  // Cerrar el menú,
  // pero dejar el ramo visible.

  const menu =
    divRamo.querySelector(
      ".menu-ramo"
    );

  if (menu) {

    menu.classList.remove(
      "menu-visible"
    );

  }


  // =========================
  // CREAR INPUT
  // =========================

  const input =
    document.createElement("input");

  input.type = "number";

  input.className =
    "input-promedio";

  input.min = "1.0";

  input.max = "7.0";

  input.step = "0.1";

  input.placeholder =
    "Ej: 5,6";


  if (
    ramo.promedio !== null &&
    ramo.promedio !== undefined
  ) {

    input.value =
      ramo.promedio;

  }


  // Evitar que el ramo
  // se marque al tocar input.

  input.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

    }
  );


  input.addEventListener(
    "mousedown",
    evento => {

      evento.stopPropagation();

    }
  );


  input.addEventListener(
    "touchstart",
    evento => {

      evento.stopPropagation();

    }
  );


  // =========================
  // ENTER
  // =========================

  input.addEventListener(
    "keydown",
    evento => {

      if (
        evento.key ===
        "Enter"
      ) {

        guardarPromedio(
          id,
          input.value
        );

      }


      if (
        evento.key ===
        "Escape"
      ) {

        renderMalla();

      }

    }
  );


  // =========================
  // BLUR
  // =========================

  input.addEventListener(
    "blur",
    () => {

      guardarPromedio(
        id,
        input.value
      );

    }
  );


  divRamo.appendChild(
    input
  );

  input.focus();

}


// =========================
// GUARDAR PROMEDIO
// =========================

function guardarPromedio(
  id,
  valor
) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  // Si queda vacío

  if (
    valor.trim() === ""
  ) {

    ramo.promedio = null;

    guardarEstado();

    renderMalla();

    return;

  }


  const numero =
    parseFloat(
      valor.replace(",", ".")
    );


  // =========================
  // VALIDAR
  // =========================

  if (
    isNaN(numero) ||
    numero < 1 ||
    numero > 7
  ) {

    alert(
      "Ingresa un promedio válido entre 1,0 y 7,0."
    );

    renderMalla();

    return;

  }


  ramo.promedio =
    numero;


  guardarEstado();

  renderMalla();

}


// =========================
// APROBAR / DESMARCAR
// =========================

function aprobarRamo(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  if (
    ramo.estado ===
    "disponible"
  ) {

    ramo.estado =
      "aprobado";

  }

  else if (
    ramo.estado ===
    "aprobado"
  ) {

    ramo.estado =
      "disponible";

  }


  // =========================
  // ACTUALIZAR BLOQUEOS
  // =========================

  semestres.forEach(
    sem => {

      sem.ramos.forEach(
        r => {

          if (
            r.estado ===
            "aprobado"
          ) {
            return;
          }


          const cumple =
            r.prereq.every(
              req =>
                semestres.some(
                  s =>
                    s.ramos.some(
                      x =>
                        x.id === req &&
                        x.estado ===
                        "aprobado"
                    )
                )
            );


          r.estado =
            cumple
              ? "disponible"
              : "bloqueado";

        }
      );

    }
  );


  guardarEstado();

  renderMalla();


  // =========================
  // ANIMACIÓN
  // =========================

  const ramoDiv =
    document.getElementById(id);

  if (ramoDiv) {

    ramoDiv.classList.add(
      "pulse"
    );

    setTimeout(
      () => {

        ramoDiv.classList.remove(
          "pulse"
        );

      },
      400
    );

  }

}


// =========================
// CERRAR MENÚ AL HACER CLIC
// AFUERA
// =========================

document.addEventListener(
  "click",
  evento => {

    if (
      !evento.target.closest(
        ".ramo"
      )
    ) {

      cerrarMenus();

    }

  }
);


// =========================
// INICIO
// =========================

cargarEstado();

renderMalla();
