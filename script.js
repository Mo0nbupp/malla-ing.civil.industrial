const malla = document.getElementById("malla");

// =====================================================
// INFORMACIÓN DE LA MALLA
// =====================================================

const VERSION_MALLA = "v1.5";

const HISTORIAL_VERSIONES = [
  {
    version: "v1.5",
    titulo: "Rediseño visual e interacción",
    cambios: [
      "Rediseño visual de la malla",
      "Menú superior",
      "Panel «¿Cómo funciona?»",
      "Información de versión",
      "Sistema de sugerencias"
    ]
  },
  {
    version: "v1.4",
    titulo: "Menús e interacción de los ramos",
    cambios: [
      "Menús de opciones para cada ramo",
      "Interacción mediante clic y menú de opciones",
      "Edición de información de los ramos"
    ]
  },
  {
    version: "v1.3",
    titulo: "Ramos repetidos",
    cambios: [
      "Registro de ramos repetidos",
      "Promedio anterior",
      "Historial de promedios",
      "Registro del nuevo promedio al repetir un ramo"
    ]
  },
  {
    version: "v1.2",
    titulo: "Registro de promedios",
    cambios: [
      "Registro de promedio por ramo",
      "Cálculo del promedio semestral",
      "Cálculo del promedio anual"
    ]
  },
  {
    version: "v1.1",
    titulo: "Estados de los ramos",
    cambios: [
      "Ramos disponibles",
      "Ramos bloqueados",
      "Ramos aprobados",
      "Sistema de prerrequisitos"
    ]
  },
  {
    version: "v1.0",
    titulo: "Malla base",
    cambios: [
      "Semestres de la carrera",
      "Ramos de la malla curricular",
      "Sistema de prerrequisitos"
    ]
  }
];


// =====================================================
// SEMESTRES Y RAMOS
// =====================================================

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


// =====================================================
// NORMALIZAR DATOS
// =====================================================

function prepararDatos() {

  semestres.forEach(sem => {

    sem.ramos.forEach(ramo => {

      if (!Array.isArray(ramo.historial)) {
        ramo.historial = [];
      }

      if (typeof ramo.repetido !== "boolean") {
        ramo.repetido = false;
      }

      if (typeof ramo.comentario !== "string") {
        ramo.comentario = "";
      }

      if (
        ramo.promedio === undefined ||
        ramo.promedio === null
      ) {
        ramo.promedio = null;
      }

    });

  });

}


// =====================================================
// GUARDAR / CARGAR
// =====================================================

function guardarEstado() {

  localStorage.setItem(
    "estadoMalla",
    JSON.stringify(semestres)
  );

  localStorage.setItem(
    "misNotasMalla",
    document.getElementById("mis-notas")?.value || ""
  );

}


function cargarEstado() {

  const guardado =
    localStorage.getItem("estadoMalla");

  if (guardado) {

    try {

      const datos =
        JSON.parse(guardado);

      datos.forEach((sem, i) => {

        if (!semestres[i]) return;

        sem.ramos.forEach(
          (ramoGuardado, j) => {

            if (!semestres[i].ramos[j]) {
              return;
            }

            const ramo =
              semestres[i].ramos[j];

            ramo.estado =
              ramoGuardado.estado ??
              ramo.estado;

            ramo.promedio =
              ramoGuardado.promedio ??
              null;

            ramo.historial =
              Array.isArray(
                ramoGuardado.historial
              )
                ? ramoGuardado.historial
                : [];

            ramo.repetido =
              ramoGuardado.repetido ??
              false;

            ramo.comentario =
              ramoGuardado.comentario ??
              "";

          }
        );

      });

    } catch (error) {

      console.error(
        "No se pudo cargar la malla:",
        error
      );

    }

  }

  prepararDatos();

}


// =====================================================
// BUSCAR RAMO
// =====================================================

function buscarRamo(id) {

  for (const sem of semestres) {

    const ramo =
      sem.ramos.find(
        r => r.id === id
      );

    if (ramo) {
      return ramo;
    }

  }

  return null;

}


// =====================================================
// PROMEDIO SEMESTRE
// =====================================================

function calcularPromedioSemestre(
  semestre
) {

  const notas =
    semestre.ramos
      .map(
        ramo => ramo.promedio
      )
      .filter(
        nota =>
          typeof nota === "number" &&
          !isNaN(nota)
      );

  if (notas.length === 0) {
    return null;
  }

  const suma =
    notas.reduce(
      (total, nota) =>
        total + nota,
      0
    );

  return suma / notas.length;

}


// =====================================================
// PROMEDIO AÑO
// =====================================================

function calcularPromedioAño(
  indiceAño
) {

  const semestre1 =
    semestres[indiceAño * 2];

  const semestre2 =
    semestres[indiceAño * 2 + 1];

  const promedios = [];

  if (semestre1) {

    const promedio =
      calcularPromedioSemestre(
        semestre1
      );

    if (promedio !== null) {
      promedios.push(promedio);
    }

  }

  if (semestre2) {

    const promedio =
      calcularPromedioSemestre(
        semestre2
      );

    if (promedio !== null) {
      promedios.push(promedio);
    }

  }

  if (promedios.length === 0) {
    return null;
  }

  return (
    promedios.reduce(
      (total, promedio) =>
        total + promedio,
      0
    ) / promedios.length
  );

}


// =====================================================
// FORMATO PROMEDIO
// =====================================================

function mostrarPromedio(
  promedio
) {

  if (promedio === null) {
    return "—";
  }

  return promedio
    .toFixed(2)
    .replace(".", ",");

}


// =====================================================
// RENDERIZAR MALLA
// =====================================================

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


    const titulo =
      document.createElement("h2");

    titulo.textContent =
      `Año ${Math.floor(i / 2) + 1}`;

    año.appendChild(titulo);


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

    año.appendChild(
      promedioAño
    );


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


        const h3 =
          document.createElement("h3");

        h3.textContent =
          `Semestre ${sem.numero}`;

        divSem.appendChild(h3);


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


        sem.ramos.forEach(
          ramo => {

            crearRamo(
              ramo,
              divSem
            );

          }
        );


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


// =====================================================
// CREAR RAMO
// =====================================================

function crearRamo(
  ramo,
  contenedor
) {

  const divRamo =
    document.createElement("div");

  divRamo.className =
    `ramo ${ramo.estado}`;

  divRamo.id =
    ramo.id;


  // ---------------------------------
  // CONTENIDO
  // ---------------------------------

  const contenido =
    document.createElement("div");

  contenido.className =
    "contenido-ramo";


  const nombre =
    document.createElement("div");

  nombre.className =
    "nombre-ramo";

  nombre.textContent =
    ramo.nombre;

  contenido.appendChild(
    nombre
  );


  // ---------------------------------
  // SÍMBOLOS
  // ---------------------------------

  const indicadores =
    document.createElement("div");

  indicadores.className =
    "indicadores-ramo";


  if (ramo.repetido) {

    const repetido =
      document.createElement("span");

    repetido.className =
      "simbolo-repetido";

    repetido.textContent =
      "↻";

    repetido.title =
      "Ramo repetido";

    indicadores.appendChild(
      repetido
    );

  }


  if (
    ramo.comentario &&
    ramo.comentario.trim() !== ""
  ) {

    const comentario =
      document.createElement("span");

    comentario.className =
      "simbolo-comentario";

    comentario.textContent =
      "💬";

    comentario.title =
      "Este ramo tiene un comentario";

    indicadores.appendChild(
      comentario
    );

  }


  contenido.appendChild(
    indicadores
  );


  // ---------------------------------
  // PROMEDIO ACTUAL
  // ---------------------------------

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

    contenido.appendChild(
      nota
    );

  }


  // ---------------------------------
  // PROMEDIO ANTERIOR
  // ---------------------------------

  if (
    ramo.repetido &&
    ramo.historial &&
    ramo.historial.length > 0
  ) {

    const anterior =
      document.createElement("div");

    anterior.className =
      "historial-ramo";

    const ultimo =
      ramo.historial[
        ramo.historial.length - 1
      ];

    anterior.textContent =
      `↻ Anterior: ${
        ultimo
          .toFixed(2)
          .replace(".", ",")
      }`;

    contenido.appendChild(
      anterior
    );

  }


  divRamo.appendChild(
    contenido
  );


  // ---------------------------------
  // BOTÓN ⋮
  // ---------------------------------

  const botonMenu =
    document.createElement("button");

  botonMenu.className =
    "boton-menu-ramo";

  botonMenu.textContent =
    "⋮";

  botonMenu.title =
    "Opciones del ramo";

  botonMenu.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      abrirMenuRamo(
        divRamo,
        ramo
      );

    }
  );

  divRamo.appendChild(
    botonMenu
  );


  // ---------------------------------
  // CLIC NORMAL
  // ---------------------------------

  if (
    ramo.estado !== "bloqueado"
  ) {

    divRamo.addEventListener(
      "click",
      evento => {

        if (
          evento.target.closest(
            ".boton-menu-ramo"
          )
        ) {
          return;
        }

        if (
          evento.target.closest(
            ".menu-ramo"
          )
        ) {
          return;
        }

        aprobarRamo(
          ramo.id
        );

      }
    );

  }


  contenedor.appendChild(
    divRamo
  );

}


// =====================================================
// MENÚ DEL RAMO
// =====================================================

function abrirMenuRamo(
  divRamo,
  ramo
) {

  cerrarMenusRamos();


  const menu =
    document.createElement("div");

  menu.className =
    "menu-ramo";


  const titulo =
    document.createElement("div");

  titulo.className =
    "menu-ramo-titulo";

  titulo.textContent =
    ramo.nombre;

  menu.appendChild(
    titulo
  );


  // ---------------------------------
  // PROMEDIO
  // ---------------------------------

  const botonPromedio =
    document.createElement("button");

  botonPromedio.textContent =
    "📝 Editar promedio";

  botonPromedio.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      cerrarMenusRamos();

      editarPromedio(
        ramo.id
      );

    }
  );

  menu.appendChild(
    botonPromedio
  );


  // ---------------------------------
  // REPETIR
  // ---------------------------------

  const botonRepetir =
    document.createElement("button");

  botonRepetir.textContent =
    ramo.repetido
      ? "↻ Editar repetición"
      : "↻ Repetir ramo";

  botonRepetir.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      cerrarMenusRamos();

      repetirRamo(
        ramo.id
      );

    }
  );

  menu.appendChild(
    botonRepetir
  );


  // ---------------------------------
  // QUITAR REPETICIÓN
  // ---------------------------------

  if (ramo.repetido) {

    const botonQuitar =
      document.createElement("button");

    botonQuitar.textContent =
      "🗑️ Quitar repetición";

    botonQuitar.addEventListener(
      "click",
      evento => {

        evento.stopPropagation();

        quitarRepeticion(
          ramo.id
        );

        cerrarMenusRamos();

      }
    );

    menu.appendChild(
      botonQuitar
    );

  }


  // ---------------------------------
  // COMENTARIO
  // ---------------------------------

  const botonComentario =
    document.createElement("button");

  botonComentario.textContent =
    ramo.comentario
      ? "💬 Editar comentario"
      : "💬 Agregar comentario";

  botonComentario.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      cerrarMenusRamos();

      editarComentario(
        ramo.id
      );

    }
  );

  menu.appendChild(
    botonComentario
  );


  // ---------------------------------
  // HISTORIAL
  // ---------------------------------

  if (
    ramo.historial &&
    ramo.historial.length > 0
  ) {

    const botonHistorial =
      document.createElement("button");

    botonHistorial.textContent =
      "📋 Ver historial";

    botonHistorial.addEventListener(
      "click",
      evento => {

        evento.stopPropagation();

        mostrarHistorial(
          ramo
        );

      }
    );

    menu.appendChild(
      botonHistorial
    );

  }


  // ---------------------------------
  // ELIMINAR COMENTARIO
  // ---------------------------------

  if (
    ramo.comentario &&
    ramo.comentario.trim() !== ""
  ) {

    const botonEliminarComentario =
      document.createElement("button");

    botonEliminarComentario.textContent =
      "🗑️ Borrar comentario";

    botonEliminarComentario.addEventListener(
      "click",
      evento => {

        evento.stopPropagation();

        ramo.comentario = "";

        guardarEstado();

        cerrarMenusRamos();

        renderMalla();

      }
    );

    menu.appendChild(
      botonEliminarComentario
    );

  }


  divRamo.appendChild(
    menu
  );

}


// =====================================================
// CERRAR MENÚS DE RAMOS
// =====================================================

function cerrarMenusRamos() {

  document
    .querySelectorAll(
      ".menu-ramo"
    )
    .forEach(
      menu => menu.remove()
    );

}


document.addEventListener(
  "click",
  evento => {

    if (
      !evento.target.closest(
        ".menu-ramo"
      ) &&
      !evento.target.closest(
        ".boton-menu-ramo"
      )
    ) {

      cerrarMenusRamos();

    }

  }
);


// =====================================================
// EDITAR PROMEDIO
// =====================================================

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


// =====================================================
// GUARDAR PROMEDIO
// =====================================================

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


// =====================================================
// REPETIR RAMO
// =====================================================

function repetirRamo(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  // Si ya estaba repetido,
  // simplemente editar el nuevo promedio.

  if (ramo.repetido) {

    renderMalla();

    setTimeout(
      () => {
        editarPromedio(id);
      },
      50
    );

    return;

  }


  // ---------------------------------
  // GUARDAR PROMEDIO ANTERIOR
  // ---------------------------------

  if (
    ramo.promedio !== null &&
    ramo.promedio !== undefined
  ) {

    if (!Array.isArray(ramo.historial)) {
      ramo.historial = [];
    }

    ramo.historial.push(
      ramo.promedio
    );

  }


  ramo.repetido =
    true;


  // El ramo queda disponible
  // para registrar el nuevo intento.

  ramo.estado =
    "disponible";


  // El promedio actual se limpia
  // para ingresar el nuevo.

  ramo.promedio =
    null;


  guardarEstado();

  renderMalla();


  // ---------------------------------
  // ABRIR AUTOMÁTICAMENTE
  // EL NUEVO PROMEDIO
  // ---------------------------------

  setTimeout(
    () => {

      editarPromedio(
        id
      );

    },
    80
  );

}


// =====================================================
// QUITAR REPETICIÓN
// =====================================================

function quitarRepeticion(
  id
) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  const confirmar =
    confirm(
      "¿Quieres quitar el registro de repetición de este ramo?"
    );

  if (!confirmar) {
    return;
  }


  // Recuperar el último promedio
  // anterior si existe.

  if (
    ramo.historial &&
    ramo.historial.length > 0
  ) {

    ramo.promedio =
      ramo.historial[
        ramo.historial.length - 1
      ];

    ramo.historial.pop();

  }


  ramo.repetido =
    false;


  guardarEstado();

  actualizarBloqueos();

  renderMalla();

}


// =====================================================
// HISTORIAL
// =====================================================

function mostrarHistorial(
  ramo
) {

  if (
    !ramo.historial ||
    ramo.historial.length === 0
  ) {

    alert(
      "Este ramo todavía no tiene intentos anteriores."
    );

    return;

  }


  const historialTexto =
    ramo.historial
      .map(
        (nota, indice) =>
          `Intento ${indice + 1}: ${
            nota
              .toFixed(2)
              .replace(".", ",")
          }`
      )
      .join("\n");


  alert(
    `Historial de ${ramo.nombre}\n\n${historialTexto}`
  );

}


// =====================================================
// COMENTARIO DEL RAMO
// =====================================================

function editarComentario(
  id
) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  const divRamo =
    document.getElementById(id);

  if (!divRamo) return;


  const existente =
    divRamo.querySelector(
      ".editor-comentario"
    );

  if (existente) {
    return;
  }


  const editor =
    document.createElement("div");

  editor.className =
    "editor-comentario";


  const textarea =
    document.createElement("textarea");

  textarea.placeholder =
    "Escribe una nota sobre este ramo...";

  textarea.value =
    ramo.comentario || "";


  const botones =
    document.createElement("div");

  botones.className =
    "botones-comentario";


  const guardar =
    document.createElement("button");

  guardar.textContent =
    "Guardar";


  guardar.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      ramo.comentario =
        textarea.value.trim();

      guardarEstado();

      renderMalla();

    }
  );


  const cancelar =
    document.createElement("button");

  cancelar.textContent =
    "Cancelar";


  cancelar.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      renderMalla();

    }
  );


  botones.appendChild(
    guardar
  );

  botones.appendChild(
    cancelar
  );


  editor.appendChild(
    textarea
  );

  editor.appendChild(
    botones
  );


  divRamo.appendChild(
    editor
  );


  textarea.focus();

}


// =====================================================
// APROBAR / DESMARCAR
// =====================================================

function aprobarRamo(
  id
) {

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


  actualizarBloqueos();

  guardarEstado();

  renderMalla();


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


// =====================================================
// ACTUALIZAR BLOQUEOS
// =====================================================

function actualizarBloqueos() {

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

}


// =====================================================
// PANEL BASE
// =====================================================

function crearPanel(
  titulo,
  contenido
) {

  cerrarPaneles();


  const panel =
    document.createElement("div");

  panel.className =
    "panel-informacion";


  panel.addEventListener(
    "click",
    evento => {

      if (
        evento.target === panel
      ) {

        cerrarPaneles();

      }

    }
  );


  panel.innerHTML = `

    <div class="panel-contenido">

      <button
        class="cerrar-panel"
        type="button"
      >
        ×
      </button>

      <h2>${titulo}</h2>

      ${contenido}

    </div>

  `;


  panel
    .querySelector(
      ".cerrar-panel"
    )
    .addEventListener(
      "click",
      cerrarPaneles
    );


  document.body.appendChild(
    panel
  );

}


// =====================================================
// CÓMO FUNCIONA
// =====================================================

function abrirComoFunciona() {

  crearPanel(
    "❔ ¿Cómo funciona la malla?",
    `

      <div class="explicacion-item">

        <span class="ejemplo disponible"></span>

        <div>
          <strong>Disponible</strong>
          <p>Puedes tomar o aprobar este ramo.</p>
        </div>

      </div>


      <div class="explicacion-item">

        <span class="ejemplo aprobado"></span>

        <div>
          <strong>Aprobado</strong>
          <p>El ramo ya fue aprobado.</p>
        </div>

      </div>


      <div class="explicacion-item">

        <span class="ejemplo bloqueado"></span>

        <div>
          <strong>Bloqueado</strong>
          <p>Falta aprobar uno o más prerrequisitos.</p>
        </div>

      </div>


      <div class="explicacion-item">

        <span class="ejemplo simbolo">
          ↻
        </span>

        <div>
          <strong>Ramo repetido</strong>
          <p>Indica que cursaste nuevamente el ramo.</p>
        </div>

      </div>


      <div class="explicacion-item">

        <span class="ejemplo simbolo">
          💬
        </span>

        <div>
          <strong>Comentario</strong>
          <p>El ramo tiene una nota personal.</p>
        </div>

      </div>


      <hr>


      <h3>Interacciones</h3>

      <p>
        🖱️ <strong>Clic</strong> → Aprobar o desmarcar un ramo.
      </p>

      <p>
        ⋮ <strong>Opciones</strong> → Editar promedio,
        repetir, comentar y más.
      </p>

      <p>
        📝 <strong>Promedio</strong> → Puedes ingresar
        o modificar la nota.
      </p>

    `
  );

}


// =====================================================
// MIS NOTAS
// =====================================================

function abrirMisNotas() {

  const notaGuardada =
    localStorage.getItem(
      "misNotasMalla"
    ) || "";


  crearPanel(
    "💭 Mis notas",
    `

      <p>
        Este espacio es personal y sirve para
        guardar recordatorios generales de tu carrera.
      </p>

      <textarea
        id="mis-notas"
        class="textarea-notas"
        placeholder="Escribe aquí tus notas..."
      >${notaGuardada}</textarea>

      <button
        id="guardar-mis-notas"
        class="boton-enviar"
        type="button"
      >
        Guardar notas
      </button>

    `
  );


  document
    .getElementById(
      "guardar-mis-notas"
    )
    .addEventListener(
      "click",
      () => {

        const texto =
          document.getElementById(
            "mis-notas"
          ).value;

        localStorage.setItem(
          "misNotasMalla",
          texto
        );

        alert(
          "Tus notas fueron guardadas 💜"
        );

      }
    );

}


// =====================================================
// VERSIONES
// =====================================================

function abrirVersion() {

  const versiones =
    HISTORIAL_VERSIONES
      .map(
        item => `

          <div class="version-item">

            <h3>
              ${item.version}
              — ${item.titulo}
            </h3>

            <ul>

              ${item.cambios
                .map(
                  cambio =>
                    `<li>${cambio}</li>`
                )
                .join("")
              }

            </ul>

          </div>

        `
      )
      .join("");


  crearPanel(
    `📋 Historial de versiones`,
    `

      <p>
        <strong>Versión actual:</strong>
        ${VERSION_MALLA}
      </p>

      ${versiones}

    `
  );

}


// =====================================================
// SUGERENCIAS
// =====================================================

function abrirSugerencias() {

  const opcionesRamos =
    semestres
      .flatMap(
        sem => sem.ramos
      )
      .map(
        ramo =>
          `<option value="${ramo.id}">
            ${ramo.nombre}
          </option>`
      )
      .join("");


  crearPanel(
    "💌 Sugerencias",
    `

      <p>
        ¿Encontraste un error o tienes una idea
        para mejorar la malla?
      </p>


      <label>
        Ramo relacionado
      </label>

      <select
        id="sugerencia-ramo"
        class="select-sugerencia"
      >

        <option value="">
          Seleccionar ramo
        </option>

        ${opcionesRamos}

      </select>


      <label>
        Tipo de sugerencia
      </label>

      <select
        id="tipo-sugerencia"
        class="select-sugerencia"
      >

        <option>
          Error en un ramo
        </option>

        <option>
          Prerrequisito incorrecto
        </option>

        <option>
          Idea de diseño
        </option>

        <option>
          Nueva función
        </option>

        <option>
          Otro
        </option>

      </select>


      <textarea
        id="texto-sugerencia"
        class="textarea-notas"
        placeholder="Escribe aquí tu sugerencia..."
      ></textarea>


      <button
        id="boton-sugerencia"
        class="boton-enviar"
        type="button"
      >
        Enviar sugerencia
      </button>


      <p class="texto-pequeno">
        Gracias por ayudar a mejorar la malla ♡
      </p>

    `
  );


  document
    .getElementById(
      "boton-sugerencia"
    )
    .addEventListener(
      "click",
      enviarSugerencia
    );

}


// =====================================================
// ENVIAR SUGERENCIA
// =====================================================

function enviarSugerencia() {

  const ramo =
    document.getElementById(
      "sugerencia-ramo"
    )?.value || "";


  const tipo =
    document.getElementById(
      "tipo-sugerencia"
    )?.value || "Otro";


  const texto =
    document.getElementById(
      "texto-sugerencia"
    )?.value.trim();


  if (!texto) {

    alert(
      "Escribe una sugerencia antes de enviarla 💜"
    );

    return;

  }


  /*
    Por ahora se guarda localmente.

    Más adelante podemos conectar este botón
    con un formulario externo para que la
    sugerencia llegue directamente a la creadora.
  */

  const sugerencias =
    JSON.parse(
      localStorage.getItem(
        "sugerenciasMalla"
      ) || "[]"
    );


  sugerencias.push({

    ramo,
    tipo,
    texto,

    fecha:
      new Date().toLocaleString()

  });


  localStorage.setItem(
    "sugerenciasMalla",
    JSON.stringify(
      sugerencias
    )
  );


  alert(
    "¡Gracias por tu sugerencia! 💜"
  );


  cerrarPaneles();

}


// =====================================================
// CERRAR PANELES
// =====================================================

function cerrarPaneles() {

  document
    .querySelectorAll(
      ".panel-informacion"
    )
    .forEach(
      panel => panel.remove()
    );

}


// =====================================================
// MENÚ SUPERIOR
// =====================================================

function crearMenuSuperior() {

  if (
    document.querySelector(
      ".menu-superior"
    )
  ) {
    return;
  }


  const menu =
    document.createElement("div");

  menu.className =
    "menu-superior";


  const botonComoFunciona =
    document.createElement("button");

  botonComoFunciona.textContent =
    "❔ ¿Cómo funciona?";

  botonComoFunciona.onclick =
    abrirComoFunciona;


  const botonMisNotas =
    document.createElement("button");

  botonMisNotas.textContent =
    "💭 Mis notas";

  botonMisNotas.onclick =
    abrirMisNotas;


  const botonSugerencias =
    document.createElement("button");

  botonSugerencias.textContent =
    "💌 Sugerencias";

  botonSugerencias.onclick =
    abrirSugerencias;


  const botonVersion =
    document.createElement("button");

  botonVersion.textContent =
    VERSION_MALLA;

  botonVersion.onclick =
    abrirVersion;


  menu.appendChild(
    botonComoFunciona
  );

  menu.appendChild(
    botonMisNotas
  );

  menu.appendChild(
    botonSugerencias
  );

  menu.appendChild(
    botonVersion
  );


  const titulo =
    document.querySelector("h1");


  if (titulo) {

    titulo.insertAdjacentElement(
      "afterend",
      menu
    );

  } else {

    document.body.prepend(
      menu
    );

  }

}


// =====================================================
// INICIO
// =====================================================

cargarEstado();

crearMenuSuperior();

renderMalla();
