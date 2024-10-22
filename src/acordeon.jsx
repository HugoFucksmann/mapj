import React, { useState } from "react";
import itemBandera from "./assets/RECURSOS/iconobandera.png";
import itemOjo from "./assets/RECURSOS/iconoojo.png";
import itemFlecha from "./assets/RECURSOS/iconoflecha.png";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      icon: itemBandera,
      title: "Liderazgo",
      content:
        "Jorgelina Mudallel, concejala de la ciudad de Santa Fe,y el concejal  Jorge Andres Fernandez son los referentes de este proyecto que reúne a emprendedores, empresarios, científicos, artistas y ciudadanos comprometidos con el desarrollo de nuestra comunidad. Su experiencia y compromiso son fundamentales para guiar esta iniciativa hacia un cambio verdadero con espiritu transgresor, basado en la cercanía, la innovación y el trabajo colectivo.",
    },
    {
      icon: itemOjo,
      title: "Propósito",
      content:
        "Estamos convencidos de que necesitamos un cambio significativo en la forma de gestionar la ciudad. Para nosotros un nuevo impulso generacional, lejos de ser un limite etario es un salto hacia la innovación, un modo disruptivo de gestion haciendonos cargo de los problemas y desafios de la ciudad.  En los 17 años que gobierna el mismo frente vemos una ciudad cada vez más desigual y desintegrada. Hoy Santa Fe es la sexta ciudad más pobre del país, arriba del Gran Rosario y el gran Buenos Aires. Una ciudad protagonista, una ciudad para crecer, emprender, trabajar, pero también para disfrutar y cumplir sueños. Santa Fe tiene todo para ser protagonista hoy: desde su riqueza natural, con su paisaje costero y su entorno único, hasta la capacidad y el talento de su gente.",
    },
    {
      icon: itemFlecha,
      title: "Enfoque",
      content:
        "Una nueva forma de hacer las cosas generando diálogo, consensos y acuerdos. Nuestra plataforma propone volver a la cercanía entre el municipio y la gente, donde todos seamos protagonistas, potenciando la ciudad y su marca: la Identidad SANTAFESINA. Nuestro enfoque se basa en escuchar a quienes están haciendo y creando, en trabajar juntos para desarrollar soluciones que respondan a las verdaderas necesidades de la ciudad. Creemos en la participación activa de emprendedores, empresarios, productores, asociaciones, clubes, así como estudiantes, investigadores y agentes de la cultura, el arte y el deporte. Cada uno de ellos y ellas son protagonistas esenciales en la construcción de nuestra ciudad, porque son la ciudad; la viven, la habitan, la transitan, la trabajan, la crean y la disfrutan.",
    },
  ];

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

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} style={styles.item}>
          <div style={styles.header} onClick={() => toggleItem(index)}>
            <img src={item.icon} alt={item.title} style={styles.icon} />
            <span style={styles.title}>{item.title}</span>
            <span style={styles.arrow}>
              {activeIndex === index ? <ArrowTop /> : <ArrowBot />}
            </span>
          </div>
          {activeIndex === index && (
            <div style={styles.content}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  accordion: {
    width: "80%",

    margin: "0 auto",
    color: "black",
  },
  item: {
    borderBottom: "1px solid #e0e0e0",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    cursor: "pointer",
    backgroundColor: "white",
  },
  icon: {
    width: "80px",
    height: "80px",
    marginRight: "15px",
  },
  title: {
    flex: 1,
    fontSize: "38px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  arrow: {
    fontSize: "12px",
  },
  content: {
    padding: "15px",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 20,
  },
};
