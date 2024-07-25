import React from "react";
import BrushWrap from "./BrushWrap";
import school from "../assets/school.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import branch from "../assets/branch.jpg";
import { Link } from "react-router-dom";

function Branches() {
  return (
    <div className="px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
      <div className="flex items-center justify-center">
        <img src={school} className="h-56" />
        <BrushWrap name={"OUR BRANCHES"} className="text-center" />
      </div>
      <div className="flex flex-row flex-wrap gap-10 justify-evenly">
        <div className="bg-yellow-500 rounded-lg p-2">
          <div>
            <img src={branch} className="h-56 w-80 rounded-t-md" />
          </div>
          <div className="bg-yellow-400 rounded-b-md">
            <div className="flex flex-col items-center">
              <Link to="/sparsh-zoo-road" className="font-bold text-lg text-purple-500">Sparsh School Zoo Road</Link>
              <p className="text-center max-w-64 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non.
              </p>
              <div className="flex flex-row w-full p-2 justify-center gap-5">
                <button>
                  <div className="flex flex-row items-center gap-2 px-2 py-1 bg-blue-500 text-white rounded-md shadow-md">
                    <FaPhoneVolume />
                    <p>Call Us</p>
                  </div>
                </button>
                <button>
                  <div className="flex flex-row items-center gap-2 px-2 py-1 bg-green-500 text-white rounded-md shadow-md">
                    <FaWhatsapp />
                    <p>Whatsapp</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-lg p-2">
          <div>
            <img src={branch} className="h-56 w-80 rounded-t-md" />
          </div>
          <div className="bg-yellow-400 rounded-b-md">
            <div className="flex flex-col items-center">
            <Link to="/sparsh-beltola" className="font-bold text-lg text-purple-500">Sparsh School Beltola</Link>
              <p className="text-center max-w-64 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non.
              </p>
              <div className="flex flex-row p-2 justify-center gap-5">
                <button>
                  <div className="flex flex-row items-center gap-2 px-2 py-1 bg-blue-500 text-white rounded-md shadow-md">
                    <FaPhoneVolume />
                    <p>Call Us</p>
                  </div>
                </button>
                <button>
                  <div className="flex flex-row items-center gap-2 px-2 py-1 bg-green-500 text-white rounded-md shadow-md">
                    <FaWhatsapp />
                    <p>Whatsapp</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-lg p-2">
          <div>
            <img src={branch} className="h-56 w-80 rounded-t-md" />
          </div>
          <div className="bg-yellow-400 rounded-b-md">
            <div className="flex flex-col items-center">
            <Link to="/sparsh-six-mile" className="font-bold text-lg text-purple-500">Sparsh School Six Mile</Link>
              <p className="text-center max-w-64 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non.
              </p>
              <div className="flex flex-row p-2 justify-center gap-5">
                <button>
                  <div className="flex flex-row items-center gap-2 px-2 py-1 bg-blue-500 text-white rounded-md shadow-md">
                    <FaPhoneVolume />
                    <p>Call Us</p>
                  </div>
                </button>
                <button>
                  <div className="flex flex-row items-center gap-2 px-2 py-1 bg-green-500 text-white rounded-md shadow-md">
                    <FaWhatsapp />
                    <p>Whatsapp</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-lg p-2">
          <div>
            <img src={branch} className="h-56 w-80 rounded-t-md" />
          </div>
          <div className="bg-yellow-400 rounded-b-md">
            <div className="flex flex-col items-center">
            <Link to="/sparsh-moran" className="font-bold text-lg text-purple-500">Sparsh School Moran</Link>
              <p className="text-center max-w-64 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non.
              </p>
              <div className="flex flex-row p-2 justify-center gap-5">
                <button>
                  <div className="flex flex-row items-center gap-2 px-2 py-1 bg-blue-500 text-white rounded-md shadow-md">
                    <FaPhoneVolume />
                    <p>Call Us</p>
                  </div>
                </button>
                <button>
                  <div className="flex flex-row items-center gap-2 px-2 py-1 bg-green-500 text-white rounded-md shadow-md">
                    <FaWhatsapp />
                    <p>Whatsapp</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-lg p-2">
          <div>
            <img src={branch} className="h-56 w-80 rounded-t-md" />
          </div>
          <div className="bg-yellow-400 rounded-b-md">
            <div className="flex flex-col items-center">
            <Link to="/sparsh-dharmanagar" className="font-bold text-lg text-purple-500">Sparsh School Dharmanagar</Link>
              <p className="text-center max-w-64 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non.
              </p>
              <div className="flex flex-row p-2 justify-center gap-5">
                <button>
                  <div className="flex flex-row items-center gap-2 px-2 py-1 bg-blue-500 text-white rounded-md shadow-md">
                    <FaPhoneVolume />
                    <p>Call Us</p>
                  </div>
                </button>
                <button>
                  <div className="flex flex-row items-center gap-2 px-2 py-1 bg-green-500 text-white rounded-md shadow-md">
                    <FaWhatsapp />
                    <p>Whatsapp</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branches;
