import { React, useState, useEffect } from "react";
import Bar from "./Bar";

function Pilots({ currentStarship }) {
  const [names, setNames] = useState([]);
  const Urls = [...currentStarship.pilots];
  useEffect(() => {
    const fetchPilots = async () => {
      let pilots = [];
      for (const url of Urls) {
        const response = await fetch(url);
        const data = await response.json();
        pilots.push(data.name);
      }
      setNames(pilots);
    };
    fetchPilots();
  }, []);

  return (
    <>
      <Bar className="m-3 flex-row justify-content-start">
        <p className="ms-4 mt-1 mb-1">PILOTS</p>
      </Bar>
      {/* TODO: Pilots and films horizontal-scrollable */}
      <div
        className="d-flex flex-row justify-content-start"
        style={{ width: "100%" }}
      >
        {currentStarship.pilots.map((e, index) => (
          <div
            className="card ms-2 me-2 border-0"
            style={{ width: "180px" }}
            key={index}
          >
            <img
              className="card-img-top"
              src={`https://starwars-visualguide.com/assets/img/characters/${
                e.split("/")[e.split("/").length - 2]
              }.jpg`}
              alt="Card image cap"
            ></img>
            <div
              className="card-body"
              style={{
                whiteSpace: "nowrap",
                backgroundColor: "#151515",
                color: "#aaa",
              }}
            >
              <h5
                className="card-title"
                style={{ fontSize: "13px", textAlign: "center" }}
              >
                {names[index] ? names[index].toUpperCase() : "loading..."}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pilots;
