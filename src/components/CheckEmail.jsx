import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom'

export default function CheckEmail() {
    const [active, setActive] = useState(false)
    let [counter, setCounter] = useState(5)
    function countDown(num){
        if (num > 0) {
            num--
            setCounter(num)
        }
        else{
            setCounter(0)
        }
    }
    useEffect(()=>{
        let timer = setInterval(() => {
            countDown(counter)
        }, 1000);
        if (counter === 0) {
            clearInterval(timer)
            setActive(true)
        }else{
            setActive(false)
        }
    },[counter])
    return (
        <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-20 h-800'>
            <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full'>
                <Link to="/sign-in/check-password" className='text-black absolute left-0'><FaArrowLeft/></Link>
                <h2 className=''>Forgot password</h2>
            </div>
            <div>
                <h1 className='text-0D text-3xl font-semibold mb-3'>Check your mail</h1>
                <p className='text-base text-86 pr-7 mb-3'>We have just sent a instructions email to name@domain.com.</p>
                <p className='text-txt-red text-base'>Having a problem?</p>
            </div>
            <div className='flex flex-col w-full items-center'>
                <p>Resend in:<span id='counter' className='font-semibold ml-2.5'>{counter}</span></p>
                <Link to="/sign-in/check-password/check-email" className= {`${active? "bg-txt-red" : "bg-txt-red/50"} w-full rounded-md text-white flex items-center justify-center h-11 text-sm font-semibold duration-300 mt-5 tracking-widest activ`}>RESEND LINK</Link>
            </div>
        </div>
    )
}
