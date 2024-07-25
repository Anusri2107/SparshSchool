import React from "react";
import "./Features.css";
import { FaSchool } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";

function Features() {
  return (
    <div className="px-5 py-3 lg:px-10 xl:px-20 xl:py-5">
      <div class="card">
        <div class="item item--1">
          <PiMedalFill className="text-blue-200"/>
          <span class="quantity"> 16 </span>
          <span class=""> Years of Excellence </span>
        </div>
        <div class="item item--2">
          <FaSchool className="text-blue-200"/>
          <span class="quantity"> 5 </span>
          <span class=""> Branches </span>
        </div>
        <div class="item item--3">
          <GiTeacher className="text-pink-200"/>
          <span class="quantity"> 32 </span>
          <span class=""> Teachers </span>
        </div>
        <div class="item item--4">
          <PiStudentBold className="text-pink-200"/>
          <span class="quantity"> 2500 </span>
          <span class=""> Students </span>
        </div>
      </div>
    </div>
  );
}

export default Features;
