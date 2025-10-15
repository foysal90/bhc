import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-6">
          {t("navbar.contactUs")}
        </h2>
        <p className="text-center text-gray-300 mb-10">
          {t(
            "contact.subtitle",
            "Have questions or need help? We’re here to assist you."
          )}
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t("contact.addressLabel", "Address")}
              </h3>
              <p className="text-gray-400">
                {t("contact.address", "123 Home Care Lane, Orlando, FL 32801")}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t("contact.phoneLabel", "Phone")}
              </h3>
              <p className="text-gray-400">
                {t("contact.phone", "+1 (313) 564-7405")}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t("contact.emailLabel", "Email")}
              </h3>
              <p className="text-gray-400">
                {t("contact.email", "info@homecare.com")}
              </p>
            </div>

            {/* Map */}
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
          </motion.div>

          {/* Contact Form */}
          <motion.form
            action="https://formsubmit.co/your@email.com"
            method="POST"
            className=" bg-white/20 backdrop-blur-md text-black rounded-lg shadow-lg p-6 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.href} />

            <div>
              <label className="block mb-1 font-medium">
                {t("contact.fullName", "Full Name")}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 text-lg  py-2 border font-extrabold text-blue-500 border-gray-300 rounded-md outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                {t("contact.emailField", "Email")}
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 text-lg  py-2 border font-extrabold text-blue-500 border-gray-300 rounded-md outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                {t("contact.message", "Message")}
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 text-lg  py-2 border font-extrabold text-blue-500 border-gray-300 rounded-md outline-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            >
              {t("contact.sendMessage", "Send Message")}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
