import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import shape2 from "../../assests/payment/shape-2.png"
import shape3 from "../../assests/payment/shape-3.png"
import visa from "../../assests/payment/black-visa.png"

const indicators = () => (<div className="indicator my-cards"></div>);
export default function Cards() {
    return (
        <div className='slide-container cards px-5'>
            <Slide
                infinite={true}
                autoplay={false}
                arrows={false}
                duration={1000}
                canSwipe={true}
                indicators={indicators}
                >
                <div className='relative rounded-xl overflow-hidden flex items-start flex-col gap-5 border-2 border-solid border-BD p-5'>
                    <div className='flex items-center justify-start gap-1.5'>
                        <img src={shape3} alt="redrectangular" className='w-1.5 h-7'/>
                        <img src={shape2} alt="pinkcircle" className='w-3.5'/>
                    </div>
                    <h2 className='text-0D text-base font-semibold flex items-center'><span className='-mb-2.5 mr-2.5 text-2xl'>**** **** ****</span> 0824</h2>
                    <h2 className='uppercase text-sm font-semibold text-0D'>martin tomas</h2>
                    <div className='flex items-end justify-between w-full'>
                        <p className='text-sm text-0D font-semibold'>EXP: 03 / 26</p>
                        <img src={visa} alt="Visa" className='w-16 h-5' />
                    </div>
                </div>
                <div className='relative rounded-xl overflow-hidden flex items-start flex-col gap-5 border-2 border-solid border-BD p-5'>
                    <div className='flex items-center justify-start gap-1.5'>
                        <img src={shape3} alt="redrectangular" className='w-1.5 h-7'/>
                        <img src={shape2} alt="pinkcircle" className='w-3.5'/>
                    </div>
                    <h2 className='text-0D text-base font-semibold flex items-center'><span className='-mb-2.5 mr-2.5 text-2xl'>**** **** ****</span> 0824</h2>
                    <h2 className='uppercase text-sm font-semibold text-0D'>martin tomas</h2>
                    <div className='flex items-end justify-between w-full'>
                        <p className='text-sm text-0D font-semibold'>EXP: 03 / 26</p>
                        <img src={visa} alt="Visa" className='w-16 h-5' />
                    </div>
                </div>
                <div className='relative rounded-xl overflow-hidden flex items-start flex-col gap-5 border-2 border-solid border-BD p-5'>
                    <div className='flex items-center justify-start gap-1.5'>
                        <img src={shape3} alt="redrectangular" className='w-1.5 h-7'/>
                        <img src={shape2} alt="pinkcircle" className='w-3.5'/>
                    </div>
                    <h2 className='text-0D text-base font-semibold flex items-center'><span className='-mb-2.5 mr-2.5 text-2xl'>**** **** ****</span> 0824</h2>
                    <h2 className='uppercase text-sm font-semibold text-0D'>martin tomas</h2>
                    <div className='flex items-end justify-between w-full'>
                        <p className='text-sm text-0D font-semibold'>EXP: 03 / 26</p>
                        <img src={visa} alt="Visa" className='w-16 h-5' />
                    </div>
                </div>
            </Slide>
        </div>
    )
}
