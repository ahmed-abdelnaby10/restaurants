import { FaAngleRight, FaUser } from "react-icons/fa6";
import { BiSolidLock } from "react-icons/bi";
import { TbCreditCardFilled } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer"
import { useDispatch } from "react-redux"
import { clearUserData } from "../../rtk/slices/userData-slice";
import Swal from "sweetalert2"

export default function Account() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className="px-5 pt-5 pb-24">
            <h1 className="text-main text-2xl font-bold">Account <span className="text-txt-red">Settings</span></h1>
            <p className="text-base text-86 font-semibold mb-10">Update your settings like notifications, payments, profile edit etc.</p>
            <div className="flex flex-col gap-5 items-start w-full">
                {/* General settings */}
                <Link to="/account/profile-information" className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <FaUser className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">Profile information</p>
                        <p className="text-86 text-sm">Change your account information</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </Link>
                <Link to="/account/change-password" className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <BiSolidLock className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">Change Password</p>
                        <p className="text-86 text-sm">Change your password</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </Link>
                <Link to="" className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <TbCreditCardFilled className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">Payment methods</p>
                        <p className="text-86 text-sm">Add your credit and debit cards</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </Link>
                <Link to="/account/location" className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <MdLocationPin className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">Location</p>
                        <p className="text-86 text-sm">Add or remove your delivery locations</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </Link>
                <Link to="" className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <BiSolidLock className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">Add social Account</p>
                        <p className="text-86 text-sm">Add facebook, Twitter etc</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </Link>
                <Link to="" className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <HiUsers className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">Refer to friends</p>
                        <p className="text-86 text-sm">Get Kes 199 for every refferal</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </Link>
                {/* notifications */}
                <h1 className="text-main text-base font-semibold my-7">NOTIFICATIONS</h1>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <HiUsers className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">SMS Notifications</p>
                        <p className="text-86 text-sm">For daily update you will get</p>
                    </div>
                    <div className="switch">
                        <label>
                            <input className="control appearance-none hidden" type="checkbox"/>
                            <div className="toggle relative"></div>
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <BiSolidLock className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">Push notifications</p>
                        <p className="text-86 text-sm">For daily update you will get</p>
                    </div>
                    <div className="switch">
                        <label>
                            <input className="control appearance-none hidden" type="checkbox"/>
                            <div className="toggle relative"></div>
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <HiUsers className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">Promotional Notifications</p>
                        <p className="text-86 text-sm">For daily update you will get</p>
                    </div>
                    <div className="switch">
                        <label>
                            <input className="control appearance-none hidden" type="checkbox"/>
                            <div className="toggle relative"></div>
                        </label>
                    </div>
                </div>
                {/* more settings */}
                <h1 className="text-main text-base font-semibold my-7">MORE</h1>
                <Link to="/account/rate-us" className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <FaStar className="text-2xl text-txt-red"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">Rate us</p>
                        <p className="text-86 text-sm">Rate us on Playstore or Appstore</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </Link>
                <Link to="/account/faq" className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <BsFillFileEarmarkTextFill className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">FAQ</p>
                        <p className="text-86 text-sm">Frequently asked questions</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </Link>
                <button 
                    className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full"
                    onClick={()=>{
                        Swal.fire({
                            title: "Are you sure to logout!",
                            confirmButtonText: "Yes",
                            showCancelButton: true,
                            cancelButtonText: "No"
                            
                        }).then((result)=>{
                            if (result.isConfirmed) {
                                navigate("/sign-in")
                                dispatch(clearUserData())
                            } else {
                                return false
                            }
                        })
                    }}
                >
                    <HiOutlineLogout className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <p className="text-0D text-base font-semibold block">Logout</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </button>
            </div>
            <Footer/>
        </div>
    )
}
