'use client'
import Link from 'next/link'
import Image from 'next/image'

const sidebar = () => {
  return (
    <aside className='h-[100vh] fixed w-[250px] border-r-[1px] border-r-solid border-r-grey flex flex-col items-start justify-between'>
        <div className='p-8 w-full border-b-[1px] border-b-solid border-b-grey'>
          <Image
          src=''
          width={50}
          height={50}
          />
        </div>
        <div className='flex flex-col items-start gap-6 h-[60%] p-8'>
          <div className='flex items-center gap-2'>
            <p>Dashboard</p>
          </div>
          <div className='flex items-center gap-2'>
            <p>Users</p>
          </div>
          <div className='flex items-center gap-2'>
            <p>Scheduling</p>
          </div>
          <div className='flex items-center gap-2'>
            <p>Billing</p>
          </div>
          <div className='flex items-center gap-2'>
            <p>Reports</p>
          </div>

        </div>
        <div className='flex flex-col gap-12 items-start p-8'>
          <div className='flex items-start gap-2'>
            <p>System Settings</p>
            </div>
          <div className='flex items-start gap-2'>
            <p>Log Out</p>
            </div>
        </div>
    </aside>
  )
}

export default sidebar;