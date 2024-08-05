import styled from "styled-components";

import {
    InputStyles,
    InputStylesEmail,
    ItemStyle,
    SectionStyle,
    Label,
    Select,
} from "../../components/Form/reservationForm/ReservationDropdown";
import { useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// this is css
const CarDetails = styled.span({
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "initial",
    fontFamily: "roboto",
});
const CarInfo = styled.div({
    margin: "5px 0px",
    padding: "2px 1px",
    fontSize: "14px",
    fontFamily: "monospace",
});

// const UsersChosenCar = ({ carDetails }) => {
//     // todo coming from the car we choose to rent
//     // const { state: carDetails } = useLocation();

//     //todo this display the final step for the booking stage

//     return (
//         <form className="flex justify-center items-top gap-6  my-20">
//             <div>
//                 <img src={carDetails.image} alt={carDetails.name} />

//                 <CarInfo>
//                     <CarDetails>name</CarDetails>: {carDetails.name}
//                 </CarInfo>

//                 <CarInfo>
//                     <CarDetails>price</CarDetails>: ${carDetails.price}
//                 </CarInfo>

//                 <CarInfo>
//                     <CarDetails>type</CarDetails>: {carDetails.type}
//                 </CarInfo>
//             </div>

//             <div className="border px-3 py-5 rounded-sm">
//                 <h1 className="font-extrabold text-4xl pb-5">Reserve a Vehicle</h1>
//                 <label className="flex items-center justify-between ">
//                     <p className="font-semibold text-sm ">
//                         Pic-up & Return Location ( City, State or Airport )*
//                     </p>
//                     <span className="text-red-600 italic"> * Required Field</span>
//                 </label>
//                 <select
//                     id=""
//                     className="w-full h-10 border-gray-200 border placeholder:pl-4 px-5 appearance-none"
//                     type="text"
//                     placeholder="Click to start a reservation"

//                 // name="stateOfOperation"
//                 // value={formData.stateOfOperation}
//                 // onChange={handleChange}
//                 >
//                     <option value="" disabled selected hidden>
//                         Choose a state of operation...
//                     </option>
//                     <option value="marryland"> marryland</option>
//                     <option value="minnesota"> minnesota</option>
//                     <option value="tennessee"> tennessee</option>
//                     <option value="virginia"> virginia</option>
//                 </select>

//                 {/* //todo this is the names */}

//                 <SectionStyle className=" flex justify-between ">
//                     {/* this is for first name */}
//                     <ItemStyle>
//                         <Label>First Name: </Label>
//                         <InputStyles
//                             type="text"
//                             placeholder="First Name"
//                             name="firstName"
//                         //   value={formData.firstName}
//                         //   onChange={handleChange}
//                         />
//                         {/* <p className="text-red-500">{error}</p> */}
//                     </ItemStyle>

//                     {/* this is for last name */}
//                     <ItemStyle>
//                         <Label>Last Name: </Label>
//                         <InputStyles
//                             type="text"
//                             placeholder="Last Name"
//                             name="lastName"
//                         //   value={formData.lastName}
//                         //   onChange={handleChange}
//                         />
//                     </ItemStyle>
//                 </SectionStyle>

//                 {/* //todo this is the email */}
//                 <SectionStyle>
//                     <ItemStyle>
//                         <Label>Email: </Label>
//                         <InputStylesEmail
//                             id="email"
//                             type="email"
//                             placeholder="boyz@email.com"
//                             className="w-full"
//                             name="email"
//                         //   value={formData.email}
//                         //   onChange={handleChange}
//                         />
//                     </ItemStyle>
//                 </SectionStyle>

//                 {/* //todo this is the phone number and Type of car  */}
//                 <SectionStyle className="flex justify-between mt-3">
//                     {/* this is for phone number */}
//                     <ItemStyle>
//                         <Label>Phone:</Label>
//                         <InputStyles
//                             type="number"
//                             placeholder="000 000 000"
//                             name="phone"
//                         //   value={formData.phone}
//                         //   onChange={handleChange}
//                         />
//                     </ItemStyle>
//                 </SectionStyle>

//                 {/* //todo this is the location  and dates  */}
//                 <SectionStyle
//                     className="flex  flex-row justify-between mt-3"
//                     id="select-box"
//                 >
//                     <div>
//                         {/* this is for pick up location */}
//                         <ItemStyle>
//                             <Label>Pick-up Location</Label>

//                             <Select
//                                 name="pickUpLocation"
//                             // value={formData.pickUpLocation}
//                             // onChange={handleChange}
//                             >
//                                 <option value="" disabled selected hidden>
//                                     Choose a pick up location...
//                                 </option>
//                                 <option>9500 Good Luck Road MD 20707</option>
//                                 <option>
//                                     7900 International Drive Suit 300 Bloomington MN 55425
//                                 </option>
//                                 <option>
//                                     1959 for Campbell Blvd, #1 Clarksville, TN 37042
//                                 </option>
//                                 <option>
//                                     1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
//                                 </option>
//                             </Select>
//                         </ItemStyle>

//                         {/* this is for pick up date */}
//                         <ItemStyle>
//                             <Label>Pick-up Date</Label>
//                             <InputStyles
//                                 type="date"
//                                 name="pickUpDate"
//                             // value={formData.pickUpDate}
//                             // onChange={handleChange}
//                             />
//                         </ItemStyle>
//                     </div>

//                     {/* this is for drop off */}
//                     <div>
//                         <ItemStyle>
//                             <Label>Drop Off Location</Label>
//                             <Select
//                                 name="dropOffLocation"
//                             // value={formData.dropOffLocation}
//                             // onChange={handleChange}
//                             >
//                                 <option value="" disabled selected hidden>
//                                     Choose a drop oof location...
//                                 </option>

//                                 <option>9500 Good Luck Road MD 20707</option>

//                                 <option>
//                                     7900 International Drive Suit 300 Bloomington MN 55425
//                                 </option>

//                                 <option>
//                                     1959 for Campbell Blvd, #1 Clarksville, TN 37042
//                                 </option>

//                                 <option>
//                                     1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
//                                 </option>
//                             </Select>
//                         </ItemStyle>

//                         {/* this is for drop off date */}
//                         <ItemStyle>
//                             <Label className="mb-2">Drop Off Date</Label>
//                             <InputStyles
//                                 type="date"
//                             //   // name="dropOffDate"
//                             //   // value={formData.dropOffDate}
//                             //   // onChange={handleChange}
//                             />
//                         </ItemStyle>
//                     </div>
//                 </SectionStyle>

//                 <div className="mb-3">
//                     <ItemStyle className="p-2">
//                         <p className="text-base p-1">Id Card:</p>
//                         <input type="file" className=" text-sm " />
//                     </ItemStyle>
//                 </div>

//                 <div className="mb-4">
//                     <ItemStyle className="p-2">
//                         <p className="text-base p-1">Age:</p>
//                         <input
//                             type="number"
//                             className=" text-sm border max-w-32 px-3 py-1 rounded-sm"
//                             placeholder=" 18 and Above"
//                         />
//                     </ItemStyle>
//                 </div>

//                 <div className=" ml-3 flex align-center gap-2">
//                     <div>
//                         <input
//                             type="checkbox"
//                             className="h-4 w-4 hover:bg-slate-500 "
//                         // value={formData.termConditions}
//                         //   checked={isChecked}
//                         //   name="termConditions"
//                         //   onChange={handleCheckBox}
//                         />
//                     </div>

//                     <Label>
//                         By clicking this button, you confirm our privacy terms and
//                         conditions
//                     </Label>
//                 </div>

//                 <div className="flex p-2 gap-2">
//                     <ItemStyle>
//                         <button className="booking_btn bg-green-600">book & pay now</button>
//                     </ItemStyle>

//                     <ItemStyle>
//                         <button className="booking_btn ">book & pay later</button>
//                     </ItemStyle>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default UsersChosenCar;

const UsersChosenCar = () => {
    // todo coming from the car we choose to rent
    const { state: carDetails } = useLocation();
    console.log(carDetails);

    //todo this display the final step for the booking stage

    return (
        <form className="flex justify-center items-top gap-6  my-20">
            <div>
                <img src={`/${carDetails.image}`} alt={carDetails.name} />

                <CarInfo>
                    <CarDetails>name</CarDetails>: {carDetails.name}
                </CarInfo>

                <CarInfo>
                    <CarDetails>price</CarDetails>: ${carDetails.price}
                </CarInfo>

                <CarInfo>
                    <CarDetails>type</CarDetails>: {carDetails.type}
                </CarInfo>
            </div>

            <div className="border px-3 py-5 rounded-sm">
                <h1 className="font-extrabold text-4xl pb-5">Book {carDetails.name}</h1>
                <label className="flex items-center justify-between ">
                    <p className="font-semibold text-sm ">
                        Pic-up & Return Location ( City, State or Airport )*
                    </p>
                    <span className="text-red-600 italic"> * Required Field</span>
                </label>
                <select
                    id=""
                    className="w-full h-10 border-gray-200 border placeholder:pl-4 px-5 appearance-none"
                    type="text"
                    placeholder="Click to start a reservation"

                // name="stateOfOperation"
                // value={formData.stateOfOperation}
                // onChange={handleChange}
                >
                    <option value="" disabled selected hidden>
                        Choose a state of operation...
                    </option>
                    <option value="marryland"> marryland</option>
                    <option value="minnesota"> minnesota</option>
                    <option value="tennessee"> tennessee</option>
                    <option value="virginia"> virginia</option>
                </select>

                {/* //todo this is the names */}

                <SectionStyle className=" flex justify-between ">
                    {/* this is for first name */}
                    <ItemStyle>
                        <Label>First Name: </Label>
                        <InputStyles
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                        //   value={formData.firstName}
                        //   onChange={handleChange}
                        />
                        {/* <p className="text-red-500">{error}</p> */}
                    </ItemStyle>

                    {/* this is for last name */}
                    <ItemStyle>
                        <Label>Last Name: </Label>
                        <InputStyles
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                        //   value={formData.lastName}
                        //   onChange={handleChange}
                        />
                    </ItemStyle>
                </SectionStyle>

                {/* //todo this is the email */}
                <SectionStyle>
                    <ItemStyle>
                        <Label>Email: </Label>
                        <InputStylesEmail
                            id="email"
                            type="email"
                            placeholder="boyz@email.com"
                            className="w-full"
                            name="email"
                        //   value={formData.email}
                        //   onChange={handleChange}
                        />
                    </ItemStyle>
                </SectionStyle>

                {/* //todo this is the phone number and Type of car  */}
                <SectionStyle className="flex justify-between mt-3">
                    {/* this is for phone number */}
                    <ItemStyle>
                        <Label>Phone:</Label>
                        <InputStyles
                            type="number"
                            placeholder="000 000 000"
                            name="phone"
                        //   value={formData.phone}
                        //   onChange={handleChange}
                        />
                    </ItemStyle>
                </SectionStyle>

                {/* //todo this is the location  and dates  */}
                <SectionStyle
                    className="flex  flex-row justify-between mt-3"
                    id="select-box"
                >
                    <div>
                        {/* this is for pick up location */}
                        <ItemStyle>
                            <Label>Pick-up Location</Label>

                            <Select
                                name="pickUpLocation"
                            // value={formData.pickUpLocation}
                            // onChange={handleChange}
                            >
                                <option value="" disabled selected hidden>
                                    Choose a pick up location...
                                </option>
                                <option>9500 Good Luck Road MD 20707</option>
                                <option>
                                    7900 International Drive Suit 300 Bloomington MN 55425
                                </option>
                                <option>
                                    1959 for Campbell Blvd, #1 Clarksville, TN 37042
                                </option>
                                <option>
                                    1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
                                </option>
                            </Select>
                        </ItemStyle>

                        {/* this is for pick up date */}
                        <ItemStyle>
                            <Label>Pick-up Date</Label>
                            <InputStyles
                                type="date"
                                name="pickUpDate"
                            // value={formData.pickUpDate}
                            // onChange={handleChange}
                            />
                        </ItemStyle>
                    </div>

                    {/* this is for drop off */}
                    <div>
                        <ItemStyle>
                            <Label>Drop Off Location</Label>
                            <Select
                                name="dropOffLocation"
                            // value={formData.dropOffLocation}
                            // onChange={handleChange}
                            >
                                <option value="" disabled selected hidden>
                                    Choose a drop oof location...
                                </option>

                                <option>9500 Good Luck Road MD 20707</option>

                                <option>
                                    7900 International Drive Suit 300 Bloomington MN 55425
                                </option>

                                <option>
                                    1959 for Campbell Blvd, #1 Clarksville, TN 37042
                                </option>

                                <option>
                                    1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
                                </option>
                            </Select>
                        </ItemStyle>

                        {/* this is for drop off date */}
                        <ItemStyle>
                            <Label className="mb-2">Drop Off Date</Label>
                            <InputStyles
                                type="date"
                            //   // name="dropOffDate"
                            //   // value={formData.dropOffDate}
                            //   // onChange={handleChange}
                            />
                        </ItemStyle>
                    </div>
                </SectionStyle>

                <div className="mb-3">
                    <ItemStyle className="p-2">
                        <p className="text-base p-1">Id Card:</p>
                        <input type="file" className=" text-sm " />
                    </ItemStyle>
                </div>

                <div className="mb-4">
                    <ItemStyle className="p-2">
                        <p className="text-base p-1">Age:</p>
                        <input
                            type="number"
                            className=" text-sm border max-w-32 px-3 py-1 rounded-sm"
                            placeholder=" 18 and Above"
                        />
                    </ItemStyle>
                </div>

                <div className=" ml-3 flex align-center gap-2">
                    <div>
                        <input
                            type="checkbox"
                            className="h-4 w-4 hover:bg-slate-500 "
                        // value={formData.termConditions}
                        //   checked={isChecked}
                        //   name="termConditions"
                        //   onChange={handleCheckBox}
                        />
                    </div>

                    <Label>
                        By clicking this button, you confirm our privacy terms and
                        conditions
                    </Label>
                </div>

                <div className="flex p-2 gap-2">
                    <ItemStyle>
                        <button className="booking_btn bg-green-600">book & pay now</button>
                    </ItemStyle>

                    <ItemStyle>
                        <button className="booking_btn ">book & pay later</button>
                    </ItemStyle>
                </div>
            </div>
        </form>
    );
};

export default UsersChosenCar;
