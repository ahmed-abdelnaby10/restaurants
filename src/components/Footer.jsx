import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Footer() {
    const [search, setSearch] = useState(false)
    return (
        <>
            <div className="flex items-center justify-between px-5 py-5 h-fit w-full max-w-640 text-0D text-sm font-semibold fixed bottom-0 left-1/2 -translate-x-1/2
            bg-white z-30">
                <Link to="/home" className="flex flex-col items-center justify-center w-fit h-fit gap-1">
                    <MdHomeFilled className="text-2xl"/>
                    Home
                </Link>
                <button className="flex flex-col items-center justify-center w-fit h-fit gap-1" onClick={()=>{
                    setSearch(true)
                }}>
                    <IoSearchOutline className="text-2xl"/>
                    Search
                </button>
                <Link to="/home/orders" className="flex flex-col items-center justify-center w-fit h-fit gap-1">
                    <FiFileText className="text-2xl"/>
                    Orders
                </Link>
                <Link to="/account" className="flex flex-col items-center justify-center w-fit h-fit gap-1">
                    <FiUser className="text-2xl"/>
                    Account
                </Link>
                
            </div>
            <div className={`${search ? "flex" : "hidden"} absolute top-0 left-0 h-full w-full bg-F6 z-20 px-5 flex-col items-center pt-20 gap-5 duration-300`}>
                <div className="flex items-center justify-between w-full">
                    <label htmlFor="search" className="text-xl font-bold text-main">Search for meals!</label>
                    <button className='text-txt-red text-base font-semibold' onClick={()=>{
                        setSearch(false)
                    }}>Cancel</button>
                </div>
                <div className="w-full flex items-center gap-5">
                    <input id="search" type="search" className="w-full h-12 rounded-lg pl-3 pr-2.5 text-xl focus:outline-none caret-50 text-50 relative placeholder:text-sm placeholder:font-medium" placeholder="Enter your fav meal"/>
                    <button className="w-fit h-full flex items-center text-0D text-3xl cursor-pointer hover:text-50 duration-300"><IoSearchSharp/></button>
                </div>
            </div>
        </>
    )
}
