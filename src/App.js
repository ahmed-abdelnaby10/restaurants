import React, { useEffect, useState } from 'react';

import './App.css';
import SplashScreen from './components/SplashScreen.jsx';
import {Routes, Route} from "react-router-dom"
import OnBoardOne from './components/OnboardOne.jsx';
import OnBoardTwo from './components/OnboardTwo.jsx';
import OnBoardThree from './components/OnBoardThree.jsx';
import SignInForm from './components/auth/SignInForm.jsx';
import CheckPassword from './components/CheckPassword.jsx';
import CheckEmail from './components/CheckEmail.jsx';
import SignUpForm from './components/auth/SignUpForm.jsx';
import EnterPhone from './components/EnterPhone.jsx';
import VerifyNumber from './components/VerifyNumber.jsx';
import Location from './components/Location.jsx';
import Home from './components/home/Home.jsx';
import AllRestaurants from './components/retaurants/AllRestaurants.jsx';
import Restaurant from './components/retaurants/Restaurant.jsx';
import ToPPingMenu from './components/retaurants/ToPPingMenu.jsx';
import Orders from './components/Orders.jsx';
import ChooseMethode from './components/payments/ChooseMethode.jsx';
import CheckMethod from './components/payments/CheckMethod.jsx';
import PaymentInfo from './components/payments/PaymentInfo.jsx';
import Search from './components/Search.jsx';
import Account from './components/account/Account.jsx';
import ProfileInfo from './components/account/ProfileInfo.jsx';
import ChangePass from './components/account/ChangePass.jsx';
import LocationDetails from './components/account/LocationDetails.jsx';
import RateUS from './components/account/RateUS.jsx';
import Faq from './components/account/Faq.jsx';
import FeaturedHotels from './components/pages/FeaturedHotels.jsx';
import Foods from './components/pages/Foods.jsx';


function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  },[])
  if (isLoading) {
    return(
      <SplashScreen/>
      )
    }
  return (
    <div className='App h-sc w-full relative bg-FB'>
      <Routes>
        <Route path='/' element={<OnBoardOne/>}/>
        <Route path='/onboarding/two' element={<OnBoardTwo/>}/>
        <Route path='/onboarding/three' element={<OnBoardThree/>}/>
        <Route path='/sign-in' element={<SignInForm/>}/>
        <Route path='/sign-up' element={<SignUpForm/>}/>
        <Route path='/sign-up/complete-information' element={<EnterPhone/>}/>
        <Route path='/sign-up/complete-information/verify-number' element={<VerifyNumber/>}/>
        <Route path='/sign-in/check-password' element={<CheckPassword/>}/>
        <Route path='/sign-in/check-password/check-email' element={<CheckEmail/>}/>
        <Route path='/sign-up/complete-information/location' element={<Location/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/featured-hotels' element={<FeaturedHotels/>}/>
        <Route path='/home/foods' element={<Foods/>}/>
        <Route path='/home/all-restaurants' element={<AllRestaurants/>}/>
        <Route path='/home/all-restaurants/:resTitle' element={<Restaurant/>}/>
        <Route path='/home/all-restaurants/:resTitle/:toppingMenu' element={<ToPPingMenu/>}/>
        <Route path='/home/orders' element={<Orders/>}/>
        <Route path='/home/orders/payment' element={<ChooseMethode/>}/>
        <Route path='/home/orders/payment/check-method' element={<CheckMethod/>}/>
        <Route path='/home/orders/payment/information' element={<PaymentInfo/>}/>
        <Route path="/account" element={<Account />} />
        <Route path="/account/profile-information" element={<ProfileInfo />} />
        <Route path="/account/change-password" element={<ChangePass />} />
        <Route path="/account/location" element={<LocationDetails />} />
        <Route path="/account/rate-us" element={<RateUS />} />
        <Route path="/account/faq" element={<Faq />} />
        <Route path="/home/explore" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App;