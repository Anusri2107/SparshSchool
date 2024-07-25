import React from "react";
import BrushWrap from "./BrushWrap";
import classes from "../assets/class.png";
import classroom from "../assets/classroom.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Classes() {
  return (
    <div className="px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
      <div className="flex items-center justify-center">
        <BrushWrap name={"OUR CLASSES"} className="text-center" />
        <img src={classes} className="h-44" />
      </div>
      <div className="flex flex-row flex-wrap gap-2 justify-evenly pt-10">
        <div className="bg-yellow-500 rounded-lg p-2">
        <div className="group relative">
            <div>
              <img src={classroom} className="h-64 w-72 rounded-t-md" />
            </div>
            <div className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 bg-[color:#facc15a0] h-0 group-hover:h-full transition-all duration-500">
              <div className="group-hover:opacity-100 text-white flex items-center justify-center text-4xl h-full">
                <Link to="/classes">
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-yellow-400 rounded-b-md">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-pink-500 text-2xl p-2">
                Class Toddler-I
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-lg p-2">
        <div className="group relative">
            <div>
              <img src={classroom} className="h-64 w-72 rounded-t-md" />
            </div>
            <div className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 bg-[color:#facc15a0] h-0 group-hover:h-full transition-all duration-500">
              <div className="group-hover:opacity-100 text-white flex items-center justify-center text-4xl h-full">
                <Link to="/classes">
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-yellow-400 rounded-b-md">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-pink-500 text-2xl p-2">
                Class Toddler-II
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-lg p-2">
        <div className="group relative">
            <div>
              <img src={classroom} className="h-64 w-72 rounded-t-md" />
            </div>
            <div className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 bg-[color:#facc15a0] h-0 group-hover:h-full transition-all duration-500">
              <div className="group-hover:opacity-100 text-white flex items-center justify-center text-4xl h-full">
                <Link to="/classes">
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-yellow-400 rounded-b-md">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-pink-500 text-2xl p-2">
                Class PG-I
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-lg p-2">
          <div className="group relative">
            <div>
              <img src={classroom} className="h-64 w-72 rounded-t-md" />
            </div>
            <div className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 bg-[color:#facc15a0] h-0 group-hover:h-full transition-all duration-500">
              <div className="group-hover:opacity-100 text-white flex items-center justify-center text-4xl h-full">
                <Link to="/classes">
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-yellow-400 rounded-b-md">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-pink-500 text-2xl p-2">
                Class PG-II
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
