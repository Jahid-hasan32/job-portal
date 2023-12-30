import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const SalaryRangeFilt = ({salaryRangeQuery, handleSalaryRangeQuery}) => {
    return (
        <div className='mt-3'>
            <div className='flex items-center'>
                <label className='flex items-center'>
                    <input type="radio" name="test" value="30" checked={salaryRangeQuery == '30'} onChange={handleSalaryRangeQuery} />
                    <span className='ml-1'></span>
                    <IoIosArrowBack/> 30k
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label className='flex items-center'>
                    <input type="radio" name="test" value="50" checked={salaryRangeQuery == '50'} onChange={handleSalaryRangeQuery} />
                    <span className='ml-1'></span>
                    <IoIosArrowBack/> 50k 
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label className='flex items-center'>
                    <input type="radio" name="test" value="75" checked={salaryRangeQuery == '75'} onChange={handleSalaryRangeQuery} />
                    <span className='ml-1'></span>
                    <IoIosArrowBack/> 75k 
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label className='flex items-center'>
                    <input type="radio" name="test" value="120" checked={salaryRangeQuery == '120'} onChange={handleSalaryRangeQuery} />
                    <span className='ml-1'></span>
                    <IoIosArrowBack/> 120k
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label className='flex items-center'>
                    <input type="radio" name="test" value="80" checked={salaryRangeQuery == '80'} onChange={handleSalaryRangeQuery} />
                    <span className='ml-1'></span>
                    <IoIosArrowBack/> 80k
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label className='flex items-center'>
                    <input type="radio" name="test" value="100" checked={salaryRangeQuery === '100'} onChange={handleSalaryRangeQuery} />
                    <span className='ml-1'></span>
                    <IoIosArrowBack/> 100k
                </label>
            </div>

        </div>
    )
}

export default SalaryRangeFilt