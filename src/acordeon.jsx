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
      title: "Liderazgo",
      content:
        `
        Los concejales Jorgelina Mudallel y Jorge Andrés Fernández de la ciudad de Santa Fe son los principales impulsores de un proyecto innovador que busca transformar la realidad local a través de la colaboración entre emprendedores, empresarios, científicos, artistas y ciudadanos comprometidos con el desarrollo de la comunidad. Su liderazgo y dedicación son clave para guiar esta iniciativa hacia un cambio auténtico, fundamentado en principios de cercanía, innovación y trabajo colectivo.
        Con una sólida experiencia en la gestión pública, ambos concejales tienen un claro objetivo: promover un cambio real y sostenido, apostando por soluciones creativas y disruptivas. Este proyecto no solo desafía los límites tradicionales, sino que también pone énfasis en la construcción de un futuro más inclusivo y participativo para todos los santafesinos y santafesinas.
        Esta propuesta se basa en la cercanía con vecinos y vecinas, escuchando sus necesidades y generando espacios para que todos puedan involucrarse. más, se busca fomentar el trabajo conjunto entre diferentes sectores, fortaleciendo el tejido social y económico de la ciudad.
        A través de este esfuerzo colectivo, se pretende crear un entorno propicio para la innovación, el desarrollo económico y el bienestar social, con la convicción de que el trabajo mancomunado y el compromiso de cada actor social son la clave para alcanzar una Santa Fe más próspera y equitativa.

        `,
    },
    {
      icon: itemOjo,
      title: "Propósito",
      content:
      `
Estamos convencidos de que es urgente un cambio profundo en la forma de gestionar nuestra ciudad. Para nosotros, el impulso de una nueva generación no se limita a una cuestión de edad, sino que es una oportunidad para promover la innovación y una gestión pública renovada, capaz de abordar de manera eficaz los problemas y desafíos que enfrenta Santa Fe.
Tras 18 años de un mismo frente de gobierno hemos visto cómo nuestra ciudad se ha vuelto cada vez más desigual y desintegrada. Hoy Santa Fe ocupa el triste lugar de la sexta ciudad más pobre del país, superando incluso a áreas de gran concentración urbana como el Gran Rosario y el Gran Buenos Aires. Esto no refleja el potencial real de nuestra ciudad.
Santa Fe tiene todo para ser una ciudad protagonista: es un lugar con una gran capacidad para crecer, emprender, trabajar, y también para disfrutar y cumplir sueños. Su riqueza natural, con paisajes costeros únicos y un entorno privilegiado, se complementa con el talento, la creatividad y la energía de su gente. Es momento de aprovechar todo este potencial y transformar Santa Fe en una ciudad más justa, próspera y dinámica.
      `,
    },
    {
      icon: itemFlecha,
      title: "Enfoque",
      content:
      `
Proponemos una nueva forma de gestionar, donde la identidad santafesina sea el eje central de todo lo que hagamos. Creemos que una ciudad que no solo se define por su territorio, sino por su gente, su historia y su cultura. Potenciar la identidad santafesina es recuperar el orgullo local y fortalecer los lazos que nos unen, para que todos juntos seamos protagonistas del futuro de nuestra ciudad.
Nuestra propuesta se basa en la participación activa de todos los sectores de la sociedad. Emprendedores, empresarios, comerciantes, productores, asociaciones, clubes, estudiantes, investigadores, y todos los agentes del arte, la cultura y el deporte, tienen un rol fundamental en el desarrollo de Santa Fe. Cada uno de ellos aporta su experiencia y su visión, y es esencial que trabajemos de manera conjunta para construir soluciones que respondan a las verdaderas necesidades de la ciudad. Creemos que la ciudad se construye de abajo hacia arriba, con la participación de todos quienes la viven y la transforman.
      `,    },
    {
      icon: itemFlecha,
      title: "Quienes somos",
      content: `Nos reunimos con un objetivo común: hacer de Santa Fe una ciudad protagonista. Creemos que, para lograrlo, es fundamental contar con la participación activa de los distintos sectores de nuestra comunidad: profesionales, emprendedores, comerciantes, empresarios, académicos, productores, artistas y ciudadanos comprometidos. Cada uno de estos actores tiene una visión valiosa y, al trabajar juntos, podemos potenciar el desarrollo de nuestra ciudad, asegurando que todos seamos parte activa del cambio. Una ciudad protagonista es aquella donde todos sus habitantes tienen la oportunidad de crecer, disfrutar y ser parte de su transformación.
Venimos con la mirada fresca de nuevas generaciones, dispuestos a trabajar de manera colectiva para abordar los desafíos actuales. Sabemos que, para lograr un cambio profundo, es necesario sumar esfuerzos, escuchar a todos los actores y aprender de las experiencias previas. Rescatamos lo mejor de lo que se ha hecho, pero con el firme compromiso de innovar y proponer nuevas soluciones que respondan a las verdaderas necesidades de Santa Fe, siempre con el trabajo conjunto como base para alcanzar un futuro mejor.
`,
      image: quienesSomosImage,
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
