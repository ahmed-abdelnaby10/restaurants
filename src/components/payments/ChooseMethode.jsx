import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import paypal from "../../assests/payment/paypal.png"
import master from "../../assests/payment/master.png"
import visa from "../../assests/payment/visa.png"
import gpay from "../../assests/payment/gpay.png"
import Footer from "../Footer"

export default function ChooseMethode() {
    return (
        <div className="pt-5 min-h-screen flex flex-col items-start px-5">
            <Link to="/home/orders"><FaAngleLeft className="text-xl text-main"/></Link>
            <h1 className="text-0D text-2xl font-bold mt-7 mb-10">
                You are almost <br /> there...<span className="text-txt-red">Choose</span> your <br /> payment method
            </h1>
            <div className="flex flex-col items-start w-full gap-5">
                <div className="flex items-center justify-between w-full border-b-2 border-solid border-F2 pb-5">
                    <Link to="/home/orders/payment/check-method" className="flex items-center justify-center w-20 h-8 rounded-md border-2 border-solid border-DB"><img src={paypal} alt="Paypal" className="w-5 h-5"/></Link>
                    <Link to="/home/orders/payment/check-method" className="w-full ml-5 text-main text-lg font-semibold">Paypal</Link>
                    <FaAngleRight className="text-xl text-main"/>
                </div>
                <div className="flex items-center justify-between w-full border-b-2 border-solid border-F2 pb-5">
                    <Link to="/home/orders/payment/check-method" className="flex items-center justify-center w-20 h-8 rounded-md border-2 border-solid border-DB"><img src={master} alt="Mastercard" className="w-5 h-5"/></Link>
                    <Link to="/home/orders/payment/check-method" className="w-full ml-5 text-main text-lg font-semibold">Mastercard</Link>
                    <FaAngleRight className="text-xl text-main"/>
                </div>
                <div className="flex items-center justify-between w-full border-b-2 border-solid border-F2 pb-5">
                    <Link to="/home/orders/payment/check-method" className="flex items-center justify-center w-20 h-8 rounded-md border-2 border-solid border-DB"><img src={visa} alt="Visa" className="w-8 h-3"/></Link>
                    <Link to="/home/orders/payment/check-method" className="w-full ml-5 text-main text-lg font-semibold">Visa</Link>
                    <FaAngleRight className="text-xl text-main"/>
                </div>
                <div className="flex items-center justify-between w-full border-b-2 border-solid border-F2 pb-5">
                    <Link to="/home/orders/payment/check-method" className="flex items-center justify-center w-20 h-8 rounded-md border-2 border-solid border-DB"><img src={gpay} alt="googlepay" className="w-9 h-3.5"/></Link>
                    <Link to="/home/orders/payment/check-method" className="w-full ml-5 text-main text-lg font-semibold">Google pay</Link>
                    <FaAngleRight className="text-xl text-main"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
