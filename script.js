const malla = document.getElementById("malla");

// =====================================================
// INFORMACIÓN DE LA MALLA
// =====================================================

const VERSION_MALLA = "v1.0";


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
      { id:  "r26", nombre: "Contabilidad y costos", prereq: ["r6"], estado: "bloqueado" },
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
// GUARDAR / CARGAR
// =====================================================

function guardarEstado() {
  localStorage.setItem(
    "estadoMalla",
    JSON.stringify(semestres)
  );
}


function cargarEstado() {

  const guardado =
    localStorage.getItem("estadoMalla");

  if (!guardado) return;

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
            ramoGuardado.historial ??
            [];

          ramo.repetido =
            ramoGuardado.repetido ??
            false;

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


// =====================================================
// BUSCAR RAMO
// =====================================================

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
    semestres[
      indiceAño * 2
    ];

  const semestre2 =
    semestres[
      indiceAño * 2 + 1
    ];

  const promedios = [];


  if (semestre1) {

    const promedio =
      calcularPromedioSemestre(
        semestre1
      );

    if (promedio !== null) {
      promedios.push(
        promedio
      );
    }

  }


  if (semestre2) {

    const promedio =
      calcularPromedioSemestre(
        semestre2
      );

    if (promedio !== null) {
      promedios.push(
        promedio
      );
    }

  }


  if (promedios.length === 0) {
    return null;
  }


  const suma =
    promedios.reduce(
      (total, promedio) =>
        total + promedio,
      0
    );

  return suma / promedios.length;

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
      document.createElement(
        "div"
      );

    año.className = "año";


    // ---------------------------------
    // TÍTULO AÑO
    // ---------------------------------

    const titulo =
      document.createElement(
        "h2"
      );

    titulo.textContent =
      `Año ${
        Math.floor(i / 2) + 1
      }`;

    año.appendChild(
      titulo
    );


    // ---------------------------------
    // PROMEDIO AÑO
    // ---------------------------------

    const promedioAño =
      document.createElement(
        "div"
      );

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


    // ---------------------------------
    // SEMESTRES
    // ---------------------------------

    const contSemestres =
      document.createElement(
        "div"
      );

    contSemestres.className =
      "semestres";


    semestres
      .slice(i, i + 2)
      .forEach(
        sem => {

          const divSem =
            document.createElement(
              "div"
            );

          divSem.className =
            "semestre";


          // ---------------------------------
          // TÍTULO SEMESTRE
          // ---------------------------------

          const h3 =
            document.createElement(
              "h3"
            );

          h3.textContent =
            `Semestre ${sem.numero}`;

          divSem.appendChild(
            h3
          );


          // ---------------------------------
          // PROMEDIO SEMESTRE
          // ---------------------------------

          const promedioSemestre =
            document.createElement(
              "div"
            );

          promedioSemestre.className =
            "promedio-semestre";

          promedioSemestre.innerHTML = `
            Promedio:
            <strong>
              ${mostrarPromedio(
                calcularPromedioSemestre(
                  sem
                )
              )}
            </strong>
          `;

          divSem.appendChild(
            promedioSemestre
          );


          // ---------------------------------
          // RAMOS
          // ---------------------------------

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

        }
      );


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
    document.createElement(
      "div"
    );

  divRamo.className =
    `ramo ${ramo.estado}`;

  divRamo.id =
    ramo.id;


  // IMPORTANTE:
  // El ramo será la referencia visual,
  // pero el menú será flotante y NO
  // ocupará espacio dentro de él.

  divRamo.style.position =
    "relative";


  // ---------------------------------
  // CONTENIDO PRINCIPAL
  // ---------------------------------

  const contenido =
    document.createElement(
      "div"
    );

  contenido.className =
    "contenido-ramo";


  // ---------------------------------
  // NOMBRE
  // ---------------------------------

  const nombre =
    document.createElement(
      "div"
    );

  nombre.className =
    "nombre-ramo";

  nombre.textContent =
    ramo.nombre;

  contenido.appendChild(
    nombre
  );


  // ---------------------------------
  // SIMBOLO REPETIDO
  // ---------------------------------

  if (ramo.repetido) {

    const simbolo =
      document.createElement(
        "span"
      );

    simbolo.className =
      "simbolo-repetido";

    simbolo.textContent =
      "↻";

    simbolo.title =
      "Ramo repetido";

    contenido.appendChild(
      simbolo
    );

  }


  // ---------------------------------
  // PROMEDIO ACTUAL
  // ---------------------------------

  if (
    ramo.promedio !== null &&
    ramo.promedio !== undefined
  ) {

    const nota =
      document.createElement(
        "div"
      );

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
  // HISTORIAL
  // ---------------------------------

  if (
    ramo.historial &&
    ramo.historial.length > 0
  ) {

    const historial =
      document.createElement(
        "div"
      );

    historial.className =
      "historial-ramo";

    const ultimo =
      ramo.historial[
        ramo.historial.length - 1
      ];

    historial.textContent =
      `Anterior: ${
        ultimo
          .toFixed(2)
          .replace(".", ",")
      }`;

    contenido.appendChild(
      historial
    );

  }


  divRamo.appendChild(
    contenido
  );


  // ---------------------------------
  // BOTÓN DE TRES PUNTITOS
  // ---------------------------------

  const botonMenu =
    document.createElement(
      "button"
    );

  botonMenu.className =
    "boton-menu-ramo";

  botonMenu.type =
    "button";

  botonMenu.textContent =
    "⋮";

  botonMenu.title =
    "Opciones del ramo";


  botonMenu.addEventListener(
    "click",
    evento => {

      evento.preventDefault();
      evento.stopPropagation();

      abrirMenuRamo(
        divRamo,
        ramo,
        botonMenu
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
    ramo.estado !==
    "bloqueado"
  ) {

    divRamo.addEventListener(
      "click",
      evento => {

        // No aprobar si se tocó
        // el botón de opciones.

        if (
          evento.target.closest(
            ".boton-menu-ramo"
          )
        ) {
          return;
        }

        // No aprobar si se tocó
        // algún menú.

        if (
          evento.target.closest(
            ".menu-ramo-flotante"
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
// ABRIR MENÚ DEL RAMO
// =====================================================

function abrirMenuRamo(
  divRamo,
  ramo,
  boton
) {

  // Si ya está abierto,
  // cerrarlo.

  const menuExistente =
    document.querySelector(
      `.menu-ramo-flotante[data-ramo="${ramo.id}"]`
    );

  if (menuExistente) {

    menuExistente.remove();

    return;

  }


  cerrarMenusRamos();


  // ---------------------------------
  // CREAR MENÚ
  // ---------------------------------

  const menu =
    document.createElement(
      "div"
    );

  menu.className =
    "menu-ramo-flotante";

  menu.dataset.ramo =
    ramo.id;


  // ---------------------------------
  // TÍTULO
  // ---------------------------------

  const titulo =
    document.createElement(
      "div"
    );

  titulo.className =
    "menu-ramo-titulo";

  titulo.textContent =
    ramo.nombre;

  menu.appendChild(
    titulo
  );


  // ---------------------------------
  // BOTÓN PROMEDIO
  // ---------------------------------

  const botonPromedio =
    document.createElement(
      "button"
    );

  botonPromedio.type =
    "button";

  botonPromedio.textContent =
    "📝 Promedio";

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
  // REPETIR / QUITAR REPETICIÓN
  // ---------------------------------

  const botonRepetir =
    document.createElement(
      "button"
    );

  botonRepetir.type =
    "button";


  if (ramo.repetido) {

    botonRepetir.textContent =
      "↻ Quitar repetición";

    botonRepetir.className =
      "boton-quitar-repeticion";

    botonRepetir.addEventListener(
      "click",
      evento => {

        evento.stopPropagation();

        quitarRepeticion(
          ramo.id
        );

      }
    );

  } else {

    botonRepetir.textContent =
      "↻ Repetir ramo";

    botonRepetir.addEventListener(
      "click",
      evento => {

        evento.stopPropagation();

        repetirRamo(
          ramo.id
        );

      }
    );

  }


  menu.appendChild(
    botonRepetir
  );


  // ---------------------------------
  // HISTORIAL
  // ---------------------------------

  if (
    ramo.historial &&
    ramo.historial.length > 0
  ) {

    const botonHistorial =
      document.createElement(
        "button"
      );

    botonHistorial.type =
      "button";

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
  // AGREGAR A BODY
  // ---------------------------------

  // Esto es lo que hace que el menú
  // esté por encima de la malla.

  document.body.appendChild(
    menu
  );


  // ---------------------------------
  // POSICIONAR MENÚ
  // ---------------------------------

  posicionarMenuRamo(
    menu,
    boton
  );

}


// =====================================================
// POSICIONAR MENÚ FLOTANTE
// =====================================================

function posicionarMenuRamo(
  menu,
  boton
) {

  const rect =
    boton.getBoundingClientRect();


  const ancho =
    menu.offsetWidth;

  const alto =
    menu.offsetHeight;


  let izquierda =
    rect.right + 8;

  let arriba =
    rect.top;


  // ---------------------------------
  // SI SE SALE POR LA DERECHA
  // ---------------------------------

  if (
    izquierda + ancho >
    window.innerWidth - 10
  ) {

    izquierda =
      rect.left - ancho - 8;

  }


  // ---------------------------------
  // SI SE SALE POR ABAJO
  // ---------------------------------

  if (
    arriba + alto >
    window.innerHeight - 10
  ) {

    arriba =
      window.innerHeight -
      alto -
      10;

  }


  // ---------------------------------
  // SI SE SALE POR ARRIBA
  // ---------------------------------

  if (arriba < 10) {
    arriba = 10;
  }


  // ---------------------------------
  // SI SE SALE POR LA IZQUIERDA
  // ---------------------------------

  if (izquierda < 10) {
    izquierda = 10;
  }


  menu.style.left =
    `${izquierda}px`;

  menu.style.top =
    `${arriba}px`;

}


// =====================================================
// CERRAR MENÚS DE RAMOS
// =====================================================

function cerrarMenusRamos() {

  document
    .querySelectorAll(
      ".menu-ramo-flotante"
    )
    .forEach(
      menu => menu.remove()
    );

}


// =====================================================
// CERRAR MENÚ AL HACER CLIC AFUERA
// =====================================================

document.addEventListener(
  "click",
  evento => {

    if (
      !evento.target.closest(
        ".menu-ramo-flotante"
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

function editarPromedio(
  id
) {

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
    document.createElement(
      "input"
    );

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
      valor.replace(
        ",",
        "."
      )
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

function repetirRamo(
  id
) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  // ---------------------------------
  // GUARDAR PROMEDIO ANTERIOR
  // ---------------------------------

  if (
    ramo.promedio !== null &&
    ramo.promedio !== undefined
  ) {

    if (!ramo.historial) {
      ramo.historial = [];
    }

    ramo.historial.push(
      ramo.promedio
    );

  }


  // ---------------------------------
  // MARCAR COMO REPETIDO
  // ---------------------------------

  ramo.repetido =
    true;


  // ---------------------------------
  // DEJAR DISPONIBLE PARA NUEVA NOTA
  // ---------------------------------

  ramo.estado =
    "disponible";


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
    50
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


  // ---------------------------------
  // QUITAR MARCA
  // ---------------------------------

  ramo.repetido =
    false;


  // ---------------------------------
  // ELIMINAR HISTORIAL
  // ---------------------------------

  ramo.historial =
    [];


  guardarEstado();

  cerrarMenusRamos();

  renderMalla();

}


// =====================================================
// MOSTRAR HISTORIAL
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
          `Intento ${
            indice + 1
          }: ${
            nota
              .toFixed(2)
              .replace(
                ".",
                ","
              )
          }`
      )
      .join("\n");


  alert(
    `Historial de ${
      ramo.nombre
    }\n\n${historialTexto}`
  );

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


  // ---------------------------------
  // ACTUALIZAR BLOQUEOS
  // ---------------------------------

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


  // ---------------------------------
  // ANIMACIÓN
  // ---------------------------------

  const ramoDiv =
    document.getElementById(
      id
    );

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
// PANEL "CÓMO FUNCIONA"
// =====================================================

function abrirComoFunciona() {

  cerrarPaneles();

  const panel =
    document.createElement(
      "div"
    );

  panel.className =
    "panel-informacion";

  panel.innerHTML = `

    <div class="panel-contenido">

      <button
        class="cerrar-panel"
        onclick="cerrarPaneles()"
      >
        ×
      </button>

      <h2>¿Cómo funciona la malla?</h2>

      <div class="explicacion-item">
        <span class="ejemplo disponible"></span>

        <div>
          <strong>Disponible</strong>
          <p>
            Puedes tomar o aprobar este ramo.
          </p>
        </div>
      </div>

      <div class="explicacion-item">
        <span class="ejemplo aprobado"></span>

        <div>
          <strong>Aprobado</strong>
          <p>
            El ramo ya fue aprobado.
          </p>
        </div>
      </div>

      <div class="explicacion-item">
        <span class="ejemplo bloqueado"></span>

        <div>
          <strong>Bloqueado</strong>
          <p>
            Aún falta aprobar uno o más prerrequisitos.
          </p>
        </div>
      </div>

      <div class="explicacion-item">

        <span class="ejemplo simbolo">
          ↻
        </span>

        <div>
          <strong>
            Ramo repetido
          </strong>

          <p>
            El símbolo indica que el ramo
            fue cursado nuevamente.
          </p>
        </div>

      </div>

      <hr>

      <p class="instruccion">
        🖱️ Haz clic en el símbolo
        <strong>⋮</strong>
        de un ramo para abrir sus opciones.
      </p>

      <p class="instruccion">
        📝 Desde ese menú puedes ingresar
        o editar el promedio.
      </p>

      <p class="instruccion">
        ↻ También puedes registrar si repetiste
        el ramo y conservar el intento anterior.
      </p>

    </div>

  `;

  document.body.appendChild(
    panel
  );

}


// =====================================================
// PANEL DE VERSIÓN
// =====================================================

function abrirVersion() {

  cerrarPaneles();

  const panel =
    document.createElement(
      "div"
    );

  panel.className =
    "panel-informacion";

  panel.innerHTML = `

    <div class="panel-contenido">

      <button
        class="cerrar-panel"
        onclick="cerrarPaneles()"
      >
        ×
      </button>

      <h2>
        Información de la malla
      </h2>

      <p>
        <strong>
          Versión actual:
        </strong>

        ${VERSION_MALLA}
      </p>

      <p>
        Malla interactiva de
        Ingeniería Civil Industrial.
      </p>

      <p class="texto-pequeno">
        Esta versión incluye seguimiento
        de ramos, promedios, prerrequisitos
        y registro de ramos repetidos.
      </p>

    </div>

  `;

  document.body.appendChild(
    panel
  );

}


// =====================================================
// PANEL DE SUGERENCIAS
// =====================================================

function abrirSugerencias() {

  cerrarPaneles();

  const panel =
    document.createElement(
      "div"
    );

  panel.className =
    "panel-informacion";

  panel.innerHTML = `

    <div class="panel-contenido">

      <button
        class="cerrar-panel"
        onclick="cerrarPaneles()"
      >
        ×
      </button>

      <h2>
        💜 Sugerencias
      </h2>

      <p>
        ¿Encontraste un error o tienes
        una idea para mejorar la malla?
      </p>

      <textarea
        id="texto-sugerencia"
        placeholder="Escribe aquí tu sugerencia..."
      ></textarea>

      <button
        class="boton-enviar"
        onclick="enviarSugerencia()"
      >
        Enviar sugerencia
      </button>

      <p class="texto-pequeno">
        Gracias por ayudar a mejorar la malla ♡
      </p>

    </div>

  `;

  document.body.appendChild(
    panel
  );

}


// =====================================================
// ENVIAR SUGERENCIA
// =====================================================

function enviarSugerencia() {

  const texto =
    document
      .getElementById(
        "texto-sugerencia"
      )
      ?.value
      .trim();


  if (!texto) {

    alert(
      "Escribe una sugerencia antes de enviarla 💜"
    );

    return;

  }


  /*
    AQUÍ DESPUÉS PODEMOS CONECTAR
    UN FORMULARIO REAL PARA QUE
    LAS SUGERENCIAS TE LLEGUEN.
  */

  localStorage.setItem(
    "ultimaSugerencia",
    texto
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
// CREAR MENÚ SUPERIOR
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
    document.createElement(
      "div"
    );

  menu.className =
    "menu-superior";


  // ---------------------------------
  // CÓMO FUNCIONA
  // ---------------------------------

  const botonComoFunciona =
    document.createElement(
      "button"
    );

  botonComoFunciona.textContent =
    "¿Cómo funciona?";

  botonComoFunciona.onclick =
    abrirComoFunciona;


  // ---------------------------------
  // VERSIÓN
  // ---------------------------------

  const botonVersion =
    document.createElement(
      "button"
    );

  botonVersion.textContent =
    VERSION_MALLA;

  botonVersion.onclick =
    abrirVersion;


  // ---------------------------------
  // SUGERENCIAS
  // ---------------------------------

  const botonSugerencias =
    document.createElement(
      "button"
    );

  botonSugerencias.textContent =
    "💜 Sugerencias";

  botonSugerencias.onclick =
    abrirSugerencias;


  menu.appendChild(
    botonComoFunciona
  );

  menu.appendChild(
    botonVersion
  );

  menu.appendChild(
    botonSugerencias
  );


  // ---------------------------------
  // INSERTAR DEBAJO DEL TÍTULO
  // ---------------------------------

  const titulo =
    document.querySelector(
      "h1"
    );


  if (titulo) {

    titulo.insertAdjacentElement(
      "afterend",
      menu
    );

  }

}


// =====================================================
// CERRAR MENÚ RAMO AL HACER SCROLL
// =====================================================

window.addEventListener(
  "scroll",
  () => {

    cerrarMenusRamos();

  },
  true
);


// =====================================================
// INICIO
// =====================================================

cargarEstado();

crearMenuSuperior();

renderMalla();
