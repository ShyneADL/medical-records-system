'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const sidebar = () => {
  const [active, setActive] = useState('Dashboard')
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
          <Link href='/pages/admin/dashboard'>
            <div onClick={(e) => setActive('Dashboard')} className='flex items-center gap-2'>
              <p className={`${active === 'Dashboard' ? 'active-link' : ''}`}>Dashboard</p>
            </div>
          </Link>
          <Link href='/pages/admin/users'>
            <div onClick={(e) => setActive('Users')} className='flex items-center gap-2'>
              <p className={`${active === 'Users' ? 'active-link' : ''}`}>Users</p>
            </div>
          </Link>
          <Link href='/pages/admin/scheduling'>
            <div onClick={(e) => setActive('Scheduling')} className='flex items-center gap-2'>
              <p className={`${active === 'Scheduling' ? 'active-link' : ''}`}>Scheduling</p>
            </div>
          </Link>
          <Link href='/pages/admin/billing'>
            <div onClick={(e) => setActive('Billing')} className='flex items-center gap-2'>
              <p className={`${active === 'Billing' ? 'active-link' : ''}`}>Billing</p>
            </div>
          </Link>
          <Link href='/pages/admin/reports'>
            <div onClick={(e) => setActive('Reports')} className='flex items-center gap-2'>
              <p className={`${active === 'Reports' ? 'active-link' : ''}`}>Reports</p>
            </div>
          </Link>
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