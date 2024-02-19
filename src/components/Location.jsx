import { TbCurrentLocation } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function Location() {
    return (
        <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-5 h-screen'>
            <h1 className="text-3xl text-0D font-bold">Find restaurants <br /><span className="text-txt-red">near you</span></h1>
            <p className='text-lg text-9F font-normal'>Simply enter your location and <br />explore a list of top-rated restaurants in the area.</p>
            <button className="h-12 w-full flex items-center justify-center border-2 border-solid border-txt-red rounded-lg text-txt-red font-semibold cursor-pointer">
                <TbCurrentLocation className="text-2xl mr-2"/>
                Use current location
            </button>
            <div className="h-12 w-full flex items-center justify-start pl-2.5 border-2 border-solid border-9F rounded-lg text-9F font-semibold cursor-pointer">
                <IoLocationOutline className="text-2xl mr-2"/>
                <input type="text" className="bg-transparent text-main caret-9F h-full w-full focus:outline-none" autoComplete="street-address" placeholder="Enter a new address" />
            </div>
            <Link to="/sign-in" className='bg-txt-red w-full rounded-md text-white flex items-center justify-center h-12 text-sm tracking-widest font-bold hover:bg-txt-red/80 duration-300 mt-10'>Finish</Link>
        </div>
    )
}
