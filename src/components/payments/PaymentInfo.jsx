import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import { FaCheck } from 'react-icons/fa'
import { useDispatch } from "react-redux"
import { reversePay } from '../../rtk/slices/payment-slice';

export default function PaymentInfo() {
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)
    return (
        <>
            <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full pt-20 mb-10 px-5'>
                <Link to="/home/orders/payment/check-method" className='absolute left-5'><FaAngleLeft className="text-xl text-main"/></Link>
                <h2 className='text-0D font-semibold text-base tracking-wider'>My cards</h2>
            </div>
            <Cards />
            <div className='flex flex-col items-center mt-7 gap-7 px-5 pb-20'>
                <Link to="/home/orders" className='text-FB text-sm font-semibold tracking-wider bg-0D w-fit h-fit px-7 py-3 rounded-md' onClick={()=>{dispatch(reversePay(true))}}>Use this card</Link>
                <p className='text-9F text-sm font-semibold'>OR</p>
                <form onSubmit={(e)=> e.preventDefault()} className='flex gap-7 flex-col items-start w-full justify-start'>
                    <h2 className='text-main text-sm font-semibold uppercase self-center'>add new card</h2>
                    {/* card name */}
                    <input type="text" placeholder='Name on card' className='bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D placeholder:text-93 placeholder:tracking-wider text-xl focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-14 pl-2.5 text-0D' name='nameoncard' />
                    {/* card number */}
                    <input type="text" placeholder='Card number' className='bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D placeholder:text-93 placeholder:tracking-wider text-xl focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-14 pl-2.5 text-0D' name='cardnumber' />
                    <div className='flex items-center w-full h-fit gap-5'>
                    {/* card CVV */}
                        <input type="text" placeholder='CVV' className='bg-EB w-3/5 rounded-md border border-solid border-DE focus:outline-none caret-0D placeholder:text-93 placeholder:tracking-wider text-xl focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-14 pl-2.5 text-0D' name='CVV' />
                    {/* card EXP */}
                        <input type="text" placeholder='EXP' className='bg-EB w-2/5 rounded-md border border-solid border-DE focus:outline-none caret-0D placeholder:text-93 placeholder:tracking-wider text-xl focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-14 pl-2.5 text-0D' name='EXPdate' />
                    </div>
                    <div className='flex items-center justify-start w-full gap-5 relative'>
                        <input type="checkbox" className='checked:text-86 appearance-none border-2 border-solid border-86 rounded-md w-5 h-5' id='save' name='save' onChange={(e)=>{
                            e.currentTarget.checked ? setCheck(true) : setCheck(false)
                        }}/>
                        <FaCheck className={`${check? "text-86" : "text-transparent"} absolute top-1/2 -translate-y-1/2 left-1 text-xs`}/>
                        <label htmlFor="save" className="text-86 text-base font-semibold tracking-wider">Save card for later</label>
                    </div>
                    <Link to="/home/orders" className='bg-txt-red mx-auto w-full rounded-md text-white flex items-center justify-center h-12 text-base uppercase tracking-widest font-bold hover:bg-txt-red/80 duration-300' onClick={()=>{dispatch(reversePay(true))}}>Add card</Link>
                    <Link to="" className='w-full rounded-md border-2 border-solid border-black text-black flex items-center justify-center h-12 text-base tracking-widest font-bold'>SCAN CARD</Link>
                </form>
            </div>
        </>
    )
}
