import React from 'react'

const LocaFilter = ({ locationQuery, handleLocationQuery }) => {
  return (
    <div>
    
    <h1 className='font-bold mb-1'>Location</h1>
    <div className='flex gap-x-2'>
        <label>
          <input type="radio" name="test" value="" checked={locationQuery === ''} onChange={handleLocationQuery}/>
          <span className='ml-1'></span>
          All 
        </label>
      </div>

      <div className='flex gap-x-2'>
        <label>
          <input type="radio" name="test" value="London" checked={locationQuery === 'London'} onChange={handleLocationQuery}/>
          <span className='ml-1'></span>
          London
        </label>
      </div>

      <div className='flex gap-x-2'>
        <label>
          <input type="radio" name="test" value="Seattle" checked={locationQuery === 'Seattle'} onChange={handleLocationQuery}/>
          <span className='ml-1'></span>
          Seattle
        </label>
      </div>

      <div className='flex gap-x-2'>
        <label>
          <input type="radio" name="test" value="San Francisco" checked={locationQuery === 'San Francisco'} onChange={handleLocationQuery}/>
          <span className='ml-1'></span>
          San Francisco
        </label>
      </div>
      
      <div className='flex gap-x-2'>
        <label>
          <input type="radio" name="test" value="Kabul" checked={locationQuery === 'Kabul'} onChange={handleLocationQuery}/>
          <span className='ml-1'></span>
          Kabul
        </label>
      </div>

      <div className='flex gap-x-2'>
        <label>
          <input type="radio" name="test" value="Boston" checked={locationQuery === 'Boston'} onChange={handleLocationQuery}/>
          <span className='ml-1'></span>
          Boston
        </label>
      </div>

      <div className='flex gap-x-2'>
        <label>
          <input type="radio" name="test" value="Brussels" checked={locationQuery === 'Brussels'} onChange={handleLocationQuery}/>
          <span className='ml-1'></span>
          Brussels
        </label>
      </div>

      <div className='flex gap-x-2'>
        <label>
          <input type="radio" name="test" value="Madrid" checked={locationQuery === 'Madrid'} onChange={handleLocationQuery} />
          <span className='ml-1'></span>
          Madrid
        </label>
      </div>

    </div>
  )
}

export default LocaFilter


