import { useLocation, useNavigate, } from "react-router-dom";
import { useState } from "react";

//todo these are incoming components
import { cars as allAvailableCars } from "../../DB/Local_Data_Base";
import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import VehicleContain from "./VehicleContain";
// import UsersChosenCar from "./UsersChosenCar";


// const AllCars = () => {
//     //todo this tow state control which component will render
//     const [guestBookingCar, setGuestBookingCar] = useState(false);
//     const [showCars, setShowCars] = useState(true);
//     //todo this display the final step for the booking stage
//     const [carDetails, setCarDetails] = useState();

//     //todo reservation input data coming from the form
//     const { state: usersReservationDetails } = useLocation();
//     console.log(usersReservationDetails);

//     //////////////////////////////////////////////////////////////////
//     // const location = useLocation()
//     // const navigate = useNavigate()


//     function onHandleBookingAsGuest(car) {
//         setGuestBookingCar(!guestBookingCar);
//         setShowCars(false);
//         setCarDetails(car);
//         console.log(car)

//         // if (location.pathname === "/all-available-cars") {
//         //     navigate(`${car.description}`, { state: car })
//         // }
//         // console.log(location.pathname)
//     }

//     return (
//         <>
//             <SingleTextImageView image="url(/help.jpg)">
//                 <p> Alway Ready For Business</p>
//                 <p className="text-yellow-50 text-lg capitalize">
//                     {" "}
//                     Book a ride with us
//                 </p>
//             </SingleTextImageView>

//             <div className="flex justify-center items-center mb-10 pb-5">
//                 <div className="grid grid-cols-3 gap-20 mt-10 w-[1200px]">
//                     {/* //todo this is filtering the vehicleCategory coming from the data base */}
//                     {showCars &&
//                         allAvailableCars.map((car, index) => (
//                             <VehicleContain
//                                 allVehicle={car}
//                                 car={car}
//                                 key={index}
//                                 usersReservationDetails={usersReservationDetails}
//                                 onHandleBookingAsGuest={onHandleBookingAsGuest}
//                             />
//                         ))}
//                 </div>
//             </div>

//             {/* //todo this will render when a click is fired on either from the book as guest or book now in vehicle component only */}
//             {!showCars && (

//                 <UsersChosenCar carDetails={carDetails} />

//             )}
//         </>
//     );
// };

// export default AllCars;






const AllCars = () => {
    //todo this tow state control which component will render
    const [guestBookingCar, setGuestBookingCar] = useState(false);
    // const [showCars, setShowCars] = useState(true);
    // //todo this display the final step for the booking stage
    // const [carDetails, setCarDetails] = useState();

    //todo reservation input data coming from the form
    const { state: usersReservationDetails } = useLocation();


    //////////////////////////////////////////////////////////////////
    const location = useLocation()
    const navigate = useNavigate()


    function onHandleBookingAsGuest(car) {
        setGuestBookingCar(!guestBookingCar);
        // setShowCars(false);
        // setCarDetails(car);


        if (location.pathname === "/all-available-cars") {
            navigate(`${car.description}?name=${car.name.replaceAll(" ",
                "-"
            )}& price=${car.price} `, { state: car })
        }

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
                    {/* //todo this is filtering the vehicleCategory coming from the data base */}
                    {
                        // showCars &&
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

            {/* //todo this will render when a click is fired on either from the book as guest or book now in vehicle component only */}
            {/* {!showCars && (

                <UsersChosenCar carDetails={carDetails} />

            )} */}
        </>
    );
};

export default AllCars;
