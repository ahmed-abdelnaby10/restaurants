import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { homeSlider } from '../utils/homeSlider';

const indicators = () => (<div className="indicator offer-ind"></div>);

export default function OffersSlider() {
    return (
        <div className='slide-container w-full px-5 pt-2.5 pb-8 bg-white'>
            <h1 className='text-xl font-bold text-main mb-2.5'>Best deals</h1>
            <Slide
                infinite={true}
                autoplay={true}
                arrows={false}
                duration={3000}
                canSwipe={true}
                indicators={indicators}
            >
                {
                    homeSlider.map((slide)=>{
                        return(
                            <div key={slide.id} className='rounded-2xl overflow-hidden'>
                                <div style={{backgroundImage:`url(${slide.source})`, height:`${slide.height}`}} className='flex items-center justify-center bg-cover bg-center w-full'>
                                    <p className='text-2xl font-semibold text-F2 text-center'>{slide.offerTitle}<br /> <span className='text-base font-medium text-F2 text-center'>{slide.offerText}</span></p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slide>
        </div>
    )
}