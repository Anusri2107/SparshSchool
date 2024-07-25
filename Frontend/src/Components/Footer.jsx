import React from "react";
import { Link } from "react-router-dom";
import { BiSolidSchool } from "react-icons/bi";
import { MdMail, MdOutlineMail, MdSchool } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import footer from "../assets/footer.png";

function Footer() {
  return (
    <div>
      <div className="w-full overflow-hidden">
      <svg height="100" width="100vw" viewBox="0 0 1440 100" preserveAspectRatio="none" className="block">
          <path d="M0,60 Q72,0 144,60 T288,60 T432,60 T576,60 T720,60 T864,60 T1008,60 T1152,60 T1296,60 T1440,60 V100 H0 Z" fill="#ec4899"/>
        </svg>
      </div>
      <div className="px-5 py-3 lg:px-10 xl:px-20 xl:py-5 bg-pink-500 text-white">
        <div className="flex flex-row justify-between border-b-2 border-blue-200 py-10">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-2xl">LOGO</h1>
            <div className="text-lg mt-5 font-semibold space-y-1">
              <div className="flex flex-row gap-2 items-center">
                <FaPhoneAlt />
                <p>(+91)999-999-999</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FiPhoneCall />
                <p>(+91)999-999-999</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MdMail />
                <p>sparshschool@gmail.com</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MdOutlineMail />
                <p>sparshschool@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Quick Links</h1>
            <ul className="flex flex-col mt-8 gap-4 font-semibold">
              <Link to="/">Home</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/classes">Classes</Link>
              <Link to="admission-process">Admission Process</Link>
              <Link to="/fee-structure">Fee Structure</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contactus">Contact Us</Link>
            </ul>
          </div>
          <div className="flex flex-row gap-28">
            <div>
              <h1 className="text-2xl font-semibold">Branches</h1>
              <ul className="flex flex-col mt-8 gap-5 font-semibold">
                <Link to="/sparsh-zoo-road">Sparsh Zoo Road Branch</Link>
                <Link to="/sparsh-beltola">Sparsh Beltola Branch</Link>
                <Link to="/sparsh-six-mile">Sparsh Six Mile Branch</Link>
                <Link to="/sparsh-moran">Sparsh Moran</Link>
                <Link to="/sparsh-dharmanagar">Sparsh Dharmanagar</Link>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <img src={footer} className="h-48" />
              <button className="px-5 py-3 bg-purple-500 rounded-md shadow-md hover:bg-purple-700 transition-all duration-200">
                <div className="flex flex-row items-center justify-center gap-2">
                  <BiSolidSchool className="text-2xl" />
                  <Link to="/contactus#franchise">Start a Franchise</Link>
                </div>
              </button>
              <button className="px-5 py-3 bg-purple-500 rounded-md shadow-md hover:bg-purple-700 transition-all duration-200">
                <div className="flex flex-row items-center justify-center gap-2">
                  <MdSchool className="text-2xl" />
                  <Link to="/contactus#admission">Admission Enquiry</Link>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-row items-center">
            <div className="flex flex-row gap-2">
              <button className="bg-pink-400 p-2 rounded-full">
                <FaFacebookF />
              </button>
              <button className="bg-pink-400 p-2 rounded-full">
                <FaXTwitter />
              </button>
              <button className="bg-pink-400 p-2 rounded-full">
                <FaInstagram />
              </button>
              <button className="bg-pink-400 p-2 rounded-full">
                <FaWhatsapp />
              </button>
            </div>
            <div className="flex justify-center w-full">
              <p className="top-0 text-center">Copyright &copy; 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
