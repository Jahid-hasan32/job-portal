import React from 'react'

const ExperienceLevel = ({experienceLevelQuery}) => {
  return (
    <div className='mt-4'>
        <h1 className='font-bold mb-1' >Experience level</h1>

        <div className='flex gap-x-2'>
                <label>
                    <input type="radio" name="test" value="Any experience"  onChange={experienceLevelQuery} />
                    <span className='ml-1'></span>
                    Any
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label>
                    <input type="radio" name="test" value="Internship"  onChange={experienceLevelQuery} />
                    <span className='ml-1'></span>
                    Internship
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label>
                    <input type="radio" name="test" value="Intermediate" onChange={experienceLevelQuery} />
                    <span className='ml-1'></span>
                    Intermediate
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label>
                    <input type="radio" name="test" value="Expart"  onChange={experienceLevelQuery} />
                    <span className='ml-1'></span>
                    Expart
                </label>
            </div>

    </div>
  )
}

export default ExperienceLevel