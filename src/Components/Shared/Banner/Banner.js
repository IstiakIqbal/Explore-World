import React from 'react';
import './Banner.css';

const Banner = ({ url, alt }) => {
    return (
        <div className='relative flex'>
            <div className='banner'><img src={url} alt={alt} /></div>
            <div className="h-full w-full absolute bg-black opacity-20"></div>
        </div>
    );
};

export default Banner;