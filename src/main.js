
import "./style.css";

const recore = {
  name: "VENOM RE:CORE",
  fullName: "Enterprise Reengineering & Reconstruction Engine",
  classification: "SHELBY PREDATOR / ENTERPRISE TRANSFORMATION",
  version: "1.0.0",
  status: "ONLINE",

  mission:
    "Understand the existing. Reengineer the architecture. Build what comes next.",

  metrics: [
    { label: "SYSTEMS ASSESSED", value: 128, unit: "" },
    { label: "ARCHITECTURE INDEX", value: 96.8, unit: "%" },
    { label: "PROCESS EFFICIENCY", value: 91.4, unit: "%" },
    { label: "VALIDATION SCORE", value: 98.2, unit: "%" }
  ],

  divisions: [
    {
      id: "01",
      name: "RECON",
      title: "SYSTEM DISCOVERY",
      description:
        "Maps existing infrastructure, software, processes, dependencies and operational conditions."
    },
    {
      id: "02",
      name: "DECONSTRUCT",
      title: "SYSTEM ANALYSIS",
      description:
        "Breaks existing systems into components, layers, interfaces and dependencies."
    },
    {
      id: "03",
      name: "REENGINEER",
      title: "ARCHITECTURE REDESIGN",
      description:
        "Develops improved system architectures, workflows and technical specifications."
    },
    {
      id: "04",
      name: "REBUILD",
      title: "IMPLEMENTATION",
      description:
        "Coordinates the reconstruction and integration of approved system components."
    },
    {
      id: "05",
      name: "VALIDATE",
      title: "QUALITY ASSURANCE",
      description:
        "Tests reconstructed systems against requirements, performance and security criteria."
    },
    {
      id: "06",
      name: "EVOLVE",
      title: "CONTINUOUS IMPROVEMENT",
      description:
        "Captures verified outcomes and manages future improvement cycles."
    }
  ],

  workflow: [
    "INGEST EXISTING SYSTEM",
    "DISCOVER ARCHITECTURE",
    "MAP COMPONENTS AND DEPENDENCIES",
    "IDENTIFY PERFORMANCE GAPS",
    "DESIGN NEW ARCHITECTURE",
    "SUBMIT FOR HUMAN APPROVAL",
    "EXECUTE RECONSTRUCTION",
    "TEST AND VALIDATE",
    "REGISTER NEW SYSTEM BASELINE"
  ],

  integrations: [
    "ELEANOR",
    "ZEUS",
    "TITAN",
    "ARIES",
    "KRONOS",
    "OMEGA",
    "APEX",
    "VCON",
    "VEME"
  ]
};

function render() {
  document.querySelector("#app").innerHTML = `
    <main class="recore">

      <header class="topbar">
        <div class="brand">
          <div class="brand-icon">R</div>
          <div>
            <h2>VENOM <span>RE:CORE</span></h2>
            <small>THE SHELBY PREDATOR ENTERPRISE</small>
          </div>
        </div>

        <div class="status">
          <span class="pulse"></span>
          SYSTEM ONLINE
        </div>
      </header>

      <section class="hero">
        <div class="eyebrow">
          ${recore.classification}
        </div>

        <h1>RE<span>:</span>CORE</h1>

        <h2>${recore.fullName}</h2>

        <p>${recore.mission}</p>

        <div class="hero-line"></div>

        <div class="hero-meta">
          <span>ENGINE ${recore.version}</span>
          <span>REENGINEERING DIVISION</span>
          <span>VENOM ARCHITECTURE</span>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div>
            <small>01 / TRANSFORMATION INTELLIGENCE</small>
            <h2>RE:CORE OVERVIEW</h2>
          </div>
          <span class="live">DEMO ENVIRONMENT</span>
        </div>

        <div class="metrics">
          ${recore.metrics.map((m, i) => `
            <article class="metric">
              <small>${m.label}</small>
              <div class="metric-value">
                ${m.value}${m.unit}
              </div>
              <div class="bar">
                <div style="width:${typeof m.value === "number" ? Math.min(m.value, 100) : 0}%"></div>
              </div>
              <small class="metric-foot">
                DEMO INDICATOR / ${String(i + 1).padStart(2, "0")}
              </small>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div>
            <small>02 / SIX DIVISION ARCHITECTURE</small>
            <h2>THE RE:CORE ENGINE</h2>
          </div>
        </div>

        <div class="divisions">
          ${recore.divisions.map(d => `
            <article class="division">
              <div class="division-top">
                <span>${d.id}</span>
                <span class="division-indicator">◆</span>
              </div>
              <h3>${d.name}</h3>
              <small>${d.title}</small>
              <p>${d.description}</p>
              <div class="division-line"></div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div>
            <small>03 / RECONSTRUCTION LIFECYCLE</small>
            <h2>TRANSFORMATION PROTOCOL</h2>
          </div>
        </div>

        <div class="workflow">
          ${recore.workflow.map((step, i) => `
            <div class="workflow-step">
              <span class="step-number">
                ${String(i + 1).padStart(2, "0")}
              </span>
              <p>${step}</p>
              <span class="step-mark">
                ${i === 5 ? "◆" : "✓"}
              </span>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div>
            <small>04 / ENTERPRISE CONNECTIVITY</small>
            <h2>VENOM INTEGRATION NETWORK</h2>
          </div>
        </div>

        <div class="network">
          ${recore.integrations.map(name => `
            <div class="node">
              <span class="node-dot"></span>
              ${name}
            </div>
          `).join("")}
        </div>
      </section>

      <section class="closing">
        <div class="closing-symbol">R</div>
        <h2>REBUILD THE FOUNDATION.</h2>
        <h2>REDEFINE THE POSSIBLE.</h2>
        <p>
          EXISTING SYSTEMS ARE THE STARTING POINT.
          TRANSFORMATION IS THE MISSION.
        </p>
      </section>

      <footer>
        <div class="footer-logo">
          VENOM <span>RE:CORE</span>
        </div>
        <p>SHELBY PREDATOR ENTERPRISE</p>
        <small>REENGINEERING / RECONSTRUCTION / EVOLUTION</small>
        <small>VERSION ${recore.version}</small>
      </footer>

    </main>
  `;
}

render();

