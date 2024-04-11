import React from "react";
import { IoMdSearch, IoIosCart } from "react-icons/io";
import { IoCaretDown } from "react-icons/io5";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];
const dropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className=" py-4">
        <div className=" container flex justify-between items-center">
          {/*Logo and Links section*/}
          <div className=" flex gap-4 items-center">
            <a
              href="#"
              className=" text-primary font-semibold text-2xl sm:text-3xl tracking-widest"
            >
              eSHOP
            </a>
            {/*menu items*/}
            <div>
              <div className=" hidden lg:block">
                <ul className="flex items-center gap-4">
                  {MenuLinks.map((data, i) => (
                    <li key={i}>
                      <a
                        className=" inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}

                  {/**Dropdown section */}
                  <li className="cursor-pointer group relative">
                    <a
                      className=" flex items-center gap-2 font-semibold text-gray-500 dark:hover:text-white py-2"
                      href="#"
                    >
                      Quick Links
                      <span>
                        <IoCaretDown className=" group-hover:rotate-180 duration-300" />
                      </span>
                    </a>
                    {/**Dropdown Links */}
                    <div className=" absolute z-[9999] hidden group-hover:block w-[200px] bg-white shadow-md rounded-md dark:bg-gray-900 p-2 dark:text-white">
                      <ul className=" space-y-2">
                        {dropDownLinks.map((data, i) => (
                          <li key={i}>
                            <a
                              className=" text-gray-500 hover:text-black dark:hover:text-white duration-300 p-2 hover:bg-primary/20 inline-block w-full rounded-md font-semibold"
                              href={data.link}
                            >
                              {data.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*Navbar Right section*/}
          <div className=" flex justify-between items-center gap-4">
            {/*Search Bar Section*/}
            <div className=" relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className=" search-bar group-hover:w-[300px] group-hover: border group-hover:border-gray-500 focus: outline-none dark:border-gray-800 dark:bg-gray-900 group-hover:dark:bg-gray-800 w-0 transition-all duration-300 rounded-full px-3 py-1"
              />
              <IoMdSearch className=" absolute top-1/2 -translate-y-1/2 right-1 text-xl text-gray-600 dark:text-gray-400 group-hover:text-primary duration-200" />
            </div>

            {/*Order button section*/}
            <button onClick={handleOrderPopup} className="relative">
              <IoIosCart className="text-2xl text-gray-600 dark:text-gray-400" />

              <div className=" w-4 h-4 bg-red-500 text-white rounded-full absolute bottom-3 left-3 flex items-center justify-center text-x5">
                4
              </div>
            </button>

            {/*Dark Mode Section*/}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
