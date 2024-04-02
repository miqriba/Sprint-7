import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      style={{ color: "#999" }}
      className="d-flex flex-column align-items-center m-2 p-2"
    >
      <h3 style={{ width: "70%", textAlign: "center" }}>
        Welcome to the official Star Wars website.
      </h3>
      <p>Click continue to begin exploring</p>
      <Link
        style={{ color: "#999" }}
        className="btn rounded-0 border-secondary"
        to="/starships"
      >
        Continue
      </Link>
    </div>
  );
};

export default Home;
