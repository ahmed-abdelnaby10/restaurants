import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'


export default function EnterPhone() {
    const [value, setValue] = useState()
    return (
        <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-20 h-800'>
            <h1 className="text-3xl text-0D font-bold">Get started with Quick<span className="text-txt-red">Bite</span></h1>
            <p className='text-lg text-9F font-normal'>Enter your phone number to use<br />Quickbite and enjoy your food.</p>
            <form onSubmit={(e)=>e.preventDefault()} className='w-full flex flex-col items-start gap-2.5 mb-10'>
                <div className='flex flex-col items-start gap-2 w-full'>
                    <label className='text-base text-0D'>Phone number</label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        // defaultCountry="US"
                        international
                        countryCallingCodeEditable={false}
                    />
                </div>
                <Link to="/sign-up/complete-information/verify-number" className='bg-txt-red w-full rounded-md text-white flex items-center justify-center h-12 text-sm tracking-widest font-bold hover:bg-txt-red/80 duration-300 my-5'>SIGN UP</Link>
            </form>
        </div>
    )
}