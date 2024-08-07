import {
    ItemStyle,
    Label,
} from "../../components/Form/reservationForm/ReservationDropdown";

const TermsAndConditionPlusPayment = () => {
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
                    <button className="booking_btn bg-green-600">book & pay now</button>
                </ItemStyle>

                <ItemStyle>
                    <button className="booking_btn ">book & pay later</button>
                </ItemStyle>
            </div>
        </>
    );
};

export default TermsAndConditionPlusPayment;
