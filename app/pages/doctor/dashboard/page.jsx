import Sidebar from '@app/components/DoctorSideBar.jsx'
import Searchbar from '@app/components/SearchBar.jsx'
import Bell from '@app/components/Bell'
import Messages from '@app/components/Messages'
import ProfileIcon from '@app/components/ProfileIcon'
import LineChart from '@app/components/LineChart'
import Image from 'next/image'
import Link from 'next/link'
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
            <Link href='/pages/doctor/profile'>
              <ProfileIcon />
            </Link>
          </div>
        </div>
        <h1 className='title_text'>Dashboard</h1>
        <div className='doctor_dashboard_grid'>
          {/* Appointments */}
          <div className='doctor_grid_item grid_item_1'>
            <div className='flex items-center justify-between w-full'>
              <h2 className='big_text'>Appointments</h2>
              <button className='primary_btn'>Browse All</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Patient's Name</th>
                  <th>Type</th>
                  <th>Appointment</th>
                  <th>Account</th>
                  <th>Status</th>
                  <th>Doctor's Name</th>
                </tr>
              </thead>
            </table>
            <div className='flex-1 flex items-center justify-center w-full'>

              <h3 className='text-center text-[40px] font-[600] w-full'>No Data</h3>
            </div>
          </div>
          {/* Patients */}
          <div className='doctor_grid_item grid_item_2 relative'>
            <div className='flex items-center justify-between w-full'>
              <h2 className='big_text'>Patients</h2>
              {/* <button className='primary_btn'>Browse All</button> */}
            </div>
              <LineChart />
            {/* <div className='flex-1 flex items-center justify-center w-full'>

              <h3 className='text-center text-[40px] font-[600] w-full'>No Data</h3>
            </div> */}
          </div>
          {/* Labs */}
          <div className='doctor_grid_item grid_item_3'>
            <div className='flex items-center justify-between w-full'>
              <h2 className='big_text'>Labs</h2>
              <button className='primary_btn'>Browse All</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Test</th>
                  <th>Results</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </table>
            <div className='flex-1 flex items-center justify-center w-full'>

              <h3 className='text-center text-[40px] font-[600] w-full'>No Data</h3>
            </div>
          </div>
          {/* Billings */}
          <div className='doctor_grid_item grid_item_4'>
            <div className='flex items-center justify-between w-full'>
              <h2 className='big_text'>Billings</h2>
              <button className='primary_btn'>Browse All</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Patient</th>
                  <th>Claim ID</th>
                  <th>Billing Provider</th>
                  <th>Payer</th>
                  <th>Claim Amount</th>
                </tr>
              </thead>
            </table>
            <div className='flex-1 flex items-center justify-center w-full'>

              <h3 className='text-center text-[40px] font-[600] w-full'>No Data</h3>
            </div>
          </div>
        </div>

      </main>
    </section>
  )
}

export default page;