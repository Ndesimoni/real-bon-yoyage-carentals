import styled from "styled-components";
import { useEffect, useState } from "react";
import ReservationDropdown from "./ReservationDropdown";

const ReservationFormStyles = styled.div({
  backgroundColor: "white",
  width: "1000px",
  margin: "3% 0px",
  padding: "30px 40px",
  borderRadius: "10px",
});

const ReservationForm = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);

  function handleClick(e) {
    const closestParent = e.target.closest("form");
    if (closestParent?.id === "form") return;
    setShowReservationForm(false);
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
          Pic-up & Return Location ( City, State or Airport )*
        </p>
        <span className="text-red-600 italic"> * Required Field</span>
      </label>

      <select
        // name="stateOfOperation}"
        // value={stateOpp}
        id=""
        className="w-full h-10 border-gray-200 border placeholder:pl-4 px-5 appearance-none"
        type="text"
        placeholder="Click to start a reservation"
        onClick={() => {
          setShowReservationForm(true);
        }}
        name="stateOfOperation"
      >
        <option value="" disabled selected hidden>
          Choose a state of operation...
        </option>
        <option value="marryland"> marryland</option>
        <option value="minnesota"> minnesota</option>
        <option value="tennessee"> tennessee</option>
        <option value="virginia"> virginia</option>
      </select>

      {showReservationForm && <ReservationDropdown />}

      {showReservationForm && <ReservationDropdown />}

      <div className="flex items-center gap-1 text-sm mt-5 mb-5 ">
        <div className="flex gap-2">
          <button
            onClick={() => setShowReservationForm(true)}
            className="border border-r-none px-2 py-1 bg-red-500 font-semibold ring-offset ring-1 "
          >
            book as guest
          </button>
        </div>

        <div className="text-xs text-white p-1">
          <select
            name=""
            id=""
            className="appearance-none border p-1  bg-green-600 text-xs "
          >
            <option value="" disabled selected hidden>
              Choose Categories
            </option>
            <option value="all-cars">all cars</option>
            <option value="all-vehicle-category">all vehicle categories</option>
          </select>
        </div>
      </div>
    </ReservationFormStyles>
  );
};

export default ReservationForm;
