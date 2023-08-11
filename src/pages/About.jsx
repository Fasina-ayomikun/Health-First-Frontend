import React from "react";
import Navbar from "../components/Navbar";
import Why from "../components/Why";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function About() {
  return (
    <section>
      <Hero text='What we do' />
      <Navbar></Navbar>
      <Why></Why>

      <Footer />
    </section>
  );
}

export default About;
