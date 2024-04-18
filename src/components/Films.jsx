import { React, useState, useEffect } from "react";
import Bar from "./Bar";

function Films({ currentStarship }) {
  const [names, setNames] = useState([]);
  const Urls = [...currentStarship.films];
  useEffect(() => {
    const fetchFilms = async () => {
      const films = [];
      for (const url of Urls) {
        const response = await fetch(url);
        const data = await response.json();
        films.push(data.title);
      }
      setNames(films);
    };
    fetchFilms();
  }, []);

  return (
    <>
      <Bar className="m-3 flex-row justify-content-start">
        <p className="ms-4 mt-1 mb-1">FILMS</p>
      </Bar>
      <div className="d-flex flex-row justify-content-start">
        {currentStarship.films.map((e, index) => (
          <div
            className="card ms-2 me-2 border-0"
            style={{ width: "180px" }}
            key={index}
          >
            <img
              className="card-img-top"
              src={`https://starwars-visualguide.com/assets/img/films/${
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
                style={{ fontSize: "12px", textAlign: "center" }}
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

export default Films;
