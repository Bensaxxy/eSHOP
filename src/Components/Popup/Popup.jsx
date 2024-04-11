import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../shared/Button";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div>
          <div className=" h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-50">
            <div className=" w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl p-5">
              {/**Heading section */}
              <div className=" flex items-center justify-between mb-5">
                <h1 className=" font-semibold">Order Now</h1>
                <div>
                  <IoCloseOutline
                    onClick={handleOrderPopup}
                    className=" text-2xl cursor-pointer"
                  />
                </div>
              </div>

              {/**form section */}
              <div>
                <input
                  className=" form-input dark: border-gray-500 dark:bg-gray-800"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className=" form-input dark: border-gray-500 dark:bg-gray-800"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className=" form-input dark: border-gray-500 dark:bg-gray-800"
                  type="text"
                  placeholder="Address"
                />
                <div className=" flex justify-center">
                  <Button
                    text="Order Now"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
