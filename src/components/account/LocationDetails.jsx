import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer"

export default function LocationDetails() {
  const navigate = useNavigate()
  return (
    <div className='bg-FB flex flex-col items-start gap-5 px-5 pt-5 pb-24 min-h-screen'>
      <div className='text-0D font-semibold text-base flex items-center justify-center relative w-full'>
          <button onClick={()=>{navigate(-1)}} className='text-black absolute left-0'><FaArrowLeft/></button>
          <h2 className=''>Your Location</h2>
      </div>
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492699.436727936!2d34.48157279321273!3d31.252871858119626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15006f476664de99%3A0x8d285b0751264e99!2sJordan!5e0!3m2!1sen!2seg!4v1707828087584!5m2!1sen!2seg"
          className="w-full h-full"
          title="locate"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>
      <Footer/>
    </div>
  )
}
