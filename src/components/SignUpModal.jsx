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

function SignUpModal({ onClose }) {
  const { showModalSignUp, openModal, closeModal, app } =
    useContext(ShipContext);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const auth = getAuth(app);
  const mail = "retard@google.com";
  const password = "123456asd";
  // Official Documentation Create User
  function createUser(auth, mail, password) {
    createUserWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Sign Up successful");
        setLog(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error signing up: " + errorMessage);
        // ..
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(auth, formData.email, formData.password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={`modal ${showModalSignUp ? "open" : ""}`}>
      {/* // ⚠️ onClick={closeModal} per el modal-overlay fa falta arreglar */}
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-body d-flex flex-column">
            <h3 className="fw-bold">Sign Up</h3>
            <p>Create a new account by providing an email and a password.</p>
            <form>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
                style={{ backgroundColor: "#eee" }}
              ></input>
              <input
                type="password"
                name="password"
                value={formData.nom}
                onChange={handleChange}
                className="form-control mt-2"
                placeholder="Password"
                style={{ backgroundColor: "#eee" }}
              ></input>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn fw-bold rounded-pill mt-4"
                style={{ backgroundColor: "#F2D24E", width: "100%" }}
              >
                Sign Up
              </button>
            </form>
          </div>
          <button className="close-button" onClick={() => closeModal("signup")}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
