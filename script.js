const malla = document.getElementById("malla");

// ======================================================
// CONFIGURACIÓN
// ======================================================

const VERSION_MALLA = "1.4";

const EMAIL_CREADORA = "TU-CORREO-AQUI@ejemplo.com";
// ↑ CAMBIA ESTO POR TU CORREO CUANDO QUIERAS RECIBIR
// LAS SUGERENCIAS MEDIANTE CORREO.

// ======================================================
// SEMESTRES Y RAMOS
// ======================================================

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

  {
    numero: 4,
    ramos: [
      { id: "r17", nombre: "Ecuaciones diferenciales", prereq: [], estado: "bloqueado" },
      { id: "r18", nombre: "Cálculo III", prereq: ["r12"], estado: "bloqueado" },
      { id: "r19", nombre: "Electricidad y magnetismo", prereq: ["r10"], estado: "bloqueado" },
      { id: "r20", nombre: "Curso sello institucional IV", prereq: [], estado: "bloqueado" },
      {
        id: "r21",
        nombre: "Taller integrador de competencias básicas",
        prereq: [
          "r1","r2","r3","r4","r5","r6","r7","r8",
          "r9","r10","r11","r12","r13","r14","r15","r16"
        ],
        estado: "bloqueado"
      },
      { id: "r22", nombre: "Ciclo de la vida y tecnología de los materiales", prereq: [], estado: "bloqueado" }
    ]
  },

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

  {
    numero: 10,
    ramos: [
      { id: "r53", nombre: "Planificación estratégica", prereq: [], estado: "bloqueado" },
      { id: "r54", nombre: "Emprendimiento y liderazgo en negocios", prereq: ["r50"], estado: "bloqueado" },
      { id: "r55", nombre: "Eficiencia energética y energías renovables", prereq: ["r44"], estado: "bloqueado" },
      { id: "r56", nombre: "Proyecto título I", prereq: ["r48","r49","r50","r51","r52"], estado: "bloqueado" }
    ]
  },

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

// ======================================================
// ESTADO INICIAL DE LOS RAMOS
// ======================================================

semestres.forEach(sem => {
  sem.ramos.forEach(ramo => {

    if (ramo.promedio === undefined) {
      ramo.promedio = null;
    }

    if (ramo.promedioAnterior === undefined) {
      ramo.promedioAnterior = null;
    }

    if (ramo.repetido === undefined) {
      ramo.repetido = false;
    }

    if (ramo.comentario === undefined) {
      ramo.comentario = "";
    }

  });
});

// ======================================================
// GUARDAR Y CARGAR
// ======================================================

function guardarEstado() {
  localStorage.setItem(
    "estadoMalla",
    JSON.stringify(semestres)
  );
}

function cargarEstado() {

  const guardado = localStorage.getItem("estadoMalla");

  if (!guardado) return;

  try {

    const datos = JSON.parse(guardado);

    datos.forEach((sem, i) => {

      if (!semestres[i]) return;

      sem.ramos.forEach((ramoGuardado, j) => {

        if (!semestres[i].ramos[j]) return;

        const ramo = semestres[i].ramos[j];

        ramo.estado =
          ramoGuardado.estado ?? ramo.estado;

        ramo.promedio =
          ramoGuardado.promedio ?? null;

        ramo.promedioAnterior =
          ramoGuardado.promedioAnterior ?? null;

        ramo.repetido =
          ramoGuardado.repetido ?? false;

        ramo.comentario =
          ramoGuardado.comentario ?? "";

      });

    });

  } catch (error) {

    console.error(
      "No se pudo cargar la malla:",
      error
    );

  }
}

// ======================================================
// BUSCAR RAMO
// ======================================================

function buscarRamo(id) {

  for (const sem of semestres) {

    const ramo = sem.ramos.find(
      r => r.id === id
    );

    if (ramo) return ramo;

  }

  return null;
}

// ======================================================
// PROMEDIO SEMESTRE
// ======================================================

function calcularPromedioSemestre(semestre) {

  const notas = semestre.ramos

    .map(ramo => ramo.promedio)

    .filter(
      nota =>
        typeof nota === "number" &&
        !isNaN(nota)
    );

  if (notas.length === 0) return null;

  const suma = notas.reduce(
    (total, nota) => total + nota,
    0
  );

  return suma / notas.length;
}

// ======================================================
// PROMEDIO AÑO
// ======================================================

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

// ======================================================
// FORMATO PROMEDIO
// ======================================================

function mostrarPromedio(promedio) {

  if (promedio === null) {
    return "—";
  }

  return promedio
    .toFixed(2)
    .replace(".", ",");
}

// ======================================================
// RENDER MALLA
// ======================================================

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

    // ------------------------------------------
    // TÍTULO AÑO
    // ------------------------------------------

    const titulo =
      document.createElement("h2");

    titulo.textContent =
      `Año ${Math.floor(i / 2) + 1}`;

    año.appendChild(titulo);

    // ------------------------------------------
    // PROMEDIO AÑO
    // ------------------------------------------

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

    // ------------------------------------------
    // SEMESTRES
    // ------------------------------------------

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

        // --------------------------------------
        // TÍTULO SEMESTRE
        // --------------------------------------

        const h3 =
          document.createElement("h3");

        h3.textContent =
          `Semestre ${sem.numero}`;

        divSem.appendChild(h3);

        // --------------------------------------
        // PROMEDIO SEMESTRE
        // --------------------------------------

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

        // --------------------------------------
        // RAMOS
        // --------------------------------------

        sem.ramos.forEach(ramo => {

          const divRamo =
            document.createElement("div");

          divRamo.className =
            `ramo ${ramo.estado}`;

          divRamo.id =
            ramo.id;

          // ------------------------------------
          // NOMBRE
          // ------------------------------------

          const nombreRamo =
            document.createElement("div");

          nombreRamo.className =
            "nombre-ramo";

          nombreRamo.textContent =
            ramo.nombre;

          divRamo.appendChild(
            nombreRamo
          );

          // ------------------------------------
          // INDICADORES
          // ------------------------------------

          const indicadores =
            document.createElement("div");

          indicadores.className =
            "indicadores-ramo";

          if (ramo.repetido) {

            const simbolo =
              document.createElement("span");

            simbolo.className =
              "simbolo-repetido";

            simbolo.textContent =
              "↻";

            simbolo.title =
              `Repetido. Promedio anterior: ${
                ramo.promedioAnterior !== null
                  ? mostrarPromedio(
                      ramo.promedioAnterior
                    )
                  : "sin registrar"
              }`;

            indicadores.appendChild(
              simbolo
            );
          }

          if (
            ramo.comentario &&
            ramo.comentario.trim() !== ""
          ) {

            const comentarioIcono =
              document.createElement("span");

            comentarioIcono.className =
              "simbolo-comentario";

            comentarioIcono.textContent =
              "💬";

            comentarioIcono.title =
              "Este ramo tiene un comentario";

            indicadores.appendChild(
              comentarioIcono
            );
          }

          if (indicadores.children.length > 0) {

            divRamo.appendChild(
              indicadores
            );

          }

          // ------------------------------------
          // PROMEDIO ACTUAL
          // ------------------------------------

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
                mostrarPromedio(
                  ramo.promedio
                )
              }`;

            divRamo.appendChild(
              nota
            );
          }

          // ------------------------------------
          // CLICK NORMAL
          // ------------------------------------

          if (
            ramo.estado !== "bloqueado"
          ) {

            divRamo.addEventListener(
              "click",
              evento => {

                if (
                  divRamo.dataset.presionLarga ===
                  "true"
                ) {

                  divRamo.dataset.presionLarga =
                    "false";

                  return;
                }

                if (
                  evento.target.tagName ===
                  "INPUT"
                ) {
                  return;
                }

                aprobarRamo(
                  ramo.id
                );

              }
            );

          }

          // ------------------------------------
          // PRESIÓN LARGA
          // ------------------------------------

          let temporizadorPresion = null;

          function iniciarPresion(evento) {

            if (
              evento.target.tagName ===
              "INPUT"
            ) {
              return;
            }

            if (evento.cancelable) {
              evento.preventDefault();
            }

            divRamo.dataset.presionLarga =
              "false";

            temporizadorPresion =
              setTimeout(() => {

                divRamo.dataset.presionLarga =
                  "true";

                mostrarMenuRamo(
                  ramo.id
                );

              }, 600);

          }

          function cancelarPresion() {

            if (
              temporizadorPresion !== null
            ) {

              clearTimeout(
                temporizadorPresion
              );

              temporizadorPresion =
                null;
            }

          }

          nombreRamo.addEventListener(
            "mousedown",
            iniciarPresion
          );

          nombreRamo.addEventListener(
            "mouseup",
            cancelarPresion
          );

          nombreRamo.addEventListener(
            "mouseleave",
            cancelarPresion
          );

          nombreRamo.addEventListener(
            "touchstart",
            iniciarPresion,
            { passive: false }
          );

          nombreRamo.addEventListener(
            "touchend",
            cancelarPresion
          );

          nombreRamo.addEventListener(
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

    malla.appendChild(
      año
    );

  }

}

// ======================================================
// MENÚ DEL RAMO
// ======================================================

function mostrarMenuRamo(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;

  cerrarMenus();

  const menu =
    document.createElement("div");

  menu.className =
    "menu-ramo";

  menu.id =
    "menu-ramo-activo";

  // ------------------------------------------
  // TÍTULO
  // ------------------------------------------

  const titulo =
    document.createElement("div");

  titulo.className =
    "menu-ramo-titulo";

  titulo.textContent =
    ramo.nombre;

  menu.appendChild(
    titulo
  );

  // ------------------------------------------
  // EDITAR PROMEDIO
  // ------------------------------------------

  const btnPromedio =
    crearBotonMenu(
      "✏️ Editar promedio",
      () => {

        cerrarMenus();

        editarPromedio(
          ramo.id
        );

      }
    );

  menu.appendChild(
    btnPromedio
  );

  // ------------------------------------------
  // REPETIDO
  // ------------------------------------------

  const btnRepetido =
    crearBotonMenu(
      ramo.repetido
        ? "↻ Editar repetición"
        : "↻ Marcar como repetido",
      () => {

        cerrarMenus();

        marcarRepetido(
          ramo.id
        );

      }
    );

  menu.appendChild(
    btnRepetido
  );

  // ------------------------------------------
  // COMENTARIO
  // ------------------------------------------

  const btnComentario =
    crearBotonMenu(
      "💬 Agregar comentario",
      () => {

        cerrarMenus();

        editarComentario(
          ramo.id
        );

      }
    );

  menu.appendChild(
    btnComentario
  );

  // ------------------------------------------
  // CERRAR
  // ------------------------------------------

  const btnCerrar =
    crearBotonMenu(
      "✕ Cerrar",
      () => {
        cerrarMenus();
      }
    );

  menu.appendChild(
    btnCerrar
  );

  document.body.appendChild(
    menu
  );

  // ------------------------------------------
  // POSICIÓN
  // ------------------------------------------

  const divRamo =
    document.getElementById(id);

  if (divRamo) {

    const rect =
      divRamo.getBoundingClientRect();

    menu.style.position =
      "fixed";

    menu.style.left =
      `${Math.min(
        rect.left,
        window.innerWidth - 250
      )}px`;

    menu.style.top =
      `${Math.min(
        rect.bottom + 8,
        window.innerHeight - 300
      )}px`;

  }

}

// ======================================================
// CREAR BOTÓN MENÚ
// ======================================================

function crearBotonMenu(
  texto,
  funcion
) {

  const boton =
    document.createElement("button");

  boton.type =
    "button";

  boton.textContent =
    texto;

  boton.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      funcion();

    }
  );

  return boton;
}

// ======================================================
// CERRAR MENÚS
// ======================================================

function cerrarMenus() {

  const menu =
    document.getElementById(
      "menu-ramo-activo"
    );

  if (menu) {
    menu.remove();
  }

}

// ======================================================
// CLIC FUERA DEL MENÚ
// ======================================================

document.addEventListener(
  "click",
  evento => {

    const menu =
      document.getElementById(
        "menu-ramo-activo"
      );

    if (
      menu &&
      !menu.contains(
        evento.target
      )
    ) {

      cerrarMenus();

    }

  }
);

// ======================================================
// EDITAR PROMEDIO
// ======================================================

function editarPromedio(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;

  const divRamo =
    document.getElementById(id);

  if (!divRamo) return;

  if (
    divRamo.querySelector(
      ".input-promedio"
    )
  ) {
    return;
  }

  const input =
    document.createElement("input");

  input.type =
    "number";

  input.className =
    "input-promedio";

  input.min =
    "1.0";

  input.max =
    "7.0";

  input.step =
    "0.1";

  input.placeholder =
    "Ej: 5,6";

  if (
    ramo.promedio !== null &&
    ramo.promedio !== undefined
  ) {

    input.value =
      ramo.promedio;

  }

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

  input.addEventListener(
    "keydown",
    evento => {

      if (
        evento.key === "Enter"
      ) {

        guardarPromedio(
          id,
          input.value
        );

      }

      if (
        evento.key === "Escape"
      ) {

        renderMalla();

      }

    }
  );

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

// ======================================================
// GUARDAR PROMEDIO
// ======================================================

function guardarPromedio(
  id,
  valor
) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;

  if (
    valor.trim() === ""
  ) {

    ramo.promedio =
      null;

    guardarEstado();

    renderMalla();

    return;

  }

  const numero =
    parseFloat(
      valor.replace(",", ".")
    );

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

// ======================================================
// MARCAR COMO REPETIDO
// ======================================================

function marcarRepetido(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;

  // ------------------------------------------
  // SI YA ESTÁ REPETIDO
  // ------------------------------------------

  if (ramo.repetido) {

    const continuar =
      confirm(
        "Este ramo ya está marcado como repetido.\n\n" +
        "¿Quieres quitar la marca de repetición?"
      );

    if (continuar) {

      ramo.repetido =
        false;

      ramo.promedioAnterior =
        null;

      guardarEstado();

      renderMalla();

    }

    return;

  }

  // ------------------------------------------
  // GUARDAR PROMEDIO ANTERIOR
  // ------------------------------------------

  let anterior =
    ramo.promedio;

  if (
    anterior === null ||
    anterior === undefined
  ) {

    const texto =
      prompt(
        `¿Cuál fue el promedio con el que reprobaste ${ramo.nombre}?\n\n` +
        "Puedes dejarlo vacío si no quieres registrarlo."
      );

    if (
      texto !== null &&
      texto.trim() !== ""
    ) {

      anterior =
        parseFloat(
          texto.replace(",", ".")
        );

      if (
        isNaN(anterior) ||
        anterior < 1 ||
        anterior > 7
      ) {

        alert(
          "El promedio debe estar entre 1,0 y 7,0."
        );

        return;

      }

    } else {

      anterior =
        null;

    }

  }

  // ------------------------------------------
  // GUARDAR ANTERIOR
  // ------------------------------------------

  ramo.promedioAnterior =
    anterior;

  ramo.repetido =
    true;

  // ------------------------------------------
  // PEDIR NUEVO PROMEDIO
  // ------------------------------------------

  const nuevo =
    prompt(
      `↻ ${ramo.nombre}\n\n` +
      `Promedio anterior: ${
        anterior !== null
          ? mostrarPromedio(anterior)
          : "Sin registrar"
      }\n\n` +
      "Ingresa el nuevo promedio:"
    );

  if (
    nuevo === null
  ) {

    // Si cancela,
    // mantenemos la repetición,
    // pero no inventamos una nota.

    guardarEstado();

    renderMalla();

    return;

  }

  const nuevoNumero =
    parseFloat(
      nuevo.replace(",", ".")
    );

  if (
    isNaN(nuevoNumero) ||
    nuevoNumero < 1 ||
    nuevoNumero > 7
  ) {

    alert(
      "El promedio debe estar entre 1,0 y 7,0."
    );

    guardarEstado();

    renderMalla();

    return;

  }

  ramo.promedio =
    nuevoNumero;

  guardarEstado();

  renderMalla();

}

// ======================================================
// COMENTARIO DEL RAMO
// ======================================================

function editarComentario(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;

  const comentario =
    prompt(
      `💬 Comentario para:\n${ramo.nombre}\n\n` +
      "Escribe algo que quieras recordar:",
      ramo.comentario || ""
    );

  if (
    comentario === null
  ) {
    return;
  }

  ramo.comentario =
    comentario.trim();

  guardarEstado();

  renderMalla();

}

// ======================================================
// CAJA "MIS NOTAS"
// ======================================================

function abrirMisNotas() {

  const guardado =
    localStorage.getItem(
      "notasPersonalesMalla"
    ) || "";

  const modal =
    crearModal(
      "💭 Mis notas"
    );

  const texto =
    document.createElement("p");

  texto.textContent =
    "Estas notas son personales y se guardan únicamente en este navegador.";

  modal.contenido.appendChild(
    texto
  );

  const textarea =
    document.createElement("textarea");

  textarea.className =
    "textarea-notas";

  textarea.placeholder =
    "Escribe aquí tus apuntes, recordatorios, metas, etc.";

  textarea.value =
    guardado;

  modal.contenido.appendChild(
    textarea
  );

  const guardar =
    document.createElement("button");

  guardar.textContent =
    "Guardar notas";

  guardar.addEventListener(
    "click",
    () => {

      localStorage.setItem(
        "notasPersonalesMalla",
        textarea.value
      );

      cerrarModal();

      alert(
        "💜 Tus notas fueron guardadas."
      );

    }
  );

  modal.contenido.appendChild(
    guardar
  );

}

// ======================================================
// SUGERENCIAS PARA LA CREADORA
// ======================================================

function abrirSugerencias() {

  const modal =
    crearModal(
      "💌 Enviar sugerencia"
    );

  const texto =
    document.createElement("p");

  texto.textContent =
    "¿Encontraste un error o tienes una idea para mejorar la malla?";

  modal.contenido.appendChild(
    texto
  );

  // ------------------------------------------
  // CATEGORÍA
  // ------------------------------------------

  const select =
    document.createElement("select");

  select.innerHTML = `
    <option value="Idea de nueva función">
      Idea de nueva función
    </option>

    <option value="Error en un ramo">
      Error en un ramo
    </option>

    <option value="Prerrequisito incorrecto">
      Prerrequisito incorrecto
    </option>

    <option value="Problema de diseño">
      Problema de diseño
    </option>

    <option value="Otro">
      Otro
    </option>
  `;

  modal.contenido.appendChild(
    select
  );

  // ------------------------------------------
  // RAMO
  // ------------------------------------------

  const selectRamo =
    document.createElement("select");

  const opcionGeneral =
    document.createElement("option");

  opcionGeneral.value =
    "";

  opcionGeneral.textContent =
    "No corresponde a un ramo específico";

  selectRamo.appendChild(
    opcionGeneral
  );

  semestres.forEach(sem => {

    sem.ramos.forEach(ramo => {

      const opcion =
        document.createElement("option");

      opcion.value =
        ramo.nombre;

      opcion.textContent =
        ramo.nombre;

      selectRamo.appendChild(
        opcion
      );

    });

  });

  modal.contenido.appendChild(
    selectRamo
  );

  // ------------------------------------------
  // MENSAJE
  // ------------------------------------------

  const textarea =
    document.createElement("textarea");

  textarea.placeholder =
    "Escribe aquí tu sugerencia...";

  textarea.className =
    "textarea-sugerencia";

  modal.contenido.appendChild(
    textarea
  );

  // ------------------------------------------
  // ENVIAR
  // ------------------------------------------

  const enviar =
    document.createElement("button");

  enviar.textContent =
    "💌 Enviar sugerencia";

  enviar.addEventListener(
    "click",
    () => {

      const mensaje =
        textarea.value.trim();

      if (!mensaje) {

        alert(
          "Escribe una sugerencia antes de enviarla."
        );

        return;

      }

      const categoria =
        select.value;

      const ramo =
        selectRamo.value ||
        "General";

      const asunto =
        encodeURIComponent(
          `[Malla v${VERSION_MALLA}] ${categoria}`
        );

      const cuerpo =
        encodeURIComponent(
          `Sugerencia para la malla curricular\n\n` +
          `Versión: ${VERSION_MALLA}\n` +
          `Categoría: ${categoria}\n` +
          `Ramo: ${ramo}\n\n` +
          `Mensaje:\n${mensaje}`
        );

      window.location.href =
        `mailto:${EMAIL_CREADORA}?subject=${asunto}&body=${cuerpo}`;

    }
  );

  modal.contenido.appendChild(
    enviar
  );

}

// ======================================================
// ¿CÓMO FUNCIONA?
// ======================================================

function abrirComoFunciona() {

  const modal =
    crearModal(
      "❔ ¿Cómo funciona la malla?"
    );

  const contenido =
    document.createElement("div");

  contenido.innerHTML = `

    <h3>Estados de los ramos</h3>

    <p>🟣 <strong>Disponible:</strong>
    puedes tomar este ramo.</p>

    <p>🟢 <strong>Aprobado:</strong>
    ya aprobaste este ramo.</p>

    <p>🔒 <strong>Bloqueado:</strong>
    todavía necesitas aprobar uno o más prerrequisitos.</p>

    <h3>Indicadores</h3>

    <p>↻ <strong>Ramo repetido:</strong>
    cursaste nuevamente este ramo.</p>

    <p>💬 <strong>Comentario:</strong>
    tienes una nota personal guardada en ese ramo.</p>

    <h3>Interacciones</h3>

    <p>🖱️ <strong>Clic:</strong>
    aprobar o desmarcar un ramo.</p>

    <p>👆 <strong>Mantener presionado:</strong>
    abrir el menú de opciones.</p>

    <p>✏️ <strong>Editar promedio:</strong>
    registrar o cambiar la nota.</p>

    <p>↻ <strong>Marcar como repetido:</strong>
    guarda el promedio anterior y permite registrar el nuevo.</p>

  `;

  modal.contenido.appendChild(
    contenido
  );

}

// ======================================================
// HISTORIAL DE VERSIONES
// ======================================================

function abrirVersion() {

  const modal =
    crearModal(
      `Malla Curricular v${VERSION_MALLA}`
    );

  const contenido =
    document.createElement("div");

  contenido.innerHTML = `

    <h3>v1.4</h3>

    <p>• Registro de ramos repetidos.</p>
    <p>• Promedio anterior y nuevo promedio.</p>
    <p>• Comentarios por ramo.</p>
    <p>• Sistema de sugerencias.</p>

    <h3>v1.3</h3>

    <p>• Promedios por ramo.</p>
    <p>• Promedios semestrales y anuales.</p>

    <h3>v1.2</h3>

    <p>• Guardado automático de la malla.</p>
    <p>• Sistema de prerrequisitos.</p>

    <h3>v1.0</h3>

    <p>• Primera versión de la malla curricular.</p>

  `;

  modal.contenido.appendChild(
    contenido
  );

}

// ======================================================
// CREAR MODAL
// ======================================================

function crearModal(tituloTexto) {

  cerrarModal();

  const fondo =
    document.createElement("div");

  fondo.className =
    "modal-fondo";

  fondo.id =
    "modal-activo";

  const ventana =
    document.createElement("div");

  ventana.className =
    "modal-ventana";

  const titulo =
    document.createElement("h2");

  titulo.textContent =
    tituloTexto;

  ventana.appendChild(
    titulo
  );

  const contenido =
    document.createElement("div");

  contenido.className =
    "modal-contenido";

  ventana.appendChild(
    contenido
  );

  const cerrar =
    document.createElement("button");

  cerrar.textContent =
    "Cerrar";

  cerrar.addEventListener(
    "click",
    cerrarModal
  );

  ventana.appendChild(
    cerrar
  );

  fondo.appendChild(
    ventana
  );

  fondo.addEventListener(
    "click",
    evento => {

      if (
        evento.target === fondo
      ) {

        cerrarModal();

      }

    }
  );

  document.body.appendChild(
    fondo
  );

  return {
    fondo,
    ventana,
    contenido
  };

}

// ======================================================
// CERRAR MODAL
// ======================================================

function cerrarModal() {

  const modal =
    document.getElementById(
      "modal-activo"
    );

  if (modal) {
    modal.remove();
  }

}

// ======================================================
// BOTONES GENERALES
// ======================================================

function crearBotonesGenerales() {

  let contenedor =
    document.getElementById(
      "controles-malla"
    );

  if (!contenedor) {

    contenedor =
      document.createElement("div");

    contenedor.id =
      "controles-malla";

    // Lo colocamos antes de la malla
    malla.parentNode.insertBefore(
      contenedor,
      malla
    );

  }

  contenedor.innerHTML = "";

  const botones = [

    {
      texto: "❔ ¿Cómo funciona?",
      funcion: abrirComoFunciona
    },

    {
      texto: "💭 Mis notas",
      funcion: abrirMisNotas
    },

    {
      texto: "💌 Sugerencias",
      funcion: abrirSugerencias
    },

    {
      texto: `v${VERSION_MALLA}`,
      funcion: abrirVersion
    }

  ];

  botones.forEach(
    elemento => {

      const boton =
        document.createElement("button");

      boton.textContent =
        elemento.texto;

      boton.addEventListener(
        "click",
        elemento.funcion
      );

      contenedor.appendChild(
        boton
      );

    }
  );

}

// ======================================================
// APROBAR / DESMARCAR
// ======================================================

function aprobarRamo(id) {

  semestres.forEach(
    sem => {

      sem.ramos.forEach(
        ramo => {

          if (
            ramo.id === id
          ) {

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

          }

        }
      );

    }
  );

  // ------------------------------------------
  // ACTUALIZAR BLOQUEOS
  // ------------------------------------------

  semestres.forEach(
    sem => {

      sem.ramos.forEach(
        ramo => {

          if (
            ramo.estado ===
            "aprobado"
          ) {
            return;
          }

          const cumple =
            ramo.prereq.every(
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

          ramo.estado =
            cumple
              ? "disponible"
              : "bloqueado";

        }
      );

    }
  );

  guardarEstado();

  renderMalla();

  // ------------------------------------------
  // ANIMACIÓN
  // ------------------------------------------

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

// ======================================================
// INICIO
// ======================================================

cargarEstado();

crearBotonesGenerales();

renderMalla();
