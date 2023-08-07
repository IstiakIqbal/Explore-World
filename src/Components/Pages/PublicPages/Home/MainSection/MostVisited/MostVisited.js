import React, { useContext, useEffect, useRef } from 'react';
import { destinationContext } from '../../../../../../App';
import './MostVisited.css';
import MvCard from './MvCard/MvCard';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';


const MostVisited = () => {

    const timeRef = useRef(null);

    const value = useContext(destinationContext);
    const sliceValue = value.slice(0, 6);

    const clickToSlide = (param) => {
        const carousel = document?.querySelector(".destination-container");
        const div = document.getElementsByClassName('mvCard');
        let carouselChildrens;
        carousel && (carouselChildrens = [...carousel?.children]);

        // delete 6 card from last
        if (carouselChildrens?.length > 12) {
            for (let i = 0; i < carouselChildrens?.length - 6; i++) {
                if (div[0])
                    carousel.removeChild(div[0]);
                else break;
            }
        }
        (carouselChildrens?.length > 6) && (carouselChildrens = carouselChildrens.slice(0, 6))

        // for slidding
        const firstCardWidth = carousel && carousel.querySelector(".mvCard").offsetWidth;
        firstCardWidth && (carousel.scrollLeft += (param === "left") ? -firstCardWidth : firstCardWidth);

        if (firstCardWidth && (Math.round(carousel.scrollLeft) === (carousel.scrollWidth - carousel.offsetWidth))) {
            carouselChildrens?.forEach(card => {
                carousel.insertAdjacentHTML("beforeend", card.outerHTML);
            });
        }
    }


    useEffect(() => {
        timeRef.current = setTimeout(() => {
            clickToSlide('right');
        }, 10000);
    }, [])


    return (
        <div className='product-slider px-3 mt-40 md:pt-20 pb-32 md:pb-64'>
            <div className=''>
                <div className='max-w-screen-xl mx-auto mb-10 md:flex justify-between items-center'>
                    <div>
                        <h1 className='text-3xl md:text-5xl text-[#ff7f00] font-semibold'>Explore Tours</h1>
                        <h1 className='pt-1 md:pt-3 text-base md:text-2xl'>By Popular Destinations</h1>
                    </div>
                    <div className='flex items-center mt-5 justify-between'>
                        <button type="button" className="rounded-lg md:rounded-3xl mb-2 md:mb-0 hover:bg-transparent hover:text-white border-2 mr-3 py-2 px-5 md:px-8 text-sm font-semibold bg-[#ffffffe6] text-black ease-linear duration-200"><a href="/destinations">View All Tours</a></button>
                        <div>
                            <button onClick={() => clickToSlide('left')} className="pre-btn md:p-2 border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white ease-linear duration-200 rounded-full mr-2 md:mr-4"><LiaLongArrowAltLeftSolid className="h-10 w-10" /></button>
                            <button onClick={() => clickToSlide('right')} className="next-btn md:p-2 border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white ease-linear duration-200 rounded-full"><LiaLongArrowAltRightSolid className="h-10 w-10" /></button>
                        </div>
                    </div>
                </div>
                <div className='destination-container flex'>
                    {
                        sliceValue.map((data, idx) =>
                            <MvCard data={data} key={idx}></MvCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MostVisited;