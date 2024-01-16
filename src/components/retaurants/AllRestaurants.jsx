import { allRestaurants } from "../utils/allRestaurants";
import { BsClockFill } from "react-icons/bs";
import { TbBike } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function AllRestaurants() {
    return (
        <div className="pt-20 tab:pb-20 px-5 pb-10">  
            <div className="w-full flex items-center justify-between mb-5">
                <div className="flex flex-col items-start gap-2">
                    <p className="text-sm text-txt-red font-medium">Deliver to</p>
                    <select name="address" id="address" className="w-fit -ml-1 focus:outline-none bg-transparent text-base text-black font-semibold">
                        <option value="address-1" className="text-base text-black font-semibold">Address-1</option>
                        <option value="address-1" className="text-base text-black font-semibold">Address-2</option>
                        <option value="address-1" className="text-base text-black font-semibold">Address-3</option>
                    </select>
                </div>
                <IoFilter className="text-2xl cursor-pointer"/>
            </div>
            <div className="grid grid-cols-grid-2 gap-x-2.5 gap-y-5">
                {
                    allRestaurants.map((res)=>{
                        return(
                            <div key={res.id} className="flex flex-col items-start justify-between gap-5" style={{height:"252px"}}>
                                <div className="flex flex-col items-center justify-end grow w-full rounded-lg bg-cover bg-center overflow-hidden" style={{backgroundImage:`url(${res.image})`}}>
                                    <div className="bg-4F/80 rounded-md flex flex-col items-start gap-1.5 mb-2 p-1.5 w-11/12">
                                        <div className="flex items-center self-start gap-1 text-EB text-xs font-semibold">
                                            <BsClockFill/>
                                            <span>{res.time} min</span>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-1 text-EB text-xs font-semibold">
                                                <TbBike/>
                                                <span>{res.delivery === "free"? "free" : `$${res.delivery}`}</span>
                                            </div>
                                            <div className='bg-txt-red text-EB text-xs rounded-md w-fit h-17 px-1.5 flex items-center'>
                                                <span className='text-star text-base mr-1.5'>&#9733;</span>{res.rate}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link preventScrollReset={false} to={`/home/all-restaurants/${res.title}`} className="text-base font-semibold text-black">{res.title}</Link>
                                    <p className="text-sm text-86 font-semibold">{res.season}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
