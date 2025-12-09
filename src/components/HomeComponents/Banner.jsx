import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './banner.css';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>

            <div className="slide-box">
                <img src={slide1} className="slide-img" />
            </div>

            <div className="slide-box">
                <img src={slide2} className="slide-img" />
            </div>

            <div className="slide-box">
                <img src={slide3} className="slide-img" />
            </div>

            <div className="slide-box">
                <img src={slide4} className="slide-img" />
            </div>

        </Carousel>
    );
};

export default Banner;