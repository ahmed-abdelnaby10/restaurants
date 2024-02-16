import source3 from "../assests/Ellipse3.png";
import OnBoardingCard from './OnboardingCard';
import { Link } from 'react-router-dom';

export default function OnBoardThree() {
    return (
        <div className="bg-FB flex flex-col items-center w-full h-screen pt-16 tab:pt-20">
                <OnBoardingCard source={source3} title="Fresh meals, delivered to your" redPart="doorstep" paragraph=" Integer a viverra sit feugiat leo commodo nunc." />
            
            <ul className='flex items-center w-fit gap-2.5 mt-5'>
                <li className='rounded-full w-2 h-2 bg-9F'></li>
                <li className='rounded-full w-2 h-2 bg-9F'></li>
                <li className='rounded-full w-2 h-2 border-6 border-solid border-txt-red'></li>
            </ul>
            <div className='flex items-center w-full justify-center mt-7'>
                <Link to="/sign-in" className='text-white bg-0D rounded-lg text-sm font-bold flex items-center justify-center w-140 h-12 next'>
                Get Started</Link>
            </div>
        </div>
    )
}