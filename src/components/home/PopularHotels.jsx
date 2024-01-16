import { popularHotels } from '../utils/popularHotels';
import { Link } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go';
import { TbBike } from "react-icons/tb";
import { BsClockFill } from "react-icons/bs";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function PopularHotels() {
    return (
        <div className='slide-container w-full h-fit px-5'>
            <div className='w-full flex items-center justify-between mb-2.5'>
                <h1 className='text-xl font-bold text-main'>Popular Hotels</h1>
                <Link to="/home/all-restaurants" className='text-txt-red text-base font-medium'>See all</Link>
            </div>
            <Slide
                autoplay={false}
                arrows={false}
                duration={3000}
                canSwipe={true}
                vertical={true}
                slidesToShow={1}
            >
                {
                    popularHotels.map((hotel)=>{
                        return(
                            <div key={hotel.id} className='w-full mb-px'>
                                <div style={{ backgroundImage:`url(${hotel.image})` }} className='rounded-lg overflow-hidden w-full bg-cover bg-center bg-no-repeat h-184'></div>
                                <h1 className='text-lg font-semibold text-main mt-2.5'>{hotel.title}</h1>
                                <p className='text-sm font-normal text-86 flex items-center my-2.5'>{hotel.categories[0]} <GoDotFill className='text-xs ml-4 mr-2'/>{hotel.categories[1]} <GoDotFill className='text-xs ml-4 mr-2'/>{hotel.categories[2]}</p>
                                <div className='flex items-center w-full'>
                                    <div className='text-50 text-sm font-semibold'>{hotel.rate}<span className='text-star ml-2'>&#9733;</span></div>
                                    <p className='text-sm font-semibold text-50 flex items-center gap-0.5'><GoDotFill className='text-xs text-86 ml-4 mr-2'/><BsClockFill className='mr-2'/>{hotel.time} min</p>
                                    <p className='text-sm font-semibold text-50 flex items-center gap-0.5'><GoDotFill className='text-xs text-86 ml-4 mr-2'/><TbBike className='mr-2'/>{hotel.delivery} delivery</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slide>
        </div>
    )
}
