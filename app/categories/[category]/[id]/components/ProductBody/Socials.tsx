import Link from "next/link"
import Twitter from "/public/images/footer/twitter.svg"
import Facebook from "/public/images/footer/facebook.svg"
import Pinterest from "/public/images/footer/pinterest.svg"
import Instagram from "/public/images/footer/instagram.svg"

export const Socials = () => {
    return (
        <div className='flex gap-2 items-center mb-4'>
            <div className="text-gray-900 text-sm cursor-default">
                Share item:
            </div>
            <Link className='group w-10 h-10 hover:bg-primary rounded-full flex justify-between items-center duration-300' href="#">
                <Facebook className="fill-gray-700 group-hover:fill-white duration-300 m-auto" />
            </Link>
            <Link className='group w-10 h-10 hover:bg-primary rounded-full flex justify-between items-center duration-300' href="#">
                <Twitter className="fill-gray-700 group-hover:fill-white duration-300 m-auto" />
            </Link>
            <Link className='group w-10 h-10 hover:bg-primary rounded-full flex justify-between items-center duration-300' href="#">
                <Pinterest className="fill-gray-700 group-hover:fill-white duration-300 m-auto" />
            </Link>
            <Link className='group w-10 h-10 hover:bg-primary rounded-full flex justify-between items-center duration-300' href="#">
                <Instagram className="fill-gray-700 group-hover:fill-white duration-300 m-auto" />
            </Link>
        </div>
    )
}