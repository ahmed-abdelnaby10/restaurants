import { BsClockFill } from "react-icons/bs";
import { TbBike } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { featuredHotels } from "../utils/featuredHotels";
import Footer from "../Footer"
import { FaArrowLeft } from "react-icons/fa";

export default function FeaturedHotels() {
    const navigate = useNavigate()
    return (
        <div className="pt-5 px-5 pb-24 min-h-screen">  
            <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full mb-5'>
                <button onClick={()=>{navigate(-1)}} className='text-black absolute left-0'><FaArrowLeft/></button>
                <h2 className=''>Featured Hotels</h2>
            </div>
            <div className="grid grid-cols-grid-2 gap-x-2.5 gap-y-5">
                {
                    featuredHotels.map((res)=>{
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
                                    <p className="text-sm text-86 font-semibold">{res.descr}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}