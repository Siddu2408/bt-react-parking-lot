import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../../utils/urls";
import "./ParkingLot.scss";

export interface ParkingLotInterface {
  id: number;
  name: string;
  location: string;
  numFloors: number;
  numSpotsPerFloor: {
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
  };
}

const ParkingLot: React.FC = () => {
  const navigate = useNavigate();
  let [parkingLots, setParkingLots] = useState<ParkingLotInterface[]>([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/parking-lots")
      .then((res) => {
        setParkingLots(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const selectParkingLotHandler = (parkingLotId: number) => {
    navigate(`/parking/${parkingLotId}`);
  };

  return (
    <div className='parking-lot-container'>
      <h1 className='title'>Please select the Parking Lot</h1>
      <div className='card-wrapper'>
        {parkingLots &&
          parkingLots.map((details: ParkingLotInterface) => (
            <div
              className='card-container'
              key={details.id}
              onClick={() => selectParkingLotHandler(details.id)}
            >
              <h2>{details.name}</h2>
              <h3>{details.location}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ParkingLot;
