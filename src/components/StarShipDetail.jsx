import React from "react";
import { useContext } from "react";
import { ShipContext } from "../context/context";

function StarShipDetail() {
  const { starships, currentStarship, setCurrentStarship } =
    useContext(ShipContext);

  if (!starships || !starships.results || starships.results.length === 0) {
    return <div>Loading...</div>; // or display an error message
  }

  //Leemos el 'ID' de la nave a partir de su url en el SWAPI
  const currentStarshipId =
    currentStarship.url.split("/")[currentStarship.url.split("/").length - 2];

  const handleBackToList = () => {
    setCurrentStarship(null);
  };

  return (
    <div
      style={{
        color: "#ccc",
        width: "80%",
        padding: "1rem",
      }}
      className="d-flex flex-row"
    >
      {/* Usamos el ID de la nave para cargar la imagen correspondiente en starwars-visualguide API */}
      <img
        style={{ width: "30%", backgroundColor: "#000" }}
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/starships/${currentStarshipId}.jpg`}
      ></img>
      <div style={{ backgroundColor: "#151515" }} className="card-body p-4">
        <h1 className="card-title" style={{ fontSize: "1.5rem" }}>
          {currentStarship.name.toUpperCase()}
        </h1>
        <div className="d-flex">
          <div className="d-flex flex-column m-2">
            <p>Model: {currentStarship.model}</p>
            <p>Cost in credits: {currentStarship.cost_in_credits}</p>
            <p>Atmospheric speed: {currentStarship.max_atmosphering_speed}</p>
          </div>
          <div className="d-flex flex-column m-2">
            <p>Manufacturer: {currentStarship.manufacturer}</p>
            <p>Length: {currentStarship.length}</p>
            <p>Crew: {currentStarship.crew}</p>
          </div>
        </div>
        <button style={{ backgroundColor: "#000" }} onClick={handleBackToList}>
          Back to Ship List
        </button>
      </div>
    </div>
  );
}

export default StarShipDetail;
