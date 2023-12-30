import React from 'react'
import { IoMdMailUnread } from "react-icons/io";
import { GoRocket } from "react-icons/go";

const RightSideBar = () => {
  return (
    <div className='p-4'>
        <div className='flex flex-col gap-y-5'>
            <div className=''>
                <h1 className='font-bold mb-2 flex items-center gap-x-1'> <IoMdMailUnread/> Email me for job.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, officia. Tempora officia minus accusamus .</p>

                <form >
                  <input type="email" name="email" id="email" placeholder='example@gmail.com' className='mt-3 w-full py-1 px-2 rounded placeholder:text-primary' />
                  <button type="submit" className='mt-3 bg-secondery py-1 px-6 font-bold w-full'>Submit</button>
                </form>
            </div>

            <div className='mt-10'>
                <h1 className='font-bold mb-2 text-primary flex items-center gap-x-1'><GoRocket/> Get notifiyer faster.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, officia. Tempora officia minus accusamus .</p>

                <form >
                  <input type="file" name="resume" id="resume" className='mt-3 w-full py-1 px-2 rounded placeholder:text-primary' />
                  <button type="submit" className='mt-3 bg-secondery py-1 px-6 font-bold w-full'>Submit</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default RightSideBar