import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules'
import { food } from '../utils/food';

export default function Food() {
    return (
        <div className='w-full px-5'>
            <div className='w-full flex items-center justify-between mb-2.5'>
                <h1 className='text-xl font-bold text-main mb-2.5'>Foods</h1>
                <Link to="/home/foods" className='text-txt-red text-base font-medium'>See all</Link>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
                loop={true}
                allowTouchMove={true}
                direction='horizontal'
            >
                {
                    food.map((slide)=>{
                        return(
                            <SwiperSlide key={slide.id} style={{width:"100px !important"}}>
                                <div className='w-24 h-24 rounded-lg overflow-hidden bg-cover bg-center tab:w-44 tab:h-32'>
                                    <img src={slide.image} alt={slide.title} className='w-full h-full object-cover object-center'/>
                                </div>
                                <h2 className='text-base font-semibold text-50 mt-2.5'>{slide.title}</h2>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}