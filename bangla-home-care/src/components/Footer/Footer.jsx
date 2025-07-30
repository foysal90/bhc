import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gray-900 text-white pt-24">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="wave-svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C150,100 350,0 600,80 C850,160 1050,0 1200,80 L1200,0 L0,0 Z"
            fill="#1f2937"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              from="0 0"
              to="-200 0"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 footer sm:footer-horizontal text-white p-10">
        {/* Office Hours */}
        <nav>
          <h6 className="footer-title">{t("translation.officeHours")}</h6>
          <Link className="block mt-2 cursor-default" to="#">
            {t("translation.monday")}
          </Link>
          <Link className="block cursor-default" to="#">
            {t("translation.tuesday")}
          </Link>
          <Link className="block cursor-default" to="#">
            {t("translation.wednesday")}
          </Link>
          <Link className="block cursor-default" to="#">
            {t("translation.thursday")}
          </Link>
          <Link className="block cursor-default" to="#">
            {t("translation.friday")}
          </Link>
          <Link className="block cursor-default" to="#">
            {t("translation.saturday")}
          </Link>
          <Link className="block cursor-default" to="#">
            {t("translation.sunday")}
          </Link>
        </nav>

        {/* Services */}
        <nav>
          <h6 className="footer-title">{t("translation.services")}</h6>
          <Link className="link link-hover" to="/service/personal-care">
            {t("translation.personalCare")}
          </Link>
          <Link className="link link-hover" to="/service/companionship">
            {t("services.companionship.name")}
          </Link>
          <Link className="link link-hover" to="/service/meal-preparation">
            {t("services.mealPrep.name")}
          </Link>
          <Link className="link link-hover" to="/service/medication-reminder">
            {t("services.medication.name")}
          </Link>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">{t("translation.company")}</h6>
          <Link className="link link-hover" to="#">
            {t("translation.aboutUs")}
          </Link>
          <Link className="link link-hover" to="#">
            {t("translation.contact")}
          </Link>
          <Link className="link link-hover" to="#">
            Jobs
          </Link>
          <Link className="link link-hover" to="#">
            Press kit
          </Link>
        </nav>

        {/* Social */}
        <nav>
          <h6 className="footer-title">{t("translation.social")}</h6>
          <div className="grid grid-flow-col gap-4">
            <Link to="#">
              <FaTwitter size={24} className="fill-current" />
            </Link>
            <Link to="#">
              <FaYoutube size={24} className="fill-current" />
            </Link>
            <Link to="#">
              <FaFacebook size={24} className="fill-current" />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
