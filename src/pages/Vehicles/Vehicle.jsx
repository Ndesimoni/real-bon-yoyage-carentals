import { vehicleCategory } from "../../DB/Local_Data_Base";
import { useParams } from "react-router-dom";

import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import VehicleContain from "./VehicleContain";

function Vehicle() {
  const { carsId } = useParams();

  //todo this carsId params data is coming from reservation form or it could come from the carFleet single vehicles or when navigate to vehicleCategory

  const incomingPath = carsId;

  //   console.log(incomingPath);
  //   console.log(allCars);
  return (
    <>
      <SingleTextImageView image="url(/help.jpg)">
        <p> Alway Ready For Business</p>
        <p className="text-yellow-50 text-lg capitalize"> sell your car</p>
      </SingleTextImageView>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-20 mt-10 w-[1200px]">
          {vehicleCategory
            .filter(
              (selectedCategory) =>
                (selectedCategory =
                  selectedCategory.description === incomingPath)
            )
            .map((car, index) => (
              <VehicleContain car={car} key={index} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Vehicle;
