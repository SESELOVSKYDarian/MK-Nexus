import { useRef } from 'react';
import Aurora from './components/Aurora.jsx';
import ASCIIText from './components/ASCIIText.jsx';
import CardSwap, { Card } from './components/CardSwap.jsx';
import BounceCards from './components/BounceCards.jsx';
import Crosshair from './components/Crosshair.jsx';
import './App.css';

const services = [
  {
    icon: '🧠',
    title: 'Inteligencia Artificial',
    description:
      'Modelos predictivos, asistentes virtuales y soluciones de visión computacional que aprenden con tus datos y se adaptan a tu operación.'
  },
  {
    icon: '📱',
    title: 'Desarrollo de Software',
    description:
      'Aplicaciones móviles, plataformas web y sistemas integrados que combinan UX impecable con automatización inteligente.'
  },
  {
    icon: '⚙️',
    title: 'Hardware y Robótica',
    description:
      'Sensores, robots colaborativos y dispositivos a medida listos para integrarse con tu infraestructura digital.'
  }
];

const reasons = [
  {
    title: 'Innovación real basada en I+D',
    copy:
      'Laboratorios propios, procesos de experimentación continua y alianzas con centros de investigación para llevar ideas a prototipos en semanas.'
  },
  {
    title: 'Soluciones escalables y personalizadas',
    copy:
      'Arquitecturas modulares, APIs seguras y despliegues multi-cloud que acompañan el crecimiento de tu empresa sin fricciones.'
  },
  {
    title: 'Integración entre hardware y software',
    copy:
      'Un mismo equipo lidera firmware, controladores, aplicaciones y analítica, logrando ecosistemas conectados desde el chip hasta la nube.'
  },
  {
    title: 'Equipo apasionado por el futuro',
    copy:
      'Ingenieras, científicos de datos y especialistas en experiencia listos para co-crear contigo soluciones centradas en las personas.'
  }
];

const projectImages = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
];

const projectTransforms = [
  'rotate(7deg) translate(-160px)',
  'rotate(2deg) translate(-80px)',
  'rotate(-2deg)',
  'rotate(3deg) translate(80px)',
  'rotate(-5deg) translate(160px)'
];

export default function App() {
  const objectiveRef = useRef(null);

  return (
    <div className="app">
      <Aurora colorStops={["#007BFF", "#0A192F", "#00FF9F"]} blend={0.5} amplitude={1.05} speed={0.45} />

      <header className="hero" id="inicio">
        <div className="hero__overlay">
          <div className="hero__copy">
            <p className="hero__eyebrow">MK Nexus</p>
            <h1 className="hero__title">
              Impulsamos el futuro con inteligencia artificial, desarrollo avanzado y robótica de nueva generación.
            </h1>
            <p className="hero__lead">
              En MK Nexus creamos soluciones inteligentes que transforman industrias y potencian el progreso humano. Conecta tu visión con algoritmos, software y hardware que ya están listos para despegar.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#servicios">
                Descubre nuestros servicios
              </a>
              <a className="btn btn--ghost" href="#contacto">
                Contáctanos
              </a>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <ASCIIText text="MK NEXUS" enableWaves asciiFontSize={9} textFontSize={220} textColor="#ffffff" planeBaseHeight={9} />
          </div>
        </div>
      </header>

      <main className="layout">
        <section id="servicios" className="section section--services">
          <div className="section__intro">
            <span className="section__eyebrow">🤖 Sección 2</span>
            <h2>Qué hacemos</h2>
            <p>
              Diseñamos soluciones de IA, software y robótica que resuelven desafíos concretos. Cada iniciativa nace de la combinación entre estrategia, creatividad tecnológica y validación con usuarios reales.
            </p>
          </div>
          <div className="services__grid">
            {services.map(service => (
              <article key={service.title} className="service-card">
                <div className="service-card__icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="vision" className="section section--vision">
          <div className="section__intro">
            <span className="section__eyebrow">💡 Sección 3</span>
            <h2>Nuestra visión</h2>
            <p>
              En MK Nexus creemos que el futuro no se espera, se construye. Nuestra misión es fusionar la inteligencia artificial, el software y la robótica para crear soluciones que aceleren la innovación global.
            </p>
          </div>
          <div className="vision__grid">
            <div className="vision__copy">
              <p>
                Nos enfocamos en proyectos con impacto real: automatizamos cadenas logísticas, potenciamos la salud con diagnósticos aumentados y desarrollamos robots que colaboran con las personas. Cada entrega combina velocidad, confiabilidad y visión estratégica.
              </p>
              <p>
                El objetivo es simple: ayudarte a lanzar productos inteligentes que eleven tu competitividad hoy y preparen a tu organización para lo que viene.
              </p>
            </div>
            <div className="vision__objective" ref={objectiveRef}>
              <Crosshair color="#00FFFF" containerRef={objectiveRef} />
              <div className="vision__objective-card">
                <h3>Objetivo MK Nexus</h3>
                <p>
                  Combinar creatividad, ingeniería y ética para construir ecosistemas tecnológicos confiables que amplifiquen la capacidad humana en cada industria con la que colaboramos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="porque" className="section section--reasons">
          <div className="section__intro">
            <span className="section__eyebrow">👥 Sección 4</span>
            <h2>Por qué elegirnos</h2>
            <p>
              Trabajamos como socios tecnológicos, co-creando contigo para que cada entrega tenga resultados tangibles desde el primer sprint.
            </p>
          </div>
          <div className="reasons__deck">
            <CardSwap cardDistance={70} verticalDistance={75} delay={4500} width={420} height={320}>
              {reasons.map(reason => (
                <Card key={reason.title} className="reason-card">
                  <h3>{reason.title}</h3>
                  <p>{reason.copy}</p>
                </Card>
              ))}
            </CardSwap>
          </div>
        </section>

        <section id="proyectos" className="section section--projects">
          <div className="section__intro">
            <span className="section__eyebrow">🧭 Sección 5</span>
            <h2>Proyectos y casos de éxito</h2>
            <p>
              Desde prototipos visionarios hasta despliegues productivos, nuestras soluciones ya impulsan experiencias inteligentes.
            </p>
          </div>
          <div className="projects__grid">
            <div className="projects__visual">
              <BounceCards
                images={projectImages}
                transformStyles={projectTransforms}
                containerWidth={520}
                containerHeight={320}
                animationDelay={0.6}
                animationStagger={0.08}
              />
            </div>
            <ul className="projects__list">
              <li>
                <h3>Asistente IA para logística inteligente</h3>
                <p>
                  Priorización dinámica de rutas y abastecimiento predictivo que reduce tiempos de entrega hasta un 28%.
                </p>
              </li>
              <li>
                <h3>Sistema robótico de monitoreo ambiental</h3>
                <p>
                  Robots autónomos con sensores de visión térmica y análisis en tiempo real para zonas industriales críticas.
                </p>
              </li>
              <li>
                <h3>App de control para dispositivos inteligentes</h3>
                <p>
                  Plataforma móvil que centraliza IoT doméstico con analítica energética y asistentes conversacionales.
                </p>
              </li>
              <li>
                <h3>Experiencia inmersiva Iron Man</h3>
                <p>
                  Visual interactivo inspirado en la interfaz de Tony Stark que puedes explorar en nuestro laboratorio digital.
                  <a href="/ironman.html" className="projects__link">
                    Ver Iron Man Lab
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="contacto" className="section section--contact">
          <div className="section__intro">
            <span className="section__eyebrow">📞 Sección 6</span>
            <h2>Conectemos ideas para crear el futuro</h2>
            <p>
              Cuéntanos tu reto y coordinemos una sesión estratégica para trazar el roadmap tecnológico.
            </p>
          </div>
          <div className="contact__grid">
            <form className="contact__form">
              <label className="form__field">
                <span>Nombre</span>
                <input type="text" name="name" placeholder="Tu nombre" required />
              </label>
              <label className="form__field">
                <span>Email</span>
                <input type="email" name="email" placeholder="tu@empresa.com" required />
              </label>
              <label className="form__field">
                <span>Mensaje</span>
                <textarea name="message" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
              </label>
              <button type="submit" className="btn btn--primary">
                Enviar mensaje
              </button>
            </form>
            <div className="contact__details">
              <h3>Contacto directo</h3>
              <ul>
                <li>
                  <span className="label">Email</span>
                  <a href="mailto:hola@mknexus.ai">hola@mknexus.ai</a>
                </li>
                <li>
                  <span className="label">Teléfono</span>
                  <a href="tel:+573001234567">+57 300 123 4567</a>
                </li>
                <li>
                  <span className="label">Redes</span>
                  <div className="contact__links">
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                      YouTube
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                      X / Twitter
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
