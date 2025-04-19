import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import navLogo from '../../assets/icons/navLogo.png'
import upArrow from '../../assets/icons/upArrow.svg'
import menus from '../../assets/icons/menu.svg'

const Navbar = () => {
    const [isShowFIndJob, setIsShowFIndJob] = useState(false)
    const [isShowRecruiters, setIsShowRecruiters] = useState(false)
    const [isShowCandidates, setIsShowCandidates] = useState(false)
    const [isShowPages, setIsShowPages] = useState(false)
    const [isShowBlog, setIsShowBlog] = useState(false)
    const [isShowNav, setIsShowNav] = useState(false)
    return (
        <div className='flex justify-between items-center'>
            {/* logo */}
            <div className='flex items-center'>
                <img className='w-[72px] inline' src={navLogo} alt="Logo" />
                <h4 className='-m-[8px]'>JobSearch</h4>
            </div>

            {/* menu */}
            <div className='relative'>
                <div onClick={() => setIsShowNav(!isShowNav)} className='mr-4 text-gray-700 cursor-pointer font-black text-4xl z-10'>{isShowNav ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}</div>

                <nav className={`absolute right-0 duration-300 top-16 bg-gray-800 text-gray-200 shadow-xl rounded-lg   ${isShowNav ? 'w-[80vw] max-h-[85vh] p-6 overflow-auto' : 'w-0 h-0 p-0 overflow-hidden'}`}>
                    {/* Home  */}
                    <div className='flex hover:bg-black rounded-[8px]'>
                        <NavLink to={'/'}>Home</NavLink>
                    </div>
                    {/* Find A Job */}
                    <div className=''>
                        <p className='cursor-pointer flex items-center justify-between' onClick={() => setIsShowFIndJob(!isShowFIndJob)}>Find A Job <span className=''><img src={upArrow} className={`duration-300 ${isShowFIndJob ? '' : 'rotate-[180deg]'}`} alt="" /></span></p>

                        <div className={`grid duration-300 ${isShowFIndJob ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className={`flex-col flex pl-4 overflow-hidden`}>
                                <NavLink to={'/'}>Jobs Grid</NavLink>
                                <NavLink to={'/'}>Jobs List</NavLink>
                                <NavLink to={'/'}>Jobs Details</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Recruiters */}
                    <div className=''>
                        <p className='cursor-pointer flex items-center justify-between' onClick={() => setIsShowRecruiters(!isShowRecruiters)}>Recruiters <span className=''><img src={upArrow} className={`duration-300 ${isShowRecruiters ? '' : 'rotate-[180deg]'}`} alt="" /></span></p>

                        <div className={`grid duration-300 ${isShowRecruiters ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className={`flex-col flex pl-4 overflow-hidden`}>
                                <NavLink to={'/'}>Recruiters</NavLink>
                                <NavLink to={'/'}>Company Detailst</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Candidates */}
                    <div className=''>
                        <p className='cursor-pointer flex items-center justify-between' onClick={() => setIsShowCandidates(!isShowCandidates)}>Candidates <span className=''><img src={upArrow} className={`duration-300 ${isShowCandidates ? '' : 'rotate-[180deg]'}`} alt="" /></span></p>

                        <div className={`grid duration-300 ${isShowCandidates ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className={`flex-col flex pl-4 overflow-hidden`}>
                                <NavLink to={'/'}>Candidates Grid</NavLink>
                                <NavLink to={'/'}>Company Details</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Pages */}
                    <div className=''>
                        <p className='cursor-pointer flex items-center justify-between' onClick={() => setIsShowPages(!isShowPages)}>Pages <span className=''><img src={upArrow} className={`duration-300 ${isShowPages ? '' : 'rotate-[180deg]'}`} alt="" /></span></p>

                        <div className={`grid duration-300 ${isShowPages ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className={`flex-col flex pl-4 overflow-hidden`}>
                                <NavLink to={'/'}>About Us</NavLink>
                                <NavLink to={'/'}>Pricing Plan</NavLink>
                                <NavLink to={'/'}>Contact Us</NavLink>
                                <NavLink to={'/'}>Register</NavLink>
                                <NavLink to={'/'}>Signin</NavLink>
                                <NavLink to={'/'}>Reset Password</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Blog  */}
                    <div className=''>
                        <p className='cursor-pointer flex items-center justify-between' onClick={() => setIsShowBlog(!isShowBlog)}>Blog <span className=''><img src={upArrow} className={`duration-300 ${isShowBlog ? '' : 'rotate-[180deg]'}`} alt="" /></span></p>

                        <div className={`grid duration-300 ${isShowBlog ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className={`flex-col flex pl-4 overflow-hidden`}>
                                <NavLink to={'/'}>About Us</NavLink>
                                <NavLink to={'/'}>Pricing Plan</NavLink>
                                <NavLink to={'/'}>Contact Us</NavLink>
                                <NavLink to={'/'}>Register</NavLink>
                                <NavLink to={'/'}>Signin</NavLink>
                                <NavLink to={'/'}>Reset Password</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Contact  */}
                    <div className='flex hover:bg-black rounded-[8px]'>
                        <NavLink to={'/'}>Contact</NavLink>
                    </div>
                    {/* hr  */}
                    <div className='w-full h-[1px] bg-gray-500 my-5'></div>

                    {/* Your Account  */}
                    <div>
                        <h5>Your Account</h5>

                        <div className='flex flex-col'>
                            <NavLink to={''}>Profile</NavLink>
                            <NavLink to={''}>Work Preferences</NavLink>
                            <NavLink to={''}>Account Setting</NavLink>
                            <NavLink to={''}>Go Pro</NavLink>
                            <NavLink to={''}>Sign Out</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar