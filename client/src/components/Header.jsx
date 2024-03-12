import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start flex-1">
        <Link to="/">
          <h1 className="btn btn-ghost text-xl">TouchMylike</h1>
        </Link>
      </div>
      {/*  */}

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <Navigation status="mobile" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" />
        </div>
      </div>

      {/*  */}
      <div className="navbar-end hidden lg:flex">
        <Navigation class="menu menu-vertical lg:menu-horizontal" />
      </div>
    </div>
  );
}

export default Header;
