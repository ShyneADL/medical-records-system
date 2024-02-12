"use client"
import React, {useState} from 'react'

function SearchBar({ onSearchChange }) { // Assume onSearchChange is passed from the server component
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value); // Notify parent about changes
  };
  return (
    <div>
      <form action='/search' method='GET'>
        <input 
        type="text"
        value={searchTerm}
        onChange={handleChange} 
        placeholder='Search...' 
        className='rounded-xl border-[1px] border-solid border-grey py-3 px-5'/>
        <button type='submit'>

        </button>

      </form>
    </div>
  )
}

export default SearchBar