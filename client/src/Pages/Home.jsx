import React from "react";
import Header from "../Components/Header";
import Steps from "../Components/Steps";
import Intro from "../Components/Intro";
import Tesstimonials from "../Components/Testimonials"
import Generate from "../Components/Generate";

function Home() {
  return (
    <>
      <Header />
      <Steps />
      <Intro />
      <Tesstimonials />
      <Generate />
    </>
  );
}

export default Home;
