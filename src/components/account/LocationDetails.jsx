import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54837.47704693497!2d30.95815680240809!3d30.793033285836835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c95daafcf035%3A0x7421820c5e8cae42!2sTanta%2C%20Tanta%20Qism%202%2C%20Tanta%2C%20Gharbia%20Governorate!5e0!3m2!1sen!2seg!4v1708349390797!5m2!1sen!2seg"
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
