import React from "react";
import './AboutSection.css';

const handleClick =() => {
    return;
};

const aboutData= {
   title: "Little Lemon",
   subTitle: "Chicago",
   description:`Little Lemon has been a family business for 300 years spanning 9 generations of an excellent family of world class chefs 
    they are dedicated to making the best meals and giving the best experiences to their clients.
    The current chefs Mario and Adrian have not only continued the tradition, but keep pushing it further every day`,
   image1: images.MarioandAdrianA,
   image2:images.MarioandAdrianb,
}

const AboutSection = () => {
    return (
    <div className="about-section">

        <div className="about-description-box">
            <h1 className="about-title">{aboutData.title}</h1>
            <br />
            <h2 className="about-subtitle">{aboutData.subTitle}</h2>
            <br />
            <p className="about-description">
              {aboutData.description}</p>

        </div>

        <div className="about-image-holder">
          <div className="about-image-box">
              <div className="about-image-1" style={
                { backgroundImage: `url(${about.Data.image1})`}
              }>
              </div>
              <div className="about-image-2" style={
                { backgroundImage: `url(${about.Data.image2})`}
              }>
              </div>
            </div>
        </div>
    </div>
      );
    };
    export default AboutSection;

    {/* <h1>  </h1>
        <h2> Chicago </h2>
        <p> Little Lemon has been a family business for 300 years spanning 9 generations of an excellent family of chefs dedicated to making the best meals and giving the best experiences to their clients </p>
        <p> The current chefs Mario and Adrian have not only continued the tradition, but keep pushing it further every day </p>
        <img src="../images/MarioandAdrianA.jpg"></img>
        <img src="../images/MarioandAdrianb.jpg"></img> */}