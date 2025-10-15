import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactUs = () => {
  const { t } = useTranslation();
  const [currentUrl, setCurrentUrl] = useState("");

  // Avoid SSR window access error
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

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
                {t(
                  "contact.address",
                  "11808 Joseph Campau, Hamtramck, MI, 48212"
                )}
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
                {t("contact.email", "info@banglahomecare.net")}
              </p>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.1468312212805!2d-83.0644957231068!3d42.403318271188965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d21469439f09%3A0x738882ab2cc50f5f!2s11808%20Joseph%20Campau%20Ave%2C%20Hamtramck%2C%20MI%2048212!5e0!3m2!1sen!2sus!4v1760546972519!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            action="https://formsubmit.co/info@banglahomecare.net"
            method="POST"
            className="bg-white/20 backdrop-blur-md text-black rounded-lg shadow-lg p-6 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={currentUrl} />

            <div>
              <label className="block mb-1 font-medium">
                {t("contact.fullName", "Full Name")}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 text-lg py-2 border font-extrabold text-blue-500 border-gray-300 rounded-md outline-blue-500"
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
                className="w-full px-4 text-lg py-2 border font-extrabold text-blue-500 border-gray-300 rounded-md outline-blue-500"
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
                className="w-full px-4 text-lg py-2 border font-extrabold text-blue-500 border-gray-300 rounded-md outline-blue-500"
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

// import React from "react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const ContactUs = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 py-16 flex flex-col items-center">
//       <div className="max-w-4xl w-full">
//         <h2 className="text-4xl font-bold text-center mb-6">
//           {t("navbar.contactUs")}
//         </h2>
//         <p className="text-center text-gray-300 mb-10">
//           {t(
//             "contact.subtitle",
//             "Have questions or need help? We’re here to assist you."
//           )}
//         </p>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Contact Info */}
//           <motion.div
//             className="space-y-6"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeUp}
//           >
//             <div>
//               <h3 className="text-xl font-semibold mb-2">
//                 {t("contact.addressLabel", "Address")}
//               </h3>
//               <p className="text-gray-400">
//                 {t(
//                   "contact.address",
//                   "11808 Joseph Campau, Hamtramck, MI, 48212"
//                 )}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">
//                 {t("contact.phoneLabel", "Phone")}
//               </h3>
//               <p className="text-gray-400">
//                 {t("contact.phone", "+1 (313) 564-7405")}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">
//                 {t("contact.emailLabel", "Email")}
//               </h3>
//               <p className="text-gray-400">
//                 {t("contact.email", "info@banglahomecare.net")}
//               </p>
//             </div>

//             {/* Map */}
//             <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.1468312212805!2d-83.0644957231068!3d42.403318271188965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d21469439f09%3A0x738882ab2cc50f5f!2s11808%20Joseph%20Campau%20Ave%2C%20Hamtramck%2C%20MI%2048212!5e0!3m2!1sen!2sus!4v1760546972519!5m2!1sen!2sus"
//                 width="600"
//                 height="450"
//                 style="border:0;"
//                 allowfullscreen=""
//                 loading="lazy"
//                 referrerpolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             action="https://formsubmit.co/your@email.com"
//             method="POST"
//             className=" bg-white/20 backdrop-blur-md text-black rounded-lg shadow-lg p-6 space-y-4"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeUp}
//             transition={{ delay: 0.3 }}
//           >
//             <input type="hidden" name="_captcha" value="false" />
//             <input type="hidden" name="_next" value={window.location.href} />

//             <div>
//               <label className="block mb-1 font-medium">
//                 {t("contact.fullName", "Full Name")}
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 className="w-full px-4 text-lg  py-2 border font-extrabold text-blue-500 border-gray-300 rounded-md outline-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">
//                 {t("contact.emailField", "Email")}
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 className="w-full px-4 text-lg  py-2 border font-extrabold text-blue-500 border-gray-300 rounded-md outline-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">
//                 {t("contact.message", "Message")}
//               </label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 required
//                 className="w-full px-4 text-lg  py-2 border font-extrabold text-blue-500 border-gray-300 rounded-md outline-blue-500"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
//             >
//               {t("contact.sendMessage", "Send Message")}
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
