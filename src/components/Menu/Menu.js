import React, {useEffect} from 'react';
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy} from 'react-scroll';


const Menu = () => {

    useEffect (()=>{
        Events.scrollEvent.register('begin', (to, element) =>{
            console.log('begin', to, element);
        });
        Events.scrollEvent.register('end', (to, element) =>{
            console.log('end', to, element);
        });
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    const scrollTo = () => {
        scroll.scrollTo();
    };

    const handleSetActive = (to) => {
        console.log(to)
    };

    return (
        <div className='menu-container'>
            <div className='menu-nav'>

                <Link
                id='breakfast-button'
                activeClass='active'
                to="breakfast"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={handleSetActive}> Breakfast </Link>
                <Link
                id='lunch-button'
                activeClass='active'
                to="lunch"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={handleSetActive}> Lunch </Link>
                <Link
                id='dinner-button'
                activeClass='active'
                to="dinner"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={handleSetActive}> Dinner </Link>
                <Link
                id='breverages-button'
                activeClass='active'
                to="beverages"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={handleSetActive}> Beverages </Link>
                <Link
                id='mains-button'
                activeClass='active'
                to="desserts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={handleSetActive}> Desserts </Link>
                {/* <Link
                id='sides-button'
                activeClass='active'
                to="#"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}> Sides </Link> */}
            </div>

            <a className='scroll-bottom' onClick={scrollToBottom}> jump to bottom </a>
            <a className='scroll-top' onClick={scrollToTop}> back to top </a>

            <div className='breakfast-menu'>
                <Element name='breakfast' className='breakfast-title'><h1>
                    Breakfast
                    </h1>
                </Element>
                <h2> Start your day with our excellent options! </h2>
                <div className='breakfast-jumbotron'>

                </div>
                <div className='breakfast-tiles'>
                    <div className='breakfast-tile-1'>
                    <img src="/lemon-breakfast-1.webp" width={350} height={200} alt="little lemon's Egg Sandwiches with Feta." className="tile1"/>
                    <h4 className="breakfast-food"> Egg Sandwiches with Feta <h4 className="breakfast-price"> $6.99 </h4> </h4>
                    <p className="breakfast-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>
                    <div className='breakfast-tile-2'>
                    <img src="/lemon-breakfast-2.webp" width={350} height={200} alt="little lemon's Spinach and egg scramble with raspberries." className="tile1"/>
                    <h4 className="breakfast-food"> Spinach and Egg scramble with Raspberries <h4 className="breakfast-price"> $11.99 </h4> </h4>
                    <p className="breakfast-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>
                    <div className='breakfast-tile-3'>
                    <img src="/lemon-breakfast-3.webp" width={350} height={200} alt="little lemon's Muffin Tin Spanakopita Omeletes." className="tile1"/>
                    <h4 className="breakfast-food"> Muffin Tin Spanakopita Omeletes <h4 className="breakfast-price"> $11.99 </h4> </h4>
                    <p className="breakfast-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>

                </div>

            </div>

                <div className='lunch-menu'>
                <Element name='lunch' className='lunch-title'><h1>
                    Lunch
                    </h1>
                </Element>
                <h2> Refuel and Keep Going! </h2>
                <div className='lunch-jumbotron'>

                </div>
                <div className='lunch-tiles'>
                    <div className='lunch-tile-1'>
                    <img src="/lemon-lunch-1.webp" width={350} height={200} alt="little lemon's Grilled Pork Kabobs with Vegetables." className="tile1"/>
                    <h4 className="lunch-food"> Grilled Pork Kabobs with Vegetables <h4 className="lunch-price"> $9.99 </h4> </h4>
                    <p className="lunch-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>
                    <div className='lunch-tile-2'>
                    <img src="/lemon-lunch-2.webp" width={350} height={200} alt="little lemon's Puff Pastry with Tuna, Tomatoes and Olives." className="tile1"/>
                    <h4 className="lunch-food"> Puff Pastry with Tuna, Tomatoes and Olives <h4 className="lunch-price"> $10.49 </h4> </h4>
                    <p className="lunch-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>
                    <div className='lunch-tile-3'>
                    <img src="/lemon-lunch-3.webp" width={350} height={200} alt="little lemon's Sicilian Pasta and Chicken, Cherry Tomatoes and Capers." className="tile1"/>
                    <h4 className="lunch-food"> Sicilian Pasta and Chicken, Cherry Tomatoes and Capers <h4 className="lunch-price"> $15.39 </h4> </h4>
                    <p className="lunch-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>

                </div>

                </div>
                <div className='dinner-menu'>
                <Element name='dinner' className='dinner-title'><h1>
                    Dinner
                    </h1>
                </Element>
                <h2> Mouth Watering Options, whether alone or with Company! </h2>
                <div className='dinner-jumbotron'>

                </div>
                <div className='dinner-tiles'>
                    <div className='dinner-tile-1'>
                    <img src="/lemon-dinner-1.jpg" width={350} height={200} alt="little lemon's Skillet Greek Sun-Dried Tomato Chicken and Farro." className="tile1"/>
                    <h4 className="dinner-food"> Skillet Greek Sun-Dried Tomato Chicken and Farro <h4 className="dinner-price"> $13.99 </h4> </h4>
                    <p className="dinner-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>
                    <div className='dinner-tile-2'>
                    <img src="/lemon-dinner-2.jpg" width={350} height={200} alt="little lemon's Sweet Potatoes Noodles and Almond Sauce." className="tile1"/>
                    <h4 className="dinner-food"> Sweet Potatoes Noodles and Almond Sauce  <h4 className="dinner-price"> $12.99 </h4> </h4>
                    <p className="dinner-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>
                    <div className='dinner-tile-3'>
                    <img src="/lemon-dinner-3.jpg" width={350} height={200} alt="little lemon's Lemon Chicken Asaparagus." className="tile1"/>
                    <h4 className="dinner-food"> Lemon Chicken Asaparagus <h4 className="dinner-price"> $10.29 </h4> </h4>
                    <p className="dinner-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>

                </div>

                </div>
                <div className='drinks-menu'>
                <Element name='beverages' className='drinks-title'><h1>
                    Beverages
                    </h1>
                </Element>
                <h2> Cold, Tasty, Excellent! </h2>
                <div className='drinks-jumbotron'>

                </div>
                <div className='drinks-tiles'>
                    <div className='drinks-tile-1'>
                    <img src="/lemon-drinks-1.jpg" width={350} height={200} alt="little lemon's Mocktails." className="tile1"/>
                    <h4 className="drinks-food"> Mocktails <h4 className="drinks-price"> $4.59 </h4> </h4>
                    <p className="drinks-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>
                    <div className='drinks-tile-2'>
                    <img src="/lemon-drinks-2.jpg" width={350} height={200} alt="little lemon's Wines ." className="tile1"/>
                    <h4 className="drinks-food"> Wines  <h4 className="drinks-price"> $9.99 </h4> </h4>
                    <p className="drinks-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>
                    <div className='drinks-tile-3'>
                    <img src="/lemon-drinks-3.jpg" width={350} height={200} alt="little lemon's Ice-creams." className="tile1"/>
                    <h4 className="drinks-food"> Ice-Creams <h4 className="drinks-price"> $7.99 </h4> </h4>
                    <p className="drinks-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>

                </div>
                </div>
                <div className='desserts-menu'>
                <Element name='desserts' className='desserts-title'><h1>
                    Desserts
                    </h1>
                </Element>
                <h2> Superb Experience, Don't believe? Try it! </h2>
                <div className='desserts-jumbotron'>

                </div>
                <div className='desserts-tiles'>
                    <div className='desserts-tile-1'>
                    <img src="/lemon-desserts-1.webp" width={350} height={200} alt="little lemon's Tiramisu." className="tile1"/>
                    <h4 className="desserts-food"> Tiramisu <h4 className="desserts-price"> $4.59 </h4> </h4>
                    <p className="desserts-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>
                    <div className='desserts-tile-2'>
                    <img src="/lemon-desserts-2.webp" width={350} height={200} alt="little lemon's Greek Baklava ." className="tile1"/>
                    <h4 className="desserts-food"> Greek Baklava  <h4 className="desserts-price"> $9.99 </h4> </h4>
                    <p className="desserts-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>
                    <div className='desserts-tile-3'>
                    <img src="/lemon-desserts-3.webp" width={350} height={200} alt="little lemon's Tarte Tatin." className="tile1"/>
                    <h4 className="desserts-food"> Tarte Tatin <h4 className="desserts-price"> $7.99 </h4> </h4>
                    <p className="desserts-spec"> This work was prepared by Ikwuezuma Elochukwu Reynolds. you will now see lorem ipsum because i'm not really in the mood to coome up with something to write </p>
                    </div>

                </div>

                </div>

            </div>

    )
};

export default Menu;