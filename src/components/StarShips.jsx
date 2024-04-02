import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { ShipContext } from "../context/context";

function StarShips() {
  const {
    fetchStuff,
    starships,
    setCurrentStarship,
    starshipsToRender,
    setStarshipsToRender,
  } = useContext(ShipContext);

  const handleShipClick = (ship) => {
    setCurrentStarship(ship);
  };
  const handleLoadMore = () => {
    //solicitamos el fetch con el endpoint correspondiente de la siguiente pagina de la API
    fetchStuff("/starships/" + starships.next.split("/").pop());
  };

  return (
    <div
      style={{ width: "70%" }}
      className="d-flex flex-column self-align-center m-2"
    >
      {starshipsToRender ? (
        starshipsToRender.map((e, index) => (
          <div
            onClick={() => handleShipClick(e)}
            style={{
              padding: "1rem",
              margin: "0.5rem",
              cursor: "pointer",
              backgroundColor: "#151515",
              color: "#ccc",
              fontFamily: "sans-serif",
            }}
            key={index}
          >
            <h1 style={{ fontSize: "1.2rem" }}>{e.name.toUpperCase()}</h1>
            <p style={{ fontSize: "0.8rem", margin: "0" }}>{e.model}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      {starships.next ? (
        <button className="align-self-center" onClick={handleLoadMore}>
          Load more
        </button>
      ) : null}
    </div>
  );
}

export default StarShips;
