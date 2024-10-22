const EjesPrincipales = () => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
    },
    titleContainer: {
      textAlign: "center",
      marginBottom: "20px",
    },
    titleText: {
      display: "inline-block",
      backgroundColor: "#ff4444",
      color: "white",
      padding: "5px 15px",
      margin: "2px",
      fontSize: "24px",
      fontWeight: "bold",
      fontSize: "2.5rem",
    },
    subtitle: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#333",
      fontSize: "16px",
      maxWidth: "800px",
      margin: "0 auto 40px",
    },
    cardsContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    card: {
      flex: "1",
      minWidth: "300px",
      maxWidth: "380px",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
    },
    cardHeader: {
      backgroundColor: "#4277ca",
      color: "white",
      padding: "15px",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "bold",
      borderBottom: "5px solid #ff4444",
      height: 56,
    },
    cardContent: {
      padding: "20px",
      fontSize: "14px",
      lineHeight: "1.6",
      color: "#333",
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    cardText: {
      marginBottom: "20px",
      flex: 1,
    },
    cardLine: {
      width: "100px",
      height: "2px",
      backgroundColor: "#000",
      margin: "0 auto",
    },
  };

  return (
    <div id="ejes-principales" style={styles.container}>
      <div style={styles.titleContainer}>
        <div style={styles.titleText}>
          NUESTRAS PRINCIPALES <br /> LINEAS DE TRABAJO
        </div>
      </div>

      <p style={styles.subtitle}>
        Desde el año 2019 hemos presentado más de 1400 proyectos vinculados a
        diferentes problemáticas de nuestra ciudad, entre los que destacan los
        siguientes ejes:
      </p>

      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            ALUMBRADO, BARRIDO,
            <br />
            LIMPIEZA Y MOVILIDAD
          </div>
          <div style={styles.cardContent}>
            <div style={styles.cardText}>
              Trabajamos sobre las necesidades de cada uno de los barrios en el
              cumplimiento de los servicios básicos que debe brindar la
              municipalidad, la puesta en valor de espacios públicos y de los
              barrios de nuestra ciudad, el acceso a diferentes medios de
              movilidad y las obras públicas necesarias y estratégicas que
              permitan una mejora de la calidad de vida.
            </div>
            <div style={styles.cardLine} />
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            IDENTIDAD
            <br />
            SANTAFESINA
          </div>
          <div style={styles.cardContent}>
            <div style={styles.cardText}>
              Los proyectos legislativos en los que trabajamos están enfocados
              en proteger y promover la identidad y cultura local, reconociendo
              su importancia como patrimonio vivo. A través de estas
              iniciativas, buscamos fortalecer el tejido comunitario, fomentando
              la preservación y disfrute de nuestras costumbres, reconociendo a
              diferentes actores culturales, sociales, deportistas e impulsando
              proyectos que fortalezcan al sector turístico y gastronómico de la
              ciudad.
            </div>
            <div style={styles.cardLine} />
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>AMBIENTE</div>
          <div style={styles.cardContent}>
            <div style={styles.cardText}>
              Con el foco en la sostenibilidad ambiental y en el disfrute y
              cuidado de nuestros entornos naturales, se promueven diversas
              iniciativas en pos del uso eficiente de los recursos y de
              garantizar un entorno saludable para los y las santafesinas. Desde
              políticas de gestión de residuos hasta la promoción de energías
              renovables y espacios verdes, estos proyectos tienen como objetivo
              transformar la ciudad en un modelo de sostenibilidad que equilibre
              el crecimiento urbano con la protección del medio ambiente.
            </div>
            <div style={styles.cardLine} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EjesPrincipales;
