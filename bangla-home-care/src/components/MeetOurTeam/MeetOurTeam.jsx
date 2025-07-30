import React from "react";

// ✅ Use default imports for image files
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

const MeetOurTeam = () => {
  return (
    <div className="bg-grey-500 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Meet Our Team
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"
          >
            <img
              className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200"
              src={member.image}
              alt={member.name}
            />
            <h3 className="text-xl font-semibold text-blue-800">
              {member.name}
            </h3>
            <p className="text-sm text-blue-500 mb-2">{member.title}</p>
            <p className="text-gray-700 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
