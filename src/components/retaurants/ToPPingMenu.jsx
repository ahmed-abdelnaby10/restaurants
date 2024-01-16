import { Link, useParams } from "react-router-dom";
import { allRestaurants } from "../utils/allRestaurants";
import { useEffect, useState } from "react";
import { topCookie } from "../utils/toppingMenu";
import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux"
import { addToCart } from "../../rtk/slices/cart-slice"

export default function ToPPingMenu() {
    const dispatch = useDispatch()
    let [quantity, setQuantity] = useState(1)
    const { resTitle } = useParams()
    const { toppingMenu } = useParams()
    const restaurant = allRestaurants.filter((res)=> res.title === resTitle)[0]
    const [key, setKey] = useState(1)
    const [elementId, setElementId] = useState(1)
    const [element, setElement] = useState({})
    let clonedElement = {...element, additions:[], q:quantity}
    useEffect(()=>{
        if (toppingMenu.length === 2) {
            setKey(+toppingMenu.charAt(0))
            setElementId(+toppingMenu.charAt(1))
            setElement(restaurant.menu[key - 1].menu[elementId - 1])
        }
        else {
            restaurant.popularFood.map((food)=>{
                if (food.title === toppingMenu) {
                    setElement(food)
                }
            })
            restaurant.bestDishes.map((dish)=>{
                if (dish.title === toppingMenu) {
                    setElement(dish)
                }
            })
        }
    },[elementId, key, restaurant.bestDishes, restaurant.menu, restaurant.popularFood, toppingMenu])
        return (
        <div className="flex flex-col items-star overflow-y-scroll pb-10">
            <div className="w-full h-64 relative before:content-[''] before:z-20 before:absolute before:w-full before:h-full left-0 top-0 before:bg-50/70">
                <img src={element.image} alt={element.title} className="w-full h-full" />
                <Link to={`/home/all-restaurants/${resTitle}`} className="h-10 w-10 absolute left-2.5 text-FB text-xl font-semibold flex items-center justify-center bottom-1/2 rounded-full z-50 bg-D9/20 hover:bg-D9"><FaXmark/></Link>
            </div>
            <h1 className="text-main text-2xl font-semibold px-5 mt-5">{element.title}</h1>
            <p className="text-86 text-base px-5">{element.descr? element.descr : ""}</p>
            <h2 className="mt-2.5 mb-5 bg-F3D text-txt-red tracking-widest font-semibold text-sm flex items-center gap-2 rounded-3xl h-fit w-fit ml-5 px-2.5 py-1.5">{element.type? element.type : restaurant.menu[key - 1].title}</h2>
            <div className="flex flex-col items-start px-5">
                <div className="flex items-center justify-between w-full mt-8 mb-2.5">
                    <h2 className="text-main text-lg font-semibold">Choice of top cookie</h2>
                    <span className="block h-fit w-fit font-semibold tracking-wider text-orange-400 bg-orange-100 px-2.5 py-1.5">Required</span>
                </div>
                <ul className="list-none w-full">
                    {
                        topCookie.map((choice, index)=>{
                            return (
                                <li key={choice} className="py-5 w-full flex items-center justify-start gap-5 border-b-2 border-solid border-F2">
                                    <div className="h-fit w-fit flex items-center relative">
                                        <input id={index} type="checkbox" className=" appearance-none border-2 border-solid border-86 w-5 h-5 rounded-full checked:bg-86" value={choice} onChange={(e)=>{
                                            let arr = []
                                            if (e.currentTarget.checked) {
                                                arr.push(e.currentTarget.value)
                                            }
                                            clonedElement.additions.push(...arr)
                                            console.log(e.currentTarget.value);
                                        }}/>
                                        <FaCheck className="absolute top-3.5px text-sm left-0.5 text-FB"/>
                                    </div>
                                    <label htmlFor={index} className="text-86 text-base font-semibold">{choice}</label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex items-center justify-between w-full mt-8 mb-2.5">
                    <h2 className="text-main text-lg font-semibold">Choice of bottom cookie</h2>
                    <span className="block h-fit w-fit font-semibold tracking-wider text-orange-400 bg-orange-100 px-2.5 py-1.5">Required</span>
                </div>
                <ul className="list-none w-full">
                    {
                        topCookie.map((choice, index)=>{
                            return (
                                <li key={choice} className="w-full py-5 flex items-center justify-start gap-5 border-b-2 border-solid border-F2">
                                    <div className="h-fit w-fit flex items-center relative">
                                        <input id={choice} type="checkbox" className=" appearance-none border-2 border-solid border-86 w-5 h-5 rounded-full checked:bg-86" value={choice} onChange={(e)=>{
                                            let arr = []
                                            if (e.currentTarget.checked) {
                                                arr.push(e.currentTarget.value)
                                            }
                                            clonedElement.additions.push(...arr)
                                            console.log(e.currentTarget.value);
                                        }}/>
                                        <FaCheck className="absolute top-3.5px text-sm left-0.5 text-FB"/>
                                    </div>
                                    <label htmlFor={choice} className="text-86 text-base font-semibold">{choice}</label>
                                </li>
                            )
                        })
                    }
                    <li className="w-full py-5 flex items-center justify-between gap-2.5 border-b-2 border-solid border-F2">
                        <p className="text-main text-base font-semibold">Add special instructions</p>
                        <FaAngleRight className="text-2xl text-main"/>
                    </li>
                </ul>
            </div>
            <div className="self-center flex items-center justify-center w-fit gap-5 my-10">
                    <button className="flex items-center justify-center text-base text-main bg-86/75 w-10 h-10 rounded-full" onClick={()=>{
                        if (quantity > 1) {
                            setQuantity(quantity -= 1)
                        }else{
                            return false
                        }
                    }}>
                        <FaMinus/>
                    </button>
                    <span className="text-2xl text-main font-semibold">{quantity < 10 ? `0${quantity}` : quantity}</span>
                    <button className="flex items-center justify-center text-base text-main bg-86/75 w-10 h-10 rounded-full" onClick={()=>{
                        setQuantity(quantity += 1)
                    }}>
                        <FaPlus/>
                    </button>
            </div>
            <button className='bg-txt-red mx-auto w-100 rounded-md text-white flex items-center justify-center h-12 text-sm tracking-widest font-bold hover:bg-txt-red/80 duration-300' onClick={()=>{
                dispatch(addToCart(clonedElement))
                console.log(clonedElement);
            }}>
                    {`ADD TO ORDER (KES ${element.price * quantity})`}
            </button>
        </div>
    )
}
