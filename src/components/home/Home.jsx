import { IoFilter } from "react-icons/io5";
import OffersSlider from "./OffersSlider";
import { useState } from "react";
import FeaturedHotels from "./FeaturedHotels";
import Food from "./Food";
import PopularHotels from "./PopularHotels";

export default function Home() {
    const [offer, setOffer] = useState(false)
    return (
        <div className='bg-FB flex flex-col items-start gap-5 pt-20 tab:pb-20 pb-10'>
            <div className="w-full flex items-center justify-between px-5">
                <div className="flex flex-col items-start gap-2">
                    <p className="text-sm text-txt-red font-medium">Deliver to</p>
                    <select name="address" id="address" className="w-fit -ml-1 focus:outline-none bg-transparent text-base text-black font-semibold">
                        <option value="address-1">Address-1</option>
                        <option value="address-1">Address-2</option>
                        <option value="address-1">Address-3</option>
                    </select>
                </div>
                <IoFilter className="text-2xl cursor-pointer"/>
            </div>
            <div className={`${offer ? "hidden": "flex"} py-5 pl-5 rounded-2xl bg-pink flex-col items-start justify-between h-48 w-100 mx-auto`}>
                <p className="text-2xl font-bold text-main">You’ve earned your <br /> special offer!</p>
                <p className="text-sm font-medium text-6B">For ordering more than 4 times last <br /> month, you earn 40% off your next meal</p>
                <button  onClick={()=>{setOffer(true)}} className="text-main text-base font-bold w-fit border-b-2 border-solid border-txt-red">Claim now</button>
            </div>
            {
                offer? (<OffersSlider />): ""
            }
            <FeaturedHotels/>
            <Food/>
            <PopularHotels/>
        </div>
    )
}
