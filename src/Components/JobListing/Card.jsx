import React from 'react'
import { Link } from 'react-router-dom'
import { SlCalender } from "react-icons/sl";
import { IoMdStopwatch } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Card = ({ data }) => {
  return (
    <section>
      <div>
        {/* card */}
        <div className='card'>
          <Link className="flex gap-x-3">
            <div>
              <img src={data.companyLogo} alt="" className='w-36' />
            </div>
            <div className=''>
              <span className='text-primary/75 card-title'>{data.companyName}</span>
              <h1 className=''>{data.jobTitle}</h1>
              <div className="icon flex gap-x-2 my-1">
                <span className='flex items-center'><MdLocationOn className='text-primary/75' /> {data.jobLocation}</span>
                <span className='flex items-center'><IoMdStopwatch className='mr-1 text-primary/75' /> {data.employmentType}</span>
                <span>$ {data.minPrice}- {data.maxPrice}</span>
                <span className='flex items-center'><SlCalender className='mr-1 text-primary/75' /> {data.postingDate}</span>
              </div>
              <p className='text-primary/75'>{data.description}</p>
            </div>
          </Link>
        </div>
      </div>


    </section>
  )
}

export default Card
