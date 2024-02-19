import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer"
import { FaArrowLeft } from "react-icons/fa";
import { food } from "../utils/food";

export default function Foods() {
    const navigate = useNavigate()
    return (
        <div className="pt-5 px-5 pb-24 min-h-screen">  
            <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full mb-5'>
                <button onClick={()=>{navigate(-1)}} className='text-black absolute left-0'><FaArrowLeft/></button>
                <h2 className=''>Foods</h2>
            </div>
            <div className="grid grid-cols-grid-2 gap-x-2.5 gap-y-5">
                {
                    food.map((res)=>{
                        return(
                            <div key={res.id} className="flex flex-col items-start justify-between gap-5" style={{height:"252px"}}>
                                <div className="flex flex-col items-center justify-end grow w-full rounded-lg bg-cover bg-center overflow-hidden" style={{backgroundImage:`url(${res.image})`}}>
                                </div>
                                <p className="text-base font-semibold text-black">{res.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}