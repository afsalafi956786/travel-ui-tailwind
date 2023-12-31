import React, { useEffect, useState } from 'react'
import {BsChatSquareDots} from 'react-icons/bs'
import {FaFacebook,FaTwitter,FaGooglePlusG,FaInstagram,FaBars} from 'react-icons/fa'


function Navbar() {
    const [nav,setnav]=useState(false)
    const handleNav=()=>{
        setnav(!nav)
    }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80 '>
        <ul className='hidden sm:flex px-4'>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#gallery">Gallery</a>
            </li>
            <li>
                <a href="#deals">Deals</a>
            </li>
            <li>
                <a href="#contact">Contacts</a>
            </li>
        </ul>

        <div className='flex justify-between'>
            <FaFacebook className='mx-4'/>
            <FaTwitter className='mx-4'/>
            <FaGooglePlusG className='mx-4'/>
            <FaInstagram className='mx-4'/>
        </div>

        {/* Hamburger icon */}
        <div onClick={handleNav} className='sm:hidden z-10'>
            <FaBars size={30} className='mr-4 cursor-pointer'/>
        </div>

        {/* mobile menu */}
        <div onClick={handleNav} className={nav ? 'overflow-y-hidden w-full md:hidden ease-in duration-300 text-gray-300 absolute left-0 top-0 h-screen bg-black/90 px-4 py-4 flex-col'
         :'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
            <ul className='h-full w-full text-center pt-12'>
            <li className='text-2xl py-8'>
                <a href="/">Home</a>
            </li>
            <li className='text-2xl py-8'>
                <a href="#gallery">Gallery</a>
            </li>
            <li className='text-2xl py-8'>
                <a href="#deals">Deals</a>
            </li>
            <li className='text-2xl py-8'>
                <a href="#contact">Contacts</a>
            </li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar