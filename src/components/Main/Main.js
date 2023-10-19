import React from "react";
import AboutSection from "./About/AboutSection";
import LandingSection from "./Landing/LandingSection";
import ReviewSection from "./Reviews/ReviewSection";
import SpecialSection from "./Specials/SpecialsSection";


const Main = () => {
    return (
      <>
        <main>
          <LandingSection />
          <SpecialSection />
          <ReviewSection />
          <AboutSection />


        </main>
      </>
      );
    };
    export default Main;
