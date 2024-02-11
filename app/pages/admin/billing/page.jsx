import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@app/components/AdminSideBar.jsx'
import Searchbar from '@app/components/SearchBar.jsx'
import Bell from '@app/components/Bell'
import Messages from '@app/components/Messages'
import ProfileIcon from '@app/components/ProfileIcon'
import DropdownMenu from '@app/components/DropDown'


const page = () => {
  return (
    <section className='flex items-start w-full'>
      <Sidebar />
      <main className='px-6 my-6 w-full flex flex-col items-start gap-8'>
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
        <div className='flex items-center justify-between w-full'>
          <h1 className='title_text'>Billing</h1>
          <div className='flex items-center gap-3'>
            {/* <DropdownMenu /> */}
            <button className='primary_btn'>Add a New Bill</button>
          </div>
        </div>

        <table className='w-full shadow'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Appointment Date</th>
              <th>Patient</th>
              <th>Provider</th>
              <th>Billed</th>
              <th>Adjustment</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
      </main>
    </section>
  )
}

export default page