import React from "react";
import { useParams, Link } from "react-router-dom";

const services = {
  "personal-care": {
    name: "Personal Care",
    description:
      "Our Personal Care service assists you with daily activities including bathing, dressing, grooming, and mobility assistance to maintain your independence.",
  },
  companionship: {
    name: "Companionship",
    description:
      "Enjoy friendly conversation, recreational activities, and emotional support through our Companionship service.",
  },
  "meal-preparation": {
    name: "Meal Preparation",
    description:
      "We provide nutritious meal planning and cooking services customized to your dietary requirements and preferences.",
  },
  "medication-reminder": {
    name: "Medication Reminder",
    description:
      "Our caregivers ensure timely reminders to take medications, helping you stay on track with your health needs.",
  },
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = services[serviceId];

  if (!service) {
    return (
      <div className="p-6 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">
          Service Not Found
        </h2>
        <Link to="/services" className="text-blue-600 hover:underline text-lg">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 max-w-3xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {service.name}
        </h1>
        <p className="text-gray-600 text-lg mb-6">{service.description}</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow"
          onClick={() => alert("Consultation request form coming soon!")}
        >
          Request Consultation
        </button>
        <div className="mt-8">
          <Link
            to="/services"
            className="text-blue-500 hover:underline text-md"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
