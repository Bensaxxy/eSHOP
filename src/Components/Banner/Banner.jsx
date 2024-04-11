import React from "react";

const Banner = ({ data }) => {
  return (
    <div className=" min-h-[400px] flex justify-center items-center py-12">
      <div className=" container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className=" grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          {/**first col */}
          <div className=" p-6 sm:p-8">
            <p data-aos="slide-right" className=" text-sm">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className=" uppercase text-4xl lg:text-7xl font-bold"
            >
              {data.title}
            </h1>
            <p data-aos="fade-up" className=" text-sm">
              {data.date}
            </p>
          </div>

          {/**second col */}
          <div data-aos="zoom-in" className=" h-full flex items-center">
            <img
              className=" w-[220px] scale-125 md:w-[280px] mx-auto drop-shadow-2xl object-cover"
              src={data.image}
            />
          </div>

          {/**third col */}
          <div className=" flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className=" font-bold text-xl">
              {data.title2}{" "}
            </p>
            <p
              data-aos="fade-up"
              className=" text-3xl sm:text-5xl font-bold up"
            >
              {data.title3}{" "}
            </p>
            <p data-aos="fade-up" className=" text-sm tracking-wide leading-5">
              {data.title4}{" "}
            </p>

            <div data-aos="fade-up" data-aos-offset="0">
              <button className=" bg-white text-primary py-2 px-4 rounded-full shadow-2xl">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;