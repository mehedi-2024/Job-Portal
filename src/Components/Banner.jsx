
import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import ImageSlider from './ImageSlider';

const Banner = () => {
  const slides = [
    { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c" },
    { url: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg" },
    { url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72" },
  ];
  return (
    <div className=' py-8 lg:py-0 w-full min-h-[80vh] flex flex-col lg:flex-row gap-10 items-center rounded-lg'>
      <div className='text-center flex-1 lg:text-start lg:w-1/2'>
        <h1>Find Your Dream Job Today</h1>
        <p className='text-[1.1rem] w-[85%] lg:w-full mx-auto'>Explore thousands of opportunities from top companies. Whether you're just starting out or looking to take the next big step in your career, we're here to help you succeed.</p>

        <div className='flex items-center gap-4 bg-white py-2 pl-8 pr-2 rounded-full sm:w-[80%] md:w-[65%] lg:w-full mx-auto mt-10 border-[1px] border-gray-400'>
          <FaMagnifyingGlass />
          <input type="text" className=' outline-none flex-grow' placeholder='Find Your Job' />
          <button className='btn btn-neutral rounded-full md:w-32'>Search</button>
        </div>
      </div>

      <div className='flex-1 h-full'>
        {/* <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" className='w-full h-full rounded-lg' alt="" /> */}
        <ImageSlider slides={slides} />
      </div>
    </div>
  )
}

export default Banner