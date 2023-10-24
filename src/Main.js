import React from "react";
import "./Main.css"


const Main = () => {
    return (
      <>
        <main>
          {/* <LandingSection />*/}
          <div className=" landing ">
          <div className="landing-content">
          <h1 className="landing-title"> Little Lemon </h1>
          <h2 className="landing-subtitle"> Chicago</h2>
          <p className="landing-text">This work was prepared by Ikwuezuma Elochukwu Reynolds. You will now see lorem ipsum because i'm not really in the mood to coome up with something to write.</p>
          <button className="reserve-a-buttton"> Reserve a Table </button>
          <div className="landing-image">
          <img src= "/resized.jpg" width={450} height={470} alt=" little lemon's chefs adrian and mario discussing. they both have white chef shirts with black aprons. Adrian has a black hair cover on and a towel on his right shoulder " className="land-round"></img>
          </div>
          </div>
         </div>

          {/*<SpecialsSection />*/}
          <div className="specials">
            <div className="specials-content">
              <h1 className="specials-title"> This Week's Specials! </h1>
              <button className="order-online-button"> Order Online</button>
                <div className="specials-tile-1">
                  <img src="/greeksalad.jpg" width={200} height={200} alt="little lemon's world famous greek salad." className="tile1"/>
                  <h4> Greek Salad </h4> <h4> $5.99 </h4>
                  <p> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                  <div className="deliver"><h4 className="order"><a href="/"> Order a delivery</a></h4>
                  <img src="/basket.svg" alt=" " className="basket"/>
                  </div>
                </div>
                <div className="specials-tile-1">
                  <img src="/bruchetta.svg" width={200} height={200} alt="little lemon's world famous greek salad." className="tile1"/>
                  <h4> Greek Salad </h4> <h4> $5.99 </h4>
                  <p> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                  <div className="deliver"><h4 className="order"> <a href="/"> Order a delivery</a></h4>
                  <img src="/basket.svg" alt=" " className="basket"/>
                  </div>
                </div>
                <div className="specials-tile-1">
                  <img src="/lemondessert.jpg" width={200} height={200} alt="little lemon's world famous greek salad." className="tile1"/>
                  <h4> Greek Salad </h4> <h4> $5.99 </h4>
                  <p> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                  <div className="deliver"><h4 className="order"><a href="/"> Order a delivery</a></h4>
                  <img src="/basket.svg" alt=" " className="basket"/>
                  </div>
                </div>
            </div>

          </div>
         {/* <ReviewSection /> */}
         <div className="reviews">
          <h1> Don't just take our word for it! </h1>
          <h2> Here are some amazing reviews </h2>
          <div className="Kosie">
            <a href="/">
            <p className="name1"> Kosie </p>
            <p className="rating1"> 4.8 stars </p>
            <p className> Read full Review </p>
            </a>
          </div>
          <div className="Ayo">
            <a href="/">
            <p className="name2"> Ayo </p>
            <p className="rating1"> 4.6 stars </p>
            <p className> Read full Review </p>
            </a>
          </div>
          <div className="Dez">
            <a href="/">
            <p className="name3"> Dez </p>
            <p className="rating1"> 4.7 stars </p>
            <p className> Read full Review </p>
            </a>
          </div>
          <div className="Dan">
            <a href="/">
            <p className="name1"> Dan </p>
            <p className="rating1"> 4.9 stars </p>
            <p className> Read full Review </p>
            </a>
          </div>

         </div>

         {/* <AboutSection />*/}
         <div className=" about ">
          <div className="about-content">
          <h1 className="about-title"> Little Lemon </h1>
          <h2 className="about-subtitle"> Chicago</h2>
          <p className="about-text">This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write. lorem ipsum set blah blah lorem ipsum set blah blah lorem ipsum set blah blah lorem ipsum set blah blah lorem ipsum set blah blah lorem ipsum set blah blah.</p>
          <div className="about-images">
          <img src= "/chefsA.jpg" width={300} height={300} alt=" little lemon's chefs adrian and mario discussing. they both have white chef shirts with black aprons. Adrian has a black hair cover on and a towel on his right shoulder " className="about-round1"></img>
          <img src= "/chefsB.jpg" width={300} height={300} alt=" little lemon's chefs adrian and mario. they both have white chef shirts with black aprons. Adrian has a black hair cover on and a towel on his right shoulder. this is from a different angle, they both look down at the counter while smiling " className="about-round2"></img>
          </div>
          </div>
         </div>

        </main>
      </>
      );
    };
    export default Main;
