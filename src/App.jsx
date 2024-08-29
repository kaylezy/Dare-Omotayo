import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts"

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </>
  );
}
