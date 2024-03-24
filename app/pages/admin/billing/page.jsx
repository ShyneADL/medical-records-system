import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@app/components/AdminSideBar.jsx'
import Searchbar from '@app/components/SearchBar.jsx'
import Bell from '@app/components/Bell'
import Messages from '@app/components/Messages'
import ProfileIcon from '@app/components/ProfileIcon'
import DropdownMenu from '@app/components/DropDown'
import DateBox from '@app/components/DateBox'


const page = () => {
  return (
    <section className='flex items-start w-full'>
      <Sidebar />
      <main className='ml-[250px] px-6 my-6 w-full flex flex-col items-start gap-8'>
      <div className='w-full flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Searchbar />
            <DateBox />
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
            <button className='primary_btn shadow'>Add a New Bill</button>
          </div>
        </div>

        <table className='w-full'>
          <thead>
            <tr>
              <th>Patient</th>
              <th>ID</th>
              <th>Appointment Date</th>
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