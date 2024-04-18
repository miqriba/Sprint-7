import React from "react";
import Bar from "./Bar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShipContext } from "../context/context";

function NavBar() {
  const { openModal, log, setLog, loggedUser, setLoggedUser } =
    useContext(ShipContext);

  return (
    <div style={{ width: "100vw" }}>
      <div
        style={{
          width: "100%",
          padding: "2rem",
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
          {!log ? (
            <button
              className="text-nowrap rounded-0 m-1"
              onClick={() => openModal("login")}
            >
              LOG IN
            </button>
          ) : null}
          {!log ? (
            <button
              className="text-nowrap rounded-0 m-1"
              onClick={() => openModal("signup")}
            >
              SIGN UP
            </button>
          ) : null}
          {log ? (
            <p
              style={{
                color: "#eee",
                margin: "0px",
                marginRight: "1rem",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              {`Logged in as: ${loggedUser.email}`}
            </p>
          ) : null}
          {log ? (
            <button
              className="text-nowrap rounded-0 m-1"
              onClick={() => {
                setLog(false);
                console.log("log out successful");
                setLoggedUser(null);
              }}
            >
              LOG OUT
            </button>
          ) : null}
        </div>
      </div>

      <Bar className="justify-content-center">
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
      </Bar>
    </div>
  );
}

export default NavBar;
