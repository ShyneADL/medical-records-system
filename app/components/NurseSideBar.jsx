'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
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
    <aside className='h-[100vh] fixed w-[250px] border-r-[1px] border-r-solid border-r-grey flex flex-col items-start justify-between'>
      <div className='p-8 w-full border-b-[1px] border-b-solid border-b-grey'>
        <Image src='' width={50} height={50} />
      </div>
      <div className='flex flex-col items-start gap-6 h-[60%] p-8'>
        <Link href='/pages/nurse/dashboard' passHref>
          <div
            className={`flex items-center gap-2 ${
              active === '/pages/nurse/dashboard' ? 'active-link' : ''
            }`}
            role='button'
            tabIndex='0'
          >
            <p>Dashboard</p>
          </div>
        </Link>
        <Link href='/pages/nurse/patients' passHref>
          <div
            className={`flex items-center gap-2 ${
              active === '/pages/nurse/patients' ? 'active-link' : ''
            }`}
            role='button'
            tabIndex='1'
          >
            <p>Patients</p>
          </div>
        </Link>
        <Link href='/pages/nurse/scheduling' passHref>
          <div
            className={`flex items-center gap-2 ${
              active === '/pages/nurse/scheduling' ? 'active-link' : ''
            }`}
            role='button'
            tabIndex='2'
          >
            <p>Scheduling</p>
          </div>
        </Link>
        <Link href='/pages/nurse/reports' passHref>
          <div
            className={`flex items-center gap-2 ${
              active === '/pages/nurse/reports' ? 'active-link' : ''
            }`}
            role='button'
            tabIndex='3'
          >
            <p>Reports</p>
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
  );
};

export default Sidebar;
