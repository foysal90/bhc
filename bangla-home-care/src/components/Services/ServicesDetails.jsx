import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { t } = useTranslation();

  const name = t(`serviceDetails.${serviceId}.name`, { defaultValue: "" });
  const description = t(`serviceDetails.${serviceId}.description`, {
    defaultValue: "",
  });

  const isNotFound = !name || name === `serviceDetails.${serviceId}.name`;

  if (isNotFound) {
    return (
      <div className="p-6 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">
          {t("serviceDetails.notFound")}
        </h2>
        <Link to="/services" className="text-blue-600 hover:underline text-lg">
          {t("serviceDetails.backToServices")}
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 max-w-3xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
        <p className="text-gray-600 text-lg mb-6">{description}</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow"
          onClick={() => alert(t("serviceDetails.requestConsultation"))}
        >
          {t("serviceDetails.requestConsultation")}
        </button>
        <div className="mt-8">
          <Link
            to="/services"
            className="text-blue-500 hover:underline text-md"
          >
            {t("serviceDetails.backToServices")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
