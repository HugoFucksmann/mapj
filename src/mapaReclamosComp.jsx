import React from "react";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  mapSection: {
    backgroundColor: "#fff",
    padding: "20px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "2.5em",
    marginBottom: "20px",
  },
  mapContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "20px",
  },
  mapImageWrapper: {
    position: "relative",
    marginRight: "20px",
    width: "300px",
    height: "300px",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    boxShadow: "-10px -10px 0 #ff4d4d",
  },
  verMasBtn: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "1em",
    cursor: "pointer",
    height: "fit-content",
  },
  infoSection: {
    display: "flex",
    padding: "20px",
    position: "relative",
  },
  textContent: {
    flex: 1,
    paddingRight: "20px",
  },
  subtitle: {
    fontSize: "2em",
    color: "black",
    marginBottom: "20px",
  },
  paragraph: {
    color: "black",
    marginBottom: "20px",
  },
  canalBtn: {
    backgroundColor: "#4d79ff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "1em",
    cursor: "pointer",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "300px",
    height: "400px",
  },
  phoneImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    zIndex: 1,
  },
  backgroundBox: {
    position: "absolute",
    top: "-20px",
    left: "20px",
    right: "-20px",
    bottom: "20px",
    backgroundColor: "#ff4d4d",
    zIndex: 0,
  },
};

export default function MapaReclamos() {
  return (
    <div style={styles.container}>
      <div style={styles.mapSection}>
        <h1 style={styles.title}>MAPA DE RECLAMOS</h1>
        <div style={styles.mapContainer}>
          <div style={styles.mapImageWrapper}>
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Mapa de reclamos"
              style={styles.mapImage}
            />
          </div>
          <button style={styles.verMasBtn}>Ver más</button>
        </div>
        <p style={styles.paragraph}>INFO BREVE SOBRE ESTO SFHDSKJFLSAKFLDSM</p>
      </div>
      <div style={styles.infoSection}>
        <div style={styles.textContent}>
          <h2 style={styles.subtitle}>
            ESTAR CERCA,
            <br />
            ESTAR EN CADA
            <br />
            BARRIO
          </h2>
          <p style={styles.paragraph}>
            Con el objetivo de mejorar la comunicación con las y los vecinos de
            la ciudad hemos creado un canal de comunicación y visibilización de
            los reclamos que recibimos. Esta herramienta nos permite estar +
            cerca, contar nuestro trabajo, y mejorar la participación ciudadana.
          </p>
          <button style={styles.canalBtn}>IR AL CANAL DE COMUNICACIÓN</button>
        </div>
        <div style={styles.imageContainer}>
          <div style={styles.backgroundBox}></div>
          <img
            src="/placeholder.svg?height=400&width=300"
            alt="Smartphone con aplicación"
            style={styles.phoneImage}
          />
        </div>
      </div>
    </div>
  );
}
