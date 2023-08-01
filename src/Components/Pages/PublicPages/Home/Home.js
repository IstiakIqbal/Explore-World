import React from 'react';
import Header from './HeaderSection/Header';
import Navbar from '../../../Shared/Navbar/Navbar';
import MainSection from './MainSection/MainSection';
import FooterSection from './FooterSection/FooterSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <MainSection></MainSection>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;