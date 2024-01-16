import appetizer1 from "../../assests/restaurant-1/appetizer-1.png"
import appetizer2 from "../../assests/restaurant-1/appetizer-2.png"
import appetizer3 from "../../assests/restaurant-1//appetizer-3.jpg"
import appetizer4 from "../../assests/restaurant-1/appetizer-4.jpg"
import drinks1 from "../../assests/restaurant-1/drinks-1.jpg"
import drinks2 from "../../assests/restaurant-1/drinks-2.jpg"
import drinks3 from "../../assests/restaurant-1/drinks-3.jpg"
import drinks4 from "../../assests/restaurant-1/drinks-4.jpg"
import seafood1 from "../../assests/restaurant-1/seafood-1.jpg"
import seafood2 from "../../assests/restaurant-1/seafood-2.jpeg"
import seafood3 from "../../assests/restaurant-1/seafood-3.jpg"
import seafood4 from "../../assests/restaurant-1/seafood-4.jpg"
import beef1 from "../../assests/restaurant-1/beef-1.jpeg"
import beef2 from "../../assests/restaurant-1/beef-2.jpeg"
import beef3 from "../../assests/restaurant-1/beef-3.jpg"
import beef4 from "../../assests/restaurant-1/beef-4.jpeg"
import { FaCookieBite } from "react-icons/fa";
import { LuCupSoda } from "react-icons/lu";
import { LuBeef } from "react-icons/lu";
import { IoFishOutline } from "react-icons/io5";

export const restaurant1Menu = [
    {
        id: 1,
        title: "Appetizer",
        icon: FaCookieBite,
        menu : [
            {
                key: 1,
                id: 1,
                title: "Cookie Sandwich",
                image : appetizer1,
            },
            {
                key: 1,
                id: 2,
                title: "Cookie Sandwich",
                image : appetizer2,
            },
            {
                key: 1,
                id: 3,
                title: "Breakfast",
                image : appetizer3,
            },
            {
                key: 1,
                id: 4,
                title: "Breakfast",
                image : appetizer4,
            },
        ]
    },
    {
        id: 2,
        title: "Drinks",
        icon: LuCupSoda,
        menu : [
            {   
                key: 2,
                id: 1,
                title: "Soda",
                image : drinks1,
            },
            {   
                key: 2,
                id: 2,
                title: "Soda",
                image : drinks2,
            },
            {   
                key: 2,
                id: 3,
                title: "Coffee",
                image : drinks3,
            },
            {   
                key: 2,
                id: 4,
                title: "Coffee",
                image : drinks4,
            },
        ]
    },
    {
        id: 3,
        title: "Seafood",
        icon: IoFishOutline,
        menu : [
            {
                key: 3,
                id: 1,
                title: "Fish",
                image : seafood1,
            },
            {
                key: 3,
                id: 2,
                title: "Shrimp",
                image : seafood2,
            },
            {
                key: 3,
                id: 3,
                title: "Crab",
                image : seafood3,
            },
            {
                key: 3,
                id: 4,
                title: "Fish",
                image : seafood4,
            },
        ]
    },
    {
        id: 4,
        title: "Beef",
        icon: LuBeef,
        menu : [
            {
                key: 4,
                id: 1,
                title: "Meatloaf",
                image : beef1,
            },
            {
                key: 4,
                id: 2,
                title: "Beef Hatkora",
                image : beef2,
            },
            {
                key: 4,
                id: 3,
                title: "Beefsteak",
                image : beef3,
            },
            {
                key: 4,
                id: 4,
                title: "Burger",
                image : beef4,
            },
        ]
    },
]