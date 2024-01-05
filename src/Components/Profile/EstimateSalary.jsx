import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EstimateSalary = () => {
    const [query, setQuery] = useState('')

  return (
    <div className='container mt-6 max-w-7xl'>
        {/* heading */}
        <div className='max-w-screen-md h-32 container flex flex-col items-center justify-center gap-y-4 bg-third_color rounded '>
            <h1 className='text-4xl font-bold text-center'>Salary estimate</h1>
            <p><Link className='font-semibold text-lg underline' to={'/'}>Home/ </Link><span className='font-semibold text-lg'>estimate</span></p>
        </div>

        {/* search box */}

        <form className='flex sm:flex-col mt-4 md:flex-row items-center justify-center'>
        <input type="search" name="job-search" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Ex: 20000, 500000' id="job-search" className='w-full lg:w-1/2 py-2 outline-none focus:ring-1 focus:ring-secondery border px-2' />
        <input type="button" value={"search"} className='bg-secondery px-6 py-2 text-white cursor-pointer'/>
      </form>

    </div>
  )
}

export default EstimateSalary