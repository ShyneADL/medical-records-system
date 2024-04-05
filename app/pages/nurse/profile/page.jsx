import NurseProfileSidebar from '@app/components/NurseProfileSidebar';
import ProfileImage from '@app/components/ProfileImage';
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <section className='flex items-start w-full'>
      <NurseProfileSidebar />
      <main className='ml-[250px] px-12 my-6 w-full flex flex-col items-start gap-8'>
        <h1 className='big_text'>Profile Settings</h1>
        <form className='flex flex-wrap items-start gap-4 w-[85%]'>
          <div className='flex flex-col items-start gap-1 w-[40%]'>
            <label className='small_text' for='fname'>First Name</label>
            <input type='text' id='fname' name='fname' className='p-1  rounded-[8px] border-[2px] border-grey border-solid w-full input_text'/>
          </div>
          <div className='flex flex-col items-start gap-1 w-[40%]'>
            <label className='small_text' for='lname'>Last Name</label>
            <input type='text' id='lname' name='lname' className='p-1  rounded-[8px] border-[2px] border-grey border-solid w-full input_text'/>
          </div>
          <div className='flex flex-col items-start gap-1 w-[40%]'>
            <label className='small_text' for='email'>Email</label>
            <input type='email' id='email' name='email' className='p-1  rounded-[8px] border-[2px] border-grey border-solid w-full input_text'/>
          </div>
          <div className='flex flex-col items-start gap-1 w-[40%]'>
            <label className='small_text' for='number'>Phone Number</label>
            <input type='number' id='number' name='number' className='p-1  rounded-[8px] border-[2px] border-grey border-solid w-full input_text'/>
          </div>
          <ProfileImage />
          <div className='w-full'>
            <button className='primary_btn mt-5'>Save Changes</button>
          </div>
        </form>
      </main>
    </section>
  )
}

export default page;