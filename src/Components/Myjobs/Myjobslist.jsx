import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Credentials/Login';
import Register from '../Credentials/Register';

const Myjobslist = () => {
  const [query, setQuery] = useState('')
  const [credentialOpen, setCredentialOpen] = useState([])
  useEffect(()=>{
    fetch("jobs.json")
    .then(res => res.json())
    .then(data=> {
      setCredentialOpen(data)
    })
  },[])

  // filterQuery = credentialOpen.filter((job) => {job})

  // 
  // const credentialHandle = () => {
  //   setCredentialOpen(!credentialOpen)
  // }

  console.log(credentialOpen);

  return (
    <div className='max-w-7xl container px-2 xl:p-0 mt-4'>
      <h1 className='text-lg text-center font-bold'>My all jobs</h1>

      {/* jobs searching box */}
      <form className='flex sm:flex-col mt-4 md:flex-row items-center justify-center'>
        <input type="search" name="job-search" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Ex: microsoft, web developer' id="job-search" className='w-full lg:w-1/2 py-2 outline-none focus:ring-1 focus:ring-secondery border px-2' />
        <input type="button" value={"search"} className='bg-secondery px-6 py-2 text-white cursor-pointer'/>
      </form>

      {/* job listing box */}
      <div className='w-full mx-auto mt-10 lg:w-4/6 shadow-md p-3'>
        <div className='flex items-center justify-between pb-3 border-b-2 border-primary/65'>
          <h1 className='font-bold'>All jobs</h1>
          <Link className='bg-purple-800 text-white px-2 rounded-md' to={"/post-a-job"}>POST A NEW JOB</Link>
        </div>

        {/* table */}
        <div className='max-w-7xl overflow-x-auto'>
          <table className=" w-full px-2 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  No
                </th>
                <th scope="col" className="px-2 py-3 border text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Company & Job title
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Min salary
                </th>
                <th scope="col" className="px-2 py-3 border text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  job location
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Salary type
                </th>
                <th scope="col" className="px-2 py-3 border text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              <tr className=''>
                <td className="py-2 whitespace-nowrap ">
                  <div className="text-sm text-gray-900">1</div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap max-w-[17rem]">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <div className="text-sm text-gray-500">
                        jane.cooper@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-2 whitespace-nowrap ">
                  <div className="text-sm text-gray-900">$ 3000000</div>
                </td>

                <td className="py-2 px-2 whitespace-nowrap ">
                  <div className="text-sm text-gray-900">New yourk</div>
                </td>
                <td className="py-2 px-2 whitespace-nowrap ">
                  <div className="text-sm text-gray-900">Hourly</div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap  text-sm font-medium">
                  <Link className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                  <Link className="ml-2 text-red-600 hover:text-red-900">Delete</Link>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

export default Myjobslist