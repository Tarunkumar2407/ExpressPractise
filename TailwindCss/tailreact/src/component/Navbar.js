import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-9'>
        <div className='text-2xl text-indigo-800 font-bold'>PW Skills</div>
        <div  >
            <ul className='md:flex hidden font-semibold'>
                <li className='mx-2 cursor-pointer'>HOME</li>
                <li className='mx-2 cursor-pointer'>CONTACT US</li>
                <li className='mx-2 cursor-pointer'>ABOUT US</li>
            </ul>
        </div>
        <div className='bg-indigo-700 p-2 hidden md:block text-white rounded font-bold cursor-pointer'>Login/SignUp</div>
        <div className='md:hidden'><a className='text-4xl font-bold' href="/">&#8801;</a></div>
      </nav>
    </div>
  )
}

export default Navbar
