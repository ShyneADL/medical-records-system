'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const VisitsTab = () => {
  return (
    <div className='w-full bg-white rounded-[12px] flex flex-col items-start gap-4 shadow p-6 relative'>
          <div className='flex items-center justify-between w-full'>
            <h3 className='med_text'>Visits</h3>
            <button className='shadow primary_btn'>New Visit</button>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col items-center justify-center bg-veryLightBlue rounded-[12px] gap-2 py-4 px-[52px]'>
              <h4 className='text-grey text-[20px] font-400'>Tuesday, 03/02/2024</h4>
              <h3 className='text-black text-[16px] font-bold'>Headache</h3>
              <h2 className='text-darkGrey text-[22px] font-400 uppercase mt-2'>In Progress</h2>
            </div>
            <div className='flex flex-col items-center justify-center bg-veryLightBlue rounded-[12px] gap-2 py-4 px-[52px]'>
              <h4 className='text-grey text-[20px] font-400'>Tuesday, 03/02/2024</h4>
              <h3 className='text-black text-[16px] font-bold'>Malaria</h3>
              <h2 className='text-black text-[22px] font-400 uppercase mt-2'>SIGNED OFF</h2>
            </div>
            <div className='flex flex-col items-center justify-center bg-veryLightBlue rounded-[12px] gap-2 py-4 px-[52px]'>
              <h4 className='text-grey text-[20px] font-400'>Tuesday, 03/02/2024</h4>
              <h3 className='text-black text-[16px] font-bold'>Broken Arm</h3>
              <h2 className='text-black text-[22px] font-400 uppercase mt-2'>SIGNED OFF</h2>
            </div>
          </div>
          {/*Left Btn */}
          <button className='bg-blue rounded-full flex items-center justify-center p-1 absolute top-[50%] translate-y-[-50%] left-[-16px]'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#ffffff' width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
          </button>
          {/* Right Btn */}
          <button className='bg-blue rounded-full flex items-center justify-center p-1 absolute top-[50%] translate-y-[-50%] right-[-16px]'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#ffffff' width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
          </button>
        </div>
  )
}

export default VisitsTab
