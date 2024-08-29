import React from "react";
import profilePic from "../../assets/dare.png";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

function AboutMe() {
  return (
    <section id="#hero" className=" bg-slate-800">
      <div className="lg:px-28 px-10 lg:py-20 lg:-mb-28 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <div className="h-full lg:py-52 flex flex-col justify-center lg:items-start items-center text-white">
          <h1 className="text-[50px] font-bold mb-8 leading-normal ">
            HI, 👋🏽 WELCOME TO MY PORTFOLIO
          </h1>
          <h2 className="text-[50px] font-bold mb-8 leading-normal ">
            <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-purple-500from-green-500 to-pink-400">
              I&apos;M DARE OMOTAYO,
            </span>{" "}
            <span className="text-3xl">BACKEND ENGINEER</span>{" "}
          </h2>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-4">
                <a
                  href="http://"
                  className="text-fuchsia-500 hover:text-fuchsia-300 rounded-full glow p-2"
                >
                  <AiFillGithub className="text-3xl" />
                </a>
                <a
                  href="http://"
                  className="text-fuchsia-500 hover:text-fuchsia-300 rounded-full glow p-2"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="http://"
                  className="text-fuchsia-500 hover:text-fuchsia-300 rounded-full glow p-2"
                >
                  <LiaLinkedin className="text-3xl" />
                </a>
                <a
                  href="http://"
                  className="text-fuchsia-500 hover:text-fuchsia-300 rounded-full glow p-2"
                >
                  <FaTwitter className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src={profilePic}
          alt="dare omotayo"
          className="rounded-t-full object-cover"
          width={310}
          height={290}
        />
      </div>
    </section>
  );
}

export default AboutMe;
