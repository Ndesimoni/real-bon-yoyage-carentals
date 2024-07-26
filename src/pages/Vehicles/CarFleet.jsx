import { CarFleetSVGs } from "../../DB/Local_Data_Base";
// import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CarFleet = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const thePath = window.location.pathname;
  //   console.log(thePath);
  // }, []);

  // it is not ideal to label onclick handlers as "submit". always use this naming convention for form submissions so that others developers can read your code easily

  //we are not going to need these event handlers as we have changed them to link elements.

  //the method you used is still good but we are just trying to keep things simple and consistent so no need for adding extra handlers

  // function handleClick(activeFleet) {
  //   navigate(`all-vehicle-category/${activeFleet}`);
  // }

  // function allVehicleCategory() {
  //   navigate(`All-vehicle-category`);
  // }

  return (
    <div className="p-2">
      <div className="flex justify-center items-center">
        <h2 className="header_2 capitalize text-2xl">Meet The Fleet</h2>
      </div>

      <div className="flex  ">
        {CarFleetSVGs.map((items, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center  "
          >
            {" "}
            <img src={items.image} alt="car fleet" />
            {
              //since the dropdown for the vehicle sections are displayed as links, lets change this element to a Link element for consistency.
            }
            {/* <button
              onClick={() => handleClick(items.title)}
              className="header_3 my-3 py-2 capitalize text-lg underline"
            >
              {items.title}
            </button> */}
            <Link
              to={`our-vehicle-collection/${items.title}`}
              className="header_3 my-3 py-2 capitalize text-lg underline"
            >
              {items.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-5">
        <Link
          to="our-vehicle-collection"
          className="header_2 capitalize text-xl text-white bg-stone-900 py-2 px-4 rounded-lg hover:opacity-80 transition-all hover:bg-red-600 hover:text-black"
        >
          <h2> View all Vehicle</h2>
        </Link>

        {/* <button
          onClick={allVehicleCategory}
          className="header_2 capitalize text-xl text-white bg-stone-900 py-2 px-4 rounded-lg hover:opacity-80 transition-all hover:bg-red-600 hover:text-black"
        >
          <h2> View all Vehicle</h2>
        </button> */}
      </div>
    </div>
  );
};

export default CarFleet;
