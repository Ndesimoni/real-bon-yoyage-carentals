// import { useLocation } from "react-router-dom";
import { carTypeCategory } from "../../DB/Local_Data_Base";
import VehicleCategoryType from "./VehicleCategoryContain";
// import { useState } from "react";

function AvailableCars() {
  // incoming state from formDat
  // let { state } = useLocation();

  return (
    <main className="  bg-gray-100 flex justify-center items-center">
      <div className="w-[1200px] mx-auto ">
        <h1 className="text-3xl font-semibold pt-10 capitalize">
          {/* {`Available ${state.} Cars for Rental, Sizes and Models`} */}
        </h1>

        {carTypeCategory.map((category, index) => (
          <VehicleCategoryType
            key={index}
            description={category.description}
            carImage={category.carImage}
            categoryName={category.title}
          />
        ))}
      </div>
    </main>
  );
}

export default AvailableCars;
