import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories/Categories";
import Categories2 from "./Components/Categories/Categories2";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import Products from "./Components/Products/Products";
import smartwatch2 from "./assets/category/smartwatch.png";
import Blog from "./Components/Blog/Blog";
import Partner from "./Components/Partner/Partner";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const bannerData = {
  discount: "30% OFF",
  title: "Fine  Smiles",
  date: " 14 June to 28 June",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "lorem, ipsum dolor sit amet consectetur adipisicing elit, Eaque reiciendis",
  bgColor: "#f42c37",
};
const bannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc67",
};

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 800,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className=" bg-white dark:bg-gray-900 dark:text-white overflow-hidden duration-500">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Categories />
        <Categories2 />
        <Services />
        <Banner data={bannerData} />
        <Products />
        <Banner data={bannerData2} />
        <Blog />
        <Partner />
        <Footer />
        <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      </div>
    </>
  );
}

export default App;
