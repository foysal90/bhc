import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-300 mb-10">
          Have questions or need help? We’re here to assist you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-400">
                123 Home Care Lane, Orlando, FL 32801
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+1 (407) 555-1234</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">info@homecare.com</p>
            </div>

            {/* Map embedded here */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Warren Michigan Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.233105889349!2d-83.0142617845405!3d42.491022779188236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d7b96467c86d%3A0x6c860399040a5f3a!2sWarren%2C%20MI%2048092!5e0!3m2!1sen!2sus!4v1690723928579!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/your@email.com"
            method="POST"
            className="bg-white text-black rounded-lg shadow-lg p-6 space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.href} />

            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
