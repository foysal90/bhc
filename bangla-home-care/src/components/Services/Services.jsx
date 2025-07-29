// import React from "react";
// import { Link } from "react-router-dom";

// const services = [
//   {
//     id: "personal-care",
//     name: "Personal Care",
//     shortDesc:
//       "Help with daily personal activities like bathing, grooming, dressing.",
//   },
//   {
//     id: "companionship",
//     name: "Companionship",
//     shortDesc: "Friendly companionship to keep you engaged and active.",
//   },
//   {
//     id: "meal-preparation",
//     name: "Meal Preparation",
//     shortDesc: "Healthy meal planning and preparation tailored to your needs.",
//   },
//   {
//     id: "medication-reminder",
//     name: "Medication Reminder",
//     shortDesc: "Help to keep track of your medication schedule.",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Our Home Care Services</h1>
//       <ul>
//         {services.map((service) => (
//           <li
//             key={service.id}
//             className="mb-4 p-4 border rounded hover:shadow-md"
//           >
//             <Link
//               to={`/service/${service.id}`}
//               className="text-xl font-semibold text-blue-600 hover:underline"
//             >
//               {service.name}
//             </Link>
//             <p className="mt-1 text-gray-700">{service.shortDesc}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Services;
import React from "react";
import { Link } from "react-router-dom";
import { FaHandsHelping, FaSmile, FaUtensils, FaPills } from "react-icons/fa";

const services = [
  {
    id: "personal-care",
    name: "Personal Care",
    shortDesc:
      "Help with daily personal activities like bathing, grooming, dressing.",
    icon: <FaHandsHelping className="text-4xl text-blue-500 mb-4" />,
  },
  {
    id: "companionship",
    name: "Companionship",
    shortDesc: "Friendly companionship to keep you engaged and active.",
    icon: <FaSmile className="text-4xl text-pink-500 mb-4" />,
  },
  {
    id: "meal-preparation",
    name: "Meal Preparation",
    shortDesc: "Healthy meal planning and preparation tailored to your needs.",
    icon: <FaUtensils className="text-4xl text-green-500 mb-4" />,
  },
  {
    id: "medication-reminder",
    name: "Medication Reminder",
    shortDesc: "Help to keep track of your medication schedule.",
    icon: <FaPills className="text-4xl text-purple-500 mb-4" />,
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Home Care Services
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
            <p className="text-gray-600 text-sm">{service.shortDesc}</p>
            <span className="mt-4 text-blue-600 font-medium hover:underline">
              Learn More →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
