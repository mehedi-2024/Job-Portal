import { motion } from "motion/react"
import { Link, NavLink } from 'react-router-dom'
import navLogo from '../assets/icons/job.png'
import barLogo from '../assets/icons/menu.svg'
import closeLogo from '../assets/icons/close.svg'
import { useContext, useState } from 'react'
import { GoSignOut } from "react-icons/go";
import { AuthContext } from "../authentication/Auth"
import { toast, ToastContainer } from "react-toastify"

const Navbar = () => {

    const { hasUser, signout } = useContext(AuthContext)

    const [isOpenNav, setIsOpenNav] = useState(false)
    const [isOpenProfile, setIsOpenProfile] = useState(false)

    const handleSignOut = () => {
        signout()
            .then(result => {
                // toast.success('Signup successful!', {
                //     position: "",
                //     autoClose: 2000,
                // });
                setIsOpenProfile(false)
                setTimeout(() => {
                    navigate('/');
                }, 2500);
            })
            .catch(err => {
                toast.error('Unexpected reference error', {
                    position: "bottom-left",
                    autoClose: 2000,
                });
            })
    }
    return (
        <div className='w-full h-20 border flex items-center p-4 md:p-7 justify-between fixed top-0 left-0 z-50 backdrop-blur-lg'>
            <div>
                <img src={navLogo} className='w-14 h-14 md:w-16 md:h-16' alt="" />
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
                {
                    !hasUser ? <button className='btn btn-info'><Link to={'/signin'}>Login</Link></button> : <div>
                        <motion.button onClick={() => setIsOpenProfile(!isOpenProfile)} disabled={isOpenNav ? true : false} whileTap={{ scale: .9 }} whileHover={{ scale: 1.1 }} className="rounded-full mt-2">
                            <img src={'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg'} className="w-12 h-12 cursor-pointer rounded-full" alt="" />
                        </motion.button>

                        <div id='nav-sm' className={` flex flex-col justify-end items-center gap-2 fixed top-[79px] pt-10 px-4 w-[70vw] max-w-[300px] h-[50vh]  py-10 rounded-bl-lg shadow-md text-center duration-500 bg-white z-20 ${isOpenProfile ? 'right-0' : '-right-96'}`}>

                            <div className="flex-grow">
                                <img src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg" className="w-20 h-20 rounded-full block mx-auto mb-2" alt="" />
                                <h5>Sheikh Mehedi Hasan</h5>
                                <p className="text-sm opacity-80">Web developer</p>
                            </div>
                            <button onClick={handleSignOut} className="btn w-full btn-neutral flex items-center gap-4"><GoSignOut size={22} /> Sign Out</button>
                        </div>
                        <div onClick={() => setIsOpenProfile(false)} className={`${isOpenProfile ? 'w-screen h-screen bg-black/50 z-10 fixed top-[79px] left-0 duration-500' : 'duration-500'}`}></div>
                    </div>
                }



                <motion.button onClick={() => setIsOpenNav(!isOpenNav)} whileTap={{ scale: .7 }} whileHover={{ scale: 1.1 }} disabled={isOpenProfile ? true : false}><img className={`w-12 md:hidden cursor-pointer`} src={isOpenNav ? closeLogo : barLogo} alt="" /></motion.button>

            </div>
        </div>
    )
}

export default Navbar