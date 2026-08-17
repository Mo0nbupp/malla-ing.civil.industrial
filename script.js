const malla = document.getElementById("malla");

// =====================================================
// SEMESTRES Y RAMOS
// =====================================================

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
      { id: "r21", nombre: "Taller integrador de competencias básicas", prereq: ["r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","r16"], estado: "bloqueado" },
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
      { id: "r41", nombre: "Práctica operacional", prereq: ["r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","r16","r17","r18","r19","r20","r21","r22","r23","r24","r25","r26","r27","r28","r29","r30","r31","r32","r33","r34","r35","r36","r37","r38","r39","r40"], estado: "bloqueado" }
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


// =====================================================
// GUARDAR / CARGAR
// =====================================================

function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(semestres));
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

        ramo.estado = ramoGuardado.estado;

        ramo.promedio =
          ramoGuardado.promedio ?? null;

        ramo.repetido =
          ramoGuardado.repetido ?? false;

        ramo.promedioAnterior =
          ramoGuardado.promedioAnterior ?? null;

      });

    });

  } catch (error) {

    console.error("No se pudo cargar la malla:", error);

  }

}


// =====================================================
// BUSCAR RAMO
// =====================================================

function buscarRamo(id) {

  for (const sem of semestres) {

    const ramo = sem.ramos.find(
      r => r.id === id
    );

    if (ramo) return ramo;

  }

  return null;

}


// =====================================================
// PROMEDIO SEMESTRE
// =====================================================

function calcularPromedioSemestre(semestre) {

  const notas = semestre.ramos
    .map(ramo => ramo.promedio)
    .filter(
      nota =>
        typeof nota === "number" &&
        !isNaN(nota)
    );

  if (notas.length === 0) return null;

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

function calcularPromedioAño(indiceAño) {

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

function mostrarPromedio(promedio) {

  if (promedio === null) {
    return "—";
  }

  return promedio
    .toFixed(2)
    .replace(".", ",");

}


// =====================================================
// CREAR BOTÓN "¿CÓMO FUNCIONA?"
// =====================================================

function crearBotonAyuda() {

  if (
    document.getElementById(
      "boton-ayuda-malla"
    )
  ) {
    return;
  }

  const boton =
    document.createElement("button");

  boton.id =
    "boton-ayuda-malla";

  boton.textContent =
    "ⓘ ¿Cómo funciona la malla?";

  boton.addEventListener(
    "click",
    mostrarAyuda
  );

  document.body.insertBefore(
    boton,
    malla
  );

}


// =====================================================
// VENTANA DE AYUDA
// =====================================================

function mostrarAyuda() {

  const existente =
    document.getElementById(
      "ventana-ayuda-malla"
    );

  if (existente) {

    existente.remove();

    return;

  }

  const fondo =
    document.createElement("div");

  fondo.id =
    "ventana-ayuda-malla";

  const caja =
    document.createElement("div");

  caja.className =
    "caja-ayuda-malla";

  caja.innerHTML = `

    <button class="cerrar-ayuda">
      ×
    </button>

    <h2>
      📚 ¿Cómo funciona la malla?
    </h2>

    <h3>
      Estados de los ramos
    </h3>

    <p>
      🟣 <strong>Disponible</strong><br>
      Puedes cursar este ramo.
    </p>

    <p>
      🔒 <strong>Bloqueado</strong><br>
      Necesitas aprobar uno o más
      prerrequisitos.
    </p>

    <p>
      ✅ <strong>Aprobado</strong><br>
      Ramo que ya aprobaste.
    </p>

    <p>
      ↻ <strong>Repetido</strong><br>
      Ramo que cursaste nuevamente.
      Se conserva el promedio anterior.
    </p>

    <h3>
      Promedios
    </h3>

    <p>
      <strong>Promedio del ramo</strong>:
      nota registrada para ese ramo.
    </p>

    <p>
      <strong>Promedio semestre</strong>:
      promedio de los ramos que tienen
      una nota registrada.
    </p>

    <p>
      <strong>Promedio anual</strong>:
      promedio de los semestres que
      tienen notas registradas.
    </p>

    <h3>
      Interacción
    </h3>

    <p>
      🖱️ <strong>Clic</strong>:
      aprobar o desmarcar un ramo.
    </p>

    <p>
      👆 <strong>Mantener presionado</strong>:
      abrir las opciones del ramo.
    </p>

    <p>
      ↻ <strong>Presionar el símbolo</strong>:
      consultar el historial del ramo.
    </p>

  `;

  fondo.appendChild(caja);

  document.body.appendChild(fondo);


  // Cerrar botón

  caja
    .querySelector(".cerrar-ayuda")
    .addEventListener(
      "click",
      () => fondo.remove()
    );


  // Cerrar haciendo clic fuera

  fondo.addEventListener(
    "click",
    evento => {

      if (evento.target === fondo) {
        fondo.remove();
      }

    }
  );

}


// =====================================================
// MOSTRAR HISTORIAL
// =====================================================

function mostrarHistorial(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;

  const existente =
    document.getElementById(
      "ventana-historial"
    );

  if (existente) {
    existente.remove();
  }

  const fondo =
    document.createElement("div");

  fondo.id =
    "ventana-historial";

  const caja =
    document.createElement("div");

  caja.className =
    "caja-historial";

  caja.innerHTML = `

    <button class="cerrar-historial">
      ×
    </button>

    <h2>
      ${ramo.nombre}
    </h2>

    <p>
      ↻ <strong>Ramo repetido</strong>
    </p>

    <div class="historial-notas">

      <div>
        <span>Primer promedio</span>
        <strong>
          ${mostrarPromedio(
            ramo.promedioAnterior
          )}
        </strong>
      </div>

      <div>
        <span>Promedio actual</span>
        <strong>
          ${mostrarPromedio(
            ramo.promedio
          )}
        </strong>
      </div>

    </div>

  `;

  fondo.appendChild(caja);

  document.body.appendChild(fondo);


  caja
    .querySelector(
      ".cerrar-historial"
    )
    .addEventListener(
      "click",
      () => fondo.remove()
    );


  fondo.addEventListener(
    "click",
    evento => {

      if (evento.target === fondo) {
        fondo.remove();
      }

    }
  );

}


// =====================================================
// MENÚ DEL RAMO
// =====================================================

function mostrarMenuRamo(id) {

  const existente =
    document.getElementById(
      "menu-ramo"
    );

  if (existente) {
    existente.remove();
  }

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  const divRamo =
    document.getElementById(id);

  if (!divRamo) return;


  const menu =
    document.createElement("div");

  menu.id =
    "menu-ramo";

  menu.className =
    "menu-ramo";

  menu.innerHTML = `

    <div class="menu-titulo">
      ${ramo.nombre}
    </div>

    <button
      class="opcion-menu"
      data-opcion="promedio"
    >
      📝
      ${
        ramo.promedio !== null
          ? "Editar promedio"
          : "Ingresar promedio"
      }
    </button>

    <button
      class="opcion-menu"
      data-opcion="repetido"
    >
      ↻
      ${
        ramo.repetido
          ? "Quitar repetición"
          : "Marcar como repetido"
      }
    </button>

    <button
      class="opcion-menu cancelar"
      data-opcion="cerrar"
    >
      ✕ Cancelar
    </button>

  `;


  document.body.appendChild(menu);


  // Posición cerca del ramo

  const rect =
    divRamo.getBoundingClientRect();

  const menuWidth = 220;

  let left =
    rect.left +
    rect.width / 2 -
    menuWidth / 2;

  let top =
    rect.bottom + 8;


  // Evitar que salga de la pantalla

  if (
    left + menuWidth >
    window.innerWidth - 10
  ) {

    left =
      window.innerWidth -
      menuWidth -
      10;

  }

  if (left < 10) {
    left = 10;
  }


  if (
    top + 180 >
    window.innerHeight
  ) {

    top =
      rect.top -
      190;

  }


  menu.style.left =
    `${left}px`;

  menu.style.top =
    `${top}px`;


  // Opciones

  menu
    .querySelectorAll(
      ".opcion-menu"
    )
    .forEach(boton => {

      boton.addEventListener(
        "click",
        evento => {

          const opcion =
            evento.currentTarget
              .dataset.opcion;

          menu.remove();


          if (
            opcion === "promedio"
          ) {

            editarPromedio(id);

          }


          if (
            opcion === "repetido"
          ) {

            alternarRepetido(id);

          }

        }
      );

    });

}


// =====================================================
// MARCAR / DESMARCAR REPETIDO
// =====================================================

function alternarRepetido(id) {

  const ramo =
    buscarRamo(id);

  if (!ramo) return;


  // Quitar repetición

  if (ramo.repetido) {

    ramo.repetido = false;

    ramo.promedioAnterior =
      null;

    guardarEstado();

    renderMalla();

    return;

  }


  // Para marcar como repetido
  // necesitamos guardar el promedio actual.

  if (
    ramo.promedio === null ||
    ramo.promedio === undefined
  ) {

    alert(
      "Primero ingresa el promedio que obtuviste antes de repetir el ramo."
    );

    return;

  }


  ramo.promedioAnterior =
    ramo.promedio;

  ramo.repetido = true;

  guardarEstado();

  renderMalla();

}


// =====================================================
// RENDER MALLA
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

    año.className =
      "año";


    // Título año

    const titulo =
      document.createElement("h2");

    titulo.textContent =
      `Año ${Math.floor(i / 2) + 1}`;

    año.appendChild(titulo);


    // Promedio anual

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


        // Título semestre

        const h3 =
          document.createElement("h3");

        h3.textContent =
          `Semestre ${sem.numero}`;

        divSem.appendChild(h3);


        // Promedio semestre

        const promedioSemestre =
          document.createElement("div");

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


        // Ramos

        sem.ramos.forEach(
          ramo => {

            const divRamo =
              document.createElement("div");

            divRamo.className =
              `ramo ${ramo.estado}`;

            divRamo.id =
              ramo.id;


            // Contenido principal

            const contenido =
              document.createElement("div");

            contenido.className =
              "contenido-ramo";


            // Nombre

            const nombreRamo =
              document.createElement("div");

            nombreRamo.className =
              "nombre-ramo";

            nombreRamo.textContent =
              ramo.nombre;

            contenido.appendChild(
              nombreRamo
            );


            // Promedio

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


            divRamo.appendChild(
              contenido
            );


            // Símbolo repetido

            if (ramo.repetido) {

              const simbolo =
                document.createElement("button");

              simbolo.className =
                "simbolo-repetido";

              simbolo.textContent =
                "↻";

              simbolo.title =
                "Ramo repetido";

              simbolo.addEventListener(
                "click",
                evento => {

                  evento.stopPropagation();

                  mostrarHistorial(
                    ramo.id
                  );

                }
              );

              divRamo.appendChild(
                simbolo
              );

            }


            // Clic normal

            if (
              ramo.estado !==
              "bloqueado"
            ) {

              divRamo.addEventListener(
                "click",
                evento => {

                  if (
                    evento.target.closest(
                      ".simbolo-repetido"
                    )
                  ) {
                    return;
                  }


                  if (
                    divRamo.dataset
                      .presionLarga ===
                    "true"
                  ) {

                    divRamo.dataset
                      .presionLarga =
                      "false";

                    return;

                  }


                  aprobarRamo(
                    ramo.id
                  );

                }
              );

            }


            // Mantener presionado

            let temporizador = null;


            function iniciarPresion(
              evento
            ) {

              if (
                evento.cancelable
              ) {

                evento.preventDefault();

              }


              divRamo.dataset
                .presionLarga =
                "false";


              temporizador =
                setTimeout(() => {

                  divRamo.dataset
                    .presionLarga =
                    "true";

                  mostrarMenuRamo(
                    ramo.id
                  );

                }, 600);

            }


            function cancelarPresion() {

              if (
                temporizador !==
                null
              ) {

                clearTimeout(
                  temporizador
                );

                temporizador =
                  null;

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
              { passive: false }
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
    evento =>
      evento.stopPropagation()
  );

  input.addEventListener(
    "mousedown",
    evento =>
      evento.stopPropagation()
  );

  input.addEventListener(
    "touchstart",
    evento =>
      evento.stopPropagation()
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
// APROBAR / DESMARCAR
// =====================================================

function aprobarRamo(id) {

  semestres.forEach(
    sem => {

      sem.ramos.forEach(
        r => {

          if (
            r.id === id
          ) {

            if (
              r.estado ===
              "disponible"
            ) {

              r.estado =
                "aprobado";

            }

            else if (
              r.estado ===
              "aprobado"
            ) {

              r.estado =
                "disponible";

            }

          }

        }
      );

    }
  );


  // Actualizar bloqueos

  semestres.forEach(
    sem => {

      sem.ramos.forEach(
        r => {

          if (
            r.estado !==
            "aprobado"
          ) {

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

        }
      );

    }
  );


  guardarEstado();

  renderMalla();


  // Animación

  const ramoDiv =
    document.getElementById(id);

  if (ramoDiv) {

    ramoDiv.classList.add(
      "pulse"
    );

    setTimeout(
      () =>
        ramoDiv.classList.remove(
          "pulse"
        ),
      400
    );

  }

}


// =====================================================
// INICIO
// =====================================================

cargarEstado();

crearBotonAyuda();

renderMalla();
