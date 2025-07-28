import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/hc1.jpg";
import img2 from "../../assets/hc2.jpg";
import img3 from "../../assets/hc3.jpg";
import img4 from "../../assets/hc4.jpg";
import img5 from "../../assets/hc5.jpg";
import img6 from "../../assets/hc6.jpg";
import "./Banner.css"; // Ensure styles are correctly defined

const Banner = () => {
  return (
    <div className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Get body in <br />
            <span className="text-orange-400 shape">shape</span> & stay <br />
            healthy
          </h1>
          <p className="text-lg leading-relaxed">
            To keep yourself healthy & fit, at least <br />
            exercise 40 mins to an hour every day.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-full">
              Join Club Now!
            </button>
            <button className="border border-white hover:bg-white hover:text-black transition px-5 py-2 rounded-full">
              Download App
            </button>
          </div>
        </div>

        {/* Right side carousel */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
          >
            <div>
              <img src={img1} alt="Workout 1" />
            </div>
            <div>
              <img src={img2} alt="Workout 2" />
            </div>
            <div>
              <img src={img3} alt="Workout 3" />
            </div>
            <div>
              <img src={img4} alt="Workout 4" />
            </div>
            <div>
              <img src={img5} alt="Workout 5" />
            </div>
            <div>
              <img src={img6} alt="Workout 6" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
