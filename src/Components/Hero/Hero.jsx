import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 1,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    // dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoPlaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnFocus: false,
    pauseOnHover: false,
  };
  return (
    <div className=" container">
      <div className=" rounded-2xl overflow-hidden min-h-[530px] sm:min-h-[530px] bg-gray-200/80 dark:bg-gray-700/90 flex justify-center items-center">
        <div className=" container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className=" grid grid-cols-1 sm:grid-cols-2">
                  {/**Text content section */}
                  <div className=" flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className=" text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className=" text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1 className="text-white text-5xl uppercase dark:text-white/5 sm:text-text-[80px] md:text-[100px] xl:text-[160px] font-bold">
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="0"
                      data-aos-once="true"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                  {/**img section */}
                  <div className=" order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className=" relative z-10"
                    >
                      <img
                        className=" w-[300px] h-[300px] object-contain sm:w-[400px] sm:h-[400px] sm:scale-105 lg:scale-110 mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                        src={data.img}
                        alt={data.img}
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
