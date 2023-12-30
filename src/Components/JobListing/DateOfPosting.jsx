import React from 'react'

const DateOfPosting = ({postingDateQuery}) => {

    const now = new Date();
    const tweantyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now - 60 * 24 * 60 * 60 * 1000); 

    // converting dato to string.
    const tweantyFourHoursAgoDate = tweantyFourHoursAgo.toISOString().slice(0,10)
    const sevenDayesAgoDate = sevenDaysAgo.toISOString().slice(0,10)
    const monthAgoDate = monthAgo.toISOString().slice(0,10)

    return (
        <div className='mt-4'>
            <h1 className='font-bold mb-1'>Date of posting</h1>
            <div className='flex gap-x-2'>
                <label>
                    <input type="radio" name="test" value=""  onChange={postingDateQuery} />
                    <span className='ml-1'></span>
                    All
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label>
                    <input type="radio" name="test" value={tweantyFourHoursAgoDate}  onChange={postingDateQuery} />
                    <span className='ml-1'></span>
                    24 hours ago
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label>
                    <input type="radio" name="test" value={sevenDayesAgoDate} onChange={postingDateQuery} />
                    <span className='ml-1'></span>
                    7 days ago 
                </label>
            </div>

            <div className='flex gap-x-2'>
                <label>
                    <input type="radio" name="test" value={monthAgoDate}  onChange={postingDateQuery} />
                    <span className='ml-1'></span>
                    month ago
                </label>
            </div>
        </div>
    )
}

export default DateOfPosting






