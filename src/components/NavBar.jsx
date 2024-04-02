import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ width: "100vw" }}>
      <div
        style={{
          width: "100%",
        }}
        className="m-0 d-flex justify-content-between align-items-center"
      >
        <div></div>
        <Link to="/">
          <img
            style={{ height: "9rem" }}
            src="src/assets/StarWarsLogo.png"
            alt="StarWarsLogo"
          />
        </Link>

        <div className="d-flex flex-row">
          <button className="text-nowrap rounded-0">LOG IN</button>
          <button className="text-nowrap rounded-0">SIGN UP</button>
        </div>
      </div>

      <div
        style={{
          border: "1px #999",
          borderStyle: "solid none solid none",
          width: "100%",
        }}
        className="d-flex justify-content-center border-secondary"
      >
        <Link
          style={{
            color: "white",
          }}
          className="btn rounded-0 border-secondary"
          to="/"
        >
          HOME
        </Link>
        <Link
          style={{
            color: "white",
          }}
          className="btn rounded-0 border-secondary"
          to="/starships"
        >
          STARSHIPS
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
