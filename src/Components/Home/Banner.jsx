import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaLocationArrow } from 'react-icons/fa6';
import { HiOutlineLocationMarker } from "react-icons/hi";


const Banner = ({query, queryReceiver}) => {

  return (
    <div className='container my-4 max-w-7xl px-2 xl:px-0'>
        <div>
            <h1 className='font-bold mb-4 text-5xl text-pretty text-primary '>Find your <span className='text-secondery'>new job</span> today</h1>
            <p className='text-pretty text-primary/85'>Thounds of jobs in the computer, engineering and technology sectors are waiting for you</p>
        </div>

        <form className='mt-6'>
            <div className='flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:gap-x-2 md:justify-start'>
                
                <div className='flex md:w-1/2'>
                    <input type="text" placeholder='What position are you looking for?' name='job-search' value={query} onChange={queryReceiver} className='ring-2 rounded text-primary py-1 ps-8 w-full focus:ring-2 focus:ring-primary'/>
                    <FaSearch className='absolute mt-2 ml-2 text-primary/60'/>
                </div>
                <div className='flex md:w-1/3'>
                    <input type="text" placeholder='Location' name='job-search' defaultValue={''}  className=' ring-2 rounded text-primary py-1 ps-8 w-full focus:ring-2 focus:ring-primary'/>
                    <HiOutlineLocationMarker className='absolute mt-2 ml-2 text-primary/60'/>
                </div>

                <button className='bg-secondery py-2 px-6 text-white rounded'>Submit</button>

            </div>
        </form>
    </div>
  )
}

export default Banner