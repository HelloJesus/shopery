import Link from "next/link";
import Arrow from "/public/images/main/arrowProduct.svg"
import Image from "next/image";

export default function LatestNews() {
    
    return (
        <div className="px-2 py-10 md:py-20">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-center items-stretch gap-4 md:gap-6">
                <div className="p-4 md:p-6 min-w-[290px] max-w-[425px] shadow-lg flex-1 rounded-lg">
                    <div className="mb-6">
                        <Image src='/images/main/latestNews1.jpg' width={376} height={100} alt='products news'/>
                    </div>
                    <div>
                        <p className="text-green-900 text-lg font-medium mb-2">
                            Curabitur porttitor orci eget neque accumsan venenatis.
                        </p>
                        <p className="text-green-500 mb-5 text-sm">
                        Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.
                        </p>
                        <Link className="flex items-center gap-3" href='#' >
                            <span className="text-primary font-semibold">Read more</span>
                            <Arrow  className='stroke-primary'/>
                        </Link>
                    </div>
                </div>
                <div className="p-6 min-w-[290px] max-w-[425px] shadow-lg flex-1 rounded-lg">
                    <div className="mb-6">
                        <Image src='/images/main/latestNews2.jpg' width={376} height={100} alt='products news'/>
                    </div>
                    <div>
                        <p className="text-green-900 text-lg font-medium mb-2">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                        </p>
                        <p className="text-green-500 mb-5 text-sm">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                        </p>
                        <Link className="flex items-center gap-3" href='#' >
                            <span className="text-primary font-semibold">Read more</span>
                            <Arrow  className='stroke-primary'/>
                        </Link>
                    </div>
                </div>
                <div className="p-6 min-w-[290px] max-w-[425px] flex-1 shadow-lg rounded-lg">
                    <div className="mb-6">
                        <Image src='/images/main/latestNews3.jpg' width={376} height={100} alt='products news'/>
                    </div>
                    <div>
                        <p className="text-green-900 text-lg font-medium mb-2">
                            Curabitur porttitor orci eget neque accumsan venenatis.
                        </p>
                        <p className="text-green-500 mb-5 text-sm">
                        Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.
                        </p>
                        <Link className="flex items-center gap-3" href='#' >
                            <span className="text-primary font-semibold">Read more</span>
                            <Arrow  className='stroke-primary'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}