import { motion } from "motion/react"
import { NavLink } from 'react-router-dom'
import navLogo from '../assets/icons/job.png'
import barLogo from '../assets/icons/menu.svg'
import closeLogo from '../assets/icons/close.svg'
import { useState } from 'react'

const Navbar = () => {

    const [isOpenNav, setIsOpenNav] = useState(false)
    return (
        <div className='w-full h-20 border flex items-center p-7 justify-between fixed top-0 left-0 z-50 backdrop-blur-lg'>
            <div>
                <img src={navLogo} className='w-16 h-16' alt="" />
            </div>

            {/* menu st */}
            <div>
                <div className='md:flex gap-10 hidden'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/'}>All Jobs</NavLink>
                    <NavLink to={'/'}>About Us</NavLink>
                    <NavLink to={'/'}>Blog</NavLink>
                    <NavLink to={'/'}>Contact</NavLink>
                </div>

                <div id='nav-sm' className={`md:hidden flex flex-col gap-2 fixed top-[79px] pt-10 px-4 w-[70vw] max-w-[300px] h-screen shadow-md text-center duration-500 bg-white z-20 ${isOpenNav ? 'right-0' : '-right-96'}`}>
                   
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/'}>All Jobs</NavLink>
                    <NavLink to={'/'}>About Us</NavLink>
                    <NavLink to={'/'}>Blog</NavLink>
                    <NavLink to={'/'}>Contact</NavLink>
                </div>
                <div onClick={() => setIsOpenNav(false)} className={`${isOpenNav ? 'w-screen h-screen bg-black/50 z-10 fixed top-[79px] left-0 md:hidden duration-500' : 'duration-500'}`}></div>
            </div>
            {/* menu end */}

            <div className='flex gap-4 items-center'>
                <button className='btn btn-info'>Login</button>
                <motion.img whileTap={{ scale: .7 }} onClick={() => setIsOpenNav(!isOpenNav)} className='w-12 md:hidden cursor-pointer' src={isOpenNav ? closeLogo : barLogo} alt="" />
            </div>
        </div>
    )
}

export default Navbar