import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className=" dark:bg-gray-950">
      <div className=" container">
        <div className=" grid md:grid-cols-3 pb-20 pt-5">
          <div className=" py-8 px-4">
            <a
              href="#"
              className=" text-primary font-semibold text-2xl sm:text-3xl tracking-widest"
            >
              eSHOP
            </a>
            <p className=" text-gray-600 lg:pr-24 pt-3 dark:text-white/70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. majories
              alias cum
            </p>
            <p className=" text-gray-500 mt-4">
              Made with ❤️ by the Coding Journey
            </p>

            <a
              className=" inline-block bg-primary/90 text-white rounded-full py-2 px-4 mt-4 text-sm"
              href="https://github.com/Bensaxxy"
              target="_blank"
            >
              You can check my Github
            </a>
          </div>
          <div className=" grid col-span-2 grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className=" py-8 px-4">
              <h1 className=" font-semibold text-xl sm:text-left mb-3">
                Important Links
              </h1>
              <ul className=" space-y-3">
                {FooterLinks.map((data, i) => (
                  <li key={i}>
                    <a
                      className=" text-gray-600
                      dark:text-gray-400 
                      dark:hover:text-white
                      hover:text-black duration-300"
                      href={data.link}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/**Second col links */}
            <div className=" py-8 px-4">
              <h1 className=" font-semibold text-xl sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className=" space-y-3">
                {FooterLinks.map((data, i) => (
                  <li key={i}>
                    <a
                      className=" text-gray-600
                    dark:text-gray-400 
                    dark:hover:text-white
                    hover:text-black duration-300"
                      href={data.link}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/**Company address */}
            <div className=" py-8 px-4 col-span-3 sm:col-auto">
              {/**Address links */}
              <h1 className=" font-semibold text-xl sm:text-left mb-3">
                Address
              </h1>
              <div>
                <div className=" flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>

                <div className=" flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>

                {/**Social Links */}
                <div className=" flex gap-3 items-center mt-6">
                  <a
                    className=" text-3xl hover:text-primary duration-300"
                    href="#"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className=" text-3xl hover:text-primary duration-300"
                    href="#"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    className=" text-3xl hover:text-primary duration-300"
                    href="#"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
