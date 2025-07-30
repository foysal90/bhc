import React from "react";
import { motion } from "framer-motion";

// ✅ Use default imports for images
import amin from "../../assets/8f69a2bf-644b-4467-8b80-0f342ebae0c8.JPG";
import foy from "../../assets/foy.PNG";
import ash from "../../assets/IMG_8863.JPG";

const teamMembers = [
  {
    name: "Ashfak Chowdhury",
    title: "Care Coordinator",
    image: ash,
    bio: "Ashfak Chowdhury is the visionary behind Bangla Home Care, committed to compassionate and reliable service.",
  },
  {
    name: "Foysal Ahmed",
    title: "Care Coordinator",
    image: foy,
    bio: "Foysal Ahmed ensures every client receives the care and coordination they deserve.",
  },
  {
    name: "Sheikh Rahman",
    title: "Care Coordinator",
    image: amin,
    bio: "Sheikh Rahman works closely with families and staff to deliver personalized support every day.",
  },
];

// 🌀 Animation variant for each card
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.4, // stagger effect
      duration: 1.2, // slow motion
      ease: "easeOut",
    },
  }),
};

const MeetOurTeam = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
        Meet Our Team
      </h2>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={index}
          >
            <img
              className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300 shadow"
              src={member.image}
              alt={member.name}
            />
            <h3 className="text-2xl font-semibold text-blue-800">
              {member.name}
            </h3>
            <p className="text-sm text-blue-500 mb-2">{member.title}</p>
            <p className="text-gray-700 text-sm">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
