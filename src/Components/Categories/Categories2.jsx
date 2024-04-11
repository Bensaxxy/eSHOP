import React from "react";
import Button from "../shared/Button";
import image1 from "../../assets/category/gaming.png";
import image2 from "../../assets/category/vr.png";
import image3 from "../../assets/category/speaker.png";

const Categories = () => {
  return (
    <div className=" py-8">
      <div className="container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/*first col*/}

          <div className=" sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-300 text-white rounded-3xl relative flex h-[320px] items-end">
            <div>
              <div className=" mb-4">
                <p className=" mb-[2px] text-gray-400">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className=" text-4xl font-bold opacity-40 xl:text-5xl mb-4">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img className=" absolute w-[300px] right-12 top-2" src={image1} />
          </div>

          {/*second col*/}
          <div className=" py-10 pl-5 bg-gradient-to-br from-green-500/90 to-green-500/50 text-white rounded-3xl relative flex h-[320px] items-srat">
            <div>
              <div className=" mb-4">
                <p className=" mb-[2px] text-white">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className=" text-4xl font-bold opacity-40 xl:text-5xl mb-4">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-green-500"
                />
              </div>
            </div>
            <img className=" absolute w-[250px] bottom-0" src={image2} />
          </div>

          {/*third col*/}
          <div className=" py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/60 text-white rounded-3xl relative flex h-[320px] items-start">
            <div>
              <div className=" mb-4">
                <p className=" mb-[2px] text-gray-400">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className=" text-4xl font-bold opacity-20 xl:text-5xl mb-4">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandBlue"
                />
              </div>
            </div>
            <img className=" absolute w-[250px] bottom-0" src={image3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
