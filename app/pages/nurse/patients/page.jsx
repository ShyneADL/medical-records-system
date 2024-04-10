import React from 'react'
import Pill from '@app/components/Pill'
import Sidebar from '@app/components/NurseSideBar.jsx'
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
            {/* <Messages /> */}
            <Link href='/pages/nurse/profile'>
              <ProfileIcon />
            </Link>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>

        
      </main>
    </section>
  )
}

export default page
