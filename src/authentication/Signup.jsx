

import { useContext } from 'react'
import google_icon from '../assets/icons/google-icon.png'
import { toast, ToastContainer } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from './Auth'


const Signup = () => {

    const navigate = useNavigate()
    const { signupWithGoogle, signupWithPassword } = useContext(AuthContext)
    const location = useLocation()
    const path = location.state || '/'
    const handleGoogleSignup = () => {
        signupWithGoogle()
            .then(result => {
                toast.success('Signup successful!', {
                    position: "bottom-left",
                    autoClose: 2000,
                });
                setTimeout(() => {
                    navigate(path);
                }, 2500);
            })
            .catch(err => {
                toast.error();
                ('Invalied email', {
                    position: "bottom-left",
                    autoClose: 2000,
                });
            })
    }
    const handleSignup = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        signupWithPassword(email, password)
            .then(result => {
                toast.success('Signup successful!', {
                    position: "bottom-left",
                    autoClose: 2000,
                });
                setTimeout(() => {
                    navigate(path);
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
        <div>
            <ToastContainer />

            <div className="flex flex-col items-center justify-center max-w-[600px] px-3 sm:px-6 md:px-12 mx-auto">
                <h3 className='-mb-6 mt-3'>Signup</h3>
                <form onSubmit={handleSignup} className='w-full flex flex-col gap-4 border-[1px] px-8 py-8 md:py-12 border-gray-400 rounded-xl mt-10'>
                    <label htmlFor="name">
                        <span className='  ml-1'>Name :</span>
                        <input type="text" className='w-full border-[1px] border-gray-400 h-10 bg-transparent rounded-md px-4 tracking-wide ' placeholder='Enter your name' name='name' required />
                    </label>
                    <label htmlFor="name">
                        <span className='  ml-1'>Email :</span>
                        <input type="email" className='w-full border-[1px] border-gray-400 h-10 bg-transparent rounded-md px-4 tracking-wide ' placeholder='Enter your email' name='email' required />
                    </label>
                    <label htmlFor="name">
                        <span className='  ml-1'>Password :</span>
                        <input type="password" className='w-full border-[1px] border-gray-400 h-10 bg-transparent rounded-md px-4 tracking-wide ' placeholder='Enter your password' name='password' required />
                    </label>

                    <button type='submit' className='btn-info btn rounded-lg text-xl py-2 font-bold tracking-wider mt-3 active:scale-[.99]'>Signup</button>
                </form>

                <h6 className='text-2xl my-4'>OR</h6>

                {/* google signup  */}
                <div onClick={handleGoogleSignup} className='flex items-center gap-4 p-2 border-[1px] border-gray-400 rounded-full w-full justify-center cursor-pointer active:scale-x-[.99] hover:shadow-md'>
                    <img src={google_icon} className='w-[30px] h-[30px]' alt="" />
                    <p className='text-[1.1rem]'>Continue with google</p>
                </div>
            </div>
        </div>
    )
}

export default Signup