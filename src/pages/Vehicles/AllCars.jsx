import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

//todo these are incoming components
import { cars as allAvailableCars } from "../../DB/Local_Data_Base";
import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import VehicleContain from "./VehicleContain";
import UsersChosenCar from "./UsersChosenCar";






const AllCars = () => {
    //todo this tow state control which component will render
    const [guestBookingCar, setGuestBookingCar] = useState(false);
    const [showCars, setShowCars] = useState(true);
    //todo this display the final step for the booking stage
    const [carDetails, setCarDetails] = useState();

    //todo reservation input data coming from the form
    const { state: usersReservationDetails } = useLocation();
    console.log(usersReservationDetails);

    //////////////////////////////////////////////////////////////////
    const location = useLocation()
    const navigate = useNavigate()


    function onHandleBookingAsGuest(car) {
        setGuestBookingCar(!guestBookingCar);
        setShowCars(false);
        setCarDetails(car);
        console.log(car)

        if (location.pathname === "/all-available-cars") {
            navigate(`${car.description}`, { state: car })
        }
        console.log(location.pathname)
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

            {/* //todo this will render when a click is fired on either from the book as guest or book now in vehicle component only */}
            {!showCars && (

                <UsersChosenCar carDetails={carDetails} />
                // <form className="flex justify-center items-top gap-6  my-20">
                //     <div>
                //         <img src={carDetails.image} alt={carDetails.name} />

                //         <CarInfo>
                //             <CarDetails>
                //                 name
                //             </CarDetails>
                //             : {carDetails.name}
                //         </CarInfo>

                //         <CarInfo>
                //             <CarDetails>
                //                 price
                //             </CarDetails>
                //             : ${carDetails.price}
                //         </CarInfo>



                //         <CarInfo>
                //             <CarDetails>
                //                 type
                //             </CarDetails>
                //             : {carDetails.type}
                //         </CarInfo>



                //     </div>

                //     <div className="border px-3 py-5 rounded-sm">
                //         <h1 className="font-extrabold text-4xl pb-5">Reserve a Vehicle</h1>
                //         <label className="flex items-center justify-between ">
                //             <p className="font-semibold text-sm ">
                //                 Pic-up & Return Location ( City, State or Airport )*
                //             </p>
                //             <span className="text-red-600 italic"> * Required Field</span>
                //         </label>
                //         <select
                //             id=""
                //             className="w-full h-10 border-gray-200 border placeholder:pl-4 px-5 appearance-none"
                //             type="text"
                //             placeholder="Click to start a reservation"

                //         // name="stateOfOperation"
                //         // value={formData.stateOfOperation}
                //         // onChange={handleChange}
                //         >
                //             <option value="" disabled selected hidden>
                //                 Choose a state of operation...
                //             </option>
                //             <option value="marryland"> marryland</option>
                //             <option value="minnesota"> minnesota</option>
                //             <option value="tennessee"> tennessee</option>
                //             <option value="virginia"> virginia</option>
                //         </select>

                //         {/* //todo this is the names */}

                //         <SectionStyle className=" flex justify-between ">
                //             {/* this is for first name */}
                //             <ItemStyle>
                //                 <Label>First Name: </Label>
                //                 <InputStyles
                //                     type="text"
                //                     placeholder="First Name"
                //                     name="firstName"
                //                 //   value={formData.firstName}
                //                 //   onChange={handleChange}
                //                 />
                //                 {/* <p className="text-red-500">{error}</p> */}
                //             </ItemStyle>

                //             {/* this is for last name */}
                //             <ItemStyle>
                //                 <Label>Last Name: </Label>
                //                 <InputStyles
                //                     type="text"
                //                     placeholder="Last Name"
                //                     name="lastName"
                //                 //   value={formData.lastName}
                //                 //   onChange={handleChange}
                //                 />
                //             </ItemStyle>
                //         </SectionStyle>

                //         {/* //todo this is the email */}
                //         <SectionStyle>
                //             <ItemStyle>
                //                 <Label>Email: </Label>
                //                 <InputStylesEmail
                //                     id="email"
                //                     type="email"
                //                     placeholder="boyz@email.com"
                //                     className="w-full"
                //                     name="email"
                //                 //   value={formData.email}
                //                 //   onChange={handleChange}
                //                 />
                //             </ItemStyle>
                //         </SectionStyle>

                //         {/* //todo this is the phone number and Type of car  */}
                //         <SectionStyle className="flex justify-between mt-3">
                //             {/* this is for phone number */}
                //             <ItemStyle>
                //                 <Label>Phone:</Label>
                //                 <InputStyles
                //                     type="number"
                //                     placeholder="000 000 000"
                //                     name="phone"
                //                 //   value={formData.phone}
                //                 //   onChange={handleChange}
                //                 />
                //             </ItemStyle>
                //         </SectionStyle>

                //         {/* //todo this is the location  and dates  */}
                //         <SectionStyle
                //             className="flex  flex-row justify-between mt-3"
                //             id="select-box"
                //         >
                //             <div>
                //                 {/* this is for pick up location */}
                //                 <ItemStyle>
                //                     <Label>Pick-up Location</Label>

                //                     <Select
                //                         name="pickUpLocation"
                //                     // value={formData.pickUpLocation}
                //                     // onChange={handleChange}
                //                     >
                //                         <option value="" disabled selected hidden>
                //                             Choose a pick up location...
                //                         </option>
                //                         <option>9500 Good Luck Road MD 20707</option>
                //                         <option>
                //                             7900 International Drive Suit 300 Bloomington MN 55425
                //                         </option>
                //                         <option>
                //                             1959 for Campbell Blvd, #1 Clarksville, TN 37042
                //                         </option>
                //                         <option>
                //                             1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
                //                         </option>
                //                     </Select>
                //                 </ItemStyle>

                //                 {/* this is for pick up date */}
                //                 <ItemStyle>
                //                     <Label>Pick-up Date</Label>
                //                     <InputStyles
                //                         type="date"
                //                         name="pickUpDate"
                //                     // value={formData.pickUpDate}
                //                     // onChange={handleChange}
                //                     />
                //                 </ItemStyle>
                //             </div>

                //             {/* this is for drop off */}
                //             <div>
                //                 <ItemStyle>
                //                     <Label>Drop Off Location</Label>
                //                     <Select
                //                         name="dropOffLocation"
                //                     // value={formData.dropOffLocation}
                //                     // onChange={handleChange}
                //                     >
                //                         <option value="" disabled selected hidden>
                //                             Choose a drop oof location...
                //                         </option>

                //                         <option>9500 Good Luck Road MD 20707</option>

                //                         <option>
                //                             7900 International Drive Suit 300 Bloomington MN 55425
                //                         </option>

                //                         <option>
                //                             1959 for Campbell Blvd, #1 Clarksville, TN 37042
                //                         </option>

                //                         <option>
                //                             1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
                //                         </option>
                //                     </Select>
                //                 </ItemStyle>

                //                 {/* this is for drop off date */}
                //                 <ItemStyle>
                //                     <Label className="mb-2">Drop Off Date</Label>
                //                     <InputStyles
                //                         type="date"
                //                     //   // name="dropOffDate"
                //                     //   // value={formData.dropOffDate}
                //                     //   // onChange={handleChange}
                //                     />
                //                 </ItemStyle>
                //             </div>
                //         </SectionStyle>

                //         <div className="mb-3">
                //             <ItemStyle className="p-2">
                //                 <p className="text-base p-1">Id Card:</p>
                //                 <input type="file" className=" text-sm " />
                //             </ItemStyle>
                //         </div>

                //         <div className="mb-4">
                //             <ItemStyle className="p-2">
                //                 <p className="text-base p-1">Age:</p>
                //                 <input
                //                     type="number"
                //                     className=" text-sm border max-w-32 px-3 py-1 rounded-sm"
                //                     placeholder=" 18 and Above"
                //                 />
                //             </ItemStyle>
                //         </div>

                //         <div className=" ml-3 flex align-center gap-2">
                //             <div>
                //                 <input
                //                     type="checkbox"
                //                     className="h-4 w-4 hover:bg-slate-500 "
                //                 // value={formData.termConditions}
                //                 //   checked={isChecked}
                //                 //   name="termConditions"
                //                 //   onChange={handleCheckBox}
                //                 />
                //             </div>

                //             <Label>
                //                 By clicking this button, you confirm our privacy terms and
                //                 conditions
                //             </Label>
                //         </div>

                //         <div className="flex p-2 gap-2">

                //             <ItemStyle>
                //                 <button
                //                     // type="submit"
                //                     // className=" bg-green-600 text-white px-3 py-[1px] uppercase hover:bg-stone-900  hover:text-white transition-all mr-auto rounded-md mt-3"
                //                     className="booking_btn bg-green-600"
                //                 >
                //                     book & pay now
                //                 </button>
                //             </ItemStyle>

                //             <ItemStyle>
                //                 <button
                //                     // type="submit"
                //                     // className=" bg-red-600 text-white px-3 py-[1px] uppercase hover:bg-stone-900  hover:text-white transition-all mr-auto rounded-md mt-3"

                //                     className="booking_btn "
                //                 >
                //                     book & pay later
                //                 </button>
                //             </ItemStyle>

                //         </div>

                //     </div>
                // </form>
            )}
        </>
    );
};

export default AllCars;
