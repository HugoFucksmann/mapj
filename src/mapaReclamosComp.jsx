import mapImg from "./assets/RECURSOS/mapa.png";
import appImg from "./assets/RECURSOS/app.png";

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "sans-serif",
    color: "#000",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    marginBottom: "3rem",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "50%",
    maxWidth: "400px",
  },
  imageShadowTop: {
    position: "absolute",
    top: "0.5rem",
    left: "0.5rem",
    width: "100%",
    height: "100%",
    // backgroundColor: "#ef4444",
  },
  imageShadowBottom: {
    position: "absolute",
    top: "-0.5rem",
    right: "-0.5rem",
    width: "100%",
    height: "100%",
    // backgroundColor: "#ef4444",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "0.5rem",
    position: "relative",
    zIndex: 10,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end", // Esto alineará los elementos a la derecha
    width: "50%",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.125rem",
    marginBottom: "1.5rem",
  },
  button: {
    backgroundColor: "#ef4444",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    alignSelf: "flex-start",
    cursor: "pointer",
    transition: "background-color 0.3s",
    border: "none",
    alignSelf: "flex-end",
  },
  bottomSection: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    padding: "2rem",
    alignItems: "center",
  },
  bottomContent: {
    color: "black",
    width: "50%",
  },
  bottomTitle: {
    fontSize: "2.25rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  bottomText: {
    marginBottom: "1.5rem",
  },
  blueButton: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
    border: "none",
  },
};

export default function MapaReclamos() {
  return (
    <div id="mapa-reclamos" style={styles.container}>
      <div style={styles.section}>
        <div style={styles.imageWrapper}>
          {/*  <div style={styles.imageShadowTop} /> */}
          <img
            src={mapImg}
            width={400}
            height={400}
            alt="Mapa de reclamos"
            style={styles.image}
          />
        </div>
        <div style={styles.content}>
          <h1 style={styles.title}>
            MAPA INTERACTIVO Y COLABORATIVO DE RECLAMOS
          </h1>
          <p style={styles.subtitle}></p>
          <button style={styles.button}>Ver más</button>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <div style={styles.bottomContent}>
          <h2 style={styles.bottomTitle}>
            ESTAR CERCA,
            <br />
            ESTAR EN CADA
            <br />
            BARRIO
          </h2>
          <div style={{ borderBottom: "2px solid black", width: 120 }}></div>
          <p style={styles.bottomText}>
            Con el objetivo de mejorar la comunicación con las y los vecinos de
            la ciudad hemos creado un canal de comunicación y visibilización de
            los reclamos que recibimos. Esta herramienta nos permite estar +
            cerca, contar nuestro trabajo, y mejorar la participación ciudadana.
          </p>
          <button
            onClick={() =>
              (location.href =
                "https://linktr.ee/jormudallelentubarrio?fbclid=PAZXh0bgNhZW0CMTEAAab9mVHD95DBwgW5QOzeul_A7PmJPa-ITCafIOUVaAq4qOO0l6oK_n6oI1Q_aem_07rDlCYwEZ-I04IQHPCCYg")
            }
            style={styles.blueButton}
          >
            IR AL CANAL DE COMUNICACIÓN
          </button>
        </div>
        <div style={styles.imageWrapper}>
          <div style={styles.imageShadowBottom} />
          <img
            src={appImg}
            width={400}
            height={400}
            alt="Smartphone con aplicación"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
