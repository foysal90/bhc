import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />

      <Footer />
    </div>
  );
};

export default Home;
