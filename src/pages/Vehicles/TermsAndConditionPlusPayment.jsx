import { useState } from "react";
import {
  ItemStyle,
  Label,
} from "../../components/Form/reservationForm/ReservationDropdown";

const TermsAndConditionPlusPayment = ({
  // carDetailsFormNotFilled,
  carDetailsFormFilled,
  usersReservationDetails,
}) => {
  const [userFinalDetails, setUserFinalDetails] = useState(
    usersReservationDetails
  );

  //todo this is for book and pay now
  function onHandleBookAndPayNow(e) {
    e.preventDefault();

    //todo handle payNow when the form was filled at start
    if (usersReservationDetails.stateOfOperation) {
      setUserFinalDetails({
        ...userFinalDetails,

        carName: carDetailsFormFilled.name,
        carImage: carDetailsFormFilled.image,
        price: carDetailsFormFilled.price,
      });

      console.log(userFinalDetails);
    }

    //todo handle payNow when the form was not filled at start
    // console.log(carDetailsFormFilled)
    // console.log(usersReservationDetails)
    // console.log("pay now");
  }

  //todo this is for book and pay later
  function onHandleBookAndPayLater(e) {
    e.preventDefault();
    console.log("pay later");
  }

  return (
    <>
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
          By clicking this button, you confirm our privacy terms and conditions
        </Label>
      </div>

      <div className="flex p-2 gap-2">
        <ItemStyle>
          <button
            className="booking_btn bg-green-600"
            onClick={onHandleBookAndPayNow}
          >
            book & pay now
          </button>
        </ItemStyle>

        <ItemStyle>
          <button className="booking_btn " onClick={onHandleBookAndPayLater}>
            book & pay later
          </button>
        </ItemStyle>
      </div>
    </>
  );
};

export default TermsAndConditionPlusPayment;
