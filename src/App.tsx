import { Routes, Route } from "react-router-dom";

import "./App.scss";
import ParkingLot from "./components/ParkingLot/Index";
import Layout from "./Layout/Index";
import ParkingSpot from "./components/ParkingSpot/Index";
import ParkingSpotFree from "./components/ParkingSpotFree/Index";

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
        path='/parking/:parkingLotId'
        element={
          <Layout>
            <ParkingSpot />
          </Layout>
        }
      />
      <Route
        path='/free-parking-spot'
        element={
          <Layout>
            <ParkingSpotFree />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
