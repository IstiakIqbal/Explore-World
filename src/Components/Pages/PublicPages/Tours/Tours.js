import React from 'react';
import Banner from '../../../Shared/Banner/Banner';
import imgUrl from '../../../../images/tours.jpg';
import Navbar from '../../../Shared/Navbar/Navbar';

const Tours = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner url={imgUrl} alt={'Banner of Tours routes'}></Banner>
        </div>
    );
};

export default Tours;