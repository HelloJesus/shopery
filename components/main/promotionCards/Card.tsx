import Image from "next/image";
import Link from "next/link";
import Arrow from "/public/images/main/ArrowProduct.svg"

type Props = {
    headerText?: string,
    mainText: string,
    otherText?: string,
    imgUrl: string,
    index?: number,
    colorText: string
}

export default async function Card({ mainText, headerText, otherText, imgUrl, index, colorText }: Props) {
    return (
        <div className={`px-4 sm:px-6 py-10 relative sm:min-w-[335px] max-w-[425px] w-full rounded-[8px] overflow-hidden flex flex-col flex-1`}>
            <div className={`inline ${index === 2 ? 'ml-auto' : ''}`}>
                {headerText ? <p className="text-green-900 uppercase text-sm">Drink Sale</p> : ''}
                <h3 className={`font-semibold text-2xl xl:text-3xl max-w-[165px] ${colorText} pb-2 `}>
                    {mainText}
                </h3>
            </div>
            <p className={`${colorText} font-light text-sm pb-4`}>
                {otherText ? otherText : ''}
                {otherText ? (<span className="font-medium">$14.99</span>) : ''}
            </p>
            <Link href='/shop' className={`${index === 2 ? 'ml-auto' : ''} py-2 xl:py-3 px-6 xl:px-8 bg-white flex w-max rounded-full text-primary text-sm font-semibold items-center`}>
                Shop Now
                <Arrow className='stroke-primary ml-3' />
            </Link>
            <Image src={imgUrl} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover z-[-1]" alt='milk' />
        </div>
    )
}