import React from "react";
import Heading from "../shared/Heading";
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-7.jpg";
import Img7 from "../../assets/product/p-9.jpg";
import Button from "../shared/Button";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed ",
    price: "220",
    aosDelay: "600",
  },
];
const ProductData2 = [
  {
    id: 1,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img3,
    title: "Printed ",
    price: "220",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div>
        {/**Heading Section */}
        <Heading title={"Our Products"} subtitle={"Explore Our Products"} />

        {/** first Body Section */}
        <div className=" container mb-10">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            {ProductData.map((data) => (
              <div className=" group" key={data.id}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className=" relative"
                >
                  <img
                    className=" h-[180px] w-[260px] object-cover rounded-md"
                    src={data.img}
                  />

                  {/**Hover button */}
                  <div className=" hidden group-hover:flex absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-full text-center group-hover:backdrop-blur-sm  h-full justify-center items-center duration-200">
                    <Button
                      text={"Add to card"}
                      bgColor={"bg-primary"}
                      textColor={"text-white"}
                    />
                  </div>
                </div>
                <div className=" leading-7">
                  <h2 className=" font-bold">{data.title}</h2>
                  <h2 className="font-semibold text-gray-600">{data.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/**Second body section */}
        <div className=" container mb-10">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            {ProductData2.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className=" group"
                key={data.id}
              >
                <div className=" relative">
                  <img
                    className=" h-[180px] w-[260px] object-cover rounded-md"
                    src={data.img}
                  />

                  {/**Hover button */}
                  <div className=" hidden group-hover:flex absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-full text-center group-hover:backdrop-blur-sm  h-full justify-center items-center duration-200">
                    <Button
                      text={"Add to card"}
                      bgColor={"bg-primary"}
                      textColor={"text-white"}
                    />
                  </div>
                </div>
                <div className=" leading-7">
                  <h2 className=" font-bold">{data.title}</h2>
                  <h2 className="font-semibold text-gray-600">{data.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
