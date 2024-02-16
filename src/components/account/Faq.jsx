import { FaAngleRight, FaArrowLeft, FaRegCommentDots } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer"

export default function Faq() {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(0)
    const updateToggle = (id)=> {
        setToggle(id)
    }
  return (
    <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-5 pb-24 min-h-screen'>
      <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full'>
          <button onClick={()=>{navigate(-1)}} className='text-black absolute left-0'><FaArrowLeft/></button>
          <h2 className=''>FAQ</h2>
      </div>
      <h1 className="mt-5 text-center self-center text-xl font-bold text-main">Frequently Asked Questions</h1>
      <ul className="w-full flex flex-col divide-y divide-solid divide-F2">
        <li className="flex items-center justify-between w-full py-5">
          <div>
              <p className={`text-lg cursor-pointer font-semibold duration-300 ${toggle === 1 ? "text-txt-red" : "text-main"}`} onClick={()=>{
                  if (toggle !== 1) {
                      updateToggle(1)
                  }else {
                      updateToggle(0)
                  }
              }}>why choose us for your project</p>
          </div>
          <FaAngleRight className={`${toggle === 1 ? "rotate-90" : ""} ${toggle === 1 ? "text-txt-red" : "text-main"} text-xl duration-300 cursor-pointer`} onClick={()=>{
              if (toggle !== 1) {
                  updateToggle(1)
              }else {
                  updateToggle(0)
              }
          }}/>
        </li>
        <li className={`${toggle === 1 ? "flex" : "hidden"} w-full py-5 flex-col`}>
            <p className="text-86">Hendrerit auctor nulla cubilia non senectus curabitur. In libero fermentum nullam dictum eu inceptos donec congue ultrices hendrerit sapien.</p>
        </li>
        <li className="flex items-center justify-between w-full py-5">
          <div>
              <p className={`text-lg cursor-pointer font-semibold duration-300 ${toggle === 2 ? "text-txt-red" : "text-main"}`} onClick={()=>{
                  if (toggle !== 2) {
                      updateToggle(2)
                  }else {
                      updateToggle(0)
                  }
              }}>how we provide services for you</p>
          </div>
          <FaAngleRight className={`${toggle === 2 ? "rotate-90" : ""} ${toggle === 2 ? "text-txt-red" : "text-main"} text-xl duration-300 cursor-pointer`} onClick={()=>{
              if (toggle !== 2) {
                  updateToggle(2)
              }else {
                  updateToggle(0)
              }
          }}/>
        </li>
        <li className={`${toggle === 2 ? "flex" : "hidden"} w-full py-5 flex-col`}>
            <p className="text-86">Hendrerit auctor nulla cubilia non senectus curabitur. In libero fermentum nullam dictum eu inceptos donec congue ultrices hendrerit sapien.</p>
        </li>
        <li className="flex items-center justify-between w-full py-5">
          <div>
              <p className={`text-lg cursor-pointer font-semibold duration-300 ${toggle === 3 ? "text-txt-red" : "text-main"}`} onClick={()=>{
                  if (toggle !== 3) {
                      updateToggle(3)
                  }else {
                      updateToggle(0)
                  }
              }}>about content creation, can i participate in the idea</p>
          </div>
          <FaAngleRight className={`${toggle === 3 ? "rotate-90" : ""} ${toggle === 3 ? "text-txt-red" : "text-main"} text-xl duration-300 cursor-pointer`} onClick={()=>{
              if (toggle !== 3) {
                  updateToggle(3)
              }else {
                  updateToggle(0)
              }
          }}/>
        </li>
        <li className={`${toggle === 3 ? "flex" : "hidden"} w-full py-5 flex-col`}>
            <p className="text-86">Hendrerit auctor nulla cubilia non senectus curabitur. In libero fermentum nullam dictum eu inceptos donec congue ultrices hendrerit sapien.</p>
        </li>
        <li className="flex items-center justify-between w-full py-5">
          <div>
              <p className={`text-lg cursor-pointer font-semibold duration-300 ${toggle === 4 ? "text-txt-red" : "text-main"}`} onClick={()=>{
                  if (toggle !== 4) {
                      updateToggle(4)
                  }else {
                      updateToggle(0)
                  }
              }}>how we are affordable than others</p>
          </div>
          <FaAngleRight className={`${toggle === 4 ? "rotate-90" : ""} ${toggle === 4 ? "text-txt-red" : "text-main"} text-xl duration-300 cursor-pointer`} onClick={()=>{
              if (toggle !== 4) {
                  updateToggle(4)
              }else {
                  updateToggle(0)
              }
          }}/>
        </li>
        <li className={`${toggle === 4 ? "flex" : "hidden"} w-full py-5 flex-col`}>
            <p className="text-86">Hendrerit auctor nulla cubilia non senectus curabitur. In libero fermentum nullam dictum eu inceptos donec congue ultrices hendrerit sapien.</p>
        </li>
      </ul>
      <form
        onSubmit={(e)=>{e.preventDefault()}}
        className="w-full flex flex-col items-start gap-5"
      >
        <label htmlFor="faq" className="flex items-center gap-2 text-lg text-txt-red font-semibold"><FaRegCommentDots/>Ask anything:</label>
        <input 
          type="text"
          placeholder="Write your question?"
          className="bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D 
        placeholder:text-93 focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm h-10 pl-2.5 text-xl text-0D"
        />
        <input
          type="submit"
          value="SEND"
          className="bg-txt-red w-full rounded-md text-white flex items-center justify-center h-12 text-sm tracking-widest font-bold hover:bg-txt-red/80 duration-300 mt-1.5"
        />
      </form>
      <Footer/>
    </div>
  )
}
