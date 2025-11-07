import { useEffect, useMemo, useRef, useState } from "react";
import {
  BrainCircuit,
  Code2,
  Bot,
  Home,
  Star,
  Settings,
  Briefcase,
  Mail as MailIcon,
  Cpu,
  Radio,
} from "lucide-react";
import Aurora from "./components/Aurora.jsx";
import ASCIIText from "./components/ASCIIText.jsx";
import BounceCards from "./components/BounceCards.jsx";
import Crosshair from "./components/Crosshair.jsx";
import InfiniteMenu from "./components/InfiniteMenu.jsx";
import DecryptedText from "./components/DecryptedText.jsx";
import Dock from "./components/Dock.jsx";
import "./App.css";

const services = [
  {
    icon: BrainCircuit,
    title: "Inteligencia Artificial",
    description:
      "Modelos predictivos, asistentes virtuales y visión computacional que aprenden de tus datos para anticipar decisiones clave.",
  },
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description:
      "Aplicaciones móviles, plataformas web y sistemas integrados que combinan experiencias fluidas con automatización inteligente.",
  },
  {
    icon: Bot,
    title: "Hardware y Robótica",
    description:
      "Sensores, robots colaborativos y dispositivos conectados listos para integrarse con tu infraestructura digital.",
  },
];

const reasonPoints = [
  "Innovación real basada en I+D",
  "Soluciones escalables y personalizadas",
  "Hardware y software integrados",
  "Equipo apasionado por el futuro",
];

const reasonItems = [
  {
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    link: "#vision",
    title: "Laboratorio de I+D",
    description:
      "Experimentación continua con IA aplicada para iterar en semanas.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=900&q=80",
    link: "#servicios",
    title: "Arquitecturas escalables",
    description: "Microservicios seguros listos para crecer contigo.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092160607-7e0cdfbb6792?auto=format&fit=crop&w=900&q=80",
    link: "#proyectos",
    title: "Robótica inteligente",
    description: "Dispositivos autónomos que conectan campo y nube.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    link: "#contacto",
    title: "Equipo multidisciplinario",
    description: "Ingeniería, diseño y estrategia alineadas a tu visión.",
  },
];

const projectImages = [
  `${import.meta.env.BASE_URL}media/jarvis.jpg`,
  `${import.meta.env.BASE_URL}media/ironmancascomi.jpg`,
];

const ironmanPageHref = `${import.meta.env.BASE_URL}ironman.html`;
const ironmanIconSrc = `${import.meta.env.BASE_URL}media/iron-man-icon-seeklogo.png`;

const projectTransforms = [
  "rotate(6deg) translate(-150px)",
  "rotate(1deg) translate(-80px)",
  "rotate(-2deg)",
  "rotate(4deg) translate(80px)",
  "rotate(-5deg) translate(150px)",
];

export default function App() {
  const objectiveRef = useRef(null);
  const [objectiveVisible, setObjectiveVisible] = useState(false);

  useEffect(() => {
    const animatedNodes = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedNodes.forEach((node) => observer.observe(node));

    return () => {
      animatedNodes.forEach((node) => observer.unobserve(node));
    };
  }, []);

  const dockItems = useMemo(
    () => [
      {
        icon: <Home size={18} />,
        label: "Inicio",
        onClick: () =>
          document
            .querySelector("#inicio")
            ?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        icon: <Star size={18} />,
        label: "Visión",
        onClick: () =>
          document
            .querySelector("#vision")
            ?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        icon: <Settings size={18} />,
        label: "Servicios",
        onClick: () =>
          document
            .querySelector("#servicios")
            ?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        icon: (
          <img
            src={ironmanIconSrc}
            alt=""
            width="18"
            height="18"
            aria-hidden="true"
          />
        ),
        label: "Iron Man",
        onClick: () => {
          const targetUrl = new URL(ironmanPageHref, window.location.origin);
          window.location.href = targetUrl.toString();
        },
      },
      {
        icon: <Briefcase size={18} />,
        label: "Proyectos",
        onClick: () =>
          document
            .querySelector("#proyectos")
            ?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        icon: <MailIcon size={18} />,
        label: "Contacto",
        onClick: () =>
          document
            .querySelector("#contacto")
            ?.scrollIntoView({ behavior: "smooth" }),
      },
    ],
    [ironmanPageHref, ironmanIconSrc]
  );

  return (
    <div className="app">
      <Aurora
        colorStops={["#007BFF", "#0A192F", "#00FF9F"]}
        blend={0.5}
        amplitude={1.05}
        speed={0.45}
      />

      <header className="hero" id="inicio">
        <div className="hero__visual" aria-hidden="true">
          <ASCIIText
            text="MK NEXUS"
            enableWaves
            asciiFontSize={10}
            textFontSize={240}
            textColor="#ffffff"
            planeBaseHeight={12}
          />
          <div className="hero__visual-gradient" />
        </div>
        <div className="hero__overlay">
          <div className="hero__copy" data-animate>
            <p className="hero__eyebrow">MK Nexus</p>
            <h1 className="hero__title">
              Impulsamos el futuro con inteligencia artificial, desarrollo
              avanzado y robótica de nueva generación.
            </h1>
            <p className="hero__lead">
              En MK Nexus creamos soluciones inteligentes que transforman
              industrias y potencian el progreso humano. Conecta tu visión con
              algoritmos, software y hardware listos para despegar.
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
        </div>
      </header>

      <main className="layout">
        <section id="servicios" className="section section--services">
          <div className="section__intro" data-animate>
            <h2>Qué hacemos</h2>
            <p>
              Diseñamos soluciones de IA, software y robótica que resuelven
              desafíos concretos. Cada iniciativa combina estrategia,
              creatividad tecnológica y validación con usuarios reales.
            </p>
          </div>
          <div className="services__grid" data-animate>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-card">
                  <div className="service-card__icon" aria-hidden="true">
                    <Icon size={28} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="vision" className="section section--vision">
          <div className="section__intro" data-animate>
            <h2>Nuestra visión</h2>
            <p>
              En MK Nexus creemos que el futuro no se espera, se construye.
              Nuestra misión es fusionar la inteligencia artificial, el software
              y la robótica para acelerar la innovación global.
            </p>
          </div>
          <div className="vision__grid">
            <div className="vision__copy" data-animate>
              <p>
                Nos enfocamos en proyectos con impacto real: automatizamos
                cadenas logísticas, potenciamos la salud con diagnósticos
                aumentados y desarrollamos robots que colaboran con las
                personas.
              </p>
              <p>
                Nuestra meta es ayudarte a lanzar productos inteligentes que
                eleven tu competitividad hoy y preparen a tu organización para
                lo que viene.
              </p>
            </div>
            <div className="vision__objective" ref={objectiveRef} data-animate>
              <Crosshair color="#00FF9F" containerRef={objectiveRef} />
              <button
                type="button"
                className="vision__objective-trigger"
                onMouseEnter={() => setObjectiveVisible(true)}
                onMouseLeave={() => setObjectiveVisible(false)}
                onFocus={() => setObjectiveVisible(true)}
                onBlur={() => setObjectiveVisible(false)}
              >
                Objetivo
              </button>
              <span
                className={`vision__objective-reveal ${
                  objectiveVisible ? "is-visible" : ""
                }`}
              >
                Tecnología que impulsa
              </span>
            </div>
          </div>
        </section>

        {/* <section id="porque" className="section section--reasons">
          <div className="reasons__immersive">
            <InfiniteMenu items={reasonItems} />
          </div>
          <div className="reasons__content" data-animate>
            <DecryptedText
              text="Por qué elegirnos"
              animateOn="view"
              revealDirection="center"
              parentClassName="reasons__title"
              className="reasons__title--revealed"
              encryptedClassName="reasons__title--scrambled"
              sequential
            />
            <p>
              Trabajamos como socios tecnológicos para co-crear experiencias con resultados tangibles desde el primer sprint.
            </p>
            <ul className="reasons__list">
              {reasonPoints.map(point => (
                <li key={point}>
                  <DecryptedText
                    text={point}
                    animateOn="view"
                    revealDirection="start"
                    sequential
                    parentClassName="reasons__point"
                    className="reasons__point--revealed"
                    encryptedClassName="reasons__point--scrambled"
                    speed={70}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section> */}

        <section id="proyectos" className="section section--projects">
          <div className="section__intro" data-animate>
            <h2>Proyectos y casos de éxito</h2>
            <p>
              Desde prototipos visionarios hasta despliegues productivos,
              nuestras soluciones ya impulsan experiencias inteligentes.
            </p>
          </div>
          <div className="projects__grid">
            <div className="projects__visual" data-animate>
              <BounceCards
                images={projectImages}
                transformStyles={projectTransforms}
                containerWidth={520}
                containerHeight={320}
                animationDelay={0.6}
                animationStagger={0.08}
              />
            </div>
            <ul className="projects__list" data-animate>
              <li>
                <h3>Asistente IA para logística inteligente</h3>
                <p>Puede ejecutar y manejar la PC a voz.</p>
              </li>
              <li>
                <h3>Experiencia inmersiva Iron Man</h3>
                <p>
                  Visual interactivo inspirado en la interfaz de Tony Stark que
                  puedes explorar en nuestro laboratorio digital.
                  <a href={ironmanPageHref} className="projects__link">
                    Ver Iron Man Lab
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="contacto" className="section section--contact">
          <div className="section__intro" data-animate>
            <h2>Conectemos ideas para crear el futuro</h2>
            <p>
              Cuéntanos tu reto y coordinemos una sesión estratégica para trazar
              el roadmap tecnológico.
            </p>
          </div>
          <div className="contact__grid">
            <form className="contact__form" data-animate>
              <label className="form__field">
                <span>Nombre</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />
              </label>
              <label className="form__field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@empresa.com"
                  required
                />
              </label>
              <label className="form__field">
                <span>Mensaje</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                ></textarea>
              </label>
              <button type="submit" className="btn btn--primary">
                Enviar mensaje
              </button>
            </form>
            <div className="contact__details" data-animate>
              <h3>Contacto directo</h3>
              <ul>
                <li>
                  <span className="label">
                    <MailIcon size={18} aria-hidden="true" /> Email
                  </span>
                  <a href="mailto:hola@mknexus.ai">hola@mknexus.ai</a>
                </li>
                <li>
                  <span className="label">
                    <Radio size={18} aria-hidden="true" /> Teléfono
                  </span>
                  <a href="tel:+573001234567">+57 300 123 4567</a>
                </li>
                <li>
                  <span className="label">
                    <Cpu size={18} aria-hidden="true" /> Redes
                  </span>
                  <div className="contact__links">
                    <a
                      href="https://www.linkedin.com/in/darianseselovsky/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.youtube.com/@mk_nexus"
                      target="_blank"
                      rel="noreferrer"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://www.instagram.com/dariansese/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Dock items={dockItems} />
    </div>
  );
}
