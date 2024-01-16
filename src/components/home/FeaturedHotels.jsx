import { featuredHotels } from '../utils/featuredHotels';
import { Link } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules'

export default function FeaturedHotels() {
    return (
        <div className='w-full px-5'>
            <div className='w-full flex items-center justify-between mb-2.5'>
                <h1 className='text-xl font-bold text-main mb-2.5'>Featured Hotels</h1>
                <Link to="" className='text-txt-red text-base font-medium'>See all</Link>
            </div>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
                loop={true}
                allowTouchMove={true}
                direction='horizontal'
            >
                {
                    featuredHotels.map((slide)=>{
                        return(
                            <SwiperSlide key={slide.id} style={{width:'225px !important'}}>
                                <div style={{ height:"143px" }} className='rounded-lg overflow-hidden w-full'>
                                    <img src={slide.image} alt={slide.title} className='w-full h-full object-cover object-center'/>
                                </div>
                                <h1 className='text-lg font-semibold text-main'>{slide.title}</h1>
                                <p className='text-sm font-normal text-86'>{slide.descr}</p>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='bg-txt-red rounded-lg w-fit h-fit py-0.5 px-2 text-F6 text-sm font-medium'>
                                    <span className='text-star'>&#9733;</span>{slide.rate}</div>
                                    <p className='text-sm font-semibold text-50 flex items-center gap-0.5'><GoDotFill className='text-base'/>{slide.time} min</p>
                                    <p className='text-sm font-semibold text-50 flex items-center gap-0.5'><GoDotFill className='text-base'/>{slide.delivery} delivery</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}