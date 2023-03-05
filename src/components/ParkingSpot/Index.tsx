import React from "react";
import Select from "react-select";

import "./ParkingSpot.scss";

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

const ParkingSpot: React.FC = () => {
  return (
    <div className='parking-spot-container'>
      <h1>Please select the car type</h1>
      <div className='selection-wrapper'>
        <Select options={options}></Select>
      </div>
    </div>
  );
};

export default ParkingSpot;
