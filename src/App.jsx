import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StarShips from "./components/StarShips";
import LogInModal from "./components/LogInModal";
import SignUpModal from "./components/SignUpModal";
import StarShipDetail from "./components/StarShipDetail";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { ShipContext } from "./context/context";
import { fetchData } from "./utils/apiService";
import { Home } from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//FIREBASE
import { initializeApp } from "firebase/app";

function App() {
  // starships es la llamada actual a la SWAPI con 10 elementos y el link a la siguiente página
  const [starships, setStarships] = useState([]);
  const [currentStarship, setCurrentStarship] = useState(null);
  // lista total de starships que hay que renderizar. con cada 'load more' se añaden elementos al array
  const [starshipsToRender, setStarshipsToRender] = useState("");

  const [log, setLog] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  const [showModalLogIn, setShowModalLogIn] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);

  // FIREBASE
  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAhvPxi9RWLERlMzonLQFBeYqiPa82C7R4",
    authDomain: "sprint-7-f38ff.firebaseapp.com",
    projectId: "sprint-7-f38ff",
    storageBucket: "sprint-7-f38ff.appspot.com",
    messagingSenderId: "116454566166",
    appId: "1:116454566166:web:53ec2cb8acb997cd238837",
    measurementId: "G-0HB9P1F0WD",
  };

  const app = initializeApp(firebaseConfig);

  const openModal = (modal) => {
    if (modal == "login") {
      setShowModalLogIn(true);
    } else if (modal == "signup") {
      setShowModalSignUp(true);
    }
  };
  const closeModal = (modal) => {
    if (modal == "login") {
      setShowModalLogIn(false);
    } else if (modal == "signup") {
      setShowModalSignUp(false);
    }
  };

  async function fetchStuff(endpoint) {
    try {
      const result = await fetchData(endpoint);
      setStarshipsToRender([...starshipsToRender, ...result.results]);
      // console.log([...starshipsToRender, ...result.results]);
      setStarships(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchStuff("/starships");
  }, []);

  return (
    <Router>
      <ShipContext.Provider
        value={{
          log,
          setLog,
          loggedUser,
          setLoggedUser,
          openModal,
          closeModal,
          showModalLogIn,
          showModalSignUp,
          fetchStuff,
          starships,
          currentStarship,
          setCurrentStarship,
          starshipsToRender,
          setStarshipsToRender,
          app,
        }}
      >
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}
        >
          <div className="container">
            <LogInModal
              isOpen={showModalLogIn}
              onClose={() => closeModal("login")}
            ></LogInModal>
            <SignUpModal
              isOpen={showModalSignUp}
              onClose={() => closeModal("signup")}
            ></SignUpModal>
          </div>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/starships"
              element={
                currentStarship ? (
                  <StarShipDetail></StarShipDetail>
                ) : (
                  <StarShips></StarShips>
                )
              }
            ></Route>
          </Routes>
        </div>
      </ShipContext.Provider>
    </Router>
  );
}

export default App;
