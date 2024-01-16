import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function CheckPassword() {
    return (
        <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-20 h-800'>
            <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full'>
                <Link to="/sign-in" className='text-black absolute left-0'><FaArrowLeft/></Link>
                <h2 className=''>Forgot password</h2>
            </div>
            <div>
                <h1 className='text-0D text-3xl font-semibold mb-3'>Reset Link</h1>
                <p className='text-base text-86 pr-7'>Enter your email address and we will send you the reset link</p>
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className='tab:w-full'>
                <label htmlFor="mail" className='text-base font-semibold text-0D'>E-mail address</label>
                <input id='mail' name='email' autoComplete="email" type="email" placeholder='name@domain.com' className='bg-EB w-full 
                rounded-md border border-solid border-DE focus:outline-none caret-0D placeholder:text-93 text-xl 
                focus:placeholder:opacity-0 mt-2 placeholder:duration-300 placeholder:text-sm h-12 pl-2.5 text-0D'/>
                <Link to="/sign-in/check-password/check-email" className='bg-txt-red w-full rounded-md text-white flex items-center justify-center h-11 text-sm font-semibold hover:bg-txt-red/80 duration-300 mt-5 tracking-widest'>RESET PASSWORD</Link>
            </form>
        </div>
    )
}
