import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { ShipContext } from "../context/context";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Falta feedback 'exito' / 'faltan campos'

function LoginModal({ onClose }) {
  const {
    showModalLogIn,
    closeModal,
    app,
    log,
    setLog,
    loggedUser,
    setLoggedUser,
  } = useContext(ShipContext);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const auth = getAuth(app);

  function logInUser(auth, mail, password) {
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Log in successful");
        console.log(user.email);
        setLoggedUser(user);
        setLog(true);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error logging in: " + error.message);
        // ..
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    logInUser(auth, formData.email, formData.password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={`modal ${showModalLogIn ? "open" : ""}`}>
      {/* // ⚠️ onClick={closeModal} per el modal-overlay fa falta arreglar */}
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-body d-flex flex-column">
            <h3 className="fw-bold">Log in</h3>
            <p>
              Enter your email and password to log into your Star Wars account.
            </p>
            <form>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={{ backgroundColor: "#eee" }}
              ></input>
              <input
                type="password"
                name="password"
                className="form-control mt-2"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={{ backgroundColor: "#eee" }}
              ></input>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn fw-bold rounded-pill mt-4"
                style={{ backgroundColor: "#F2D24E", width: "100%" }}
              >
                Log In
              </button>
            </form>
          </div>
          <button className="close-button" onClick={() => closeModal("login")}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
