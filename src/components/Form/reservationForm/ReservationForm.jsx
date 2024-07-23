import styled from "styled-components";
import { CiCircleQuestion } from "react-icons/ci";

import ReservationDropdown from "./ReservationDropdown";
import { useEffect, useState } from "react";
import Button from "../../ui/Reuseable_Ui/Button";

const ReservationFormStyles = styled.div({
  backgroundColor: "white",
  width: "1000px",
  margin: "3% 0px",
  padding: "30px 40px",
  borderRadius: "10px",
});

const ReservationForm = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [bookAsGuestForm, SetBookAsGuestForm] = useState(false);

  function handleClick(e) {
    const closestParent = e.target.closest("form");
    if (closestParent?.id === "form") return;
    setShowReservationForm(false);
  }

  function GuestReservation() {
    SetBookAsGuestForm(!false);
  }

  useEffect(() => {
    document.body.addEventListener("click", handleClick, true);
    return () => document.body.removeEventListener("click", handleClick);
  }, [showReservationForm]);

  return (
    <ReservationFormStyles>
      <h1 className="font-extrabold text-4xl py-5">Reserve a Vehicle</h1>
      <label className="flex items-center justify-between ">
        <p className="font-semibold text-sm">
          Pic-up & Return Location (ZIP,City or Airport)*
        </p>
        <span className="text-red-600 italic"> * Required Field</span>
      </label>

      <input
        role="button"
        className="w-full h-10 border-gray-200 border placeholder:pl-4"
        type="text"
        placeholder="Click to start a reservation"
        id="reservation"
        onClick={() => {
          setShowReservationForm(true);
        }}
      />

      {/* //todo // this is for the both dropdowns   */}
      {/* this is the dropdown */}
      <div> {showReservationForm && <ReservationDropdown />}</div>

      {/* this is the for book as gust dropdown */}
      <div> {bookAsGuestForm && <ReservationDropdown />}</div>

      <div className="flex items-center gap-1 text-sm mt-5 mb-5 ">
        <div className="flex gap-2" onClick={GuestReservation}>
          <Button>book as guest</Button>
        </div>

        <div>
          <CiCircleQuestion size={20} color="green" />
        </div>
      </div>
    </ReservationFormStyles>
  );
};

export default ReservationForm;
