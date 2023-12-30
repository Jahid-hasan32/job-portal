import React from 'react'

const EmploymentType = ({handleEmploymentTypeQuery}) => {
  return (
    <div className='mt-4'>
        <h1 className='font-bold mb-1'>Employment type</h1>
        
        <div>
            <label>
                <input type="radio" name="empt" id="empt" value={"Full-time"} onClick={handleEmploymentTypeQuery} />
                <span className='ml-2'></span>
                Full-time
            </label>
        </div>

        <div>
            <label>
                <input type="radio" name="empt" id="empt" value={"Temporary"} onClick={handleEmploymentTypeQuery} />
                <span className='ml-2'></span>
                Temporary
            </label>
        </div>

        <div>
            <label>
                <input type="radio" name="empt" id="empt" value={"Part-time"} onClick={handleEmploymentTypeQuery} />
                <span className='ml-2'></span>
                Part-time
            </label>
        </div>
    </div>
  )
}

export default EmploymentType