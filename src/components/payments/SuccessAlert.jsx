import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { reversePay } from '../../rtk/slices/payment-slice'

export default function SuccessAlert() {
    const dispatch = useDispatch()
    const paymentState = useSelector((state)=> state.pay)
    return (
        <div className={`${paymentState? "flex" : "hidden"} absolute px-5 left-0 top-0 w-full h-950 z-20 bg-86/60 items-center justify-center`}>
            <div className="w-100 top-1/3 bg-F6 px-5 py-7 flex items-start gap-2.5 fixed rounded-lg">
                <div className="flex items-center justify-center w-16 h-6 rounded-md bg-txt-red text-white text-xs"><FaCheck/></div>
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-0D text-xl font-semibold">Success</h1>
                    <p className="text-86 text-sm">Eget pellentesque venenatis in pretium tellus. Ultrices amet elit tortor integer ullamcorper. Purus.</p>
                    <Link to="/home" className="text-txt-red text-base font-semibold">Continue Shopping</Link>
                </div>
                <FaXmark className="text-4xl -mt-1.5 text-black" onClick={()=>{dispatch(reversePay(false))}}/>
            </div>
        </div>
    )
}
