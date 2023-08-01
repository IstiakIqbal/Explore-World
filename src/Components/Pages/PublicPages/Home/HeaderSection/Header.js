import React from 'react';
import Carousel from "./Carousel/Carousel";
import dat from "../../../../../data/carouselData.json";
import './Header.css';


const Header = () => {
    return (
        <div className='header'>
            <Carousel data={dat.slides}></Carousel>
        </div>
    )
};

export default Header;