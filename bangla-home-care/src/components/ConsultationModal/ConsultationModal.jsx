import React from "react";
import toast, { Toaster } from "react-hot-toast";
const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = () => {
    toast.success("Your consultation request has been sent successfully!");
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
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
        </div>
      </div>
    </>
  );
};

export default ConsultationModal;
