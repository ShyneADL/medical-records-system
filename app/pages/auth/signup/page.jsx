'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }

    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      return;
    }

    if (!id.trim()) {
      setErrorMessage('Please enter your ID');
      return;
    }

    if (!password.trim()) {
      setErrorMessage('Please enter your password');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
  };

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
        <form className='mt-4' onSubmit={handleSubmit}>
          <div className="user_box">
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required={true}
            />
            <label>Full Name</label>
          </div>
          <div className="user_box">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <label>Email Address</label>
          </div>
          <div className="user_box">
            <input
              type="text"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required={true}
            />
            <label>ID</label>
          </div>
          <div className="user_box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <label>Create Password</label>
          </div>
          <div className="user_box">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
            />
            <label>Confirm Password</label>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          	<button type="submit" className='primary_btn'>Sign Up</button>
		  {/* <Link href='/pages/auth/login'>
		  </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Page;
