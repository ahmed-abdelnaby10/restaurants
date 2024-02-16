import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer"
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

export default function RateUS() {
  const navigate = useNavigate()
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const [value, setValue] = useState("")
  const [maxLength, setMaxLength] = useState(300)
  const [length, setLength] = useState(0)
  return (
    <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-5 pb-24 h-screen'>
      <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full'>
          <button onClick={()=>{navigate(-1)}} className='text-black absolute left-0'><FaArrowLeft/></button>
          <h2 className=''>Rate Us</h2>
      </div>
      <form
        onSubmit={(e)=>{e.preventDefault()}}
        className="w-full flex flex-col items-start gap-8 mt-10"
      >
        <div className="w-full h-fit border-2 border-86 border-solid rounded-xl flex flex-col items-center justify-between p-5">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={40}
            activeColor="#FFCB11"
          />
        </div>
        <div className="w-full relative flex flex-col items-start gap-5">
          <label htmlFor="opinion" className="text-lg text-main font-semibold">Give your opinion:</label>
          <textarea 
            name="opinion" 
            id="opinion" 
            className="bg-EB w-full rounded-md border border-solid border-DE focus:outline-none caret-0D placeholder:text-93 focus:placeholder:opacity-0 pt-1.5 placeholder:duration-300 placeholder:text-sm h-40 px-2.5 text-lg text-0D resize-none" placeholder="Write your opinion here" 
            maxLength={maxLength}
            value={value}
            onChange={(e)=>{
              setValue(e.currentTarget.value)
              setLength(e.currentTarget.value.length)
            }}
          >
          </textarea>
          <span className="text-93 absolute right-2.5 -bottom-6">{length}/{maxLength}</span>
        </div>
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