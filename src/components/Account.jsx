import { FaAngleRight, FaUser } from "react-icons/fa6";
import { BiSolidLock } from "react-icons/bi";
import { TbCreditCardFilled } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Account() {
    return (
        <div className="px-5 pt-20">
            <h1 className="text-main text-2xl font-bold">Account <span className="text-txt-red">Settings</span></h1>
            <p className="text-base text-86 font-semibold mb-10">Update your settings like notifications, payments, profile edit etc.</p>
            <div className="flex flex-col gap-5 items-start w-full">
                {/* General settings */}
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <FaUser className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">Profile information</Link>
                        <p className="text-86 text-sm">Change your account information</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <BiSolidLock className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">Change Password</Link>
                        <p className="text-86 text-sm">Change your password</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <TbCreditCardFilled className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">Payment methods</Link>
                        <p className="text-86 text-sm">Add your credit and debit cards</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <MdLocationPin className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">Location</Link>
                        <p className="text-86 text-sm">Add or remove your delivery locations</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <BiSolidLock className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">Add social Account</Link>
                        <p className="text-86 text-sm">Add facebook, Twitter etc</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <HiUsers className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">Refer to friends</Link>
                        <p className="text-86 text-sm">Get Kes 199 for every refferal</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </div>
                {/* notifications */}
                <h1 className="text-main text-base font-semibold my-7">NOTIFICATIONS</h1>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <HiUsers className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">SMS Notifications</Link>
                        <p className="text-86 text-sm">For daily update you will get</p>
                    </div>
                    <div class="switch">
                        <label>
                            <input className="control appearance-none hidden" type="checkbox"/>
                            <div className="toggle relative"></div>
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <BiSolidLock className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">Push notifications</Link>
                        <p className="text-86 text-sm">For daily update you will get</p>
                    </div>
                    <div class="switch">
                        <label>
                            <input className="control appearance-none hidden" type="checkbox"/>
                            <div className="toggle relative"></div>
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <HiUsers className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">Promotional Notifications</Link>
                        <p className="text-86 text-sm">For daily update you will get</p>
                    </div>
                    <div class="switch">
                        <label>
                            <input className="control appearance-none hidden" type="checkbox"/>
                            <div className="toggle relative"></div>
                        </label>
                    </div>
                </div>
                {/* more settings */}
                <h1 className="text-main text-base font-semibold my-7">MORE</h1>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <FaStar className="text-2xl text-txt-red"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">Rate us</Link>
                        <p className="text-86 text-sm">Rate us on Playstore or Appstore</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <BsFillFileEarmarkTextFill className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">FAQ</Link>
                        <p className="text-86 text-sm">Frequently asked questions</p>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </div>
                <div className="flex items-center justify-between gap-5 pb-5 border-b-2 border-solid border-F2 w-full">
                    <HiOutlineLogout className="text-2xl text-main"/>
                    <div className="w-3/4">
                        <Link className="text-0D text-base font-semibold block">Logout</Link>
                    </div>
                    <FaAngleRight className="text-xl text-black"/>
                </div>
            </div>
        </div>
    )
}
