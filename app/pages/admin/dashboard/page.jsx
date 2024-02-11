import Sidebar from '@app/components/AdminSideBar.jsx'
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
      <main className='ml-[250px]'px-6 my-6 w-full flex flex-col items-start gap-8'>
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
        <h1 className='title_text'>Dashboard</h1>
        <div className='admin_dashboard_grid'>
          <div className='admin_grid_item'>
            <div className='flex flex-col h-[40%] items-center justify-between'>
              <div className='flex flex-col items-center gap-2'>
                <Image
                src=''
                width={24}
                height={24}/>
                <h2>Your Practice</h2>
              </div>
              <button className='primary_btn'>Add a New practice</button>
            </div>
          </div>
          <div className='admin_grid_item'>
            <div className='flex flex-col h-[40%] items-center justify-between'>
              <div className='flex flex-col items-center gap-2'>
                <Image
                src=''
                width={24}
                height={24}/>
                <h2>Your Patients</h2>
              </div>
              <button className='primary_btn'>Add a New user</button>
            </div>
          </div>
          <div className='admin_grid_item'>
            <div className='flex flex-col h-[40%] items-center justify-between'>
              <div className='flex flex-col items-center gap-2'>
                <Image
                src=''
                width={24}
                height={24}/>
                <h2>E-Prescribing</h2>
              </div>
              <button className='primary_btn'>Add a New Prescription</button>
            </div>
          </div>
          <div className='admin_grid_item'>
            <div className='flex flex-col h-[40%] items-center justify-between'>
              <div className='flex flex-col items-center gap-2'>
                <Image
                src=''
                width={24}
                height={24}/>
                <h2>Labs</h2>
              </div>
              <button className='primary_btn'>Add a New Lab</button>
            </div>
          </div>
          <div className='admin_grid_item'>
            <div className='flex flex-col h-[40%] items-center justify-between'>
              <div className='flex flex-col items-center gap-2'>
                <Image
                src=''
                width={24}
                height={24}/>
                <h2>Doctors</h2>
              </div>
              <button className='primary_btn'>Add a New Doctor</button>
            </div>
          </div>
          <div className='admin_grid_item'>
            <div className='flex flex-col h-[40%] items-center justify-between'>
              <div className='flex flex-col items-center gap-2'>
                <Image
                src=''
                width={24}
                height={24}/>
                <h2>Nurses</h2>
              </div>
              <button className='primary_btn'>Add a New Nurse</button>
            </div>
          </div>
          
        </div>

      </main>
    </section>
  )
}

export default page;