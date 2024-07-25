import React from "react";
import BrushWrap from "./BrushWrap";

function Franchise() {
  return (
    <div>
      <div className="px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
        <div>
          <div className="flex items-center justify-center">
            <BrushWrap name={"START A FRANCHISE"} className="text-center" />
          </div>
        </div>
        <div>
          <div>
            <div className="py-2 px-4 mx-auto max-w-screen-md">
              <form id="form">
                <div className="flex flex-row">
                  <div className="w-1/2 pr-2 ">
                    <label
                      htmlFor="firstName"
                      className="block my-2 text-left  
                                          text-sm font-medium text-gray-900"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="shadow100m bg-gray-100 text-gray-900  
                                          text-sm rounded-full block w-full p-2.5 focus:outline-none focus:border-none"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label
                      htmlFor="firstName"
                      className="block my-2 text-left text-sm  
                                          font-medium text-gray-900"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="shadow-100 bg-gray-100 text-gray-900  
                                          text-sm rounded-full block w-full p-2.5 focus:outline-none focus:border-none"
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/2 pr-2">
                    <label
                      htmlFor="email"
                      className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      className="shado100sm bg-gray-100 text-gray-900  
                                      text-sm rounded-full block w-full p-2.5 focus:outline-none focus:border-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="w-1/2 pr-2">
                    <label
                      htmlFor="mobilenumber"
                      className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-none"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="city"
                    className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-none"
                    placeholder="Enter your city"
                  ></input>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/2 pr-2">
                    <label
                      htmlFor="property"
                      className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"
                    >
                      Property Type
                    </label>
                    <select
                      name="country"
                      id="country"
                      className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-none"
                    >
                      <option className="text-gray-900 disabled hidden">
                        Select an option
                      </option>
                      <option value="self-owned">Self-owned</option>
                      <option value="rented">Rented</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                  <div className="w-1/2 pr-2">
                    <label
                      htmlFor="property"
                      className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"
                    >
                      When You Want to Start?
                    </label>
                    <select
                      name="country"
                      id="country"
                      className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-none"
                    >
                      <option className="text-gray-900 disabled hidden">
                        Select an option
                      </option>
                      <option value="one">1 month</option>
                      <option value="three">3 months</option>
                      <option value="six">6 months</option>
                      <option value="twelve">12 months</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="investment"
                    className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"
                  >
                    Investment Budget
                  </label>
                  <input type="radio" name="investment" id="one" value="one" />
                  <label
                    htmlFor="one"
                    className=" my-2 mr-4 ml-2 text-left  
                                      text-sm text-gray-900"
                  >
                    10 - 15 lacs
                  </label>
                  <input type="radio" name="investment" id="two" value="two" />
                  <label
                    htmlFor="two"
                    className=" my-2 mr-4 ml-2 text-left  
                                      text-sm text-gray-900"
                  >
                    15 - 20 lacs
                  </label>
                  <input
                    type="radio"
                    name="investment"
                    id="three"
                    value="three"
                  />
                  <label
                    htmlFor="three"
                    className=" my-2 mr-4 ml-2 text-left  
                                      text-sm text-gray-900"
                  >
                    20 - 25 lacs
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-2 p-2 float-right text-white font-face-fl   
                                   rounded-full border-purple-500 bg-purple-500 hover:scale-105"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Franchise;
