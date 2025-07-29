import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/hc1.jpg";
import img2 from "../../assets/hc2.jpg";
import img3 from "../../assets/hc3.jpg";
import img4 from "../../assets/hc4.jpg";
import img5 from "../../assets/hc5.jpg";
import img6 from "../../assets/hc6.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gradient-to-t from-black via-zinc-800 to-neutral-900 text-white px-6 py-10">
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
              Request Consultation
            </button>
            <button className="relative inline-block px-6 py-3 rounded-full overflow-hidden group transition-all duration-300 transform hover:scale-105 animate-pulse hover:shadow-xl">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 group-hover:from-pink-600 group-hover:to-yellow-500 transition-all duration-500 ease-in-out blur-sm opacity-70"></span>
              <span
                className="relative text-white font-semibold z-10 
               "
              >
                <Link
                  className="overflow-hidden group transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse"
                  to="tel:+4074764044"
                >
                  Call Now
                </Link>
              </span>
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
