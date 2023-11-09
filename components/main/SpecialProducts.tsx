"use client"
import Link from "next/link";
import Arrow from "/public/images/main/ArrowProduct.svg"
import { useTimer } from 'react-timer-hook';
import Image from "next/image";

export default function SpecialProducts() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 7800); // 10 minutes timer

    const expiryTimestamp = time

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    
    return (
        <div className="py-10 px-2 md:py-24 bg-green-50 w-full relative">
            <div className="max-w-screen-2xl m-auto text-center relative z-[2]">
                <p className="text-primary uppercase font-semibold mb-3">Best Deals</p>
                <h2 className='max-w-[500px] m-auto text-2xl md:text-4xl text-green-900 font-semibold mb-6 text-center mb-6'>
                    Our Special Products Deal of the Month
                </h2>
                <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white flex flex-col items-center justify-center rounded-md">
                        <span className="text-primary text-xl md:text-3xl">
                            {days < 10 ? '0' + days : days}
                        </span>
                        <span className="text-green-500 text-xs uppercase">
                            Days
                        </span>
                    </div>
                    <span className="px-1 md:px-2 text-xl">:</span>
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white flex flex-col items-center justify-center rounded-md">
                        <span className="text-primary text-xl md:text-3xl">
                            {hours < 10 ? '0' + hours : hours}
                        </span>
                        <span className="text-green-500 text-xs uppercase">
                            hours
                        </span>
                    </div>
                    <span className="px-1 md:px-2 text-xl">:</span>
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white flex flex-col items-center justify-center rounded-md">
                        <span className="text-primary text-xl md:text-3xl">
                            {minutes < 10 ? '0' + minutes : minutes}
                        </span>
                        <span className="text-green-500 text-xs uppercase">
                        Mins
                        </span>
                    </div>
                    <span className="px-1 md:px-2 text-xl">:</span>
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white flex flex-col items-center justify-center rounded-md">
                        <span className="text-primary text-xl md:text-3xl">
                            {seconds < 10 ? '0' + seconds : seconds}
                        </span>
                        <span className="text-green-500 text-xs uppercase">
                        Secs
                        </span>
                    </div>
                </div>
                <Link href='/shop' className="m-auto py-3 px-8 flex w-max rounded-full bg-primary text-white text-sm font-semibold items-center">
                    Shop Now
                    <Arrow className='stroke-white ml-3' />
                </Link>
            </div>
            <Image className="hidden md:block absolute top-1/2 left-[1%] 2xl:left-[5%] -translate-y-1/2 w-[40%] lg:w-[35%] 2xl:w-[521px] z-[1]" src='/images/main/specialProductsImgBg1.png' alt='products' width={100} height={100} sizes="100vw"/>
            <Image className="hidden md:block absolute bottom-0  right-[1%] 2xl:right-[5%]  w-[45%] lg:w-[35%] 2xl:w-[704px] z-[1]" src='/images/main/specialProductsImgBg2.png' alt='products' width={100} height={100} sizes="100vw"/>
        </div>
    )
}