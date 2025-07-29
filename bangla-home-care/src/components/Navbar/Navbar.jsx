import React from "react";
import { Link, NavLink } from "react-router-dom";
import Mode from "../DayLight/Mode";

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

const activeClass = "bg-[#003f5c] rounded-md"; // Active background color

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${navLinkClass} ${hoverEffect} ${isActive ? activeClass : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${navLinkClass} ${hoverEffect} ${isActive ? activeClass : ""}`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${navLinkClass} ${hoverEffect} ${isActive ? activeClass : ""}`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${navLinkClass} ${hoverEffect} ${isActive ? activeClass : ""}`
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <a >
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
        <a className="btn btn-ghost navbar-center ml-12 lg:ml-0  text-xl">
          Bangla Home Care
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end">
        <button className="relative inline-block px-6 py-3 rounded-full w-52 overflow-hidden group">
          {/* Animated glowing background layer */}
          <span className="absolute inset-0 animate-gradient-x bg-[linear-gradient(270deg,#ff00cc,#3333ff,#00ffee)] bg-[length:400%_400%] blur-sm opacity-70 transition-all duration-1000 group-hover:scale-110 animate-pulse"></span>

          {/* Text layer */}
          <span className="relative z-10 text-white font-semibold">
            <Link to="tel:+4074764044">Call Now</Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
