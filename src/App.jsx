//todo // package import
import { BrowserRouter, Route, Routes } from "react-router-dom";
// useLocation
//todo // component imports
import CLarksvilleTennessee from "./pages/Location/CLarksVilleTennessee";
import BloomingtonMinnesota from "./pages/Location/BloomingtonMinnesota";
import WoodbridgeVirginia from "./pages/Location/WoodBridgeVirginia";
import PageNotFound from "./PageNotFound";
import HomePage from "./pages/Home";
import AppLayOut from "./components/ui/AppLayOut";
import CarsUnder5000 from "./pages/Reservations/CarsUnder5000";
import InsuredCars from "./pages/Reservations/InsuredCars";
import SpecialOffers from "./pages/Reservations/SpecialOffers";
import Blogs from "./pages/Blogs";
import Politics from "./pages/Reservations/Politics";
import LatestCarNews from "./pages/Reservations/LatestCarNews";
import RideShareReservationAndMore from "./pages/Business/RideShareReservationAndMore";
// import RentToOwn from "./pages/Business/RentToOwn";
import HowWeWork from "./pages/Reservations/HowWeWork";
import Faq from "./pages/help/Faq";
import Safety from "./components/ui/Safety";
import Accident from "./pages/blogs/Accident";
import AvoidPayDeposit from "./pages/blogs/AvoidPayDeposits";
import BestCarCompanies from "./pages/blogs/BestCarCompanies";
import CarCrashWithoutInsurance from "./pages/blogs/CarCrashWithoutInsurance";
import DriverFault from "./pages/blogs/DriverFault";
import AboutUs from "./pages/About/AboutUs";
import CarFleet from "./pages/Vehicles/CarFleet";
import VehicleCategory from "./pages/Vehicles/VehicleCategory";
import StartCarReservation from "./pages/Reservations/StartCarReservation";
import CarCrashKnowledge from "./pages/blogs/CarCrashKnowledge";
import BestShortTerm from "./pages/blogs/BestShortTerm";
import Map from "./components/map/Map";
import HelpInfo from "./pages/help/FaqInfo";
import InsuranceImportance from "./pages/blogs/InsuranceImportance";
import NoInsuranceCrash from "./pages/blogs/NoInsuranceCrash";
import Overview from "./pages/blogs/Overview";
import PayTolls from "./pages/blogs/PayTolls";
import RentalCarState from "./pages/blogs/RentalCarState";
import RentalCarStolen from "./pages/blogs/RentalCarStolen";
import Repairs from "./pages/blogs/Repairs";
import Requirements from "./pages/blogs/Requirements";
import TimeToReportStolen from "./pages/blogs/TimeToReportStolen";
import Contact from "./components/Contact";
import Services from "./pages/Reservations/Services";
import SellACar from "./pages/Business/SellACar";
import UserDashboard from "./components/UserDashboard";
import ReserveForThirdPartyAndHolidayOffers from "./pages/Reservations/ReserveForThirdPartyAndHolidayOffers";
import AllVehicleCategory from "./pages/Vehicles/AllVehicleCategory";
import AvailableCars from "./pages/Vehicles/VehicleCategory";
import Cars from "./components/ui/Header/NavBar-2/Cars";
// import BookingForm from "./components/Form/BookingForm";

const App = () => {
  // const state = useLocation();
  // console.log(state);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayOut />}>
            {/* <Route index element={<Navigate replace to="home" />} /> */}
            {/* this are children nested routes */}
            <Route path="/" element={<HomePage />} />
            {/* //todo //: route for navbar-_1 */}
            {/* routes for help */}
            <Route path="F-A-Q" element={<Faq />} />
            <Route path="Help" element={<HelpInfo />} />
            <Route path="find-a-location" element={<Map />} />
            {/* //todo //: route for navbar-_2 */}
            {/*  route path for Reservation */}
            <Route
              path="start-a-Car-Reservation"
              element={<StartCarReservation />}
            />

            <Route
              path="third-party-reservation"
              element={<ReserveForThirdPartyAndHolidayOffers />}
            />
            {/* 
            <Route
              path="About-third-party"
              element={<ReserveForThirdPartyAndHolidayOffers />}
            /> */}
            <Route
              path="share-a-ride"
              element={<RideShareReservationAndMore />}
            />
            <Route path="how-we-operate" element={<HowWeWork />} />
            <Route path="services" element={<Services />} />
            {/* Good Deals */}
            <Route path="cars-under-$5000" element={<CarsUnder5000 />} />
            <Route path="insured-cars" element={<InsuredCars />} />
            {/* Promo */}
            <Route path="special-offers" element={<SpecialOffers />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="politics" element={<Politics />} />
            <Route path="latest-car-news" element={<LatestCarNews />} />
            {/*  routes for Business */}
            <Route path="buy-a-car" element={<SellACar />} />
            <Route path="sell-a-car" element={<SellACar />} />
            {/* <Route path="how-ride-share-works" element={<RideShare />} /> */}
            <Route
              path="rent-to-own"
              element={<RideShareReservationAndMore />}
            />
            {/* <Route
              path="See-latest-offers"
              element={</>}
            /> */}
            {/*  routes for Vehicles */}

            {/* <Route path="category" element={<AllVehicleCategory />} />
            <Route path="All-vehicle-category" element={<VehicleCategory />} />

            <Route
              path="All-vehicle-category/:carsId"
              element={<AllVehicleCategory />}
            /> */}

            <Route path="/All-vehicle-category" element={<VehicleCategory />} />

            <Route
              path="/All-vehicle-category/:carsId"
              element={<AllVehicleCategory />}
            />

            <Route path="/our-vehicle-collection" element={<AvailableCars />} />

            <Route path="/our-vehicle-collection/:type" element={<Cars />} />

            {/* <Route to="bookingForm" element={BookingForm} /> */}

            {/* //todo  forms */}

            {/* <Route path="car-category/:userId" element={<CarMakeCategory />} /> */}
            {/*  routes for locations */}
            <Route path="view-car-fleet" element={<CarFleet />} />
            {/* landHam and laurel route to reserve car component */}
            <Route path="Lanham-MD" element={<StartCarReservation />} />
            <Route path="Laurel-MD" element={<StartCarReservation />} />
            <Route path="clarksville-TN" element={<CLarksvilleTennessee />} />
            <Route path="bloomington-MT" element={<BloomingtonMinnesota />} />
            <Route path="woodbridge-VA" element={<WoodbridgeVirginia />} />
            {/*  routes for learn */}
            <Route path="our-safety-policy" element={<Safety />} />
            <Route path="How-we-operate" element={<HowWeWork />} />
            <Route path="Our-offerings" element={<Services />} />
            <Route
              path="holiday-offers"
              element={<ReserveForThirdPartyAndHolidayOffers />}
            />
            {/* this is the blogs */}
            <Route path="accident" element={<Accident />} />
            <Route path="Avoid-Paying-Deposits" element={<AvoidPayDeposit />} />
            <Route path="Best-Car-companies" element={<BestCarCompanies />} />
            <Route
              path="Car-crash-without-insurance"
              element={<CarCrashWithoutInsurance />}
            />
            <Route path="Learn-about-company" element={<AboutUs />} />
            <Route path="Driver-fault" element={<DriverFault />} />
            <Route
              path="Insurance-Importance"
              element={<InsuranceImportance />}
            />
            <Route path="No-Insurance-crash" element={<NoInsuranceCrash />} />
            <Route path="Overview" element={<Overview />} />
            <Route path="Pay-tolls" element={<PayTolls />} />
            <Route path="Rental-car-state" element={<RentalCarState />} />
            <Route path="Rental-car-stolen" element={<RentalCarStolen />} />
            <Route path="Repairs" element={<Repairs />} />
            <Route path="Requirements" element={<Requirements />} />
            <Route
              path="Time-to-report-stolen"
              element={<TimeToReportStolen />}
            />
            {
              //added short best short term car rental blog and car crash knowledge blog and linked the route
            }
            <Route
              path="/best-short-term-car-rental-in-lanham"
              element={<BestShortTerm />}
            />
            <Route
              path="/knowledge-on-car-crash"
              element={<CarCrashKnowledge />}
            />
            {
              //added contact route
            }
            <Route path="/Contact-us" element={<Contact />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// const route = createBrowserRouter([
//   {
//     element: <AppLayOut />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },

//       {
//         path: "F-A-Q",
//         element: <HelpInfo />,
//       },

//       {
//         path: "find-a-location",
//         element: <Map />,
//       },
//     ],
//   },
// ]);

// export const App = () => {
//   return <RouterProvider router={route} />;
// };

export default App;
