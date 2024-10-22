import React from "react";
import logoFooter from "./assets/RECURSOS/logofooter.png";
import imgFb from "./assets/RECURSOS/fb.png";
import imgIg from "./assets/RECURSOS/ig.png";
import imgTw from "./assets/RECURSOS/tw.png";
import puenteFooter from "./assets/RECURSOS/puentefooter.png";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#F84747",
      width: "100%",
      padding: "20px 120px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
    },
    leftSection: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      height: "100px",
      objectFit: "contain",
    },
    rightSection: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "50%",
    },
    topRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
    },
    socialText: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "white",
    },
    socialIcons: {
      display: "flex",
      gap: "10px",
    },
    icon: {
      width: "30px",
      height: "30px",
      objectFit: "contain",
      cursor: "pointer",
    },
    line: {
      width: "100%",
      height: "1px",
      backgroundColor: "white",
    },
    bottomRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    contactInfo: {
      color: "white",
      display: "flex",
      flexDirection: "column",
      gap: "3px",
    },
    contactText: {
      fontSize: "12px",
      display: "block",
      lineHeight: "1.2",
    },
    bridge: {
      height: "60px",
      objectFit: "contain",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.leftSection}>
        <img src={logoFooter} alt="Yo Quiero Santa Fe" style={styles.logo} />
      </div>

      <div style={styles.rightSection}>
        <div style={styles.topRow}>
          <div style={styles.socialText}>
            SEGUINOS EN
            <br />
            NUESTRAS REDES
          </div>
          <div style={styles.socialIcons}>
            <a
              href="https://www.facebook.com/jorgelinamudallel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgFb} alt="Facebook" style={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/jormudallel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgIg} alt="Instagram" style={styles.icon} />
            </a>
            <a
              href="https://x.com/JoritaMudallel?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgTw} alt="Twitter" style={styles.icon} />
            </a>
          </div>
        </div>

        <div style={styles.line}></div>

        <div style={styles.bottomRow}>
          <div style={styles.contactInfo}>
            <span style={styles.contactText}>SUMATE A YO QUIERO SANTA FE</span>
            <span style={styles.contactText}>+54 0342 4746550</span>
            <span style={styles.contactText}>contacto@yoquierosf.com.ar</span>
          </div>
          <img src={puenteFooter} alt="Puente" style={styles.bridge} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
