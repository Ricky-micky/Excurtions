import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/dist/sweetalert2.min.css";

const MySwal = withReactContent(Swal);

export default function Exc() {
  const excursions = [
    {
      id: 1,
      title: "Isola di Robinson e Marafa",
      shortDesc:
        "Scopri la straordinaria bellezza dell'Isola di Robinson con le sue spiagge incontaminate e acque cristalline, combinata con il surreale paesaggio della Depressione di Marafa - anche conosciuta come Cucina dell'Inferno. Queste formazioni di arenaria creano un anfiteatro naturale con colori che vanno dal bianco all'arancione intenso.",
      price: "$60 a persona",
      duration: "Giornata intera",
      image: "🏝️",
      fullItinerary: `Al mattino partenza dall'hotel (ore 9:00) con un veicolo.
Sarà un viaggio di 1 ora attraverso la città di Malindi e lungo il percorso vedrai una fabbrica di sale che fornisce sale in Kenya e in altri paesi confinanti.
All'arrivo raggiungeremo l'isola con una canoa e faremo un po' di bagni di sole sulla sabbia dorata.
Alle 13:00 viene servito il pranzo a base di "pesce" ma le bevande non sono incluse.
Dopo pranzo, alle 15:00, lasceremo l'isola in canoa dirigendoci verso i Canyon di Marafa.
Poi faremo un tour nei canyon.
Successivamente aspetteremo il tramonto.
Dopodiché tornerai in hotel.`,
    },
    {
      id: 2,
      title: "Safari Blue Watamu",
      shortDesc:
        "Imbarcati in un indimenticabile safari oceanico a Watamu. Esplora banchi di sabbia incontaminati, fai snorkeling nei giardini di corallo, avvista delfini e gusta un delizioso pranzo a base di pesce. Questa tradizionale crociera in dhow offre il perfetto equilibrio tra avventura e relax nell'Oceano Indiano.",
      price: "$50 a persona",
      duration: "Giornata intera",
      image: "⛵",
      fullItinerary: `Partenza dall'hotel alle 9:00.
Gita in barca verso l'area marina protetta dove farai snorkeling "nuotando con i pesci".
Poi proseguirai alla ricerca di delfini e tartarughe.
Successivamente ti dirigerai verso Mida Creek dove vedrai bellissime stelle marine, mangrovie e alcune zone di riproduzione dei pesci.
Mentre osservi tutto questo, ti dirigerai anche verso l'Isola di Sudi dove potrai gustare ogni tipo di pesce e, se non mangi pesce, ti verranno forniti altri cibi.
Dopo pranzo torneremo in hotel, intorno alle 15:30.`,
    },
    {
      id: 3,
      title: "Rovine di Gede e Visita Scolastica",
      shortDesc:
        "Esplora le mistiche Rovine di Gede, una città Swahili del XII secolo nascosta nella foresta. Dopo il tour storico, visita una scuola locale per interagire con studenti e insegnanti, sperimentando l'autentica educazione e cultura keniota. Un perfetto connubio tra storia e impegno comunitario.",
      price: "$30 a persona",
      duration: "Tour pomeridiano",
      image: "🏛️",
      fullItinerary: `Partenza dall'hotel nel pomeriggio in auto.
Poi prosegui verso le rovine dove darai da mangiare banane e arachidi alle scimmie.
Poi visiterai le rovine con una guida e ascolterai la storia di come vivevano gli arabi e come gestivano le loro cose.
Successivamente ci rechiamo in una scuola locale.
Poi ritorno in hotel.`,
    },
    {
      id: 4,
      title: "Esperienza in un Villaggio Africano",
      shortDesc:
        "Immergiti nell'autentica cultura keniota con la visita a un villaggio tradizionale. Partecipa alle attività quotidiane, scopri le usanze locali, assaggia il cibo tradizionale e interagisci con i membri della comunità. Sperimenta il calore e l'ospitalità della vita del villaggio africano in prima persona.",
      price: "$30 a persona",
      duration: "Mezza giornata",
      image: "🏘️",
      fullItinerary: `Partenza dall'hotel in auto.
Poi vai al villaggio dove sarai accolto con danze e recite.
Successivamente faremo un tour del villaggio, vedendo come si svolgono le diverse attività.
Queste attività includeranno la preparazione delle case tradizionali con tronchi d'albero, la preparazione della farina con il mais, la realizzazione di vestiti e la degustazione di birra ricavata dall'albero di cocco.`,
    },
  ];

  const showExcursionDetails = (excursion) => {
    MySwal.fire({
      title: (
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#2c3e50" }}>
          {excursion.image} {excursion.title}
        </div>
      ),
      html: (
        <div style={{ textAlign: "left", padding: "10px" }}>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "20px",
              borderLeft: "4px solid #667eea",
            }}
          >
            <p style={{ margin: "5px 0", fontSize: "18px" }}>
              <strong>💰 Prezzo:</strong> {excursion.price}
            </p>
            <p style={{ margin: "5px 0", fontSize: "18px" }}>
              <strong>⏱️ Durata:</strong> {excursion.duration}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "10px",
              border: "2px solid #e9ecef",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "15px",
                fontSize: "18px",
                color: "#2c3e50",
                borderBottom: "2px solid #667eea",
                paddingBottom: "10px",
              }}
            >
              📋 Itinerario Dettagliato:
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#34495e",
                whiteSpace: "pre-line",
                margin: 0,
              }}
            >
              {excursion.fullItinerary}
            </p>
          </div>
        </div>
      ),
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      width: "600px",
      padding: "20px",
      background: "#fff",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "48px",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            fontWeight: "bold",
          }}
        >
          🗺️ Escursioni Keniane con Cimo Service
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.9)",
            fontSize: "18px",
            marginBottom: "50px",
            fontStyle: "italic",
          }}
        >
          Scopri la bellezza e la cultura del Kenya con i nostri tour
          artigianali
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            padding: "20px",
          }}
        >
          {excursions.map((excursion) => (
            <div
              key={excursion.id}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 25px 45px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
              }}
            >
              <div
                style={{
                  height: "150px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "64px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "rgba(255,255,255,0.95)",
                    padding: "5px 15px",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#2c3e50",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  {excursion.price}
                </div>
                {excursion.image}
              </div>

              <div
                style={{
                  padding: "25px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "12px",
                    color: "#2c3e50",
                    lineHeight: "1.3",
                  }}
                >
                  {excursion.title}
                </h2>

                <div
                  style={{
                    backgroundColor: "#f0f7ff",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    marginBottom: "15px",
                    display: "inline-block",
                    alignSelf: "flex-start",
                  }}
                >
                  <span style={{ color: "#2c3e50", fontSize: "14px" }}>
                    ⏱️ {excursion.duration}
                  </span>
                </div>

                <p
                  style={{
                    color: "#4a5568",
                    lineHeight: "1.7",
                    marginBottom: "25px",
                    fontSize: "15px",
                    flex: 1,
                  }}
                >
                  {excursion.shortDesc}
                </p>

                <button
                  onClick={() => showExcursionDetails(excursion)}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                    marginTop: "auto",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.02)";
                    e.target.style.boxShadow =
                      "0 6px 20px rgba(102, 126, 234, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow =
                      "0 4px 15px rgba(102, 126, 234, 0.4)";
                  }}
                >
                  Vedi Itinerario Completo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "rgba(255,255,255,0.8)",
            fontSize: "14px",
            padding: "20px",
          }}
        >
          ✨ Tutti i tour includono pickup e rientro in hotel • Guide
          professionali • Miglior prezzo garantito
        </div>
      </div>
    </div>
  );
}
