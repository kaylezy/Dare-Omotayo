import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full bg-slate-900 text-white p-6 md:p-10 md:px-40 cursor-pointer z-10">
      <div className=" container mx-auto flex justify-between items-center cursor-pointer">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-fuchsia-400">
          <a href="http:/">Dare Omotayo</a>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                className="hover:text-fuchsia-400 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-fuchsia-400 cursor-pointer"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-fuchsia-400 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden">Menu</button>
      </div>
    </header>
  );
};

export default Header;
