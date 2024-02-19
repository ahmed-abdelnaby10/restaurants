import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function VerifyNumber() {
    return (
        <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-5 h-screen'>
            <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full'>
                <Link to="/sign-up/complete-information" className='text-black absolute left-0'><FaArrowLeft/></Link>
                <h2 className=''>Verify number</h2>
            </div>
            <div>
                <h1 className='text-0D text-3xl font-semibold mb-3'>Verify <br /> phone number</h1>
                <p className='text-base text-86 pr-7 mb-3'>Enter the 4-Digit code code sent to you <br /> on +254 702552541</p>
                <p className='text-86 text-base'>Didn’t receive? <span className='ml-2 text-txt-red'>Send again</span> </p>
            </div>
            <div className='flex flex-col w-full items-center'>
                <form className='w-full flex items-center justify-center gap-2.5 my-5'>
                    <input type="text" maxLength={1} className=' bg-transparent border-b-2 border-solid border-86 w-10 focus:outline-none caret-86' />
                    <input type="text" maxLength={1} className=' bg-transparent border-b-2 border-solid border-86 w-10 focus:outline-none caret-86' />
                    <input type="text" maxLength={1} className=' bg-transparent border-b-2 border-solid border-86 w-10 focus:outline-none caret-86' />
                    <input type="text" maxLength={1} className=' bg-transparent border-b-2 border-solid border-86 w-10 focus:outline-none caret-86' />
                </form>
                <Link to="" className= {`bg-txt-red w-full rounded-md text-white flex items-center justify-center h-11 text-sm font-semibold duration-300 mt-5 tracking-widest activ`}>RESEND LINK</Link>
                <Link to="/sign-up/complete-information/location" className= {`bg-txt-red w-full rounded-md text-white flex items-center justify-center h-11 text-sm font-semibold duration-300 mt-5 tracking-widest activ`}>Verify</Link>
            </div>
        </div>
    )
}
