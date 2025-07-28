import React, { useState } from "react";
import checkIcon from "../../assets/check.png";

const flipCardStyles = {
  perspective: "1000px",
};

const flipCardInnerStyles = {
  transformStyle: "preserve-3d",
  backfaceVisibility: "hidden",
};

const flipCardBackStyles = {
  transform: "rotateY(180deg)",
  backfaceVisibility: "hidden",
};

const Services = () => {
 
  const [flippedIndex, setFlippedIndex] = useState(null);

  const services = [
    {
      name: "Personal Care",

      features: [
        "Assistance with Daily Living",
        "Medication Reminders",
        "Bathing & Grooming Support",
        "Mobility Assistance",
      ],
      description:
        "Personalized care to help with daily activities and ensure your comfort and safety.",
      frontBg: "bg-green-100 text-black",
    },
    {
      name: "Companion Care",

      features: [
        "Friendly Conversation",
        "Meal Preparation",
        "Light Housekeeping",
        "Errand Assistance",
      ],
      description:
        "Companionship and support to promote social interaction and daily living assistance.",
      frontBg: "bg-yellow-200 text-black",
    },
    {
      name: "Respite Care",

      features: [
        "Temporary Relief for Caregivers",
        "Flexible Scheduling",
        "24/7 Availability",
        "Experienced Care Professionals",
      ],
      description:
        "Temporary care solutions to give family caregivers time to rest and recharge.",
      frontBg: "bg-blue-100 text-black",
    },
    {
      name: "Specialized Care",

      features: [
        "Alzheimer’s & Dementia Care",
        "Post-Surgery Support",
        "Chronic Condition Management",
        "Customized Care Plans",
      ],
      description:
        "Expert care tailored to individuals with special health needs and conditions.",
      frontBg: "bg-purple-700 text-white",
    },
  ];

  return (
    <div className="p-6">
      <figure className="text-center mb-10">
        <figcaption>
          <h1 className="text-3xl font-bold mb-2">Services We Offer</h1>
          <p className="text-gray-600">
            Choose the service that best suits your needs
          </p>
        </figcaption>
      </figure>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 items-center gap-5 ">
        {services.map((service, idx) => (
          <div
            key={service.name}
            className="w-[300px] h-[330px] bg-transparent"
            style={flipCardStyles}
            onMouseEnter={() => setFlippedIndex(idx)}
            onMouseLeave={() => setFlippedIndex(null)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-[2000ms] ease-in-out`}
              style={{
                ...flipCardInnerStyles,
                transform:
                  flippedIndex === idx ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
             
              <div
                className={`absolute w-full h-full p-5 rounded-lg shadow-lg ${service.frontBg} flex flex-col justify-between`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <div>
                  <h1 className="text-3xl font-semibold mb-3">
                    {service.name}
                  </h1>
                  <h5 className="text-lg font-medium mb-3">Features</h5>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <img src={checkIcon} alt="check" width={12} />
                        {feature}
                      </li>
                    ))}
                  </ol>
                </div>

                <button className=" text-xl   px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
                  Request Consultation
                </button>
              </div>

              {/* Back */}
              <div
                className="absolute w-full h-full p-5 rounded-lg shadow-lg bg-gray-900 text-white flex flex-col justify-center items-center"
                style={flipCardBackStyles}
              >
                <h2 className="text-2xl font-semibold mb-3">
                  {service.name} Service
                </h2>
                <p className="text-center mb-4">{service.description}</p>
                <button className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 transition cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
