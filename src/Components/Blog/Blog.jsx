import React from "react";
import Heading from "../shared/Heading";

// import images
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Satya",
    image: Img2,
    aosDelay: "100",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Sabir",
    image: Img3,
    aosDelay: "200",
  },
];
const Blog = () => {
  return (
    <div className=" my-12">
      <div className=" container">
        {/**Heading Section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        {/**Blog Section */}
        <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/**Blog Card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className=" bg-white dark:bg-gray-900"
              key={data.title}
            >
              <div className=" overflow-hidden rounded-2xl mb-2">
                {/**Blog image */}
                <img
                  className=" w-full h-[220px] rounded-2xl hover:scale-105 duration-500 object-cover"
                  src={data.image}
                />
              </div>
              {/**blog content */}
              <div className="space-y-2">
                <p className="text-x5 text-gray-500">{data.published}</p>
                <p className=" font-bold line-clamp-1">{data.title}</p>
                <p className=" line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
