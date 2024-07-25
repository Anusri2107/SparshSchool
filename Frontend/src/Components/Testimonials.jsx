import React from "react";
import BrushWrap from "./BrushWrap";
import parents from "../assets/parents.png";

function Testimonials() {
  return (
    <div className="px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
      <div className="flex items-center justify-center">
        <BrushWrap name={"WHAT PARENTS SAY"} className="text-center" />
        <img src={parents} className="h-48" />
      </div>
      <div className="flex flex-row gap-20 mt-5">
        <div class="overflow-hidden bg-yellow-100 border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-yellow-100 opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"></div>
          <div class="p-6 relative z-10">
            <p class="text-xl font-semibold text-gray-800">Parent</p>
            <p class="mt-2 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              aliquam cupiditate reprehenderit, quam cum impedit totam fugit
              ducimus rem minus praesentium, vitae architecto voluptates
              similique reiciendis corrupti fugiat nihil dolores quod,
              repellendus odit sit tempore! Voluptates porro inventore minus
              provident repellat nulla voluptate tenetur ratione consequuntur.
              Laboriosam distinctio reiciendis.
            </p>
            <div class="flex items-center mt-4 text-gray-600">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 fill-current text-yellow-500"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <span class="ml-2">4.8/5.0</span>
            </div>
          </div>
        </div>
        <div class="overflow-hidden bg-yellow-100 border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-yellow-100 opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"></div>
          <div class="p-6 relative z-10">
            <p class="text-xl font-semibold text-gray-800">Parent</p>
            <p class="mt-2 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              aliquam cupiditate reprehenderit, quam cum impedit totam fugit
              ducimus rem minus praesentium, vitae architecto voluptates
              similique reiciendis corrupti fugiat nihil dolores quod,
              repellendus odit sit tempore! Voluptates porro inventore minus
              provident repellat nulla voluptate tenetur ratione consequuntur.
              Laboriosam distinctio reiciendis.
            </p>
            <div class="flex items-center mt-4 text-gray-600">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 fill-current text-yellow-500"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <span class="ml-2">4.8/5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
