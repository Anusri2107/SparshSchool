import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="h-24">
      <nav
        className={`w-full flex items-center justify-between h-24 px-5 lg:px-10 xl:px-20 bg-yellow-400 ${
          sticky
            ? "fixed text-white bg-pink-700 shadow-xl transition-all duration-700 z-50 ease-in-out w-full"
            : "text-black"
        }`}
      >
        <div className="text-4xl font-bold cursor-pointer text-pink-500">
          LOGO
        </div>
        <div className="navbar xl:h-full">
          <ul
            ref={navRef}
            className="xl:h-full xl:flex xl:flex-row py-20 md:py-0 xl:items-center xl:justify-center text-base font-semibold w-full"
          >
            <NavLink to="/" className="relative hover:bg-pink-500 px-4 flex flex-col justify-center xl:h-full xl:border-b-8 xl:border-pink-500">
              Home
            </NavLink>
            <div className="about hover:bg-purple-500 px-4 flex flex-col justify-center xl:h-full xl:border-b-8 xl:border-purple-500">
              <NavLink className="">About</NavLink>
              <div className="aboutdrop">
                <div className="bg-purple-500 text-white flex flex-col rounded-t-none rounded-2xl ">
                  <NavLink to="/aboutus" className="py-2 px-2">About Us</NavLink>
                  <NavLink className="py-2 px-2">School Brochure</NavLink>
                  <NavLink to="/principals-desk" className="py-2 px-2">
                    From the Principal's Desk
                  </NavLink>
                  <NavLink to="/classes" className="py-2 px-2">
                    Classes
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="about hover:bg-blue-500 px-4 flex flex-col justify-center xl:h-full xl:border-b-8 xl:border-blue-500">
              <NavLink className="">Admissions</NavLink>
              <div className="aboutdrop">
                <div className="bg-blue-500 text-white flex flex-col rounded-t-none rounded-2xl ">
                  <NavLink className="py-2 px-2">Admission Process</NavLink>
                  <NavLink className="py-2 px-2">Fee Structure</NavLink>
                </div>
              </div>
            </div>
            <div className="about hover:bg-pink-500 px-4 flex flex-col justify-center xl:h-full xl:border-b-8 xl:border-pink-500">
              <NavLink className="">Branches</NavLink>
              <div className="aboutdrop">
                <div className="bg-pink-500 text-white flex flex-col rounded-t-none rounded-2xl ">
                  <NavLink to="/sparsh-zoo-road" className="py-2 px-2">
                    Sparsh Zoo Road Branch
                  </NavLink>
                  <NavLink to="/sparsh-beltola" className="py-2 px-2">Sparsh Beltola Branch</NavLink>
                  <NavLink to="/sparsh-six-mile" className="py-2 px-2">
                    Sparsh Six Mile Branch
                  </NavLink>
                  <NavLink to="/sparsh-moran" className="py-2 px-2">Sparsh Moran</NavLink>
                  <NavLink to="/sparsh-dharmanagar" className="py-2 px-2">Sparsh Dharmanagar</NavLink>
                </div>
              </div>
            </div>
            <NavLink className="hover:bg-purple-500 px-4 flex flex-col justify-center xl:h-full xl:border-b-8 xl:border-purple-500">
              Gallery
            </NavLink>
            <NavLink to="/contactus" className="hover:bg-blue-500 px-4 flex flex-col justify-center xl:h-full xl:border-b-8 xl:border-blue-500">
              Contact Us
            </NavLink>
            <div className="hidden xl:block">
              <Link to="/contactus#admission" className="ml-10 bg-pink-500 px-5 py-3 rounded-2xl text-white shadow-md hover:bg-pink-700 transition-all duration-200">
                Admission Enquiry
              </Link>
            </div>
            <button onClick={showNavbar} className="nav-btn nav-close-btn">
              <FaTimes />
            </button>
          </ul>

          <div>
            <button onClick={showNavbar} className={`nav-btn nav-btn-open`}>
              <FaBars />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
