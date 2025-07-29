import React, { useState } from "react";
import { FaHeart, FaUserFriends, FaHandsHelping } from "react-icons/fa";
import ConsultationModal from "../ConsultationModal/ConsultationModal";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Aisha Home Care
        </h1>
        <p className="text-gray-600 text-lg">
          At Aisha Home Care, we are committed to improving lives by providing
          compassionate, high-quality in-home care services. Your family is our
          family.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <FaHeart className="text-4xl text-pink-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Our Mission
          </h3>
          <p className="text-gray-600 text-center">
            To deliver personalized and compassionate care, ensuring dignity and
            quality of life for every individual.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <FaUserFriends className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            People First
          </h3>
          <p className="text-gray-600 text-center">
            We focus on building relationships rooted in trust, empathy, and
            mutual respect.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <FaHandsHelping className="text-4xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Compassionate Support
          </h3>
          <p className="text-gray-600 text-center">
            Our trained caregivers are dedicated to offering safe, reliable, and
            heartfelt assistance every day.
          </p>
        </div>
      </div>

      {/* Company Statement */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Families Trust Us
        </h2>
        <p className="text-gray-600 text-lg">
          We believe everyone deserves to age with dignity, remain independent,
          and feel cared for. Whether it’s companionship, daily assistance, or
          specialized care, Aisha Home Care stands by your side with warmth and
          professionalism.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition duration-300 shadow"
          onClick={() => setShowModal(true)}
        >
          Request a Free Consultation
        </button>
      </div>

      {/* Popup Consultation Form */}
      <ConsultationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default About;
