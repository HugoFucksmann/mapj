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
      fontSize: "2.5rem",
      fontWeight: "bold",
      borderRadius: 8,
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
      flex: "0 0 calc(50% - 20px)", // Dos tarjetas por fila
      maxWidth: "360px",
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
      maxHeight: 240,
      overflow: "auto",
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
    list: {
      listStyleType: "none",
      paddingLeft: "0",
    },
    listItem: {
      marginBottom: "10px",
      paddingLeft: "20px",
      position: "relative",
    },
    listItemDot: {
      content: '""',
      position: "absolute",
      left: "0",
      top: "8px",
      width: "6px",
      height: "6px",
      backgroundColor: "#4277ca",
      borderRadius: "50%",
    },
  };

  const cardContents = [
    {
      title: "ALUMBRADO, BARRIDO, LIMPIEZA Y MOVILIDAD",
      items: [
        "Bacheo y reparación de carpeta asfáltica",
        "Colocación de reductores de velocidad",
        "Colocación y reparación de luminaria",
        "Erradicación de microbasurales",
        "Puestas en valor de espacios verdes públicos",
        "Desmalezamiento/limpieza",
        "Colocación de garita de colectivos",
        "Servicio Especializado de Transporte para Personas con Discapacidad",
        "Día de la Seguridad Vial con campaña de concientización",
        "Campaña informativa sobre el estacionamiento medido - SEOM",
        "Cupo Femenino en licencias de taxis",
        "Regulación del servicio de transporte privado de pasajeros",
        "Constitución de Mesa de Trabajo sobre subsistema Taxis/Remises",
      ],
    },
    {
      title: "IDENTIDAD SANTAFESINA",
      items: [
        "Circuito Placas de Deportistas Santafesinos",
        "Programa Me Pinta Santa Fe - murales de mi ciudad",
        "Paseo Sur del Brigadier",
        "Circuito Gastronómico Sur a cielo abierto",
        "Bajada Pública de Embarcaciones",
        "Muelle en el Lago Gral. Belgrano del Parque del Sur",
        "Distinción Destacados de la Cumbia",
        "Monumento al Liso y a la Chopera",
      ],
    },
    {
      title: "TRABAJO, PRODUCCIÓN E INDUSTRIA",
      items: [
        "Plan de Fomento de Polos Gastronómicos",
        "Institucionalización de Ferias Santafesinas",
        "Programa Fondo para el Desarrollo Productivo y Laboral",
        "Líneas de trabajo para el fortalecimiento de la industria del turismo",
      ],
    },
    {
      title: "AMBIENTE",
      items: [
        "Plan Sello Verde Santa Fe para el sector productivo",
        "Regulación y control de Aceites Vegetales Usados",
        "Incorporación de cestos para colillas en espacios verdes públicos",
        "Programa Municipal de Compostaje",
        "Programa de despapelización y firma digital en el HCM",
        "Campaña de Concientización sobre el cuidado y la preservación de las aguas de ríos y lagunas",
      ],
    },
  ];

  return (
    <div id="ejes-principales" style={styles.container}>
      <div style={styles.titleContainer}>
        <div style={styles.titleText}>
          NUESTRAS PRINCIPALES <br /> LINEAS DE TRABAJO
        </div>
      </div>

      <p style={styles.subtitle}>
        Es esencial potenciar la capacidad productiva y científica-tecnológica
        de la ciudad, creando un entorno atractivo para inversores y nuevas
        industrias fortaleciendo la competitividad regional, siendo crucial que
        se apoye la colaboración entre la academia y la industria. Se necesita,
        además, un Estado presente para acompañar el crecimiento de la economía
        social, institucionalizando sus procesos.
      </p>

      <div style={styles.cardsContainer}>
        {cardContents.map((card, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>{card.title}</div>
            <div style={styles.cardContent}>
              <div style={styles.cardText}>
                <ul style={styles.list}>
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={styles.listItem}>
                      <span style={styles.listItemDot}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={styles.cardLine} />
            </div>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", color: "black", fontSize: "1.2em" }}>
        Los proyectos presentados se pueden ver en nuestro MAPA DE RECLAMOS.
      </p>
    </div>
  );
};

export default EjesPrincipales;
