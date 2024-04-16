import React from "react";

function MustLogInMessage() {
  return (
    <>
      <div
        style={{
          padding: "1rem",
          margin: "0.5rem",
          cursor: "pointer",
          backgroundColor: "#151515",
          color: "#ccc",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ fontSize: "1.2rem" }}>Page not available</h1>
        <p style={{ fontSize: "0.8rem", margin: "0" }}>
          Please <b>log in</b> in order to acces the 'Starships' page.
        </p>
      </div>
    </>
  );
}

export default MustLogInMessage;
