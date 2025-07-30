import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // <-- import this
import Mode from "../DayLight/Mode";
import Header from "../Header/Header";

const navLinkClass =
  "relative px-3 py-2 transition duration-300 ease-in-out text-white";

const hoverEffect = `
  before:content-[''] 
  before:absolute 
  before:bottom-0 
  before:left-0 
  before:w-0 
  before:h-[2px] 
  before:bg-white 
  before:transition-all 
  before:duration-300 
  hover:before:w-full
`;

const activeClass = "bg-[#003f5c] rounded-md";

const Navbar = () => {
  const { t } = useTranslation();

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${navLinkClass} ${hoverEffect} ${isActive ? activeClass : ""}`
          }
        >
          {t("navbar.home")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${navLinkClass} ${hoverEffect} ${isActive ? activeClass : ""}`
          }
        >
          {t("navbar.services")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${navLinkClass} ${hoverEffect} ${isActive ? activeClass : ""}`
          }
        >
          {t("navbar.about")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${navLinkClass} ${hoverEffect} ${isActive ? activeClass : ""}`
          }
        >
          {t("navbar.contactUs")}
        </NavLink>
      </li>
      <li>
        <a>
          <Mode />
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#005288] text-white rounded-box w-52 text-black"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost navbar-center ml-2 lg:ml-0  text-xl"
        >
          {t("navbar.brand")}
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end">
        <Header />
      </div>
    </div>
  );
};

export default Navbar;
