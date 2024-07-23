const AllVehicleCategoryContain = ({ car }) => {
  //   let carDescription = car.description;
  //   let description = carDescription.slice(-1);

  function onHandleBooking() {}

  return (
    <figure className="shadow-lg relative">
      <div className="overflow-hidden">
        <img src={`/${car.image}`} alt={car.name} />
      </div>
      <p className="text-lg font-bold my-4 ml-4">{car.name}</p>

      {car.price > 100 && <p className="italic mb-4 ml-4">{car.description}</p>}
      <p className="ml-4 mb-28 ">
        <strong>${car.price}</strong>
        /day
      </p>

      <button
        onClick={onHandleBooking()}
        className=" bg-stone-900 text-white px-4 py-2 uppercase hover:bg-stone-200 hover:text-stone-900 transition-all absolute bottom-8 left-4"
      >
        book now
      </button>
    </figure>
  );
};

export default AllVehicleCategoryContain;
