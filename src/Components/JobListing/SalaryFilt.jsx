import React from 'react'

const SalaryFilt = ({ salaryQuery, handleSalaryQuery }) => {
  return (
    <div className='mt-4'>
      <h1 className='font-bold mb-1'>Salary</h1>
      <input type="button" value="Yearly" onClick={handleSalaryQuery} className='btns' />
      <input type="button" value="Monthly" onClick={handleSalaryQuery} className='btns' />
      <input type="button" value="Hourly" onClick={handleSalaryQuery} className='btns' />
    </div>
  )
}

export default SalaryFilt