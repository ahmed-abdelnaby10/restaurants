import { IoSearchSharp } from 'react-icons/io5'
import Footer from "./Footer"
import { useEffect, useState } from 'react';
import { MdOutlineSearch } from "react-icons/md";
import { Link } from 'react-router-dom';
import { restaurant1Menu } from './utils/restaurant1';
import { allRestaurants } from './utils/allRestaurants';
import { featuredHotels } from './utils/featuredHotels';


export default function Search() {
    const [inputText, setInputText] = useState("");
    const [search, setSearch] = useState(false)
    const [dropDown, setDropDown] = useState([])
    const [showDropDown, setShowDropDown] = useState(false)
    const data = restaurant1Menu.reduce((prev, curr)=>{
        return prev.concat(curr.menu)
    },[]) || allRestaurants.reduce((prev, curr)=>{
        return prev.concat(curr.popularFood)
    },[]) || allRestaurants.reduce((prev, curr)=>{
        return prev.concat(curr.bestDishes)
    },[]) || featuredHotels.reduce((prev, curr)=>{
        return prev.concat(curr.popularFood)
    },[]) || featuredHotels.reduce((prev, curr)=>{
        return prev.concat(curr.bestDishes)
    },[])
    useEffect(()=>{
        if (inputText === '') {
            setSearch(false)
        }else {
            setSearch(true)
            setShowDropDown(true)
            setDropDown(data.filter((el) => el.title.toLowerCase().includes(inputText)))
        }
    },[inputText])
    return (
        <div className={`flex w-full min-h-screen bg-F6 z-20 px-5 pb-24 flex-col items-center pt-5 gap-5 duration-300`}>
            <div className="flex items-center justify-between w-full">
                <label htmlFor="search" className="text-xl font-bold text-main">Search for meals!</label>
            </div>
            <div className="w-full flex items-center gap-5">
                <input id="search" type="search" className="w-full h-12 rounded-lg pl-3 pr-2.5 text-xl focus:outline-none caret-50 text-50 relative placeholder:text-sm placeholder:font-medium" placeholder="Enter your fav meal" onChange={(e)=>{
                    setInputText(e.target.value.toLowerCase())
                }}/>
                <button className="w-fit h-full flex items-center text-0D text-3xl cursor-pointer hover:text-50 duration-300"><IoSearchSharp/></button>
            </div>
            <div className='grow w-full relative'>
                {
                    !search? 
                        <div className='w-fit h-fit absolute place-center'>
                            <MdOutlineSearch className="w-72 h-72 text-txt-red animate-search"/>
                        </div>
                    :
                    showDropDown?
                    <div className={`flex w-full flex-col items-center gap-3 divide-y divide-solid divide-e2 dark:divide-slate-500`}>
                        {
                            dropDown.map((food)=>{
                                return(
                                    <Link to={`/home/all-restaurants/${food.resTitle}/${food.title}`} key={food.price} className="text-main w-full text-center pt-3 text-base font-semibold">{food.title}</Link>
                                )
                            })
                        }
                    </div>:""
                }
            </div>
            <Footer/>
        </div>
    )
}