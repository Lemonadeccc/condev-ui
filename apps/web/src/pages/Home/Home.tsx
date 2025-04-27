import React from "react";

import { NavBar } from "../../components/NavBar";
import { Hero } from "../../sections/Hero";
import { ShaderSection } from "../../sections/ShaderSection";
import { ShowcaseSection } from "../../sections/ShowcaseSection";

const Home = () => {
  return (
    <>
      <NavBar />

      <Hero />

      <ShaderSection />

      <ShowcaseSection />
    </>
  );
};

export default Home;
