import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const {  i18n } = useTranslation();

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className=" rounded px-2 py-1"
      >
        <option value="en">English</option>
        <option value="bn">বাংলা</option>
      </select>
    </header>
  );
};

export default Header;
