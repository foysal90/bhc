import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaHandsHelping, FaSmile, FaUtensils, FaPills } from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "personal-care",
      icon: <FaHandsHelping className="text-4xl text-blue-500 mb-4" />,
      name: t("services.personalCare.name"),
      desc: t("services.personalCare.desc"),
    },
    {
      id: "companionship",
      icon: <FaSmile className="text-4xl text-pink-500 mb-4" />,
      name: t("services.companionship.name"),
      desc: t("services.companionship.desc"),
    },
    {
      id: "meal-preparation",
      icon: <FaUtensils className="text-4xl text-green-500 mb-4" />,
      name: t("services.mealPrep.name"),
      desc: t("services.mealPrep.desc"),
    },
    {
      id: "medication-reminder",
      icon: <FaPills className="text-4xl text-purple-500 mb-4" />,
      name: t("services.medication.name"),
      desc: t("services.medication.desc"),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        {t("servicesTitle")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/service/${service.id}`}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 border hover:border-blue-400 flex flex-col items-center text-center"
          >
            {service.icon}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {service.name}
            </h2>
            <p className="text-gray-600 text-sm">{service.desc}</p>
            <span className="mt-4 text-blue-600 font-medium hover:underline">
              {t("services.learnMore")}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
