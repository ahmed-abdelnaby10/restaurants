import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer"
import { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'

export default function ProfileInfo() {
    const [toggle, setToggle] = useState(0)
    const [show, setShow] = useState(false)
    const [newUsername, setNewUsername] = useState("")
    const updateToggle = (id)=> {
        setToggle(id)
    }
    const navigate = useNavigate()
    return (
        <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-5 pb-24 min-h-screen'>
            <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full'>
                <button onClick={()=>{navigate(-1)}} className='text-black absolute left-0'><FaArrowLeft/></button>
                <h2 className=''>Profile Information</h2>
            </div>
            <ul className="w-full flex flex-col divide-y divide-solid divide-F2 mt-10">
                <li className="flex items-center justify-between w-full pb-3">
                    <div>
                        <p className={`text-lg cursor-pointer font-semibold duration-300 ${toggle === 1 ? "text-txt-red" : "text-main"}`} onClick={()=>{
                            if (toggle !== 1) {
                                updateToggle(1)
                                setShow(false)
                            }else {
                                updateToggle(0)
                            }
                        }}>Username</p>
                    </div>
                    <FaAngleRight className={`${toggle === 1 ? "rotate-90" : ""} ${toggle === 1 ? "text-txt-red" : "text-main"} text-xl duration-300 cursor-pointer`} onClick={()=>{
                        if (toggle !== 1) {
                            updateToggle(1)
                            setShow(false)
                        }else {
                            updateToggle(0)
                        }
                    }}/>
                </li>
                <li className={`${toggle === 1 ? "flex" : "hidden"} w-full py-3 flex-col`}>
                    <div className="flex items-center justify-between">
                        <p className="text-86 font-semibold">user name</p>
                        <button onClick={()=>{
                            setShow(true)
                        }} className="text-txt-red font-semibold">Change</button>
                    </div>
                    <form
                        onSubmit={(e)=>{e.preventDefault()}}
                        className={`${show && toggle === 1 ? "" : "hidden"} w-full flex items-center gap-5 py-5`}
                    >
                        <input type="text"
                            value={newUsername}
                            onChange={(e)=>{setNewUsername(e.currentTarget.value)}}
                            className={`bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D 
                            placeholder:text-93 focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-10 pl-2.5 text- text-0D`}
                            id="new-username"
                            name="new-username"
                        />
                        <input
                            type="submit"
                            value="SAVE"
                            className="bg-txt-red rounded-md text-white flex items-center justify-center h-10 w-fit px-5 text-sm tracking-widest font-bold hover:bg-txt-red/80 duration-300"
                        />
                    </form>
                </li>
                <li className="flex items-center justify-between w-full py-3">
                    <div>
                        <p className={`text-lg cursor-pointer font-semibold duration-300 ${toggle === 2 ? "text-txt-red" : "text-main"}`} onClick={()=>{
                            if (toggle !== 2) {
                                updateToggle(2)
                                setShow(false)
                            }else {
                                updateToggle(0)
                            }
                        }}>E-mail</p>
                    </div>
                    <FaAngleRight className={`${toggle === 2 ? "rotate-90" : ""} ${toggle === 2 ? "text-txt-red" : "text-main"} text-xl duration-300 cursor-pointer`} onClick={()=>{
                        if (toggle !== 2) {
                            updateToggle(2)
                            setShow(false)
                        }else {
                            updateToggle(0)
                        }
                    }}/>
                </li>
                <li className={`${toggle === 2 ? "flex" : "hidden"} w-full py-3`}>
                    <p className="text-86 font-semibold">user email</p>
                </li>
                <li className="flex items-center justify-between w-full py-3">
                    <div>
                        <p className={`text-lg cursor-pointer font-semibold duration-300 ${toggle === 3 ? "text-txt-red" : "text-main"}`} onClick={()=>{
                            if (toggle !== 3) {
                                updateToggle(3)
                                setShow(false)
                            }else {
                                updateToggle(0)
                            }
                        }}>Location</p>
                    </div>
                    <FaAngleRight className={`${toggle === 3 ? "rotate-90" : ""} ${toggle === 3 ? "text-txt-red" : "text-main"} text-xl duration-300 cursor-pointer`} onClick={()=>{
                        if (toggle !== 3) {
                            updateToggle(3)
                            setShow(false)
                        }else {
                            updateToggle(0)
                        }
                    }}/>
                </li>
                <li className={`${toggle === 3 ? "flex" : "hidden"} w-full py-3 items-center justify-between`}>
                    <p className="text-86 font-semibold">street 13, zone, city, country</p>
                    <Link to="/account/location " className="text-txt-red font-semibold">See more</Link>
                </li>
                <li className="flex items-center justify-between w-full py-3">
                    <div>
                        <p className={`text-lg cursor-pointer font-semibold duration-300 ${toggle === 4 ? "text-txt-red" : "text-main"}`} onClick={()=>{
                            if (toggle !== 4) {
                                updateToggle(4)
                                setShow(false)
                            }else {
                                updateToggle(0)
                            }
                        }}>Phone Number</p>
                    </div>
                    <FaAngleRight className={`${toggle === 4 ? "rotate-90" : ""} ${toggle === 4 ? "text-txt-red" : "text-main"} text-xl duration-300 cursor-pointer`} onClick={()=>{
                        if (toggle !== 4) {
                            updateToggle(4)
                            setShow(false)
                        }else {
                            updateToggle(0)
                        }
                    }}/>
                </li>
                <li className={`${toggle === 4 ? "flex" : "hidden"} w-full py-3`}>
                    <p className="text-86 font-semibold">+(20)123456789</p>
                </li>
            </ul>
            <div className="w-full grow flex items-end">
                <p className="text-main text-sm text-center px-10">You have agreed to our <span className="text-txt-red font-semibold">Terms of Service</span> and <span className="text-txt-red font-semibold">Privacy Policy</span>.</p>
            </div>
            <Footer/>
        </div>
    )
}
