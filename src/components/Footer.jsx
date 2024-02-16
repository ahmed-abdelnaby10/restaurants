import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";


export default function Footer() {
    const currentRoute = useLocation().pathname
    return (
        <>
            <div className="flex items-center justify-between px-5 py-5 h-fit w-full max-w-640 text-sm font-semibold fixed bottom-0 left-1/2 -translate-x-1/2
            bg-white z-30">
                <Link to="/home" className={`${currentRoute.endsWith("home")? "text-txt-red" : "text-0D"} flex flex-col items-center justify-center w-fit h-fit gap-1`}>
                    <MdHomeFilled className="text-2xl"/>
                    Home
                </Link>
                <Link to="/home/explore" className={`${currentRoute.includes("explore")? "text-txt-red" : "text-0D"} flex flex-col items-center justify-center w-fit h-fit gap-1`}>
                    <IoSearchOutline className="text-2xl"/>
                    Search
                </Link>
                <Link to="/home/orders" className={`${currentRoute.includes("orders")? "text-txt-red" : "text-0D"} flex flex-col items-center justify-center w-fit h-fit gap-1`}>
                    <FiFileText className="text-2xl"/>
                    Orders
                </Link>
                <Link to="/account" className={`${currentRoute.includes("account")? "text-txt-red" : "text-0D"} flex flex-col items-center justify-center w-fit h-fit gap-1`}>
                    <FiUser className="text-2xl"/>
                    Account
                </Link>
            </div>
            
        </>
    )
}
