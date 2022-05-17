import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import NavLink from "../NavLink/NavLink";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const handleNav = (open) => {
    setNav(open);
  };
  return (
    <header>
      <nav
        className="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-4
        navbar navbar-expand-lg navbar-light
        "
      >
        <div className="lg:container sm:container mx-auto w-full flex flex-wrap items-center justify-end px-3">
          <button
            onClick={() => handleNav(!nav)}
            className="
              navbar-toggler
              text-gray-500
              border-0
              hover:shadow-none hover:no-underline
              py-2
              px-2.5
              bg-transparent
              focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
              duration-500
            "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {nav ? (
              <i
                className={`fa-solid fa-x duration-500 text-2xl rotate-[360deg] ${
                  nav || "rotate-90"
                }`}
              ></i>
            ) : (
              <i className="fa fa-navicon text-2xl" aria-hidden="true"></i>
            )}
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <div className="text-left lg:my-0 my-5">
              <Link
                to="home"
                className="
                justify-center
                hover:text-gray-600
                focus:text-gray-800
                lg:mt-0
                text-xl
                font-semibold
                bg-gradient-to-r
                from-[#19D3AE]
                to-[#0FCFEC]
                text-white 
                px-3
                py-1
                rounded-md
                whitespace-nowrap
              "
                href="#"
              >
                Doctor Portal
              </Link>
            </div>
            {/* Left links */}
            <ul className="navbar-nav md:flex block flex-col justify-center items-center pl-0 list-style-none mr-auto w-full">
              <li className="nav-item p-2">
                <NavLink to="home" href="#">
                  Home
                </NavLink>
              </li>

              <li className="nav-item p-2">
                <NavLink to="appointment" href="#">
                  Appointment
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to="reviews" href="#">
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to="contact-us" href="#">
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to="about" href="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item p-2">
                {user ? (
                  <button
                    className="btn px-5 whitespace-nowrap"
                    onClick={() => signOut(auth)}
                  >
                    Sign Out
                  </button>
                ) : (
                  <NavLink to="login" href="#">
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
            {/* Left links */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
