import React, { useState } from "react";
import { FaHeart, FaUserFriends, FaHandsHelping } from "react-icons/fa";
import ConsultationModal from "../ConsultationModal/ConsultationModal";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-200 mb-4">
          {t("about.title")}
        </h1>
        <p className="text-3xl text-black mb-4 leading-relaxed">
          {t("about.intro")}
          <Typewriter
            words={t("about.typewriter", { returnObjects: true })}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>

      {/* Mission & Values */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <FaHeart className="text-4xl text-pink-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            {t("about.missionTitle")}
          </h3>
          <p className="text-gray-600 text-center">{t("about.missionText")}</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <FaUserFriends className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            {t("about.peopleFirstTitle")}
          </h3>
          <p className="text-gray-600 text-center">
            {t("about.peopleFirstText")}
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <FaHandsHelping className="text-4xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            {t("about.compassionTitle")}
          </h3>
          <p className="text-gray-600 text-center">
            {t("about.compassionText")}
          </p>
        </div>
      </div>

      {/* Company Statement */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {t("about.whyTrustTitle")}
        </h2>
        <p className="text-gray-600 text-lg">{t("about.whyTrustText")}</p>
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition duration-300 shadow"
          onClick={() => setShowModal(true)}
        >
          {t("about.requestConsultation")}
        </button>
      </div>

      {/* Modal */}
      <ConsultationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default About;
