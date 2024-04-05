import DoctorProfileSidebar from '@app/components/DoctorProfileSidebar';
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <section className='flex items-start w-full'>
      <DoctorProfileSidebar />
      <main className='ml-[250px] px-12 my-6 w-full flex flex-col items-start gap-8'>
        <h1 className='big_text'>Admin Settings</h1>
        <div className='flex flex-wrap gap-4 w-[85%]'>
          <Link href='/'>
            <button className='flex items-center gap-2 primary_btn'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#fff' width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
              <p className='small_text'>User Management</p>
            </button>
          </Link>
          <Link href='/'>
            <button className='flex items-center gap-2 primary_btn'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#fff' width="24"><path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/></svg>
              <p className='small_text'>Access Control</p>
            </button>
          </Link>
          <Link href='/'>
            <button className='flex items-center gap-2 primary_btn'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#ffffff' width="24"><path d="M480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0 280q-139 0-241-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Z"/></svg>
              <p className='small_text'>Backup/Restore</p>
            </button>
          </Link>
        </div>
          <hr className='w-full bg-grey h-[1px] mt-5'/>
          <h3 className='med_text mt-2'>Export User Data</h3>
          <Link href='/'>
            <button className='flex items-center gap-2 primary_btn'>
              <p className='small_text'>Export Data</p>
            </button>
          </Link>
      </main>
    </section>
  )
}

export default page
