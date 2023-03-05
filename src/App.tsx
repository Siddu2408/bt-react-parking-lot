import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import ParkingLot from "./components/ParkingLot/Index";
import Layout from "./Layout/Index";
import ParkingSpot from "./components/ParkingSpot/Index";

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <ParkingLot />
          </Layout>
        }
      />
      <Route
        path='/parking/:id'
        element={
          <Layout>
            <ParkingSpot />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
