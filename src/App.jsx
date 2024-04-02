import "./App.css";
import Ships from "@/components/Ships.jsx";
import StarShips from "./components/StarShips";
import StarShipDetail from "./components/StarShipDetail";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { ShipContext } from "./context/context";
import { fetchData } from "./utils/apiService";
import { Home } from "./pages/Home.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function App() {
  // starships es la llamada actual a la SWAPI con 10 elementos y el link a la siguiente página
  const [starships, setStarships] = useState([]);
  const [currentStarship, setCurrentStarship] = useState(null);
  // lista total de starships que hay que renderizar. con cada 'load more' se añaden elementos al array
  const [starshipsToRender, setStarshipsToRender] = useState("");

  async function fetchStuff(endpoint) {
    try {
      const result = await fetchData(endpoint);
      setStarshipsToRender([...starshipsToRender, ...result.results]);
      console.log([...starshipsToRender, ...result.results]);
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
          fetchStuff,
          starships,
          currentStarship,
          setCurrentStarship,
          starshipsToRender,
          setStarshipsToRender,
        }}
      >
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "100vw" }}
        >
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
