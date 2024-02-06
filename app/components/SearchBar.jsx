import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <form action='/search' method='GET'>
        <input type='text' name='query' placeholder='Search...' className='rounded-xl border-[1px] border-solid border-grey py-3 px-5'/>
        <button type='submit'>

        </button>

      </form>
    </div>
  )
}

export default SearchBar