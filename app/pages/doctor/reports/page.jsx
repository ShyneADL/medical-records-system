import React from 'react'
import Image from 'next/image'
import Searchbar from '@app/components/Searchbar'
import Sidebar from '@app/components/DoctorSideBar'
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
          <DateBox />
        </div>
        <div className='flex items-center gap-4'>
          <Bell />
          <Messages />
          <Link href='/pages/docotor/profile'>
              <ProfileIcon />
            </Link>
        </div>
        </div>
        <h1 className='title_text'>Reports</h1>
        <div className='w-full flex flex-wrap items-center gap-4'>
          <div className='flex items-center justify-between px-6 py-3 w-[270px] shadow'>
            <div className='flex flex-col items-start justify-start'>
              <p className='font-400 text-[16px] text-black font-500'>Appointments today</p>
              <h2 className='title_text text-blue'>0</h2>
            </div>
              <Image 
              src='/assets/Appointment.svg'
              width={48}
              height={48}
              />
          </div>
          <div className='flex items-center justify-between px-6 py-3 w-[250px] shadow'>
            <div className='flex flex-col items-start justify-start'>
              <p className='font-400 text-[16px] text-black'>Tasks assigned</p>
              <h2 className='title_text text-blue'>0</h2>
            </div>
              <Image 
              src='/assets/Tasks.svg'
              width={48}
              height={48}
              />
          </div>
          <div className='flex items-center justify-between px-6 py-3 w-[250px] shadow'>
            <div className='flex flex-col items-start justify-start'>
              <p className='font-400 text-[16px] text-black'>Total patients</p>
              <h2 className='title_text text-blue'>0</h2>
            </div>
              <Image 
              src='/assets/Patient.svg'
              width={48}
              height={48}
              />
          </div>
          <div className='flex items-center justify-between px-6 py-3 w-[250px] shadow'>
            <div className='flex flex-col items-start justify-start'>
              <p className='font-400 text-[16px] text-black'>Available staff</p>
              <h2 className='title_text text-blue'>0</h2>
            </div>
              <Image 
              src='/assets/Staff.svg'
              width={48}
              height={48}
              />
          </div>
        </div>
      </main>
    </section>
  )
}

export default page