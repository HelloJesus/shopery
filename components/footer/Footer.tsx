import Image from 'next/image';
import Link from 'next/link';
import Twitter from "../../public/images/footer/twitter.svg"
import Facebook from "../../public/images/footer/facebook.svg"
import Pinterest from "../../public/images/footer/pinterest.svg"
import Instagram from "../../public/images/footer/instagram.svg"

export default function Footer() {
    return (
        <div className="border-t-2 border-gray-100 font-poppins">
            <div className='px-2 w-full bg-gray-50'>
                <div className='max-w-screen-2xl m-auto flex items-center py-8 lg:py-10 gap-5 justify-center flex-wrap	lg:flex-nowrap'>
                    <Image className='w-[143px] md:w-[183px]' src={'/images/header/Logo.svg'} alt='logo' width={183} height={20} />
                    <div className='flex flex-col min-w-[300px]'>
                        <p className='text-gray-900 font-medium text-xl md:text-2xl'>Subcribe our Newsletter</p>
                        <p className='text-green-400 text-sm'>Pellentesque eu nibh eget mauris congue mattis matti.</p>
                    </div>
                    <div className='rounded-full w-full max-w-[450px] md:max-w-[535px] bg-white pl-4 md:pl-6 pr-40 py-2 md:py-3 relative overflow-hidden'>
                        <input type="text" placeholder='Your email address' className='placeholder:text-green-500 outline-none' />
                        <button className='bg-primary h-full absolute right-0 top-0 text-white px-5 md:px-10'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-2 bg-green-900'>
                <div className='max-w-screen-2xl gap-3 py-10 lg:py-24 m-auto flex justify-between flex-wrap lg:flex-nowrap'>
                    <div className='max-w-auto lg:max-w-[336px] mb-2 lg:mb-0'>
                        <div>
                            <p className='text-lg text-white'>
                                About Shopery
                            </p>
                        </div>
                        <div>
                            <p className='text-green-500 text-sm my-4'>
                                Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
                            </p>
                        </div>
                        <div>
                            <Link href="#" className='relative text-white text-sm after:content-[""]
                             after:absolute after:w-full after:h-[2px] after:bg-primary
                             after:left-0 after:bottom-[-10px]'>(219) 555-0114</Link>
                            <span className='text-green-500 mx-4'>or</span>
                            <Link href="mailto:#" className='relative text-white text-sm after:content-[""]
                             after:absolute after:w-full after:h-[2px] after:bg-primary
                             after:left-0 after:bottom-[-10px]'>Proxy@gmail.com</Link>
                        </div>
                    </div>
                    <div className='w-[32%] lg:w-auto'>
                        <p className='text-lg text-white mb-5'>My Account</p>
                        <ul>
                            <li className='mb-3 text-sm text-green-400 hover:text-white cursor-pointer'>
                                <Link href="#">
                                    My Account
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white cursor-pointer'>
                                <Link href="#">
                                    Order History
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white'>
                                <Link href="#">
                                    Shoping Cart
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white'>
                                <Link href="#">
                                    Wishlist
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white'>
                                <Link href="#">
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </div >
                    <div className='w-[32%] lg:w-auto'>
                        <p className='text-lg text-white mb-5'>Helps</p>
                        <ul>
                            <li className='mb-3 text-sm text-green-400 hover:text-white cursor-pointer'>
                                <Link href="#">
                                    Contact
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white cursor-pointer'>
                                <Link href="#">
                                    Faqs
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white'>
                                <Link href="#">
                                    Terms & Condition
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white'>
                                <Link href="#">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-[32%] lg:w-auto'>
                        <p className='text-lg text-white mb-5'>Proxy</p>
                        <ul>
                            <li className='mb-3 text-sm text-green-400 hover:text-white cursor-pointer'>
                                <Link href="#">
                                    About
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white cursor-pointer'>
                                <Link href="#">
                                    Shop
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white'>
                                <Link href="#">
                                    Product
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white'>
                                <Link href="#">
                                    Products Details
                                </Link>
                            </li>
                            <li className='mb-3 text-sm text-green-400 hover:text-white'>
                                <Link href="#">
                                    Track Order
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-lg text-white mb-5 '>Instagram</p>
                        <div className='grid grid-cols-4 gap-3'>
                            <Link href="#">
                                <Image className='rounded-[5px]' width={69} height={69} src="/images/header/image.jpg" alt="instagram" />
                            </Link>
                            <Link href="#">
                                <Image className='rounded-[5px]' width={69} height={69} src="/images/header/image-1.jpg" alt="instagram" />
                            </Link>
                            <Link href="#">
                                <Image className='rounded-[5px]' width={69} height={69} src="/images/header/image-2.jpg" alt="instagram" />
                            </Link>
                            <Link href="#">
                                <Image className='rounded-[5px]' width={69} height={69} src="/images/header/image-3.jpg" alt="instagram" />
                            </Link>
                            <Link href="#">
                                <Image className='rounded-[5px]' width={69} height={69} src="/images/header/image-4.jpg" alt="instagram" />
                            </Link>
                            <Link href="#">
                                <Image className='rounded-[5px]' width={69} height={69} src="/images/header/image-5.jpg" alt="instagram" />
                            </Link>
                            <Link href="#">
                                <Image className='rounded-[5px]' width={69} height={69} src="/images/header/image-6.jpg" alt="instagram" />
                            </Link>
                            <Link href="#">
                                <Image className='rounded-[5px]' width={69} height={69} src="/images/header/image-7.jpg" alt="instagram" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='max-w-screen-2xl m-auto border-t-2 border-green-800 py-6 flex justify-center lg:justify-between items-center gap-3 flex-wrap'>
                    <div className='flex gap-2'>
                        <Link className='group w-10 h-10 hover:bg-primary rounded-full flex justify-between items-center duration-300' href="#">
                            <Facebook className="fill-green-300 group-hover:fill-white duration-300 m-auto" />
                        </Link>
                        <Link className='group w-10 h-10 hover:bg-primary rounded-full flex justify-between items-center duration-300' href="#">
                            <Twitter className="fill-green-300 group-hover:fill-white duration-300 m-auto" />
                        </Link>
                        <Link className='group w-10 h-10 hover:bg-primary rounded-full flex justify-between items-center duration-300' href="#">
                            <Pinterest className="fill-green-300 group-hover:fill-white duration-300 m-auto" />
                        </Link>
                        <Link className='group w-10 h-10 hover:bg-primary rounded-full flex justify-between items-center duration-300' href="#">
                            <Instagram className="fill-green-300 group-hover:fill-white duration-300 m-auto" />
                        </Link>
                    </div>
                    <div>
                        <p className='text-white text-green-500'>
                            Shopery eCommerce &copy; 2021. All Rights Reserved
                        </p>
                    </div>
                    <div className='flex  gap-2'>
                        <div className='w-[57px] min-h-[31px] px-2 py-1 border-green-800 border-2 rounded-md flex items-center justify-center'>
                            <Image className='' src={'/images/footer/ApplePay.svg'} alt='applePay' width={0} height={0}  sizes='100vw' style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className='w-[57px] min-h-[31px] px-2 py-1 border-green-800 border-2 rounded-md flex items-center justify-center'>
                            <Image className='' src={'/images/footer/visa-logo.svg'} alt='visa' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className='w-[57x] min-h-[31px] pl-2 border-green-800 border-2 rounded-md flex items-end'>
                            <Image className='' src={'/images/footer/Discover.svg'} alt='discover' width={0} height={0}  sizes='100vw' style={{ width: '100%', height: '25px' }}/>
                        </div>
                        <div className='w-[57px] min-h-[31px] px-2 py-1 border-green-800 border-2 rounded-md flex items-center justify-center'>
                            <Image className='' src={'/images/footer/Mastercard.svg'} alt='mastercard' width={0} height={0}  sizes='100vw' style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className='min-w-[45px] min-h-[31px] px-2 py-1 border-green-800 border-2 rounded-md flex flex-col items-center'>
                            <div className='flex gap-[2px] items-center'>
                                <Image className='' src={'/images/footer/lock.svg'} alt='lock' width={11} height={11} />
                                <span className='text-[9px] text-white'>Secure</span>
                            </div>
                            <span className='text-[11px] text-white font-semibold'>Payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}