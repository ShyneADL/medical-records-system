'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const sidebar = () => {
  const router = useRouter();
  const [active, setActive] = useState('');

  // useEffect(() => {
  //   // Update active based on the current path
  //   const currentPath = router.pathname.split('/')[2]; // Example: 'dashboard'
  //   setActive(currentPath);
  // }, [router.pathname]);
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
          <Link href='/admin/dashboard'>
            <div className='flex items-center gap-2'>
              <p className={`${active === 'Dashboard' ? 'active-link' : ''}`}>Dashboard</p>
            </div>
          </Link>
          <Link href='/admin/users'>
            <div className='flex items-center gap-2'>
              <p className={`${active === 'Users' ? 'active-link' : ''}`}>Users</p>
            </div>
          </Link>
          <Link href='/admin/scheduling'>
            <div className='flex items-center gap-2'>
              <p className={`${active === 'Scheduling' ? 'active-link' : ''}`}>Scheduling</p>
            </div>
          </Link>
          <Link href='/admin/billing'>
            <div className='flex items-center gap-2'>
              <p className={`${active === 'Billing' ? 'active-link' : ''}`}>Billing</p>
            </div>
          </Link>
          <Link href='/admin/reports'>
            <div className='flex items-center gap-2'>
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