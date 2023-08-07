import React from 'react';
import { BsClockFill, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const Destination = ({ data, text }) => {

    return (
        <div className='w-fit card relative cursor-pointer mb-5 md:mb-0'>
            <div>
                <img className='md:rounded-3xl rounded-md' src={data.picture} alt="" />
            </div>
            <div className='absolute w-full h-full bg-black rounded-md opacity-50 top-0 md:rounded-3xl'></div>
            <div className='absolute px-2 md:px-4 z-20 bottom-4 md:bottom-10 w-full h-fit'>
                <div className='flex items-center'>
                    <BsStarFill className='text-yellow-400 mr-1'></BsStarFill>
                    <BsStarFill className='text-yellow-400 mr-1'></BsStarFill>
                    <BsStarFill className='text-yellow-400 mr-1'></BsStarFill>
                    <BsStarHalf className='text-yellow-400 mr-1'></BsStarHalf>
                    <BsStar className='text-yellow-400 mr-1'></BsStar>
                    <p className='text-sm'>({data.review})</p>
                </div>
                <h1 className='md:text-2xl font-semibold my-1 md:my-3 hover:text-[#ff7f00] ease-linear duration-200'>{data.heading} | {data.price}</h1>
                <p className='text-gray-400 text-sm font-semibold italic hidden md:block'>{data.desc}</p>
                <div className='flex items-center'>
                    <BsClockFill className='mr-2'></BsClockFill>
                    <p className='text-gray-200'>{data.days}</p>
                </div>
                <div>
                    <button
                        type="button"
                        className="rounded md:rounded-lg hover:bg-transparent hover:text-[#ff7f00] text-white border-2 border-[#ff7f00] py-1 mt-1 px-3 md:px-6 md:mt-2 text-sm font-semibold bg-[#ff7f00] ease-linear duration-150"
                        onClick={() => {
                            window.confirm(
                                `You're Booking to this tour. Are you sure you want to book this tour? Press 'Yes' to confirm`
                            );
                        }}
                    >Book Now
                    </button>
                </div>
            </div>
            <div className='absolute bg-[#ff8000d4] font-semibold rounded-md top-2 md:top-4 right-2 md:right-4 px-2 md:px-4 py-1 md:py-2'>
                20% off
            </div>
        </div>
    );
};

export default Destination;