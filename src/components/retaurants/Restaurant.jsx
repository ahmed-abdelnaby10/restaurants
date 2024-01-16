import { Link, useParams } from "react-router-dom";
import { allRestaurants } from "../utils/allRestaurants";
import { GoDotFill } from "react-icons/go";
import { BsClockFill } from "react-icons/bs";
import { TbBike } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules'
import { useState } from "react";
import SpecialOffer from "./SpecialOffer";

export default function Restaurant() {
    const { resTitle } = useParams()
    const restaurant = allRestaurants.filter((res)=> res.title === resTitle)[0]
    const [list, setList] = useState(restaurant.menu[0].menu)

    return (
        <div className="flex flex-col items-star overflow-y-scroll pb-10">
            <div className="w-full h-64 relative before:content-[''] before:z-20 before:absolute before:w-full before:h-full left-0 top-0 before:bg-50/70">
                <img src={restaurant.image} alt={restaurant.title} className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start my-7 px-5 w-fit">
                <h1 className="text-main text-2xl font-semibold">{restaurant.title}</h1>
                <p className='text-base font-normal text-86 flex items-center'>{restaurant.foodType[0]} <GoDotFill className='text-xs ml-4 mr-2'/>{restaurant.foodType[1]} <GoDotFill className='text-xs ml-4 mr-2'/>{restaurant.foodType[2]}</p>
                <div className="flex items-center gap-2 my-5">
                    <div className='bg-txt-red text-F6 text-sm font-semibold rounded-md w-fit h-5 px-1.5 flex items-center'>
                        <span className='text-star text-base mr-1.5'>&#9733;</span>{restaurant.rate}
                    </div>
                    <p className="text-sm font-semibold text-50">{`${restaurant.review}+ ratings`}</p>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center rounded-full bg-F3D w-8 h-8">
                            <TbBike className="text-txt-red text-base"/>
                        </div>
                        <div>
                            <h2 className="text-main text-lg font-bold capitalize">{restaurant.delivery === "free"? "free" : `$${restaurant.delivery}`}</h2>
                            <p className="text-86 text-sm font-semibold">delivery</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center rounded-full bg-F3D w-8 h-8">
                            <BsClockFill className="text-txt-red text-sm"/>
                        </div>
                        <div>
                            <h2 className="text-main text-lg font-bold capitalize">{restaurant.time}</h2>
                            <p className="text-86 text-sm font-semibold">Minutes</p>
                        </div>
                    </div>
                </div>
                <Link to="" className="w-fit h-fit px-5 py-2.5 border-2 border-solid border-txt-red rounded-md bg-transparent text-txt-red hover:bg-txt-red hover:text-F6 duration-300 uppercase mt-7 font-semibold tracking-widest">Take away</Link>
            </div>
            <div className='w-full flex items-center justify-between mb-2.5 px-5'>
                <h1 className='text-xl font-bold text-main mb-2.5'>Featured foods</h1>
                <Link to="" className='text-txt-red text-base font-medium'>See all</Link>
            </div>
            <div className="px-5">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                    loop={true}
                    allowTouchMove={true}
                    direction='horizontal'
                    wrapperClass="gap-0 h-fit"
                >
                    {
                        list.map((ele)=>{
                            return(
                                <SwiperSlide key={ele.image} className="pop">
                                    <div className='rounded-lg overflow-hidden w-32 h-36'>
                                        <Link to={`/home/all-restaurants/${resTitle}/${ele.key}${ele.id}`} className="block h-full w-full">
                                            <img src={ele.image} alt={ele.title} className='w-full h-full object-cover object-center'/>
                                        </Link>
                                    </div>
                                    <Link to={`/home/all-restaurants/${resTitle}/${ele.key}${ele.id}`} className='text-sm text-86 mt-2.5 block'>{ele.title}</Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className="grid grid-cols-2 justify-items-center gap-y-5 w-full px-5 mt-5">
                {
                    restaurant.menu.map((part)=>{
                        return(
                            <button key={part.id} className={`bg-F3D text-86 font-semibold text-sm flex items-center gap-2  rounded-3xl h-fit w-fit px-2.5 py-1.5 food`} onClick={(e)=>{
                                if (part.title === e.currentTarget.innerText) {
                                    setList(part.menu)
                                }
                                }}>
                                <part.icon className="text-base"/>
                                {part.title}
                            </button>
                        )
                    })
                }
            </div>
            <SpecialOffer header="Most popular" array={restaurant.popularFood}/>
            <SpecialOffer header="Best dishes" array={restaurant.bestDishes}/>
        </div>
    )
}
