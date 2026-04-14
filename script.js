const Strengths = [
  {
    id: "design",
    title: "Diseño de pruebas",
    summary: "Construyo cobertura clara desde requerimientos hasta escenarios límite.",
    description:
      "Diseño casos de prueba en BDD/Gherkin con precondiciones, escenarios positivos, negativos y alternos. Busco que cada historia tenga criterios verificables y un flujo completo cubierto.",
    evidence: ["BDD / Gherkin", "Precondiciones", "Criterios de aceptación"],
    deliverables: [
      "Cobertura de flujos completos como registro, login, catálogo y recuperación de cuenta.",
      "Identificación de casos no contemplados antes de que lleguen a producción.",
      "Traducción de historias ambiguas en escenarios concretos y ejecutables."
    ],
    impact: [
      "Reduce interpretaciones distintas entre PO, negocio y desarrollo.",
      "Ayuda a priorizar riesgos desde el inicio del ciclo.",
      "Convierte requerimientos en validaciones observables."
    ]
  },
  {
    id: "execution",
    title: "Ejecución funcional",
    summary: "Valido frontend, backend e integraciones con foco en comportamiento real.",
    description:
      "Ejecuto pruebas manuales sobre flujos críticos, UI/UX, responsive, CMS, correos transaccionales y endpoints. No me quedo en la superficie: reviso consistencia, errores de borde e impacto al usuario.",
    evidence: ["Frontend", "Backend", "Responsive"],
    deliverables: [
      "Pruebas sobre autenticación, compra, navegación, visualización y datos dinámicos.",
      "Validación cruzada de contenido, comportamiento y comunicación entre sistemas.",
      "Revisión de consistencia visual y experiencia de usuario en distintos contextos."
    ],
    impact: [
      "Detecta fallas funcionales antes de que escalen a soporte o negocio.",
      "Asegura que la experiencia se mantenga estable al cambiar componentes o integraciones.",
      "Conecta el comportamiento técnico con la percepción del usuario final."
    ]
  },
  {
    id: "bugs",
    title: "Gestión de bugs",
    summary: "Documento defectos de forma accionable para acelerar el cierre.",
    description:
      "Registro bugs con pasos de reproducción, resultado esperado vs actual, clasificación funcional o no funcional, y segmentación frontend/backend. Mi objetivo es que el equipo entienda el riesgo rápido y pueda actuar.",
    evidence: ["Jira", "Severidad", "Reproducibilidad"],
    deliverables: [
      "Documentación clara de defectos con contexto suficiente para reproducir.",
      "Priorización por impacto funcional, visual o de integración.",
      "Seguimiento hasta validar fix y cierre sin regresión."
    ],
    impact: [
      "Disminuye retrabajo entre QA y desarrollo.",
      "Hace visibles riesgos reales en vez de tickets ambiguos.",
      "Mejora la velocidad para confirmar correcciones."
    ]
  },
  {
    id: "regression",
    title: "Regresión",
    summary: "Protejo funcionalidades existentes después de cambios o fixes.",
    description:
      "Después de una corrección o nueva implementación, reviso lo que podría romperse alrededor. La regresión para mí es una validación de confianza, no un checklist automático sin criterio.",
    evidence: ["Flujos críticos", "Validación cruzada", "Confianza release"],
    deliverables: [
      "Revisión de impacto sobre autenticación, catálogo, compra y recuperación de cuenta.",
      "Confirmación de que el fix no introduce efectos secundarios.",
      "Cobertura inteligente basada en riesgo y dependencias."
    ],
    impact: [
      "Evita que un arreglo local degrade la experiencia global.",
      "Da seguridad al equipo antes de desplegar.",
      "Mantiene la estabilidad del producto mientras evoluciona."
    ]
  },
  {
    id: "analysis",
    title: "Análisis funcional",
    summary: "Detecto vacíos, ambigüedades y casos olvidados en historias.",
    description:
      "Reviso historias de usuario y levanto preguntas clave cuando un flujo no está completo o hay inconsistencias. Esto incluye escenarios mixtos, como usuarios con diferentes métodos de login o condiciones de negocio mal cerradas.",
    evidence: ["Historias de usuario", "Riesgos", "Casos no contemplados"],
    deliverables: [
      "Hallazgo temprano de ambigüedades antes de desarrollo o validación final.",
      "Preguntas funcionales que ayudan a cerrar requerimientos.",
      "Mayor alineación entre expectativa de negocio y comportamiento esperado."
    ],
    impact: [
      "Previene bugs nacidos por requerimientos incompletos.",
      "Ahorra ciclos de corrección evitables.",
      "Fortalece la calidad desde el origen del desarrollo."
    ]
  }
];

const Scenarios = [
  {
    id: "recovery",
    label: "Recuperación",
    code: `Feature: Recuperación de cuenta

Scenario: Usuario solicita recuperación con correo registrado
  Given que el usuario está en la pantalla de recuperación
  And existe una cuenta asociada al correo ingresado
  When envía el formulario de recuperación
  Then el sistema debe mostrar un mensaje de confirmación
  And debe enviarse un solo correo transaccional
  And el enlace del correo debe apuntar al entorno correcto`,
    criteria: [
      "Validar que no se dispare más de un correo por solicitud.",
      "Confirmar mensaje funcional sin exponer si el correo existe o no.",
      "Revisar que el enlace del correo apunte al ambiente esperado.",
      "Verificar comportamiento si el servicio de correo responde con error."
    ]
  },
  {
    id: "catalog",
    label: "Catálogo",
    code: `Feature: Visualización de catálogo

Scenario: Usuario navega catálogo en vista responsive
  Given que el usuario ingresa desde un dispositivo móvil
  When visualiza el listado de productos
  Then las cards deben mantenerse completas y legibles
  And las miniaturas no deben deformarse
  And la navegación debe conservar jerarquía visual`,
    criteria: [
      "Confirmar que las cards no se corten en breakpoints críticos.",
      "Validar proporción e integridad visual de imágenes miniatura.",
      "Revisar consistencia entre contenido dinámico y estructura visual.",
      "Asegurar interacción táctil adecuada y sin solapamientos."
    ]
  },
  {
    id: "linking",
    label: "Vinculación",
    code: `Feature: Vinculación de cuentas con métodos distintos de login

Scenario: Usuario intenta acceder con proveedor distinto al original
  Given que el usuario ya tiene una cuenta creada
  And la cuenta fue registrada con un método de autenticación diferente
  When intenta iniciar sesión con otro proveedor
  Then el sistema debe aplicar la regla definida para vinculación
  And debe informar el resultado con claridad
  And no debe generar duplicidad de cuenta`,
    criteria: [
      "Confirmar la regla de negocio para vincular o bloquear acceso.",
      "Verificar que no se creen perfiles duplicados.",
      "Revisar mensajes claros para el usuario final.",
      "Validar consistencia entre backend, sesión y UI."
    ]
  }
];

const KeyContributions = [
  {
    label: "Análisis funcional",
    title: "Detección temprana de riesgos",
    severity: "low",
    summary:
      "Identifico vacíos, ambigüedades y casos no contemplados desde la lectura de historias para evitar retrabajo y errores tardíos.",
    details: [
      "Revisión de requerimientos con mirada funcional y técnica.",
      "Definición de escenarios positivos, negativos y alternos.",
      "Alineación entre expectativa de negocio y comportamiento esperado."
    ]
  },
  {
    label: "Comunicación QA",
    title: "Documentación clara para equipos multidisciplinarios",
    severity: "low",
    summary:
      "Traduzco hallazgos técnicos y funcionales en información accionable para desarrollo, producto y negocio.",
    details: [
      "Redacción precisa de incidencias en Jira.",
      "Pasos para reproducir, esperado vs actual y clasificación.",
      "Seguimiento de fixes hasta validación y cierre."
    ]
  },
  {
    label: "Cobertura integral",
    title: "Validación de producto más allá de la UI",
    severity: "low",
    summary:
      "Valido comportamiento funcional, integraciones, contenido dinámico y experiencia visual para proteger el producto completo.",
    details: [
      "Pruebas sobre frontend, backend, CMS, APIs y correos.",
      "Revisión responsive y consistencia visual.",
      "Validación de regresión ante fixes o nuevas implementaciones."
    ]
  },
  {
    label: "Automatización y mejora",
    title: "Evolución continua del proceso de testing",
    severity: "low",
    summary:
      "Impulso una calidad sostenible combinando pruebas manuales, automatización y seguimiento continuo del riesgo.",
    details: [
      "Uso de Selenium, Cypress, Playwright y Robot Framework.",
      "Apoyo en pruebas de rendimiento con JMeter y k6.",
      "Integración con herramientas y flujos CI/CD."
    ]
  }
];

const WorkflowSteps = [
  {
    step: "01",
    title: "Analizo requerimientos y detecto riesgos",
    text:
      "Reviso historias de usuario, criterios de aceptación, dependencias y reglas de negocio para identificar vacíos, ambigüedades y escenarios no contemplados antes de ejecutar pruebas."
  },
  {
    step: "02",
    title: "Diseño cobertura funcional con intención",
    text:
      "Construyo casos de prueba en BDD/Gherkin con precondiciones, escenarios positivos, negativos y alternos, buscando cobertura real sobre el flujo completo del usuario."
  },
  {
    step: "03",
    title: "Ejecuto validaciones end-to-end",
    text:
      "Valido frontend, backend, integraciones, contenido dinámico, correos, CMS, APIs y comportamiento responsive para asegurar que el producto funcione de forma consistente."
  },
  {
    step: "04",
    title: "Documento hallazgos de forma accionable",
    text:
      "Registro incidencias con pasos para reproducir, resultado esperado vs actual, impacto, contexto funcional y clasificación clara para que desarrollo pueda actuar sin fricción."
  },
  {
    step: "05",
    title: "Valido fixes y protejo la estabilidad",
    text:
      "Confirmo correcciones, ejecuto regresión inteligente alrededor del cambio y verifico que la solución no afecte otras funcionalidades ni degrade la experiencia del usuario final."
  }
];

const State = {
  SelectedStrength: Strengths[0].id,
  SelectedScenario: Scenarios[0].id
};

const ControlList = document.querySelector("#control-list");
const ControlPanel = document.querySelector("#control-panel");
const ScenarioTabs = document.querySelector("#scenario-tabs");
const GherkinCode = document.querySelector("#gherkin-code");
const CriteriaList = document.querySelector("#criteria-list");
const BugGrid = document.querySelector("#bug-grid");
const Timeline = document.querySelector("#timeline");

function renderStrengths() {
  ControlList.innerHTML = Strengths
    .map(
      (Item) => `
        <button class="control-button ${Item.id === State.SelectedStrength ? "active" : ""}" data-id="${Item.id}">
          <strong>${Item.title}</strong>
          <span>${Item.summary}</span>
        </button>
      `
    )
    .join("");

  const CurrentStrength = Strengths.find((Item) => Item.id === State.SelectedStrength);

  ControlPanel.innerHTML = `
    <p class="section-tag">Capacidad activa</p>
    <h3>${CurrentStrength.title}</h3>
    <p>${CurrentStrength.description}</p>

    <div class="meta-row">
      ${CurrentStrength.evidence
        .map(
          (Entry) => `
            <div class="meta-chip">
              <span class="meta-title">${Entry}</span>
            </div>
          `
        )
        .join("")}
    </div>

    <div class="panel-columns">
      <section class="panel-box">
        <span class="meta-title">Lo que entrego</span>
        <ul>
          ${CurrentStrength.deliverables.map((Item) => `<li>${Item}</li>`).join("")}
        </ul>
      </section>
      <section class="panel-box">
        <span class="meta-title">Valor para el equipo</span>
        <ul>
          ${CurrentStrength.impact.map((Item) => `<li>${Item}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;

  ControlList.querySelectorAll(".control-button").forEach((Button) => {
    Button.addEventListener("click", () => {
      State.SelectedStrength = Button.dataset.id;
      renderStrengths();
    });
  });
}

function renderScenarios() {
  ScenarioTabs.innerHTML = Scenarios
    .map(
      (Scenario) => `
        <button class="scenario-tab ${Scenario.id === State.SelectedScenario ? "active" : ""}" data-id="${Scenario.id}">
          ${Scenario.label}
        </button>
      `
    )
    .join("");

  const CurrentScenario = Scenarios.find((Scenario) => Scenario.id === State.SelectedScenario);
  GherkinCode.textContent = CurrentScenario.code;
  CriteriaList.innerHTML = CurrentScenario.criteria.map((Item) => `<li>${Item}</li>`).join("");

  ScenarioTabs.querySelectorAll(".scenario-tab").forEach((Button) => {
    Button.addEventListener("click", () => {
      State.SelectedScenario = Button.dataset.id;
      renderScenarios();
    });
  });
}

function renderBugStories() {
  BugGrid.innerHTML = KeyContributions
    .map(
      (Item) => `
        <article class="bug-card glass-card">
          <div class="bug-topline">
            <span class="bug-label">${Item.label}</span>
          </div>
          <h3>${Item.title}</h3>
          <p>${Item.summary}</p>
          <ul class="bug-detail-list">
            ${Item.details.map((Detail) => `<li>${Detail}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderWorkflow() {
  Timeline.innerHTML = WorkflowSteps
    .map(
      (Item) => `
        <article class="timeline-card">
          <span class="timeline-step">Paso ${Item.step}</span>
          <h3>${Item.title}</h3>
          <p>${Item.text}</p>
        </article>
      `
    )
    .join("");
}

function animateCounters() {
  const Counters = document.querySelectorAll(".counter");

  const Observer = new IntersectionObserver(
    (Entries) => {
      Entries.forEach((Entry) => {
        if (!Entry.isIntersecting) {
          return;
        }

        const Element = Entry.target;
        const TargetValue = Number(Element.dataset.target);
        let CurrentValue = 0;
        const Increment = Math.max(1, Math.ceil(TargetValue / 28));

        const Timer = window.setInterval(() => {
          CurrentValue += Increment;
          if (CurrentValue >= TargetValue) {
            Element.textContent = `${TargetValue}${TargetValue === 100 ? "%" : ""}`;
            window.clearInterval(Timer);
            return;
          }

          Element.textContent = `${CurrentValue}${TargetValue === 100 ? "%" : ""}`;
        }, 38);

        Observer.unobserve(Element);
      });
    },
    { threshold: 0.55 }
  );

  Counters.forEach((Counter) => Observer.observe(Counter));
}

renderStrengths();
renderScenarios();
renderBugStories();
renderWorkflow();
animateCounters();
