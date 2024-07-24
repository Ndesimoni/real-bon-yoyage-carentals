import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Nav_2Items from "./Nav_2Items";
import { nav_2_data as data } from "../../../../DB/Local_Data_Base";

function Nav_2() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className="relative bg-black">
      <ul className="grid grid-cols-6 items-center gap-[1px] ">
        <li
          onClick={() => setActiveLink(null)}
          className="bg-[#ebebebed] text-lg text-center cursor-pointer py-4 capitalize"
        >
          <Link to="/">Home</Link>
        </li>
        {data.map((item, i) => (
          <Nav_2Items key={item.title} setActiveLink={setActiveLink} index={i}>
            {" "}
            {item.title}
          </Nav_2Items>
        ))}
      </ul>

      {activeLink !== null && (
        <div className="absolute w-[100%] grid grid-cols-[70%_1fr] py-0.5">
          <div className=" bg-white h-[30vh] ">
            <ul className="  justify-evenly  gap-4 mt-4   ml-4 flex">
              {data[activeLink].links.map((linkEl, index) => (
                <div key={index}>
                  <h1 className="text-red-500 uppercase font-semibold">
                    {linkEl.heading}
                  </h1>

                  <div>
                    {linkEl.linkItems.map((linkItem, i) => {
                      return (
                        <NavLink
                          key={i}
                          to={
                            data[activeLink].title === "Vehicles" &&
                            (i || index) > 0
                              ? `our-vehicle-collection/${linkItem}`
                              : linkItem
                          }
                        >
                          <li
                            onClick={() => setActiveLink(null)}
                            className=" px-[2px] py-[1px] line-clamp-1 hover:text-red-500  hover:underline hover:px-1 hover:text-base text-sm capitalize"
                          >
                            {linkItem.replaceAll("-", " ")}
                          </li>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              ))}
            </ul>
          </div>

          <img
            src={data?.[activeLink].img}
            alt="drop down images"
            className="object-fill h-[30vh] w-full"
          />
        </div>
      )}
    </div>
  );
}

export default Nav_2;
