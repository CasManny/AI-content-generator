import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 text-white'>
      <h2 className='text-3xl font-bold'>Browse All Templates</h2>
      <p>What will you like to create today?</p>
      <div className='w-full flex justify-center items-center'>
        <div className="flex my-5 gap-2 items-center w-[50%] p-2 border rounded-md bg-white">
          <Search className='text-primary' />
          <input type="text" placeholder='Search' className='bg-transparent outline-none text-black' />
        </div>
      </div>
    </div>
  )
}

export default SearchSection