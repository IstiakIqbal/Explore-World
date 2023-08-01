import React from 'react';
import Banner from '../../../Shared/Banner/Banner';
import imgUrl from '../../../../images/hotels.jpg';
import Navbar from '../../../Shared/Navbar/Navbar';

const Hotels = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner url={imgUrl} alt={'Banner of hotels routes'}></Banner>
        </div>
    );
};

export default Hotels;