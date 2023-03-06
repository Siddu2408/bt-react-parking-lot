import React, { useState } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/urls";

import "./ParkingSpot.scss";
import Button from "../Button/Index";
import axios from "axios";

type SelectOption = {
  value: string;
  label: string;
};

const options: SelectOption[] = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
  { value: "extra-large", label: "Extra Large" },
];

type ParkingSpot = {
  floor: number;
  id: number;
  isOccupied: boolean;
  LotId: number;
  row: number;
  size: string;
  spotNumber: number;
};

const ParkingSpot: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );
  const [availability, setAvailability] = useState<ParkingSpot | null>(null);
  const [error, SetError] = useState(null);
  let { parkingLotId } = useParams();

  const handleSelect = (option: SelectOption | null): void => {
    setSelectedOption(option);
  };

  const handleSumbit = () => {
    axios
      .get(
        BASE_URL +
          `/parking-spots/${selectedOption?.value}/${parkingLotId?.toString()}`
      )
      .then((res) => {
        setAvailability(res.data);
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("error is :", err.response.data);
        SetError(err.response.data.message);
      });
  };

  return (
    <div>
      {availability && (
        <div className='success-message'>
          <h1>{`Parking space is available at ${availability.floor} floor and spot number is ${availability.spotNumber}`}</h1>
        </div>
      )}

      {error && (
        <div className='error-message'>
          <h1>{error}</h1>
        </div>
      )}
      {!availability && !error && (
        <div className='parking-spot-container'>
          <h1>Please select the car type</h1>
          <div className='selection-wrapper'>
            <Select
              options={options}
              value={selectedOption}
              onChange={handleSelect}
            ></Select>
          </div>
          <Button
            onClick={handleSumbit}
            isDisabled={selectedOption?.label === undefined}
            className='primary'
          >
            Press Button to find Parking space
          </Button>
        </div>
      )}
    </div>
  );
};

export default ParkingSpot;
