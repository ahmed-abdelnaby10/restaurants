import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";

export default function SignInForm() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-5 h-screen'>
            <div>
                <h1 className="text-3xl text-0D font-bold">Just<span className="text-txt-red ml-2">Sign in</span>,
                <br/>we’ll do the cooking</h1>
            </div>
            <p className='text-lg text-9F font-normal'>If you don’t have an <br /> account please<Link to="/sign-up" className="text-txt-red ml-2">
            Sign up here</Link></p>
            <form onSubmit={(e)=>{
                e.preventDefault()
                navigate("/home")
            }} className='w-full flex flex-col items-start gap-2.5 mb-10'>
                <div className='flex flex-col items-start gap-1 w-full'>
                    <label htmlFor="email" className='text-base text-0D'>E-mail address</label>
                    <div className='relative w-full h-fit'>
                        <input id='email' name='email' autoComplete="email" type="email" placeholder='name@domain.com' className='bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D placeholder:text-93 
                        focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-10 pl-2.5 text-0D'/>
                        <FaCheck className='text-mint-green absolute right-2.5 top-5'/>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-1 w-full'>
                    <label htmlFor="password" className='text-base text-0D'>Password</label>
                    <div className='relative w-full h-fit'>
                        <input id='password' name='password' autoComplete="email" type={show? "text": "password"} placeholder='******' maxLength={15} className='bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D 
                        placeholder:text-93 focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-10 pl-2.5 text-xl text-0D' />
                        {show?
                        <FaEye onClick={()=>{setShow(false)}} className='absolute right-2.5 top-3 text-0D cursor-pointer'/>
                        :<FaEyeSlash onClick={()=>{setShow(true)}} className='absolute right-2.5 top-3 text-93 cursor-pointer'/>
                        }
                    </div>
                </div>
                <Link to="/sign-in/check-password" className='text-0D text-base font-semibold self-end hover:text-black'>Forgot password?</Link>
                <input type="submit" value="SIGN IN" className='bg-txt-red w-full rounded-md text-white flex items-center justify-center h-12 text-sm tracking-widest font-bold hover:bg-txt-red/80 duration-300 mt-5' />
                <p className='text-lg text-0D self-center my-2.5'>Or</p>
                <button className='w-full rounded-md text-0D flex items-center justify-center h-12 text-base font-semibold hover:bg-txt-red/80 duration-300 border border-solid border-9F'><FcGoogle className='mr-2.5 text-xl'/>Connect with Google</button>
                <button className='w-full rounded-md text-0D flex items-center justify-center h-12 text-base font-semibold hover:bg-txt-red/80 duration-300 border border-solid border-9F'><RiFacebookCircleFill className='mr-2.5 text-xl text-facebook'/>Connect with Facebook</button>
            </form>
        </div>
    )
}
