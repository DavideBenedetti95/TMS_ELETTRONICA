import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-black">Homepage</Link>
            </li>
            <li>
              <Link to="/chi-siamo" className="text-black">Chi Siamo</Link>
            </li>
            <li>
              <Link to="/servizi" className="text-black">Servizi</Link>
            </li>
            <li>
              <Link to="/mission" className="text-black">Mission</Link>
            </li>
            <li>
              <Link to="/contatti" className="text-black">Contatti</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">TMS ELETTRONICA</Link>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
};

export default Navbar;
