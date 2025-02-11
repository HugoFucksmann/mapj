import { useState } from "react";
import itemBandera from "./assets/RECURSOS/iconobandera.png";
import itemOjo from "./assets/RECURSOS/iconoojo.png";
import itemFlecha from "./assets/RECURSOS/iconoflecha.png";
import quienesSomosImage from "./assets/RECURSOS/quienesSomos.png";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      icon: itemBandera,
      title: "SOBRE MI",
      content:
        `Soy Jorgelina, santafesina y socióloga. Nací y crecí en Barrio Roma. Amo mi ciudad y siempre participé y me involucré para cambiar lo que no me gusta. Estudié Sociología en la Universidad Nacional del Litoral. Elegí esa carrera y profesión porque queria entender y analizar las distintas realidades que atraviesan a las sociedades, y desde ahí poder trabajar para transformar y mejorar el entorno que nos rodea y la calidad de vida de los santafesinos. 
El compromiso con mi ciudad es todos los días y constantemente. Desde el lugar que ocupo, junto a mi equipo, buscamos promover,  aprovechar y estimular nuestro potencial y el orgullo de ser santafesinos. 
Estoy convencida de que con esfuerzo y dedicación, podemos hacer de Santa Fe un lugar en donde todos los vecinos y vecinas puedan desarrollarse y progresar.

        `,
    },
    {
      icon: itemOjo,
      title: "YO QUIERO SANTA FE",
      content:
      `Junto al concejal Jorge Andrés Fernández y un gran equipo, impulsamos un proyecto innovador que busca transformar la realidad local.
Estamos convencidos de que es urgente un cambio profundo en la forma de gestionar nuestra ciudad. Para nosotros, el impulso de una nueva generación no se limita a una cuestión de edad, sino que es una oportunidad para promover la innovación y una gestión pública renovada, capaz de abordar de manera eficaz los problemas y desafíos que enfrenta Santa Fe.
 Tras 18 años de un mismo frente de gobierno hemos visto cómo nuestra ciudad se ha vuelto cada vez más desigual y desintegrada. Hoy Santa Fe ocupa el triste lugar de ser la sexta ciudad más pobre del país, superando incluso a áreas de gran concentración urbana como el Gran Rosario y el Gran Buenos Aires. Esto no refleja el potencial real de nuestra ciudad.
Santa Fe tiene todo para ser una ciudad protagonista: es un lugar con una gran capacidad para crecer, emprender, trabajar, para disfrutar y cumplir sueños. Su riqueza natural, con paisajes costeros únicos y un entorno privilegiado, se complementa con el talento, la creatividad y la energía de su gente. Es momento de aprovechar todo este potencial y transformar Santa Fe en una ciudad más justa, próspera y dinámica.
`,
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
            <div style={item.image ? styles.contentWithImage : styles.content}>
              {item.image ? (
                <>
                  <div style={styles.imageColumn}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={styles.quienesSomosImage}
                    />
                  </div>
                  <div style={styles.textColumn}>{item.content}</div>
                </>
              ) : (
                item.content
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  accordion: {
    width: "80%",
    margin: "40px auto",
    color: "black",
  },
  item: {
    borderBottom: "3px solid #e0e0e0",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    cursor: "pointer",
    backgroundColor: "white",
  },
  icon: {
    width: "70px",
    height: "70px",
    marginRight: "15px",
  },
  title: {
    flex: 1,
    fontSize: "32px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  arrow: {
    fontSize: "12px",
  },
  content: {
    padding: "18px",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 30,
  },
  contentWithImage: {
    display: "flex",
    padding: "18px",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 30,
  },
  imageColumn: {
    flex: 1,
    marginRight: "18px",
  },
  textColumn: {
    flex: 1,
  },
  quienesSomosImage: {
    width: "100%",
    height: "auto",
    borderRadius: 8,
  },
};
