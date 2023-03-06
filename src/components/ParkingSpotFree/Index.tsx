import { useState } from "react";
import Button from "../Button/Index";
import "./ParkingSpotFree.scss";

const ParkingSpotFree: React.FC = () => {
  let [parkingLotId, setParkingLotId] = useState<number | undefined>(undefined);
  let [parkingSpotId, setParkingSpotId] = useState<number | undefined>(
    undefined
  );

  const onChangeParkingLotId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParkingLotId(Number(e.target.value));
  };

  const onChangeParkingSpotId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParkingSpotId(Number(e.target.value));
  };

  const onSubmitHandler = () => {};

  return (
    <div className='parking-spot-free-container'>
      <div className='input-container'>
        <input
          type='number'
          placeholder='Enter the parking lot id'
          value={parkingLotId ?? ""}
          onChange={onChangeParkingLotId}
        />
        <input
          type='number'
          placeholder='Enter the parking spot id'
          value={parkingSpotId ?? ""}
          onChange={onChangeParkingSpotId}
        />
      </div>
      <Button
        onClick={() => alert("hi")}
        className='primary'
        isDisabled={parkingLotId === undefined || parkingSpotId === undefined}
      >
        Free up the sapces
      </Button>
    </div>
  );
};

export default ParkingSpotFree;
