'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!id.trim()) {
      setErrorMessage('Please enter a valid ID');
      return;
    }

    if (!password.trim()) {
      setErrorMessage('Please enter your password');
      return;
    }
  };

  return (
    <div className='flex items-start justify-between w-full h-[100vh] relative'>
      <div className='login_box'>
        <div className="flex items-center justify-center w-full">
          <Image src='/assets/caleb-logo.png'
            alt='Caleb Logo'
            width={100}
            height={100}
            className=''
          />
        </div>
        <h2 className="big_text">Login</h2>
        <form className='mt-4' onSubmit={handleSubmit}>
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
            <label>Password</label>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button type="submit" className='primary_btn'>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Page;