import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../../assets/doctor.gif";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const ConsultationModal = ({ isOpen, onClose }) => {
  const handleSubmit = () => {
    alert("Your consultation request has been sent successfully!");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundBlendMode: "overlay",
          }}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="bg-white/40 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black">
              Request Consultation
            </h2>

            <form
              action="https://formsubmit.co/ahmef2370@gmail.com"
              method="POST"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="Full Name"
                  required
                  className="mt-1 w-full border text-black border-gray-300 rounded-md px-3 py-2 outline-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="mt-1 w-full border border-gray-300 text-black rounded-md px-3 py-2 outline-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cell
                </label>
                <input
                  type="text"
                  name="cell"
                  required
                  className="mt-1 w-full border border-gray-300 text-black rounded-md px-3 py-2 outline-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="Message"
                  required
                  rows="4"
                  className="mt-1 w-full text-black border border-gray-300 rounded-md px-3 py-2 outline-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
