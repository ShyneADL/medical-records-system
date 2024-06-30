'use client'
import { useState } from 'react'

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
import { Doctors, Nurses, Patients } from '@app/components/UserData'

const page = () => {
  const [activePill, setActivePill] = useState('Patients');
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
        <Pill 
          first='Patients' second='Doctors' third='Nurses'
          activePill={activePill}
          setActivePill={setActivePill}
        />
          <button className='primary_btn'><p className='w-[128px]'>Add a New User</p></button>
        </div>

        {activePill === 'Patients' && (
          <table className='table_bg'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient's Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Phone No.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              
                {Patients.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.gender}</td>
                    <td>{data.age}</td>
                    <td>{data.phoneNumber}</td>
                    <td><div className='flex items-center gap-2'>
                      <button className='rounded-full border-solid border-[2px] border-green p-1 '>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00A859"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                      </button>
                      <button className='rounded-full border-solid border-[2px] border-[#ff0f0f] p-1 '>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff0f0f"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                      </button>
                      </div></td>
                  </tr>
                ))}
              
            </tbody>
          </table>
        )}

        {activePill === 'Doctors' && (
          <table className='table_bg'>
            <thead>
              <tr>
                <th>Doctor's Name</th>
                <th>ID</th>
                <th>Specialty</th>
              </tr>
            </thead>
            <tbody>
              
                {Doctors.map((data) => (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.id}</td>
                    <td>{data.specialty}</td>
                  </tr>
                ))}
              
            </tbody>
          </table>
        )}

        {activePill === 'Nurses' && (
          <table className='table_bg'>
            <thead>
              <tr>
                <th>Nurse's Name</th>
                <th>ID</th>
                <th>Department</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>
              
                {Nurses.map((data) => (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.id}</td>
                    <td>{data.department}</td>
                    <td>{data.experience}</td>
                  </tr>
                ))}
              
            </tbody>
          </table>
        )}
      </main>
    </section>
  )
}

export default page;