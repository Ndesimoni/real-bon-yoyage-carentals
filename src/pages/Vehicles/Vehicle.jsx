import { vehicleCategory } from "../../DB/Local_Data_Base";
import { useLocation, useParams } from "react-router-dom";

import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import VehicleContain from "./VehicleContain";
import { useState } from "react";
import ReservationForm from "../../components/Form/reservationForm/ReservationForm";

function Vehicle() {
  //todo this tow state control which component will render
  const [guestBookingCar, setGuestBookingCar] = useState(false);
  const [showCars, setShowCars] = useState(true);

  //todo this carsId params data is coming from reservation form or it could come from the carFleet single vehicles or when navigate to vehicleCategory
  const { carsId: incomingPath } = useParams();
  //todo reservation input data coming from input, various carTypes, ViewAllVehicle and allCars
  const { state: usersReservationDetails } = useLocation();
  //   console.log(usersReservationDetails.stateOfOperation);

  function onHandleBookingAsGuest(car) {
    setGuestBookingCar(!guestBookingCar);
    setShowCars(false);
    console.log(car);
  }

  return (
    <>
      {/* //todo this is the SingleTextImageView  */}
      <SingleTextImageView image="url(/help.jpg)">
        <p> Alway Ready For Business</p>
        <p className="text-yellow-50 text-lg capitalize"> sell your car</p>
      </SingleTextImageView>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-20 mt-10 w-[1200px]">
          {/* //todo this will render when a click is fired on either from the book as guest or book now in vehicle component only */}
          {!showCars && <ReservationForm />}

          {/* //todo this is filtering the vehicleCategory coming from the data base */}
          {showCars &&
            vehicleCategory
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
                  onHandleBookingAsGuest={onHandleBookingAsGuest}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default Vehicle;
