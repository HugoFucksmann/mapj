/* eslint-disable no-unused-vars */
import logoFooter from "./assets/RECURSOS/logofooter.png";
import logoheader from "./assets/RECURSOS/logoheader.png";
import landingImg from "./assets/landing.jpg";
import quienesSomos from "./assets/RECURSOS/quienesSomos.png";
import quienesSomosLogo from "./assets/RECURSOS/quienesSomos.png";
import itemBandera from "./assets/RECURSOS/iconobandera.png";
import itemOjo from "./assets/RECURSOS/iconoojo.png";
import itemFlecha from "./assets/RECURSOS/iconoflecha.png";
import logoquienessomos from "./assets/RECURSOS/logoquienessomos.png";

import imgFb from "./assets/RECURSOS/fb.png";
import imgIg from "./assets/RECURSOS/ig.png";
import imgTw from "./assets/RECURSOS/tw.png";
import puenteFooter from "./assets/RECURSOS/puentefooter.png";
import AccordionUsage from "./acordeon";
import MapaReclamos from "./mapaReclamosComp";
import EjesPrincipales from "./ejesPrincipales";
const styles = {
  header: {
    backgroundColor: "#296ec1",
    padding: "20px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: "150px",
    height: "auto",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "Gotham Book, sans-serif",
  },
  section: {
    padding: "40px",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  sectionQS: {
    padding: "10%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  landing: {
    backgroundSize: "cover",
    color: "white",
    textAlign: "center",
  },
  landingText: {
    display: "flex",
    height: "100%",
  },
  quienesSomos: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quienesSomosText: {
    flex: 1,
    marginRight: "20px",
  },
  quienesSomosImage: {
    width: "40%",
    height: "auto",
  },
  ejesPrincipales: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#f5f5f5",
  },
  ejesGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  },
  ejesItem: {
    flex: 1,
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  ejesTitle: {
    backgroundColor: "#296ec1",
    color: "white",
    padding: "10px",
    borderRadius: "5px 5px 0 0",
    marginBottom: "10px",
    fontFamily: "Gotham Bold, sans-serif",
  },
  ejesContent: {
    fontFamily: "Gotham Book, sans-serif",
  },
  mapaReclamos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#f5f5f5",
  },
  mapaContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "1200px",
  },
  mapaImage: {
    width: "50%",
    height: "auto",
    borderRadius: "10px",
    marginRight: "40px",
  },
  mapaInfo: {
    flex: 1,
  },
  mapaTitle: {
    fontFamily: "Gotham Bold, sans-serif",
    color: "#296ec1",
    marginBottom: "20px",
  },
  mapaText: {
    fontFamily: "Gotham Book, sans-serif",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#f94b4b",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontFamily: "Gotham Bold, sans-serif",
  },
  comunicacionSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "white",
  },
  comunicacionContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
  },
  comunicacionInfo: {
    flex: 1,
    marginRight: "40px",
  },
  comunicacionTitle: {
    fontFamily: "Gotham Bold, sans-serif",
    color: "#296ec1",
    marginBottom: "20px",
  },
  comunicacionText: {
    fontFamily: "Gotham Book, sans-serif",
    marginBottom: "20px",
  },
  comunicacionImage: {
    width: "40%",
    height: "auto",
  },
};

const Header = () => (
  <header style={styles.header}>
    <img src={logoheader} alt="Yo Quiero Santa Fe" style={styles.logo} />
    <nav style={styles.nav}>
      <a href="#quienes-somos" style={styles.navLink}>
        Quienes Somos
      </a>
      <a href="#ejes-principales" style={styles.navLink}>
        Ejes Principales
      </a>
      <a href="#mapa-reclamos" style={styles.navLink}>
        Mapa de Reclamos
      </a>
      <a href="#comunicacion" style={styles.navLink}>
        Comunicación
      </a>
    </nav>
  </header>
);

const Landing = () => (
  <section
    id="landing"
    style={{
      height: "90vh",
      ...styles.landing,
      backgroundImage: `url(${landingImg})`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    }}
  >
    <h2
      style={{
        paddingRight: "10%",
        paddingBottom: 60,
        paddingLeft: "10%",
        backgroundColor: "rgba(0, 0, 0, 0.07)",
      }}
    >
      Yo Quiero Santa Fe es una apuesta generacional para liderar los desafíos
      de nuestra ciudad con el proposito de construir una nueva forma de hacer
      las cosas generando consensos.
    </h2>
  </section>
);

const QuienesSomos = () => (
  <section
    id="quienes-somos"
    style={{
      ...styles.sectionQS,
      ...styles.quienesSomos,
      backgroundColor: "#ddd",
    }}
  >
    <div style={styles.quienesSomosText}>
      <h2 style={{ color: "#545454" }}>Quienes Somos</h2>
      <p style={{ color: "#5B5B5B" }}>
        Nos reunimos desde distintos espacios, asociaciones y con diversas
        trayectorias en lo profesional, productivo, empresarial, académico y
        cultural porque creemos que es el momento de que tomemos la posta , de
        dar el salto generacional, para hacer de Santa Fe: Una ciudad
        protagonista. Una ciudad para disfrutar.
      </p>
      <p style={{ color: "#5B5B5B" }}>
        Vinimos a realizar un cambio significativo en la manera de hacer las
        cosas, tomando lo mejor de las experiencias previas e innovando.
      </p>
      <img
        src={logoquienessomos}
        alt="Quienes Somos"
        style={styles.logoFooter}
      />
    </div>
    <img
      src={quienesSomos}
      alt="Quienes Somos"
      style={styles.quienesSomosImage}
    />
  </section>
);

/* const EjesPrincipales = () => (
  <section id="ejes-principales" style={styles.ejesPrincipales}>
    <h2 style={{ fontFamily: "Gotham Bold, sans-serif", marginBottom: "30px" }}>
      Nuestras Principales Líneas de Trabajo
    </h2>
    <div style={styles.ejesGrid}>
      <div style={styles.ejesItem}>
        <img
          src={itemBandera}
          alt="Alumbrado, Barrido, Limpieza y Movilidad"
          style={{ width: "50px", height: "auto" }}
        />
        <h3 style={styles.ejesTitle}>
          Alumbrado, Barrido, Limpieza y Movilidad
        </h3>
        <p style={styles.ejesContent}>
          Trabajamos sobre las necesidades de cada uno de los barrios en el
          cumplimiento de los servicios básicos que debe brindar la
          municipalidad: la puesta en valor de los espacios públicos y de los
          accesos a diferentes medios de movilidad y de transporte público, el
          acceso a los servicios básicos, el mejoramiento de los espacios verdes
          y otros elementos necesarios y estratégicos que permitan una mejora de
          la calidad de vida.
        </p>
      </div>
      <div style={styles.ejesItem}>
        <img
          src={itemOjo}
          alt="Identidad Santafesina"
          style={{ width: "50px", height: "auto" }}
        />
        <h3 style={styles.ejesTitle}>Identidad Santafesina</h3>
        <p style={styles.ejesContent}>
          Los proyectos legislativos en los que trabajamos están enfocados en
          proteger y promover la identidad, costumbres y cultura local,
          reconociendo su importancia como patrimonio vivo. A través de estas
          iniciativas, buscamos fortalecer el tejido comunitario, fomentando la
          preservación y disfrute de nuestras tradiciones, reconociendo a
          diferentes actores culturales, sociales, deportistas e impulsando
          proyectos que fortalezcan el sector turístico y gastronómico de la
          ciudad.
        </p>
      </div>
      <div style={styles.ejesItem}>
        <img
          src={itemFlecha}
          alt="Ambiente"
          style={{ width: "50px", height: "auto" }}
        />
        <h3 style={styles.ejesTitle}>Ambiente</h3>
        <p style={styles.ejesContent}>
          Con el foco en la sostenibilidad ambiental y el disfrute y cuidado de
          nuestros entornos naturales, se promueven diversas iniciativas para el
          uso eficiente de los recursos y de garantizar un entorno saludable
          para hoy y las generaciones futuras. Desde políticas de gestión de
          residuos hasta la promoción de energías renovables y espacios verdes,
          estos proyectos tienen como objetivo transformar la ciudad en un
          modelo de crecimiento urbano con la protección del medio ambiente.
        </p>
      </div>
    </div>
  </section>
); */

const Comunicacion = () => (
  <section id="comunicacion" style={styles.comunicacionSection}>
    <div style={styles.comunicacionContent}>
      <div style={styles.comunicacionInfo}>
        <h2 style={styles.comunicacionTitle}>
          Estar Cerca, Estar en Cada Barrio
        </h2>
        <p style={styles.comunicacionText}>
          Con el objetivo de mejorar la comunicación con las y los vecinos de la
          ciudad hemos creado un canal de comunicación y habilitando un sistema
          de reclamos que recibimos. Esta herramienta nos permite estar + cerca,
          contar nuestro trabajo, y mejorar la participación ciudadana.
        </p>
        <button style={styles.button}>Ir al Canal de Comunicación</button>
      </div>
      <img
        src={appImg}
        alt="Canal de Comunicación"
        style={styles.comunicacionImage}
      />
    </div>
  </section>
);

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#296ec1",
      color: "white",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <img
      src={logoFooter}
      alt="Yo Quiero Santa Fe"
      style={{ width: "150px", height: "auto" }}
    />
    <div>
      <p>Síguenos en redes sociales:</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <img
          src={imgFb}
          alt="Facebook"
          style={{ width: "30px", height: "auto" }}
        />
        <img
          src={imgIg}
          alt="Instagram"
          style={{ width: "30px", height: "auto" }}
        />
        <img
          src={imgTw}
          alt="Twitter"
          style={{ width: "30px", height: "auto" }}
        />
      </div>
    </div>
    <img
      src={puenteFooter}
      alt="Puente"
      style={{ width: "100px", height: "auto" }}
    />
  </footer>
);

const App = () => {
  return (
    <div
      style={{
        fontFamily: "Gotham Book, sans-serif",
        width: "100vw",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <section style={{ maxWidth: 1200 }}>
        <Landing />
        <QuienesSomos />
        <div
          style={{ backgroundColor: "#fff", paddingBottom: 40, paddingTop: 20 }}
        >
          <AccordionUsage />
        </div>

        <EjesPrincipales />
        <MapaReclamos />
        {/*  <Comunicacion /> */}
      </section>
      <Footer />
    </div>
  );
};

export default App;
