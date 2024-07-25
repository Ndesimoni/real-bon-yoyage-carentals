const VehicleContain = ({ car }) => {
  function onHandleBooking() {}

  return (
    <div className="shadow-lg relative">
      <div className="overflow-hidden">
        <img src={`/${car.image}`} alt={car.name} />
      </div>
      <p className="text-lg font-bold my-4 ml-4">{car.name}</p>

      {car.price > 100 && <p className="italic mb-4 ml-4">{car.description}</p>}

      <p className="ml-4 mb-28 ">
        <strong>${car.price}</strong>
        /day
      </p>

      <div className="flex justify-around items-center">
        <button onClick={onHandleBooking()} className="booking_btn">
          book now
        </button>
      </div>
    </div>
  );
};

export default VehicleContain;
