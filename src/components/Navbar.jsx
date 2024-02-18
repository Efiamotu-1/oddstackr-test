import React from 'react'
import Logo from '../assets/test.png'
import MenuIcon from '../assets/Buttons.png'
import SearchIcon from '../assets/Search-icon.png'
import ProfileIcon from '../assets/profile-icon.png'

function Navbar() {
  return (
    <div className='flex justify-between md:grid md:grid-cols-3 items-center '>
        <img src={Logo} alt="app-logo" className='content-end'/> 
        <div className='flex items-center justify-self-center bg-white rounded-full w-1/2 md:w-fit px-3 py-2 gap-1'>
            <img src={SearchIcon} alt="" />
            <input type="text" name="" id="" className='bg-transparent outline-none' placeholder='search projects' />
        </div>
        <div className='flex justify-end'>
            <img src={MenuIcon} alt="menu-icon" className='md:hidden'/>
            <div className='flex gap-3 hidden md:flex items-center'>

                <p className='text-[#100033] font-bold'>Launch Project</p>
                <div className='btn bg-[#5404FF] flex  gap-1'>
                    <img src={ProfileIcon} alt="profile icon" />
                    <p>Profile</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar