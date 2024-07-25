import React from "react";
import teacher from '../assets/teacher.jpg';

function Teacher() {
  return (
    <div>
      <div className=" bg-blue-500 p-2 rounded-md">
        <div className="group relative">
          <div>
            <img src={teacher} className="h-64 max-w-64 rounded-md" />
          </div>
          <div className="absolute bottom-0 w-full opacity-0 h-0 group-hover:opacity-100 group-hover:h-full transition-all duration-500 bg-blue-400 rounded-md">
            <div className="text-white font-semibold text-center flex flex-col justify-center h-full gap-2">
              <h1 className="text-xl">Teacher's Name</h1>
              <p className="text-lg">Designation</p>
              <p>Qualification</p>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
