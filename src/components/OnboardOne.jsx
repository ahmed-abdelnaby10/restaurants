import source1 from "../assests/Ellipse1.png";
import OnBoardingCard from './OnboardingCard';
import { Link } from 'react-router-dom';

export default function OnBoardOne() {
    return (
        <div className="bg-FB flex flex-col items-center w-full h-screen pt-16 tab:pt-20">
            <div className="bg-FB flex flex-col items-center h-fit">
                <OnBoardingCard source={source1} title="Satisfy your cravings with" redPart="ease" paragraph=" Integer a viverra sit feugiat leo commodo nunc." />
            </div>
            <ul className='flex items-center w-fit gap-2.5 mt-5'>
                <li className='rounded-full w-2 h-2 border-6 border-solid border-txt-red'></li>
                <li className='rounded-full w-2 h-2 bg-9F'></li>
                <li className='rounded-full w-2 h-2 bg-9F'></li>
            </ul>
            <div className='flex items-center w-full justify-between px-5 mt-7'>
                <Link to="/onboarding/three" className='text-9F text-sm font-bold flex items-center justify-center w-140 h-12 skip'>Skip</Link>
                <Link to="/onboarding/two" className='text-white bg-0D rounded-lg text-sm font-bold flex items-center justify-center w-140 h-12 next'>
                Next</Link>
            </div>
        </div>
    )
}
