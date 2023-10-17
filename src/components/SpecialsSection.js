import React from "react";

const handleClick =() => {
    return;
};
const SpecialSection = () => {
    return (
        <>
        <h1> This Week's Specials! </h1>
        <button type="button" width="full" onClick={handleClick}>
                Online Menu
              </button>
        <div className="SpecialsCard">

        </div>
        </>
      );
    };
    export default SpecialSection;