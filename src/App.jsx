import Aurora from './components/Aurora.jsx';
import ASCIIText from './components/ASCIIText.jsx';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Aurora
        colorStops={["#D4AF37", "#000000", "#39FF14"]}
        blend={0.55}
        amplitude={1.1}
        speed={0.5}
      />
      <main className="app__content">
        <section className="intro">
          <p className="intro__eyebrow">MK Nexus</p>
          <h1 className="intro__title">Inteligencia creativa impulsada por energía cósmica</h1>
          <p className="intro__lead">
            Exploramos experiencias inmersivas impulsadas por visuales reactivos y tecnología 3D.
            Descubre cómo fusionamos datos, arte y presencia en tiempo real para activar nuevas formas de interacción.
          </p>
          <div className="intro__cta">
            <a className="intro__link" href="#explorar">
              Comenzar la misión
            </a>
            <span className="intro__note">Desplázate para revelar más señales.</span>
          </div>
        </section>
        <div className="ascii-wrapper" aria-hidden="true">
          <ASCIIText text="hello_world" enableWaves asciiFontSize={8} />
        </div>
      </main>
    </div>
  );
}
