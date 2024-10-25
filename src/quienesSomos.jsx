import { useState } from "react";

import a from "./assets/RECURSOS/quienesSomos.png";
import b from "./assets/RECURSOS/logoquienessomos.png";

const ArrowBot = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="34px"
    viewBox="0 0 24 24"
    width="34px"
    fill="#000"
  >
    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
  </svg>
);

const ArrowTop = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="34px"
    viewBox="0 0 24 24"
    width="34px"
    fill="#000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
  </svg>
);

const styles = {
  section: {
    backgroundColor: "#ddd",
    padding: "24px",
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    gap: "32px",
  },
  contentWrapper: {
    flex: "1 1 60%",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    textAlign: "left",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#545454",
  },
  toggleIcon: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#545454",
  },
  content: {
    marginTop: "16px",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
  },
  paragraph: {
    color: "#5B5B5B",
    marginBottom: "16px",
  },
  logo: {
    maxWidth: "200px",
    height: "auto",
    marginTop: "16px",
  },
  imageWrapper: {
    flex: "1 1 40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  mainImage: {
    maxWidth: "100%",
    height: "auto",
    maxHeight: "420px",
  },
};

function QuienesSomos({ logoquienessomos, quienesSomos }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <section id="quienes-somos" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          <button
            onClick={toggleExpand}
            style={styles.button}
            aria-expanded={isExpanded}
            aria-controls="quienes-somos-content"
          >
            <h2 style={styles.title}>Quienes Somos</h2>
            <span style={styles.toggleIcon} aria-hidden="true">
              {isExpanded ? <ArrowBot /> : <ArrowTop />}
            </span>
          </button>
          <div
            id="quienes-somos-content"
            style={{
              ...styles.content,
              maxHeight: isExpanded ? "1000px" : "0",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            <p style={styles.paragraph}>
              Nos reunimos desde distintos espacios, asociaciones y con diversas
              trayectorias en lo profesional, productivo, empresarial, académico
              y cultural porque creemos que es el momento de que tomemos la
              posta , de dar el salto generacional, para hacer de Santa Fe: Una
              ciudad protagonista. Una ciudad para disfrutar.
            </p>
            <p style={styles.paragraph}>
              Vinimos a realizar un cambio significativo en la manera de hacer
              las cosas, tomando lo mejor de las experiencias previas e
              innovando.
            </p>
            <img src={b} alt="Quienes Somos Logo" style={styles.logo} />
          </div>
        </div>
        <div style={styles.imageWrapper}>
          <img src={a} alt="Quienes Somos" style={styles.mainImage} />
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
