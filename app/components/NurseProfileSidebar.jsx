'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NurseProfileSidebar = () => {
    const pathname = usePathname();
    const [active, setActive] = useState(null);

  useEffect(() => {
    const handleSetActive = (link) => {
      setActive(pathname === link ? link : null);
    };

    if (typeof window !== 'undefined') {
      handleSetActive(window.location.pathname);
    }

    const handleRouteChange = (url) => {
      handleSetActive(url);
    };

    window.addEventListener('routeChangeStart', handleRouteChange);

    return () => {
      window.removeEventListener('routeChangeStart', handleRouteChange);
    };
  }, [pathname]);
  return (
    <aside className='h-[100vh] fixed w-[250px] border-r-[1px] border-r-solid border-r-grey flex flex-col items-start gap-24'>
        <div className='w-full flex flex-col items-center justify-center gap-3'>
          <Image src=''
          width={100}
          height={100}
          className='rounded-full'
          alt='profile image'/>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h3 className='big_text'>James Gordon</h3>
            <p className='grey_text'>Nurse</p>
          </div>
        </div>
        <div className='w-full flex flex-col items-start'>
          <Link href='/pages/nurse/profile' className='w-full' passHref>
            <div className={`p-4 border-y-[1px] border-y-solid border-y-grey w-full ${
              active === '/pages/nurse/profile' ? 'active-link' : ''
            }`}
            role='button'
            tabIndex='0'>
              <p className='small_text'>Account</p>
            </div>
          </Link>
          <Link href='/pages/nurse/profile/security' className='w-full' passHref>
          <div className={`p-4 border-y-[1px] border-y-solid border-y-grey w-full ${
              active === '/pages/nurse/profile/security' ? 'active-link' : ''
            }`}
            role='button'
            tabIndex='0'>
              <p className='small_text'>Security</p>
            </div>
          </Link>
          <Link href='/pages/nurse/profile/settings' className='w-full' passHref>
          <div className={`p-4 border-y-[1px] border-y-solid border-y-grey w-full ${
              active === '/pages/nurse/profile/settings' ? 'active-link' : ''
            }`}
            role='button'
            tabIndex='0'>
              <p className='small_text'>Settings</p>
            </div>
          </Link>
        </div>
      </aside>
  )
}

export default NurseProfileSidebar
