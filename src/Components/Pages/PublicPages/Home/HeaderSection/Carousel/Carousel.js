import React, { useEffect, useRef, useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import data1 from '../../../../../../data/sliderdata.json';
import data2 from '../../../../../../data/sliderdata.json';
import "./Carousel.css";
import Slider from "../Slider/Slider";


export default function Carousel({ data }) {

  const timeRef = useRef(null);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      nextSlide();
    }, 50000);
  })

  return (
    <div className="carousel md:bottom-10 relative flex items-center justify-center">
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <div className="h-full w-full absolute bg-black opacity-40"></div>

      <div className="max-w-screen-xl mx-auto bottom-24 px-4 md:px-0 md:top-[40%] h-fit absolute md:flex justify-between text-white w-full">
        <div className="welcome-text text-center md:text-start md:w-3/5">
          <h1 className="text-5xl font-bold">Welcome, To Explore World!</h1>
          <p className="text-base md:text-xl font-light my-10 leading-8 ">Traveling is about more than just getting somewhere; it is about embarking on unique excursions that help elevate our spirits. You may see beautiful landscapes, learn about new cultures, and have unforgettable experiences with our professionally designed vacation packages.</p>
          <div className="flex flex-col md:flex-row items-center">

            <button type="button" className="rounded-3xl mt-6 md:mt-0 mb-2 md:mb-0 bg-[#FF7F00] border-[#FF7F00] border-2 mr-3 py-2 px-7 text-sm font-semibold hover:bg-[#ffffffe6] hover:border-[#ffffffe6] hover:text-[#ff7f00] ease-in duration-200"> <a href="/destinations">Search a Tour</a>  </button>
            <button type="button" className="rounded-3xl mb-2 md:mb-0 bg-transparent border-2 mr-3 py-2 px-8 text-sm font-semibold hover:bg-[#ffffffe6] hover:text-black ease-linear duration-200"><a href="/destinations">Go a Tour</a></button>
            <button type="button" onClick={nextSlide}
              className="arrow p-1 border-2 rounded-full text-[#c2c2c2] border-[#c2c2c2] hover:text-[#fff] hover:border-[#fff] ease-linear duration-200"><LiaLongArrowAltRightSolid className="h-8 w-8" /></button>
          </div>
        </div>
        <div className="indicators hidden md:flex flex-col justify-between h-full">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={`${slide === idx ? "indicator" : "indicator indicator-inactive"} rounded-full hidden md:flex h-3 w-3 mb-5`}
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </div>
      </div>
      <Slider slide1={data1.slide1} slide2={data2.slide2}></Slider>
    </div>
  );
};