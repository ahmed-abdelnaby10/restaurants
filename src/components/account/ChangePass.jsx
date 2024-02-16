import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa6";
import Footer from "../Footer"
import { useState } from "react";

export default function ChangePass() {
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(0);
  return (
    <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-5 pb-24 min-h-screen'>
      <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full'>
          <button onClick={()=>{navigate(-1)}} className='text-black absolute left-0'><FaArrowLeft/></button>
          <h2 className=''>Change Password</h2>
      </div>
      <form 
        onSubmit={(e)=>{e.preventDefault()}}
        className="w-full flex flex-col items-start gap-8 mt-10"
      >
        <div className="flex flex-col items-start gap-1 w-full">
          <label htmlFor="current-password" className="text-base text-0D font-semibold">
            Current Password
          </label>
          <div className="relative w-full h-fit">
            <input
              id="current-password"
              name="current-password"
              autoComplete="password"
              type={show === 1 ? "text" : show === -1 ? "password" : "password"}
              placeholder="xxxxxxxx"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              maxLength={15}
              className="bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D 
                        placeholder:text-93 focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-10 pl-2.5 text-xl text-0D"
            />
            {show === 1 ? (
              <FaEye
                onClick={() => {
                  setShow(-1);
                }}
                className="absolute right-2.5 top-3 text-0D cursor-pointer"
              />
            ) : show === -1 ? (
              <FaEyeSlash
                onClick={() => {
                  setShow(1);
                }}
                className="absolute right-2.5 top-3 text-93 cursor-pointer"
              />
            )
              : (
                <FaEyeSlash
                onClick={() => {
                  setShow(1);
                }}
                className="absolute right-2.5 top-3 text-93 cursor-pointer"
              />
              )
          }
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <label htmlFor="new-password" className="text-base text-0D font-semibold">
            New Password
          </label>
          <div className="relative w-full h-fit">
            <input
              id="new-password"
              name="new-password"
              autoComplete="password"
              type={show === 2 ? "text" : show === -2 ? "password" : "password"}
              placeholder= "xxxxxxxx"
              required
              maxLength={15}
              className="bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D 
                        placeholder:text-93 focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-10 pl-2.5 text-xl text-0D"
            />
            {show === 2 ? (
              <FaEye
                onClick={() => {
                  setShow(-2);
                }}
                className="absolute right-2.5 top-3 text-0D cursor-pointer"
              />
            ) : show === -2 ? (
              <FaEyeSlash
                onClick={() => {
                  setShow(2);
                }}
                className="absolute right-2.5 top-3 text-93 cursor-pointer"
              />
            )
              : (
                <FaEyeSlash
                onClick={() => {
                  setShow(2);
                }}
                className="absolute right-2.5 top-3 text-93 cursor-pointer"
              />
              )
          }
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <label htmlFor="confirm-password" className="text-base text-0D font-semibold">
            Confirm New Password
          </label>
          <div className="relative w-full h-fit">
            <input
              id="confirm-password"
              name="confirm-password"
              autoComplete="password"
              type={show === 3 ? "text" : show === -3 ? "password" : "password"}
              placeholder="xxxxxxxx"
              required
              maxLength={15}
              className="bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D 
                        placeholder:text-93 focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-10 pl-2.5 text-xl text-0D"
            />
            {show === 3 ? (
              <FaEye
                onClick={() => {
                  setShow(-3);
                }}
                className="absolute right-2.5 top-3 text-0D cursor-pointer"
              />
            ) : show === -3 ? (
              <FaEyeSlash
                onClick={() => {
                  setShow(3);
                }}
                className="absolute right-2.5 top-3 text-93 cursor-pointer"
              />
            )
              : (
                <FaEyeSlash
                onClick={() => {
                  setShow(3);
                }}
                className="absolute right-2.5 top-3 text-93 cursor-pointer"
              />
              )
          }
          </div>
        </div>
        <input
          type="submit"
          value="SAVE"
          className="bg-txt-red w-full rounded-md text-white flex items-center justify-center h-12 text-sm tracking-widest font-bold hover:bg-txt-red/80 duration-300 mt-1.5"
        />
      </form>
      <Footer/>
    </div>
  )
}
