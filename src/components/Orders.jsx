import { FaAngleRight, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reversePay } from "../rtk/slices/payment-slice";
import SuccessAlert from "./payments/SuccessAlert";
import Footer from "./Footer";
import { removeFromCart } from "../rtk/slices/cart-slice";
import shoppingCart from "../assests/payment/shoppingcart.png";
import axios from "axios";
import { removeFromFoodAmount } from "../rtk/slices/foodAmountSlice";

export default function Orders() {
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(20);
  const promoCodes = [1000, 2000, 5050, 8585, 7070];
  const foodAmount = useSelector((state) => state.foodAmount);
  let subTotal = foodAmount.reduce((prev, curr) => {
    if (curr.price) {
      return prev + curr.price * curr.quan;
    }
  }, 0);
    
  return (
    <>
      <SuccessAlert />
      <div className="px-5 pt-5 flex flex-col gap-10 pb-24">
        {foodAmount.length > 0 ? (
          <div className="text-0D font-semibold text-base flex items-center justify-center relative w-full">
            <Link to={`/home`} className="text-black text-2xl absolute left-0">
              <FaXmark />
            </Link>
            <h2 className="text-0D font-bold text-xl">Your orders</h2>
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col gap-5">
          {foodAmount.map((prod) => {
            return (
              <div
                key={prod.title}
                className="flex items-start justify-between w-full gap-0 pb-5 border-b-2 border-solid border-F2"
              >
                <span className="flex items-center justify-center w-12 h-6 rounded-md bg-F3D text-txt-red text-base font-semibold">
                  {prod.quan}
                </span>
                <div className="flex flex-col items-start justify-start gap-1 ml-2.5">
                  <h2 className="text-base font-bold text-0D">{prod.title}</h2>
                  <p className="text-86 text-base font-medium">{prod.descr}</p>
                </div>
                <div className="flex flex-col h-full w-fit items-center justify-between gap-8">
                  <span className="text-base font-bold text-txt-red w-fit whitespace-nowrap">
                    Kes {prod.price * prod.quan}
                  </span>
                  <FaXmark
                    onClick={() => {
                      dispatch(removeFromFoodAmount(prod));
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {foodAmount.length > 0 ? (
          <div className="flex flex-col items-start gap-8 w-full">
            <form
              className="flex items-center justify-between w-full gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                if (promoCodes.includes(+[...data.entries()][0][1])) {
                  setDiscount(100);
                  setDelivery(10);
                } else {
                  setDiscount(0);
                  setDelivery(20);
                }
              }}
            >
              <input
                type="text"
                name="promo-code"
                placeholder="Add Promo code"
                className="block h-11 bg-EB pl-2.5 placeholder:text-main/50 placeholder:text-sm placeholder:font-semibold text-lg text-main font-semibold caret-main w-full focus:outline-none rounded-lg"
              />
              <button className="text-white bg-main w-fit px-5 h-11 flex items-center text-center justify-center rounded-lg cursor-pointer">
                Apply
              </button>
            </form>
            <ul className="w-full list-none flex flex-col items-start gap-5 h-fit">
              <li className="flex items-center justify-between text-86 text-base w-full">
                <p>Subtotal</p>
                <p>kes {subTotal}</p>
              </li>
              <li className="flex items-center justify-between text-86 text-base w-full">
                <p>Delivery fees</p>
                <p>kes {delivery}</p>
              </li>
              <li className="flex items-center justify-between text-86 text-base w-full">
                <p>Promo</p>
                <p>-kes {discount}</p>
              </li>
              <li className="flex items-center justify-between text-0D text-base w-full font-semibold">
                <p>Total</p>
                <p>kes {subTotal + delivery - discount}</p>
              </li>
              <li className="flex items-center justify-between w-full">
                <Link
                  to="/home/all-restaurants"
                  className="text-txt-red text-base font-semibold"
                >
                  Add more items
                </Link>
                <Link to="/home/all-restaurants">
                  <FaAngleRight className="text-xl text-black" />
                </Link>
              </li>
            </ul>
            <Link
              to="/home/orders/payment"
              className="bg-txt-red mx-auto w-100 rounded-md text-white flex items-center justify-center h-12 text-sm tracking-widest font-bold hover:bg-txt-red/80 duration-300"
              onClick={() => {
                dispatch(reversePay(false));
              }}
            >
              CONTINUE TO PAYMENT
            </Link>
          </div>
        ) : (
          <div className="h-full pt-20 w-full grow flex flex-col items-center justify-center gap-10">
            <div className="w-40 h-40 bg-F3D rounded-full">
              <div className="animate-leftRight">
                <img src={shoppingCart} alt="shoppingCart" />
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-start gap-5">
              <div>
                <h1 className="text-0D text-lg font-semibold text-center">
                  Looking for something?
                </h1>
                <p className="text-base text-86 font-medium text-center">
                  Add your favourite items to your cart
                </p>
              </div>
              <Link
                to="/home"
                className="bg-txt-red rounded-3xl cursor-pointer text-white w-fit h-10 flex items-center justify-center mt-5 text-sm tracking-wider px-5"
              >
                Start shopping
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
