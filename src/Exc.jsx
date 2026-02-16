import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/dist/sweetalert2.min.css";

const MySwal = withReactContent(Swal);

export default function Exc() {
  const excursions = [
    {
      id: 1,
      title: "Robinson Island and Marafa",
      shortDesc:
        "Experience the breathtaking beauty of Robinson Island with its pristine beaches and crystal-clear waters, combined with the surreal landscape of Marafa Depression - also known as Hell's Kitchen. These sandstone formations create a natural amphitheater with stunning colors ranging from white to deep orange.",
      price: "$60 per person",
      duration: "Whole day",
      image: "🏝️",
      fullItinerary: `In the morning departure from the hotel (9 AM) with a vehicle.
It will be a 1 hour ride you shall pass through Malindi town and then on the way you will see a salt factory which supplies salt in Kenya and other countries bordering Kenya.
Upon arrival we shall get into the island with a canoe then have a little sunbathing on the golden sand.
At 1 PM lunch is served the "seafood" but drinks are not included.
After lunch at 3 PM you shall depart the island with a canoe heading to Marafa Canyons.
Then you shall have a tour into the canyons.
Later we wait for the sunset.
Afterwards you shall return back to the hotel.`,
    },
    {
      id: 2,
      title: "Safari Blue Watamu",
      shortDesc:
        "Embark on an unforgettable ocean safari in Watamu. Explore pristine sandbanks, go snorkeling in coral gardens, spot dolphins, and enjoy a delicious seafood lunch. This traditional dhow cruise offers the perfect blend of adventure and relaxation on the Indian Ocean.",
      price: "$50 per person",
      duration: "Full day",
      image: "⛵",
      fullItinerary: `You shall depart from the hotel at 9 AM.
Have a boat ride towards the marine guided area where you shall do snorkeling "swim with the fish".
Then go ahead and look for dolphins and turtles.
Later on you proceed to Mida Creek where you shall see the beautiful starfish and mangroves and some breeding areas for the fish.
While looking/watching all this you shall also be heading to Sudi Island where you shall be eating all kinds of seafood and if you are not eating seafood you shall be provided with other food.
After lunch we shall be returning to the hotel, this will be around 3:30 PM.`,
    },
    {
      id: 3,
      title: "Gede Ruins and School Visit",
      shortDesc:
        "Explore the mystical Gede Ruins, a 12th-century Swahili town hidden in the forest. After the historical tour, visit a local school to interact with students and teachers, experiencing authentic Kenyan education and culture. A perfect blend of history and community engagement.",
      price: "$30 per person",
      duration: "Afternoon tour",
      image: "🏛️",
      fullItinerary: `Departure from the hotel in the afternoon by car.
Then proceed to the ruins where you shall be feeding bananas and groundnuts to monkeys.
Then have a visit to the ruins with a guide and also hear the history of how the Arabs lived and how they managed their things.
Later on we proceed to a local school.
Then go back to the hotel.`,
    },
    {
      id: 4,
      title: "African Village Experience",
      shortDesc:
        "Immerse yourself in authentic Kenyan culture with a visit to a traditional village. Participate in daily activities, learn about local customs, taste traditional food, and interact with community members. Experience the warmth and hospitality of African village life firsthand.",
      price: "$30 per person",
      duration: "Half day",
      image: "🏘️",
      fullItinerary: `Departure from the hotel by car.
Then go to the village where you will be welcomed by dance and some drama.
Then later have a tour of the village, see how different things are conducted.
These activities will be like preparing local houses with tree trunks, preparing flour with maize, making clothes also, drinking beer from coconut tree.`,
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
              <strong>💰 Price:</strong> {excursion.price}
            </p>
            <p style={{ margin: "5px 0", fontSize: "18px" }}>
              <strong>⏱️ Duration:</strong> {excursion.duration}
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
              📋 Detailed Itinerary:
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
      showCancelButton: false, // Removed Cancel button
      showConfirmButton: false, // Removed Confirm button (Book Now)
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
          🗺️ Kenyan Excursions with Cimo service
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
          Discover the beauty and culture of Kenya with our handcrafted tours
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
                  View Full Itinerary
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
          ✨ All tours include hotel pickup and drop-off • Professional guides •
          Best price guaranteed
        </div>
      </div>
    </div>
  );
}
