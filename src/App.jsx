import logoheader from "./assets/RECURSOS/logoheader.png";

import AccordionUsage from "./acordeon";
import MapaReclamos from "./mapaReclamosComp";
import EjesPrincipales from "./ejesPrincipales";
import Footer from "./footer";
import Carousel from "./carrousel";

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

const App = () => {
  return (
    <div
      style={{
        fontFamily: "Gotham Book, sans-serif",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Carousel />
      <section
        style={{
          maxWidth: 1400,
          paddingRight: "8%",
          paddingLeft: "8%",
          backgroundColor: "#fff",
        }}
      >
        <AccordionUsage />
        <EjesPrincipales />
        <MapaReclamos />
      </section>
      <Footer />
      <div
        style={{
          display: "flex",
          padding: 10,
          backgroundColor: "#296EC1",
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        © YO QUIERO SANTA FE. Todos los derechos reservados
      </div>
    </div>
  );
};

export default App;
