import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/hc1.jpg";
import img2 from "../../assets/hc2.jpg";
import img3 from "../../assets/hc3.jpg";
import img4 from "../../assets/hc4.jpg";
import img5 from "../../assets/hc5.jpg";
import img6 from "../../assets/hc6.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";
import ConsultationModal from "../ConsultationModal/ConsultationModal";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-t from-black via-zinc-800 to-neutral-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t("banner.heading1")} <br />
            <span className="text-orange-400 shape">
              {t("banner.heading2")}
            </span>{" "}
            {t("banner.heading3")}
          </h1>
          <p className="text-lg leading-relaxed">{t("banner.description")}</p>
          <div className="flex gap-4 flex-wrap">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition duration-300 shadow"
              onClick={() => setShowModal(true)}
            >
              {t("about.requestConsultation")}
            </button>
            {/* <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-full">
              {t("banner.requestConsultation")}
            </button> */}
            <button className="relative inline-block w-66 lg:w-1/2 px-6 py-3 rounded-full overflow-hidden group transition-all duration-300 transform hover:scale-105 animate-pulse hover:shadow-xl">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 group-hover:from-pink-600 group-hover:to-yellow-500 transition-all duration-500 ease-in-out blur-sm opacity-70"></span>
              <span className="relative text-white font-semibold z-10 ">
                <Link to="tel:+14074764044">{t("banner.callNow")}</Link>
              </span>
            </button>
          </div>
          <ConsultationModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
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
            {[img1, img2, img3, img4, img5, img6].map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
