import React from 'react'
import Pill from '@app/components/Pill'
import Sidebar from '@app/components/DoctorSideBar.jsx'
import Searchbar from '@app/components/SearchBar.jsx'
import Bell from '@app/components/Bell'
import Messages from '@app/components/Messages'
import ProfileIcon from '@app/components/ProfileIcon'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <section className='flex items-start w-full'>
      <Sidebar/>
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
        <div className='flex items-center gap-5 max-w-[600px]'>
            <h1 className='title_text w-fit'>Patients - Jude Dozie</h1>
            <button className='flex items-center gap-3 text-blue text-[14px] font-400'>
                <Image
                src=''
                width={16}
                height={16}
                />
                <p>Back to Patient's List</p>
            </button>
        </div>
        <div className='flex items-end gap-8'>
            <Pill first='Chart' second='Documents' third='Medications'/>
            <div className='flex items-center gap-2 shadow p-4 rounded-[12px] bg-white'>
                <Image 
                src=''
                width={24}
                height={24}
                className='rounded-full'
                />
                <div className='flex flex-col items-start justify-start gap-3'>
                    <h5 className='big_text w-[150px]'>Dozie, Jude</h5>
                    <p className='text-[14px] font-500 w-[120px]'>21 years old, Male</p>
                </div>

            </div>
        </div>
        <div className='flex flex-col items-start gap-4 rounded-[12px] shadow'>
            <div className='flex items-center gap-20 p-6 border-b-1 border-b-solid border-b-lightGrey'>
                {/*Height*/}
                <div className='flex flex-col items-start gap-6'>
                    <Image
                    src=''
                    width={16}
                    height={16}
                    />
                    <h3 className='big_text text-blue'>189cm</h3>
                </div>
                {/* Weight */}
                <div className='flex flex-col items-start gap-6'>
                    <Image
                    src=''
                    width={16}
                    height={16}
                    />
                    <h3 className='big_text text-blue'>99kg</h3>
                </div>
                {/* BMI */}
                <div className='flex flex-col items-start gap-6'>
                    <Image
                    src=''
                    width={16}
                    height={16}
                    />
                    <h3 className='big_text text-blue'>23.28</h3>
                </div>
            </div>
        </div>
      </main>
    </section>
  )
}

export default page
