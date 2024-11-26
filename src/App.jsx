import logoheader from "./assets/RECURSOS/logoheader.png";
import landingImg from "./assets/landing.jpg";
import AccordionUsage from "./acordeon";
import MapaReclamos from "./mapaReclamosComp";
import EjesPrincipales from "./ejesPrincipales";
import Footer from "./footer";
import QuienesSomos from "./quienesSomos";
import Particles from "./p2";

const styles = {
  header: {
    backgroundColor: "#296ec1",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    paddingLeft: 20,
    paddingRight: 40,
    boxSizing: "border-box",
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
      {/*  <a href="#comunicacion" style={styles.navLink}>
        Contacto
      </a> */}
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
      width: "100%",
    }}
  >
    <h2
      style={{
        paddingRight: "10%",
        paddingBottom: 60,
        paddingLeft: "10%",
        backgroundColor: "rgba(0, 0, 0, 0.07)",
        maxWidth: 900,
      }}
    >
      Yo Quiero Santa Fe es una apuesta generacional para liderar los desafíos
      de nuestra ciudad con el proposito de construir una nueva forma de hacer
      las cosas generando consensos.
    </h2>
  </section>
);

/* const QuienesSomos = () => (
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
); */

const App = () => {
  return <Particles />;
};

export default App;
