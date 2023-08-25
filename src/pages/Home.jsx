import React from "react";
import Hero from "../components/Hero";
import Why from "../components/Why";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero text='Health First' />;
      <Why />
      <Testimonial />
      <Footer />
    </>
  );
}
export default Home;
