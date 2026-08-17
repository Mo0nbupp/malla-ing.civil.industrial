const malla = document.getElementById("malla");

// =========================
// SEMESTRES Y RAMOS COMPLETOS
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
      { id: "r41", nombre: "Práctica operacional", prereq: ["r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","r16","r17","r18","r19","r20","r21","r22","r23","r24","r25","r26","r27","r28","r29","r30","r31","r32","r33","r34","r35","r36","r37","r38","r39","r40"], estado: "bloqueado" }
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
// GUARDAR Y CARGAR ESTADO
// =========================

function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(semestres));
}

function cargarEstado() {
  const guardado = localStorage.getItem("estadoMalla");

  if (!guardado) return;

  const datos = JSON.parse(guardado);

  datos.forEach((sem, i) => {
    if (!semestres[i]) return;

    semestres[i].ramos.forEach((ramo, j) => {
      if (!sem.ramos[j]) return;

      ramo.estado = sem.ramos[j].estado;
      ramo.promedio = sem.ramos[j].promedio ?? null;

      // NUEVO: cargar si el ramo fue repetido
      ramo.repetido = sem.ramos[j].repetido ?? false;
    });
  });
}

// =========================
// OBTENER PROMEDIO DEL SEMESTRE
// =========================

function calcularPromedioSemestre(semestre) {
  const notas = semestre.ramos
    .map(ramo => ramo.promedio)
    .filter(nota => typeof nota === "number" && !isNaN(nota));

  if (notas.length === 0) return null;

  const suma = notas.reduce((total, nota) => total + nota, 0);

  return suma / notas.length;
}

// =========================
// OBTENER PROMEDIO DEL AÑO
// =========================

function calcularPromedioAño(indiceAño) {
  const semestre1 = semestres[indiceAño * 2];
  const semestre2 = semestres[indiceAño * 2 + 1];

  const promedios = [];

  if (semestre1) {
    const promedio = calcularPromedioSemestre(semestre1);

    if (promedio !== null) {
      promedios.push(promedio);
    }
  }

  if (semestre2) {
    const promedio = calcularPromedioSemestre(semestre2);

    if (promedio !== null) {
      promedios.push(promedio);
    }
  }

  if (promedios.length === 0) return null;

  const suma = promedios.reduce(
    (total, promedio) => total + promedio,
    0
  );

  return suma / promedios.length;
}

// =========================
// FORMATO DE PROMEDIOS
// =========================

function mostrarPromedio(promedio) {
  if (promedio === null) return "—";

  return promedio.toFixed(2).replace(".", ",");
}

// =========================
// RENDER MALLA
// =========================

function renderMalla() {
  malla.innerHTML = "";

  for (let i = 0; i < semestres.length; i += 2) {

    const año = document.createElement("div");
    año.className = "año";

    // -------------------------
    // TÍTULO DEL AÑO
    // -------------------------

    const titulo = document.createElement("h2");

    titulo.textContent =
      `Año ${Math.floor(i / 2) + 1}`;

    año.appendChild(titulo);

    // -------------------------
    // PROMEDIO DEL AÑO
    // -------------------------

    const promedioAño = document.createElement("div");

    promedioAño.className = "promedio-año";

    promedioAño.innerHTML = `
      Promedio anual:
      <strong>
        ${mostrarPromedio(
          calcularPromedioAño(Math.floor(i / 2))
        )}
      </strong>
    `;

    año.appendChild(promedioAño);

    // -------------------------
    // SEMESTRES
    // -------------------------

    const contSemestres = document.createElement("div");

    contSemestres.className = "semestres";

    semestres
      .slice(i, i + 2)
      .forEach(sem => {

        const divSem =
          document.createElement("div");

        divSem.className = "semestre";

        // -------------------------
        // TÍTULO SEMESTRE
        // -------------------------

        const h3 =
          document.createElement("h3");

        h3.textContent =
          `Semestre ${sem.numero}`;

        divSem.appendChild(h3);

        // -------------------------
        // PROMEDIO SEMESTRE
        // -------------------------

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

        divSem.appendChild(promedioSemestre);

        // -------------------------
        // RAMOS
        // -------------------------

        sem.ramos.forEach(ramo => {

          const divRamo =
            document.createElement("div");

          divRamo.className =
            `ramo ${ramo.estado}`;

          divRamo.id = ramo.id;

          // -------------------------
          // NOMBRE DEL RAMO
          // -------------------------

          const nombreRamo =
            document.createElement("div");

          nombreRamo.className =
            "nombre-ramo";

          nombreRamo.textContent =
            ramo.nombre;

          divRamo.appendChild(nombreRamo);

          // -------------------------
          // SÍMBOLO DE REPETIDO
          // -------------------------

          if (ramo.repetido) {

            const simboloRepetido =
              document.createElement("span");

            simboloRepetido.className =
              "simbolo-repetido";

            simboloRepetido.textContent = "↻";

            simboloRepetido.title =
              "Ramo repetido";

            nombreRamo.appendChild(
              simboloRepetido
            );
          }

          // -------------------------
          // MOSTRAR PROMEDIO
          // -------------------------

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

            divRamo.appendChild(nota);
          }

          // -------------------------
          // CLIC NORMAL
          // -------------------------

          if (ramo.estado !== "bloqueado") {

            divRamo.addEventListener(
              "click",
              () => {

                aprobarRamo(ramo.id);

              }
            );
          }

          // -------------------------
          // MANTENER APRETADO
          // -------------------------

          let temporizador;

          let manteniendo = false;

          function iniciarMantener(evento) {

            // Evita problemas con clic derecho
            if (
              evento.type === "mousedown" &&
              evento.button !== 0
            ) {
              return;
            }

            manteniendo = false;

            temporizador = setTimeout(() => {

              manteniendo = true;

              mostrarMenuRamo(
                ramo.id,
                divRamo
              );

            }, 600);
          }

          function cancelarMantener() {

            clearTimeout(temporizador);

          }

          divRamo.addEventListener(
            "mousedown",
            iniciarMantener
          );

          divRamo.addEventListener(
            "mouseup",
            cancelarMantener
          );

          divRamo.addEventListener(
            "mouseleave",
            cancelarMantener
          );

          // -------------------------
          // PARA CELULAR / TOUCH
          // -------------------------

          divRamo.addEventListener(
            "touchstart",
            iniciarMantener,
            { passive: true }
          );

          divRamo.addEventListener(
            "touchend",
            cancelarMantener
          );

          divRamo.addEventListener(
            "touchmove",
            cancelarMantener
          );

          contSemestres
            .appendChild(divSem);

        });
      });

    año.appendChild(contSemestres);

    malla.appendChild(año);
  }
}

// =========================
// MINI MENÚ DEL RAMO
// =========================

function mostrarMenuRamo(id, divRamo) {

  // Eliminar cualquier menú anterior
  const menuAnterior =
    document.querySelector(".menu-ramo");

  if (menuAnterior) {
    menuAnterior.remove();
  }

  const ramo = buscarRamo(id);

  if (!ramo) return;

  const menu =
    document.createElement("div");

  menu.className = "menu-ramo";

  // -------------------------
  // BOTÓN CAMBIAR PROMEDIO
  // -------------------------

  const botonPromedio =
    document.createElement("button");

  botonPromedio.type = "button";

  botonPromedio.textContent =
    "✏️ Cambiar promedio";

  botonPromedio.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      menu.remove();

      editarPromedio(id);

    }
  );

  menu.appendChild(botonPromedio);

  // -------------------------
  // BOTÓN REPETIDO
  // -------------------------

  const botonRepetido =
    document.createElement("button");

  botonRepetido.type = "button";

  if (ramo.repetido) {

    botonRepetido.textContent =
      "↻ Quitar marca de repetido";

  } else {

    botonRepetido.textContent =
      "↻ Marcar como repetido";

  }

  botonRepetido.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      ramo.repetido =
        !ramo.repetido;

      guardarEstado();

      menu.remove();

      renderMalla();

    }
  );

  menu.appendChild(botonRepetido);

  // -------------------------
  // POSICIÓN DEL MENÚ
  // -------------------------

  document.body.appendChild(menu);

  const rect =
    divRamo.getBoundingClientRect();

  const anchoMenu =
    menu.offsetWidth;

  let izquierda =
    rect.left +
    rect.width / 2 -
    anchoMenu / 2;

  let arriba =
    rect.bottom + 8;

  // Evitar que se salga por los lados
  if (izquierda < 10) {
    izquierda = 10;
  }

  if (
    izquierda + anchoMenu >
    window.innerWidth - 10
  ) {

    izquierda =
      window.innerWidth -
      anchoMenu -
      10;
  }

  // Si no cabe abajo, mostrar arriba
  if (
    arriba + menu.offsetHeight >
    window.innerHeight - 10
  ) {

    arriba =
      rect.top -
      menu.offsetHeight -
      8;
  }

  menu.style.left =
    `${izquierda}px`;

  menu.style.top =
    `${arriba}px`;

  // -------------------------
  // CERRAR AL HACER CLIC FUERA
  // -------------------------

  setTimeout(() => {

    document.addEventListener(
      "click",
      cerrarMenuFuera
    );

  }, 0);

  function cerrarMenuFuera(evento) {

    if (
      !menu.contains(evento.target)
    ) {

      menu.remove();

      document.removeEventListener(
        "click",
        cerrarMenuFuera
      );
    }
  }
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

  if (
    divRamo.querySelector(
      ".input-promedio"
    )
  ) {
    return;
  }

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
    },
    { passive: true }
  );

  input.addEventListener(
    "keydown",
    evento => {

      if (evento.key === "Enter") {

        guardarPromedio(
          id,
          input.value
        );
      }

      if (evento.key === "Escape") {

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

  divRamo.appendChild(input);

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

  if (valor.trim() === "") {

    ramo.promedio = null;

    guardarEstado();

    renderMalla();

    return;
  }

  const numero =
    parseFloat(
      valor.replace(",", ".")
    );

  // Validar nota
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

  // El nuevo promedio reemplaza al anterior
  ramo.promedio = numero;

  guardarEstado();

  renderMalla();
}

// =========================
// BUSCAR RAMO
// =========================

function buscarRamo(id) {

  for (const sem of semestres) {

    const ramo =
      sem.ramos.find(
        r => r.id === id
      );

    if (ramo) return ramo;
  }

  return null;
}

// =========================
// APROBAR / DESMARCAR RAMO
// =========================

function aprobarRamo(id) {

  semestres.forEach(sem => {

    sem.ramos.forEach(r => {

      if (r.id === id) {

        if (
          r.estado === "disponible"
        ) {

          r.estado = "aprobado";

        } else if (
          r.estado === "aprobado"
        ) {

          r.estado = "disponible";
        }
      }
    });
  });

  // Actualizar desbloqueos
  semestres.forEach(sem => {

    sem.ramos.forEach(r => {

      if (
        r.estado !== "aprobado"
      ) {

        const cumple =
          r.prereq.every(req =>
            semestres.some(s =>
              s.ramos.some(
                x =>
                  x.id === req &&
                  x.estado === "aprobado"
              )
            )
          );

        r.estado =
          cumple
            ? "disponible"
            : "bloqueado";
      }
    });
  });

  renderMalla();

  // Pulse al aprobar/desmarcar
  const ramoDiv =
    document.getElementById(id);

  if (ramoDiv) {

    ramoDiv.classList.add(
      "pulse"
    );

    setTimeout(() => {

      ramoDiv.classList.remove(
        "pulse"
      );

    }, 400);
  }

  guardarEstado();
}

// =========================
// INICIO
// =========================

cargarEstado();

renderMalla();
