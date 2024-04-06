import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex items-start justify-between w-full h-[100vh] relative p-20'>
			<div className='login_box my-20'>
				<div className="flex items-center justify-center w-full">
					<Image src='/assets/caleb-logo.png'
					alt='Caleb Logo'
					width={100}
					height={100}
					className=''
					/>
				</div>
				<h2 className="big_text">Sign Up</h2>
				<form className='mt-4'>
					<div className="user_box">
						<input type="text" name="" required="true"/>
						<label>Full Name</label>
					</div>
					<div className="user_box">
						<input type="email" name="" required="true"/>
						<label>Email Address</label>
					</div>
					<div className="user_box">
						<input type="text" name="" required="true"/>
						<label>ID</label>
					</div>
					<div className="user_box">
						<input type="password" name="" required="true"/>
						<label>Create Password</label>
					</div>
					<div className="user_box">
						<input type="password" name="" required="true"/>
						<label>Confirm Password</label>
					</div>
					<Link href='/'>
						<button className='primary_btn'>Sign Up</button>
					</Link>
				</form>
			</div>
		</div>

  )
}

export default page
