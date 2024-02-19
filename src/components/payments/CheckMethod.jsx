import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import card from "../../assests/payment/card-shape.png"
import shape1 from "../../assests/payment/shape-1.png"
import shape2 from "../../assests/payment/shape-2.png"
import Footer from "../Footer"

export default function CheckMethod() {
    return (
        <div className="pt-5 min-h-screen flex flex-col items-start px-5 pb-24">
            <Link to="/home/orders/payment"><FaAngleLeft className="text-xl text-main"/></Link>
            <h1 className="text-0D text-2xl font-bold mt-7 mb-5">
                <span className="text-txt-red">Oops</span>, Seems you don’t <br /> have any cards yet. Let’s  <br /> quickly add one for you.
            </h1>
            <div className="w-full h-fit relative flex items-center justify-center my-20">
                <img src={card} alt="redCardshape" className="w-5/12 z-10" />
                <img src={shape1} alt="shape" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"/>
                <img src={shape2} alt="circle" className="absolute top-7 right-16 w-3"/>
                <img src={shape2} alt="circle" className="absolute -bottom-3.5 left-16"/>
            </div>
            <Link to="/home/orders/payment/information" className='w-full rounded-md border-2 border-solid border-black mt-10 text-black flex items-center justify-center h-12 text-sm tracking-widest font-bold'>ADD CREDIT CARD</Link>
            <Footer/>
        </div>
    )
}
