import React from "react";
import "../App.css";
import BrushWrap from "./BrushWrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdMail, MdOutlineMail } from "react-icons/md";
import message from "../assets/message.png";
import Franchise from "./Franchise";

function ContactUs() {
  return (
    <div>
      <div className="contactus"></div>
      <div className="px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
        <div>
          <div className="flex items-center justify-center">
            <BrushWrap name={"CONTACT US"} className="text-center" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-5 mt-10">
          <div className="w-1/3">
            <div className="bg-purple-500 text-white p-5 flex flex-col gap-5 rounded-r-2xl h-full">
              <h1 className="text-3xl font-semibold">GET IN TOUCH</h1>
              <div>
                <span className="text-xl">Head Office:</span>
                <p className="mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores, reprehenderit.
                </p>
              </div>
              <div>
                <div className="text-lg space-y-2">
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
              <img src={message} />
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <div id="admission">
                <h1 className="text-2xl font-semibold">ADMISSION ENQUIRY</h1>
                <div>
                  <div className="py-2 px-4 mx-auto max-w-screen-md">
                    <p
                      className="mb-4 font-light text-left  
                          text-gray-500 text-lg"
                    >
                      Got an issue? Want to enquire about our admissions? Let us
                      know.
                    </p>
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
                                          text-sm rounded-full block w-full p-2.5 focus:outline-none focus:border-none "
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
                                          text-sm rounded-full block w-full p-2.5 focus:outline-none focus:border-none "
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
                                      text-sm rounded-full block w-full p-2.5 focus:outline-none focus:border-none "
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
                                      text-gray-900 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-none "
                            placeholder="Enter your mobile number"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="branch"
                          className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"
                        >
                          Branch
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
                          <option value="zooroad">Sparsh School Zoo Road</option>
                          <option value="beltola">Sparsh School Beltola</option>
                          <option value="sixmile">Sparsh School Six Mile</option>
                          <option value="moran">Sparsh School Moran</option>
                          <option value="dharmanagar">Sparsh School Dharmanagar</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"
                        >
                          Your message
                        </label>
                        <textarea
                          rows="6"
                          className="block p-2.5 w-full text-sm  
                                         text-gray-900 bg-gray-100 rounded-2xl  
                                         shadow-sm focus:outline-none focus:border-none focus:ring-none"
                          placeholder="Your message"
                        />
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
        </div>
      </div>
      <div id="franchise">
        <Franchise/>
      </div>
    </div>
  );
}

export default ContactUs;
