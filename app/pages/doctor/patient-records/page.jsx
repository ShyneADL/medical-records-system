import React from 'react'
import Pill from '@app/components/Pill'
import Sidebar from '@app/components/DoctorSideBar.jsx'
import Searchbar from '@app/components/SearchBar.jsx'
import Bell from '@app/components/Bell'
import Messages from '@app/components/Messages'
import ProfileIcon from '@app/components/ProfileIcon'
import Image from 'next/image'
import Link from 'next/link'
import VisitsTab from '@app/components/VisitsTab'
import DateBox from '@app/components/DateBox'


const page = () => {
  return (
    <section className='flex items-start w-full'>
      <Sidebar/>
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
        <div className='flex items-center gap-5 max-w-[600px]'>
            <h1 className='title_text w-fit'>Patients - Jude Dozie</h1>
            <Link href='/pages/doctor/patients'>
              <button className='flex items-center gap-1 text-blue text-[14px] font-400'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#00AFEF' width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                  <p>Back to Patient's List</p>
              </button>
            </Link>
        </div>
        <div className='flex items-end gap-8'>
            <Pill first='Chart' second='Documents' third='Medications'/>
            <div className='flex items-center gap-2 shadow p-4 rounded-[12px] bg-white'>
                <Image 
                src='/assets.Profile.svg'
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
        <div className='flex flex-col items-start rounded-[12px] shadow bg-white w-[60%]'>
            <div className='flex items-center justify-between p-6 border-b-[1px] border-b-solid border-b-lightGrey w-full'>
                {/*Height*/}
                <div className='flex flex-col items-start gap-6 w-[180px]'>
                    <div className='flex items-center gap-2'>
                      <Image
                      src='/assets/Ruler.svg'
                      width={16}
                      height={16}
                      />
                      <p className='grey_text'>Height</p>
                    </div>
                    <h3 className='big_text text-blue'>189cm</h3>
                </div>
                {/* Weight */}
                <div className='flex flex-col items-start gap-6 w-[180px]'>
                  <div className='flex items-center gap-2'>
                      <Image
                      src='/assets/Weight.svg'
                      width={24}
                      height={24}
                      />
                      <p className='grey_text'>Weight</p>
                    </div>
                    <h3 className='big_text text-blue'>99kg</h3>
                </div>
                {/* BMI */}
                <div className='flex flex-col items-start gap-6 w-[180px]'>
                    <div className='flex items-center gap-2'>
                      <Image
                      src='/assets/BMI.svg'
                      width={28}
                      height={28}
                      />
                      <p className='grey_text'>BMI</p>
                    </div>
                    <h3 className='big_text text-blue'>23.28</h3>
                </div>
            </div>
            <div className='flex items-center justify-between p-6 border-b-[1px] border-b-solid border-b-lightGrey w-full'>
                {/*Blood Pressure*/}
                <div className='flex items-center gap-4 w-[180px]'>
                    <Image
                    src=''
                    width={10}
                    height={10}
                    />
                    <h3 className='grey_text'>Blood Pressure</h3>
                </div>
                {/* Systolic */}
                <div className='flex flex-col items-start gap-1 w-[150px]'>
                    <h4 className='med_text text-blue'>120mmHg</h4>
                    <p className='small_grey_text'>(Systolic)</p>
                </div>
                {/* Dyastolic */}
                <div className='flex flex-col items-start gap-1 w-[150px]'>
                    <h4 className='med_text text-blue'>80mmHg</h4>
                    <p className='small_grey_text'>(Dyastolic)</p>
                </div>
                
               
            </div>
            <div className='w-full items-center justify-center grey_text text-center p-6'>
              Smoking Status: <span className='text-blue med_text'>None</span>
            </div>
        </div>
        <VisitsTab />
      </main>
    </section>
  )
}

export default page
