import { useLocation } from "react-router-dom";
import { cars as allAvailableCars } from "../../DB/Local_Data_Base";
import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import VehicleContain from "./VehicleContain";

const AllCars = () => {
  //todo reservation input data coming from the form
  const { state: usersReservationDetails } = useLocation();
  console.log(usersReservationDetails);
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
          {allAvailableCars.map((car, index) => (
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
};

export default AllCars;
