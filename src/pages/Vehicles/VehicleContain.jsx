const VehicleContain = ({ car, usersReservationDetails }) => {
  function onHandleBooking() {}
  console.log(usersReservationDetails);

  return (
    <div className="shadow-lg relative">
      <div className="overflow-hidden">
        <img src={`/${car.image}`} alt={car.name} />
      </div>
      <p className="text-lg font-bold my-4 ml-4">{car.name}</p>

      {car.price > 100 && <p className="italic mb-4 ml-4">{car.description}</p>}

      <p className="ml-4 mb-16 ">
        <strong>${car.price}</strong>
        /day
      </p>

      <div className="flex justify-around items-center pb-4">
        {usersReservationDetails === null ? (
          <button onClick={onHandleBooking()} className="booking_btn mb-5">
            book as guest
          </button>
        ) : (
          <button onClick={onHandleBooking()} className="booking_btn mb-5">
            Book now
          </button>
        )}
      </div>
    </div>
  );
};

export default VehicleContain;

// const VehicleContain = ({ car }) => {
//   function onHandleBooking() {}

//   return (
//     <div className="shadow-lg relative">
//       <div className="overflow-hidden">
//         <img src={`/${car.image}`} alt={car.name} />
//       </div>
//       <p className="text-lg font-bold my-4 ml-4">{car.name}</p>

//       {car.price > 100 && <p className="italic mb-4 ml-4">{car.description}</p>}

//       <p className="ml-4 mb-16 ">
//         <strong>${car.price}</strong>
//         /day
//       </p>

//       <div className="flex justify-around items-center pb-4">
//         <button onClick={onHandleBooking()} className="booking_btn mb-5">
//           book as guest
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VehicleContain;
