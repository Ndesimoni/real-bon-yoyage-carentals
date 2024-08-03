import { vehicleCategory } from "../../DB/Local_Data_Base";
import { useLocation, useParams } from "react-router-dom";

import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import VehicleContain from "./VehicleContain";

function Vehicle() {
  //todo this carsId params data is coming from reservation form or it could come from the carFleet single vehicles or when navigate to vehicleCategory
  const { carsId: incomingPath } = useParams();

  //todo reservation input data coming from the form
  const { state: usersReservationDetails } = useLocation();

  return (
    <>
      {/* //todo this is the SingleTextImageView  */}
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
              //todo this is going to VehicleContain
              <VehicleContain
                car={car}
                key={index}
                usersReservationDetails={usersReservationDetails}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Vehicle;
