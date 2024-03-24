'use client'
import React,{useEffect, useState} from 'react'

const DateBox = () => {
    const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  const options = { 
    day: '2-digit', 
    month: '2-digit', 
    year: '2-digit', 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit' 
  }; 
  
  const formattedDateTime = dateTime.toLocaleString('en-GB', options);
  return (
    <div className='rounded-xl border-[1px] border-solid border-grey p-3'>
              {formattedDateTime}
            </div>
  )
}

export default DateBox
