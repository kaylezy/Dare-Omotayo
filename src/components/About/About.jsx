import React, { useState } from "react";
import profilePic from "../../assets/Dare.png";
import { FiArrowDownCircle } from "react-icons/fi";
import Button from "../reusable/Button";
import HireMeModal from "../HireMeModal/HireMeModal";

function AboutMe() {
  // const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }
  return (
    <section id="about" className=" bg-slate-800">
      <div className="lg:px-24 px-10 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <img
          src={profilePic}
          alt="dare omotayo"
          className="rounded-t-full object-cover"
          width={290}
          height={290}
        />
        <div className="h-full lg:py-10 flex flex-col justify-center lg:items-start items-center text-white">
          <h1 className="text-[50px] font-bold mb-8 leading-normal ">
            <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-purple-500from-green-500 to-pink-400">
              ABOUT ME
            </span>
          </h1>
          <p className="font-bold text-left  mb-8 leading-normal ">
            Dare Omotayo is a Backend Engineer with a passion for building and
            scaling web applications. He is proficient in Node.js, Express, and
            MongoDB. Dare is also a tech enthusiast who loves to learn new
            technologies and frameworks. He is currently learning React.js and
            GraphQL to become a Fullstack Developer.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex justify-center space-x-8">
                <div className="flex justify-center sm:block">
                  <a
                    download="Dare-Omotayo.pdf"
                    href="/files/Dare-omotayo-Resume.pdf"
                    className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-fuchsia-500 text-gray-500 hover:text-white duration-500"
                    aria-label="Download Resume"
                  >
                    <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                    <span className="text-sm sm:text-lg font-general-medium duration-100">
                      Download CV
                    </span>
                  </a>
                </div>
                <div className="flex justify-center sm:block">
                  <a
                    onClick={showHireMeModal}
                    className="font-general-medium flex justify-center  items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-fuchsia-500 text-gray-500 hover:text-white duration-500"
                    aria-label="Hire Me Button"
                  >
                    <span className="text-sm sm:text-lg font-general-medium duration-100">
                      <Button title="Hire Me" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div>
    </section>
  );
}

export default AboutMe;
