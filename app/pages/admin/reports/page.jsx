import React from 'react'
import Image from 'next/image'
import Searchbar from '@app/components/Searchbar'
import Sidebar from '@app/components/AdminSideBar'
import Bell from '@app/components/Bell'
import Messages from '@app/components/Messages'
import ProfileIcon from '@app/components/ProfileIcon'
import DateBox from '@app/components/DateBox'

const page = () => {
  return (
    <section className='flex items-start w-full'>
      <Sidebar />
      <main className='ml-[250px] px-6 my-6 w-full flex flex-col items-start gap-8'>
        <div className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Searchbar />
          <div className='rounded-xl border-[1px] border-solid border-grey p-3'>
            10:50 AM, 02/02/2024
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Bell />
          <Messages />
          <ProfileIcon />
        </div>
        </div>
        <h1 className='title_text'>Reports</h1>
        <div className='w-full flex flex-wrap items-center gap-4'>
          <div className='flex items-center justify-between px-6 py-3 w-[250px] shadow'>
            <div className='flex flex-col items-start justify-start'>
              <p className='font-400 text-[16px] text-black'>Appointments today</p>
              <h2 className='title_text'>0</h2>
            </div>
              <Image 
              src=''
              width={24}
              height={24}
              />
          </div>
          <div className='flex items-center justify-between px-6 py-3 w-[250px] shadow'>
            <div className='flex flex-col items-start justify-start'>
              <p className='font-400 text-[16px] text-black'>Tasks assigned</p>
              <h2 className='title_text'>0</h2>
            </div>
              <Image 
              src=''
              width={24}
              height={24}
              />
          </div>
          <div className='flex items-center justify-between px-6 py-3 w-[250px] shadow'>
            <div className='flex flex-col items-start justify-start'>
              <p className='font-400 text-[16px] text-black'>Unread messages</p>
              <h2 className='title_text'>0</h2>
            </div>
              <Image 
              src=''
              width={24}
              height={24}
              />
          </div>
          <div className='flex items-center justify-between px-6 py-3 w-[250px] shadow'>
            <div className='flex flex-col items-start justify-start'>
              <p className='font-400 text-[16px] text-black'>Total patients</p>
              <h2 className='title_text'>0</h2>
            </div>
              <Image 
              src=''
              width={24}
              height={24}
              />
          </div>
          <div className='flex items-center justify-between px-6 py-3 w-[250px] shadow'>
            <div className='flex flex-col items-start justify-start'>
              <p className='font-400 text-[16px] text-black'>Available staff</p>
              <h2 className='title_text'>0</h2>
            </div>
              <Image 
              src=''
              width={24}
              height={24}
              />
          </div>
        </div>
      </main>

    </section>
  )
}

export default page