import React from "react";
import { useTranslation } from "react-i18next";

const Support = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>
      <p className="text-lg mb-6">{t("description")}</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => switchLanguage("en")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          English
        </button>
        <button
          onClick={() => switchLanguage("bn")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          বাংলা
        </button>
      </div>
    </div>
  );
};

export default Support;
