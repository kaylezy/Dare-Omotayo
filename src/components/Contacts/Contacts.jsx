import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";

const Contact = () => {
  return (
    <div className="bg-slate-800 text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-[50px] font-bold mb-8 leading-normal text-center">
          <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400  to-pink-400">
            Connects with me
          </span>
        </h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold bg-clip-text text-fuchsia-500 mb-4">
              Let&apos;s Talk
            </h3>
            <p>
              Unlock innovative tech solutions with just a single step - Begin
              your transformative journey by filling out Dare.Omotayo&apos;s
              contact form today
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-fuchsia-400 mr-2"></FaEnvelope>
              <a
                href="mailto:dare-omotayo@yahoo.com"
                className="hover:underline"
              >
                dare_omotayo@yahoo.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-fuchsia-400 mr-2"></FaPhone>
              <span>+234 902 232 2345</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-fuchsia-400 mr-2"></FaMapMarkedAlt>
              <span>Bariga, Lagos, Nigeria</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="leading-loose">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-4"
              >
                <div className="lg:flex gap-4">
                  <FormInput
                    inputLabel="Full Name"
                    labelFor="name"
                    inputType="text"
                    inputId="name"
                    inputName="name"
                    placeholderText="Your Name"
                    ariaLabelName="Name"
                  />
                  <FormInput
                    inputLabel="Email"
                    labelFor="email"
                    inputType="email"
                    inputId="email"
                    inputName="email"
                    placeholderText="Your email"
                    ariaLabelName="Email"
                  />
                  <FormInput
                    inputLabel="Subject"
                    labelFor="subject"
                    inputType="text"
                    inputId="subject"
                    inputName="subject"
                    placeholderText="Subject"
                    ariaLabelName="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-fuchsia-500"
                    name="message"
                    cols="14"
                    rows="6"
                    aria-label="Message"
                    placeholder="Type Your Message"
                    required
                  />
                </div>
                <div
                  className="bg-gradient-to-r from-blue-400 to-fuchsia-500 text-center text-white md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-lg"
                >
                  <Button
                    title="Send Message"
                    type="submit"
                    aria-label="Send Message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
