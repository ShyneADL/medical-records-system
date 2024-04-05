import DoctorProfileSidebar from '@app/components/DoctorProfileSidebar';
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <section className='flex items-start w-full'>
      <DoctorProfileSidebar />
      <main className='ml-[250px] px-12 my-6 w-full flex flex-col items-start gap-8'>
        <h1 className='big_text'>Security</h1>
        <form className='flex flex-col items-start gap-4 w-[85%]'>
          <div className='flex flex-col items-start gap-1 w-[40%]'>
            <label className='small_text' for='password'>Old Password</label>
            <input type='password' id='password' name='password' className='p-1  rounded-[8px] border-[2px] border-grey border-solid w-full input_text'/>
          </div>
          <div className='flex flex-col items-start gap-1 w-[40%]'>
            <label className='small_text' for='password'>New Password</label>
            <input type='password' id='password' name='password' className='p-1  rounded-[8px] border-[2px] border-grey border-solid w-full input_text'/>
          </div>
          <div className='flex flex-col items-start gap-1 w-[40%]'>
            <label className='small_text' for='cpassword'>Confirm New Password</label>
            <input type='password' id='cpassword' name='cpassword' className='p-1  rounded-[8px] border-[2px] border-grey border-solid w-full input_text'/>
          </div>
          <button className='primary_btn mt-4'>Save Changes</button>
        </form>
    </main>
    </section>
  )
}

export default page
