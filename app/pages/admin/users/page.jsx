import Sidebar from '@app/components/AdminSideBar.jsx'
import Searchbar from '@app/components/SearchBar.jsx'
import Bell from '@app/components/Bell'
import Messages from '@app/components/Messages'
import ProfileIcon from '@app/components/ProfileIcon'
import Image from 'next/image'
import Link from 'next/link'
import Pill from '@app/components/Pill'
import DropdownMenu from '@app/components/DropDown'
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
            <Link href='/pages/admin/profile'>
              <ProfileIcon />
            </Link>
          </div>
        </div>
          <div className='flex items-center justify-between w-full'>
            <h1 className='title_text'>Users</h1>
            {/* <DropdownMenu /> */}
          </div>
        <div className='flex items-center justify-between w-full'>
          <Pill first='Patients' second='Doctors' third='Nurses' />
          <button className='primary_btn'><p className='w-[128px]'>Add a New User</p></button>
        </div>

      </main>
    </section>
  )
}

export default page;