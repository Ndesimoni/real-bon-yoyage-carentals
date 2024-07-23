import { useParams } from "react-router-dom";
import { cars } from "../../../../DB/Local_Data_Base";

const NORMAL_PRICE = 100;

function Cars() {
  const { type: carType } = useParams();

  const carsArr = cars.filter((car) => {
    if (carType === "all-cars") return cars;
    if (carType === "luxury-cars") return car.price > NORMAL_PRICE;
    else return car.type.includes(carType.slice(0, 3));
  });

  return (
    <div className="mt-10">
      <h1 className="ml-10 font-bold text-3xl mb-5 uppercase underline">
        {carType.replaceAll("-", " ")}
      </h1>

      <div className="grid grid-cols-3 gap-20 ">
        {carsArr.map((car, i) => (
          <figure key={i} className="shadow-lg relative">
            <div className="overflow-hidden">
              <img src={`/${car.image}`} alt={car.name} />
            </div>
            <p className="text-lg font-bold my-4 ml-4">{car.name}</p>
            {car.price > 100 && <p className="italic mb-4 ml-4">luxury</p>}
            <p className="ml-4 mb-28 ">
              <strong>${car.price}</strong>
              /day
            </p>
            <button className=" bg-stone-900 text-white px-4 py-2 uppercase hover:bg-stone-200 hover:text-stone-900 transition-all absolute bottom-8 left-4">
              book now
            </button>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Cars;
