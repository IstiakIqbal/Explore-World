import React, { useState } from 'react';
import { GiCommercialAirplane } from 'react-icons/gi';
import { SlCalender } from 'react-icons/sl';
import { MdFamilyRestroom } from 'react-icons/md';
import './Search.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

const Search = () => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOption, setOpenOption] = useState(false);
    const [options, setOptions] = useState({
        adult: 2,
        children: 1,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            }
        })
    }


    return (
        <div className='absolute w-full px-3 md:px-0'>
            <div className='mb-6 md:mb-10 max-w-screen-xl mx-auto'>
                <h1 className='text-3xl font-semibold md:text-5xl md:font-bold'>Find your next stay</h1>
            </div>
            <div className="headerSearch md:h-14 flex flex-col md:flex-row items-center justify-between border-none rounded max-w-6xl mx-auto">
                <div className="headerSearchItem mb-2 md:mb-0 flex items-center border-2 bg-white border-gray-500 w-full h-14 md:h-full hover:border-2 hover:border-[#ff7f00]">
                    <GiCommercialAirplane className='headerIcon text-gray-950 mx-5'></GiCommercialAirplane>
                    <input type="text" placeholder='Where are you going?' className='headerSearchInput h-full w-full focus:ring-2 focus:ring-[#ff7f00]' />
                </div>
                <div className='relative mb-2 md:mb-0 w-full h-14 md:h-full bg-white cursor-pointer'>
                    <div onClick={() => setOpenDate(!openDate)} className="headerSearchItem flex h-full items-center border-2 border-gray-500 hover:border-2 hover:border-[#ff7f00]">
                        <SlCalender className='headerIcon text-gray-500 mx-5'></SlCalender>
                        <span className='headerSearchText text-gray-950'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                    </div>
                    {openDate &&
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='absolute top-14 w-full z-30'
                        />}
                </div>
                <div className='relative mb-2 md:mb-0 w-full h-14 md:h-full bg-white'>
                    <div onClick={() => setOpenOption(!openOption)} className="headerSearchItem flex items-center border-2 border-gray-500 h-full hover:border-2 hover:border-[#ff7f00] cursor-pointer">
                        <MdFamilyRestroom className='headerIcon text-gray-500 mx-5'></MdFamilyRestroom>
                        <span className='headerSearchText text-gray-950'>{`${options.adult} adult + ${options.children} children + ${options.room} room`}</span>
                    </div>
                    {
                        openOption &&
                        <div className="options absolute top-14 w-full bg-white text-gray-800 py-4 px-3 z-30 border-2 border-gray-400 border-t-0">
                            <div className="optionItem flex justify-between items-center mb-4">
                                <span className='optionText font-semibold'>Adult</span>
                                <div className='border-2 border-[#ff7f00]'>
                                    <button onClick={() => handleOption('adult', 'd')} disabled={options.adult < 1} type='button' className='optionCounterButton p-4 bg-[#ff7f00] font-semibold focus:bg-[#ffb871] disabled:cursor-not-allowed'>-</button>
                                    <span className='optionCounterNumber p-4'>{options.adult}</span>
                                    <button onClick={() => handleOption('adult', 'i')} type='button' className='optionCounterButton p-4 bg-[#ff7f00] font-semibold focus:bg-[#ffb871]'>+</button>
                                </div>
                            </div>
                            <div className="optionItem flex justify-between items-center mb-4">
                                <span className='optionText font-semibold'>Children</span>
                                <div className='border-2 border-[#ff7f00]'>
                                    <button onClick={() => handleOption('children', 'd')} disabled={options.children < 1} type='button' className='optionCounterButton p-4 bg-[#ff7f00] font-semibold focus:bg-[#ffb871] disabled:cursor-not-allowed'>-</button>
                                    <span className='optionCounterNumber p-4'>{options.children}</span>
                                    <button type='button' onClick={() => handleOption('children', 'i')} className='optionCounterButton p-4 bg-[#ff7f00] font-semibold focus:bg-[#ffb871]'>+</button>
                                </div>
                            </div>
                            <div className="optionItem flex justify-between items-center mb-4">
                                <span className='optionText font-semibold'>Room</span>
                                <div className='border-2 border-[#ff7f00]'>
                                    <button onClick={() => handleOption('room', 'd')} disabled={options.room < 1} type='button' className='optionCounterButton p-4 bg-[#ff7f00] font-semibold focus:bg-[#ffb871] disabled:cursor-not-allowed'>-</button>
                                    <span className='optionCounterNumber p-4'>{options.room}</span>
                                    <button onClick={() => handleOption('room', 'i')} type='button' className='optionCounterButton p-4 bg-[#ff7f00] font-semibold focus:bg-[#ffb871]'>+</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <button type='button' className='hover:bg-transparent h-10 rounded-md md:rounded-none md:h-full border-2 border-[#ff7f00] px-4 bg-[#ff7f00] text-white duration-200 ease-linear hover:text-[#ff7f00]'>Search</button>
            </div>
        </div>
    );
};

export default Search;