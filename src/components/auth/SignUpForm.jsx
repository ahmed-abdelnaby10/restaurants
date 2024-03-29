import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";

export default function SignUpForm() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const handleOnSubmit = (e)=> {
        e.preventDefault()
        navigate("/sign-up/complete-information")
    }
    return (
        <div className='bg-FB h-screen flex flex-col items-start p-5 gap-5'>
            <div>
                <h1 className="text-3xl text-0D font-bold">Let’s<span className="text-txt-red ml-2">Sign you up</span>,
                <br/>your meal awaits</h1>
            </div>
            <p className='text-lg text-9F font-normal'>If you have an<br /> account please<Link to="/sign-in" className="text-txt-red ml-2">
            Sign in here</Link></p>
            <form onSubmit={(e)=>{handleOnSubmit(e)}} className='w-full flex flex-col items-start gap-2.5'>
                <div className='flex flex-col items-start gap-1 w-full'>
                    <label htmlFor="name" className='text-base text-0D'>Full name</label>
                    <div className='relative w-full h-fit'>
                        <input id='name' name='name' autoComplete="name" type="text" placeholder='Ahmed' className='bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D placeholder:text-93 text-xl 
                        focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-10 tab:h-12 pl-2.5 text-0D'/>
                        <FaCheck className='text-mint-green absolute right-2.5 top-5'/>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-1 w-full'>
                    <label htmlFor="email" className='text-base text-0D'>E-mail address</label>
                    <div className='relative w-full h-fit'>
                        <input id='email' name='email' autoComplete="email" type="email" placeholder='name@domain.com' className='bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D placeholder:text-93 text-xl 
                        focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-10 tab:h-12 pl-2.5 text-0D'/>
                        <FaCheck className='text-mint-green absolute right-2.5 top-3 tab:top-4"'/>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-1 w-full'>
                    <label htmlFor="password" className='text-base text-0D'>Password</label>
                    <div className='relative w-full h-fit'>
                        <input id='password' name='password' autoComplete="email" type={show? "text": "password"} placeholder='******' maxLength={15} className='bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D 
                        placeholder:text-93 focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-10 tab:h-12 pl-2.5 text-xl text-0D' />
                        {show?
                        <FaEye onClick={()=>{setShow(false)}} className='absolute right-2.5 top-3 tab:top-4 text-0D cursor-pointer'/>
                        :<FaEyeSlash onClick={()=>{setShow(true)}} className='absolute right-2.5 top-3 tab:top-4 text-93 cursor-pointer'/>
                        }
                    </div>
                </div>
                <button type='submit' className='bg-txt-red w-full rounded-md text-white flex items-center justify-center h-12 text-sm tracking-widest font-bold hover:bg-txt-red/80 duration-300'>SIGN UP</button>
                <p className='text-sm font-semibold text-0D self-center'>Or connect with</p>
                <div className="w-full flex items-center justify-between tab:gap-2.5 tab:mt-2.5">
                    <button className="w-152 tab:w-full rounded-md text-0D flex items-center justify-center h-12 text-base font-semibold duration-300 border-2 border-solid border-9F">
                        <FcGoogle className="mr-2.5 text-xl" />
                        Google
                    </button>
                    <button className="w-152 tab:w-full rounded-md text-0D flex items-center justify-center h-12 text-base font-semibold duration-300 border-2 border-solid border-9F">
                        <RiFacebookCircleFill className="mr-2.5 text-xl text-facebook" />
                        Facebook
                    </button>
                </div>
                <p className='text-86 text-sm font-medium self-center text-center m-0'>
                By signing up, you have agreed to our <br/>
                <Link to="" className='text-baby-blue text-sm font-medium'>Terms and conditions</Link> &amp; <Link to="" className='text-baby-blue'>Privacy policy</Link>
                </p>
            </form>
        </div>
    )
}
