import React from "react";

const handleClick =() => {
    return;
};
const LandingSection = () => {
    return (
        <>
        <h1> Little Lemon </h1>
        <h2> Chicago </h2>
        <p> Little Lemon is a five star restaurant with dishes from the mediterranean and italy.  </p>
        <p> We guarantee not just mouth watering dishes but memories that last a life time </p>
        <button type="button" width="full" onClick={handleClick}>
                Reserve a table
              </button>
        <img src="../images/restaurant chef B.jpg"></img>
        </>
      );
    };
    export default LandingSection;