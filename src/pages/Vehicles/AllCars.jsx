import { useLocation } from "react-router-dom";
import { cars as allAvailableCars } from "../../DB/Local_Data_Base";
import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import VehicleContain from "./VehicleContain";
import { useState } from "react";
import ReservationForm from "../../components/Form/reservationForm/ReservationForm";

const AllCars = () => {
  //todo this tow state control which component will render
  const [guestBookingCar, setGuestBookingCar] = useState(false);
  const [showCars, setShowCars] = useState(true);

  //todo reservation input data coming from the form
  const { state: usersReservationDetails } = useLocation();
  console.log(usersReservationDetails);

  function onHandleBookingAsGuest(car) {
    setGuestBookingCar(!guestBookingCar);
    setShowCars(false);
    console.log(car);
  }

  return (
    <>
      <SingleTextImageView image="url(/help.jpg)">
        <p> Alway Ready For Business</p>
        <p className="text-yellow-50 text-lg capitalize">
          {" "}
          Book a ride with us
        </p>
      </SingleTextImageView>

      <div className="flex justify-center items-center mb-10 pb-5">
        <div className="grid grid-cols-3 gap-20 mt-10 w-[1200px]">
          {/* //todo this will render when a click is fired on either from the book as guest or book now in vehicle component only */}
          {!showCars && <ReservationForm />}

          {/* //todo this is filtering the vehicleCategory coming from the data base */}
          {showCars &&
            allAvailableCars.map((car, index) => (
              <VehicleContain
                allVehicle={car}
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
};

export default AllCars;
