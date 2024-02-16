import React from 'react'

export default function OnBoardingCard(props) {
    return (
        <div className='flex flex-col items-center slider w-full h-fit justify-between gap-5'>
            <div className='w-72 h-72 tab:w-96 tab:h-96 rounded-full'>
                <img src={props.source} alt="onboarding-pic" className='w-full h-full' />
            </div>
            <h1 className='text-2xl px-7 text-0D font-black text-center'>{props.title}<span className='text-txt-red ml-2'>{props.redPart}</span></h1>
            <p className='text-base px-10 text-9F text-center'>{props.paragraph}</p>
        </div>
    )
}
