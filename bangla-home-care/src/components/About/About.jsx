import React, { useState } from "react";
import { FaHeart, FaUserFriends, FaHandsHelping } from "react-icons/fa";
import ConsultationModal from "../ConsultationModal/ConsultationModal";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      {/* Hero Section */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
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
      </motion.div>

      {/* Mission & Values */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            icon: <FaHeart className="text-4xl text-pink-500 mb-4 mx-auto" />,
            title: t("about.missionTitle"),
            text: t("about.missionText"),
          },
          {
            icon: (
              <FaUserFriends className="text-4xl text-blue-500 mb-4 mx-auto" />
            ),
            title: t("about.peopleFirstTitle"),
            text: t("about.peopleFirstText"),
          },
          {
            icon: (
              <FaHandsHelping className="text-4xl text-green-500 mb-4 mx-auto" />
            ),
            title: t("about.compassionTitle"),
            text: t("about.compassionText"),
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 text-center">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Company Statement */}
      <motion.div
        className="mt-20 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {t("about.whyTrustTitle")}
        </h2>
        <p className="text-gray-600 text-lg">{t("about.whyTrustText")}</p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition duration-300 shadow"
          onClick={() => setShowModal(true)}
        >
          {t("about.requestConsultation")}
        </button>
      </motion.div>

      {/* Modal */}
      <ConsultationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default About;
