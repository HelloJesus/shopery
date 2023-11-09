"use client"
import Image from 'next/image';
import MapPin from "../../public/images/header/MapPin.svg"
import { useState, useEffect, useRef } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Heart from "/public/images/main/heart.svg"
import Bucket from "/public/images/main/bucket.svg"
import User from "/public/images/main/user_3.svg"
import Link from 'next/link';
import { useStore } from '@/app/providers/StoreProvider';
import { SearchHeader } from './Search';

export default function Header({ userId }: { userId?: string }) {
    const supabase = createClientComponentClient()
    const pathname = usePathname();

    const [mobileMenu, setMobileMenu] = useState<boolean>(false)
    const router = useRouter()
    const { cart, favourites } = useStore()

    const handleSignOut = async () => {
        let { error } = await supabase.auth.signOut()
        console.log(error)
        router.refresh()
    }

    useEffect(() => {

        if (mobileMenu) {
            if (!document.body.classList.contains('mobile-menu')) {
                document.body.classList.add('mobile-menu')
            }
        } else {
            if (document.body.classList.contains('mobile-menu')) {
                document.body.classList.remove('mobile-menu')
            }
        }
    }, [mobileMenu]);

    return (
        <>
            <div className="border-b-2 border-gray-100 bg-gray-800">
                <div className="py-3 max-w-screen-2xl m-auto">
                    <div className="flex justify-between items-center px-2">
                        <div className='flex items-center gap-2 text-gray-500'>
                            <MapPin className='stroke-gray-300' />
                            <p className='text-xs sm:text-sm text-gray-300'>
                                Store Location:  <span className='hidden sm:inline'>Lincoln- 344, Illinois, Chicago, USA</span>
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-1 ext-sm text-gray-300">
                                {!userId ? <>
                                    <Link href="/signin" className='hover:text-white'>Sign In</Link>
                                    <span className='cursor-default'>/</span>
                                    <Link href="/signup" className='hover:text-white'>Sign Up</Link>
                                </>
                                    : <button className='hover:text-white' onClick={handleSignOut}>Log Out</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-auto py-3 sm:py-5 lg:py-0 lg:h-[90px] max-w-screen-2xl m-auto flex items-center'>
                <div className='flex justify-between items-center w-full px-2'>
                    <div>
                        <Image className='w-28 sm:w-36 lg:w-[183px]' src={'/images/header/Logo.svg'}
                            alt='logo' width={0} height={0} sizes='100vw' />
                    </div>
                    <SearchHeader />
                    <div className='flex items-center gap-2 lg:gap-4'>
                        <Image className='w-6 h-6 sm:w-8 sm:h-8 lg:h-10 lg:w-10' src={'/images/header/PhoneCall.svg'} alt='phone' width={40} height={40} />
                        <div>
                            <p className='text-gray-400 text-xs lg:text-sm '>Customer Services</p>
                            <p className='text-gray-900 text-sm sm:text-base lg:text-xl font-bold'>(219) 555-0114</p>
                        </div>
                    </div>
                    <button onClick={() => setMobileMenu(!mobileMenu)} className={`block md:hidden ${mobileMenu ? `absolute top-5 right-2` : `relative`} w-9 h-7 z-40`}>
                        <span className={`absolute left-0 ${mobileMenu ? `top-2/4 -translate-y-2/4 rotate-45 menu-transition--close` : `top-0 menu-transition--open`} w-full h-[2px] bg-gray-700 `
                        }>
                        </span>
                        <span className={`absolute left-0 ${mobileMenu ? `scale-x-0 duration-400` : `scale-x-100 duration-300`} w-full -translate-y-2/4 top-2/4 h-[2px] bg-gray-700 transition delay-200`
                        }></span>
                        <span className={`absolute left-0 ${mobileMenu ? `bottom-2/4 translate-y-2/4 -rotate-45 menu-transition--close` : `bottom-0 menu-transition--open`} w-full h-[2px] bg-gray-700 `
                        }></span>
                    </button>
                </div>
            </div>
            <div className={`mobile-menu-wrap max-h-screen h-full md:h-16 bg-gray-50 top-0 w-full absolute ${mobileMenu ? `translate-x-0` : `hidden`} md:translate-x-0 md:relative z-30`}>
                <div className='max-w-screen-2xl pt-10 md:pt-0 m-auto flex items-center h-full flex-col md:flex-row gap-5 md:gap-0'>
                    {/* <div className='min-w-full md:min-w-[23.63%] px-4 md:bg-primary md:h-full flex items-center justify-center'>
                        <p className='text-gray-500 md:text-white text-2xl md:text-xl'>All Categories</p>
                        <svg className='ml-2 stroke-white' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33317 1.66667L5.99984 6.33334L10.6665 1.66667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div> */}
                    <div className='flex flex-col md:flex-row gap-6 md:gap-3 order-2 md:order-1 mt-8 md:mt-0'>
                        <Link href='/' onClick={() => setMobileMenu(!mobileMenu)}
                            className={`px-4 lg:px-6 text-2xl md:text-base flex items-center cursor-pointer text-gray-500
                     ${pathname === '/' ? 'text-primary' : ''} hover:text-primary`}>
                            <p>Home</p>
                        </Link>
                        <Link href='/categories' onClick={() => setMobileMenu(!mobileMenu)}
                         className={`px-4 lg:px-6 text-2xl md:text-base flex items-center cursor-pointer text-gray-500
                     ${pathname === '/categories' ? 'text-primary' : ''} hover:text-primary`}>
                            <p>Shop</p>
                        </Link>
                        <Link href='/pages' onClick={() => setMobileMenu(!mobileMenu)}
                         className={`px-4 lg:px-6 text-2xl md:text-base flex items-center cursor-pointer text-gray-500
                     ${pathname === '/pages' ? 'text-primary' : ''} hover:text-primary`}>
                            <p>Pages</p>
                        </Link>
                        <Link href='/blogs' onClick={() => setMobileMenu(!mobileMenu)}
                         className={`px-4 lg:px-6 text-2xl md:text-base flex items-center cursor-pointer text-gray-500
                     ${pathname === '/blogs' ? 'text-primary' : ''} hover:text-primary`}>
                            <p>Blog</p>
                        </Link>
                        <Link href='/aboutus' onClick={() => setMobileMenu(!mobileMenu)}
                         className={`px-4 lg:px-6 text-2xl md:text-base flex items-center cursor-pointer text-gray-500
                     ${pathname === '/aboutus' ? 'text-primary' : ''} hover:text-primary`}>
                            <p>About Us</p>
                        </Link>
                        <Link href='/contactus' onClick={() => setMobileMenu(!mobileMenu)}
                         className={`px-4 lg:px-6 text-2xl md:text-base flex items-center cursor-pointer text-gray-500
                     ${pathname === '/contactus' ? 'text-primary' : ''} hover:text-primary`}>
                            <p>Contact Us</p>
                        </Link>
                    </div>
                    <div className='ml-0 md:ml-auto pr-2 md:order-2'>
                        <div className='stroke-green-900 flex gap-8 md:gap-6 items-center'>
                            <Link href='/favourites' className='relative'>
                                <Heart className='w-[32px] h-[32px]' />
                                {favourites.length > 0 ?
                                    (<div className='w-[18px] h-[18px] absolute right-0 top-0 rounded-full flex items-center 
                                    justify-center bg-hard-primary font-medium text-[10px] text-white'>{favourites.length}</div>)
                                    : ''
                                }
                            </Link>
                            <Link href='/cart' className='relative'>
                                <Bucket className='w-[30px] h-[30px]' />
                                {cart.length > 0 ?
                                    (<div className='w-[18px] h-[18px] absolute right-0 top-0 rounded-full flex items-center 
                                    justify-center bg-hard-primary font-medium text-[10px] text-white'>{cart.length}</div>)
                                    : ''
                                }
                            </Link>
                            {
                                userId
                                    ? (<Link href='/profile'>
                                        <User className='w-[32px] h-[32px]' />
                                    </Link>)
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}