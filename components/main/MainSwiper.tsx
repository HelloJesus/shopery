"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ArrowOnSlide from "../../public/images/main/main-swiper/arrowOnSlide.svg"
import DeliveryTrack from "../../public/images/main/delivery-truck1.svg"
import Support from "../../public/images/main/support.svg"
import PaymentSecurity from "../../public/images/main/paymentSecurity.svg"
import Guarantee from "../../public/images/main/guarantee.svg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function MainSwiper() {
    return (
        <div className='w-full relative max-w-[1920px]'>
            <div>
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay, Navigation]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={true}
                    className="absolute h-full main-swiper" >
                    <SwiperSlide className='items-center h-full cursor-default'>
                        <div className='flex items-center h-full justify-center gap-4 m-auto flex-col sm:flex-row'>
                            <Image className='w-auto h-auto min-w-[260px] max-w-[800px]' src={'/images/main/main-swiper/Image.jpg'} alt='fresh food' width={0} height={0} sizes="100vw" />
                            <div className='sm:text-start items-center sm:items-start'>
                                <h1 className='text-xl sm:text-3xl lg:text-5xl font-semibold text-green-900 lg:w-[500px] p-0 mb-3 lg:mb-5'>
                                    Fresh & Healthy
                                    Organic Food
                                </h1>
                                <p className='text-green-500 mb-6 sm:mb-10 text-sm lg:text-base'>Free shipping on all your order. we deliver, you enjoy</p>
                                <Link className='flex m-auto sm:m-0 items-center gap-2 lg:gap-4 w-max bg-primary py-2 lg:py-4 px-6 lg:px-10 text-white text-sm lg:text-base rounded-full' href='/shop'>
                                    Shop now
                                    <ArrowOnSlide />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='items-center h-full cursor-default'>
                        <div className='flex items-center h-full justify-center gap-4 m-auto flex-col sm:flex-row'>
                            <Image className='w-auto h-auto min-w-[260px] max-w-[800px]' src={'/images/main/main-swiper/Image.jpg'} alt='fresh food' width={0} height={0} sizes="100vw" />
                            <div className='sm:text-start items-center sm:items-start'>
                                <h1 className='text-xl sm:text-3xl lg:text-5xl font-semibold text-green-900 lg:w-[500px] p-0 mb-3 lg:mb-5'>
                                    Fresh & Healthy
                                    Organic Food
                                </h1>
                                <p className='text-green-500 mb-6 sm:mb-10 text-sm lg:text-base'>Free shipping on all your order. we deliver, you enjoy</p>
                                <Link className='flex m-auto sm:m-0 items-center gap-2 lg:gap-4 w-max bg-primary py-2 lg:py-4 px-6 lg:px-10 text-white text-sm lg:text-base rounded-full' href='/shop'>
                                    Shop now
                                    <ArrowOnSlide />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='items-center h-full cursor-default'>
                        <div className='flex items-center h-full justify-center gap-4 m-auto flex-col sm:flex-row'>
                            <Image className='w-auto h-auto min-w-[260px] max-w-[800px]' src={'/images/main/main-swiper/Image.jpg'} alt='fresh food' width={0} height={0} sizes="100vw" />
                            <div className='sm:text-start items-center sm:items-start'>
                                <h1 className='text-xl sm:text-3xl lg:text-5xl font-semibold text-green-900 lg:w-[500px] p-0 mb-3 lg:mb-5'>
                                    Fresh & Healthy
                                    Organic Food
                                </h1>
                                <p className='text-green-500 mb-6 sm:mb-10 text-sm lg:text-base'>Free shipping on all your order. we deliver, you enjoy</p>
                                <Link className='flex m-auto sm:m-0 items-center gap-2 lg:gap-4 w-max bg-primary py-2 lg:py-4 px-6 lg:px-10 text-white text-sm lg:text-base rounded-full' href='/shop'>
                                    Shop now
                                    <ArrowOnSlide />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='pb-12 lg:pb-[170px] relative'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl mt-10 lg:mt-0 justify-center lg:absolute top-full left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full px-2'>
              <div className='p-6 xl:p-10 hover:bg-primary group duration-200 border-[1px] hover:border-primary bg-white border-green-100 rounded-l-lg'>
                <div className='w-[70px] h-[70px] bg-white flex items-center rounded-full justify-center border-[1px] border-green-100 mb-4'>
                  <DeliveryTrack />
                </div>
                <div>
                  <p className='group-hover:text-white lg:text-lg font-semibold mb-2'>Free Shipping</p>
                  <p className='group-hover:text-white text-sm'>Free shipping with discount</p>
                </div>
              </div>
              <div className='p-6 xl:p-10 hover:bg-primary group duration-200 border-t-[1px] border-b-[1px] border-r-[1px] hover:border-primary bg-white border-green-100'>
                <div className='w-[70px] h-[70px] bg-white flex items-center rounded-full justify-center border-[1px] border-green-100 mb-4'>
                  <Support />
                </div>
                <div>
                  <p className='group-hover:text-white lg:text-lg font-semibold mb-2'>Great Support 24/7</p>
                  <p className='group-hover:text-white text-sm'>Instant access to Contact</p>
                </div>
              </div>
              <div className='p-6 xl:p-10 hover:bg-primary group duration-200 border-t-[1px] border-b-[1px] hover:border-primary bg-white border-green-100'>
                <div className='w-[70px] h-[70px] bg-white flex items-center rounded-full justify-center border-[1px] border-green-100 mb-4'>
                  <PaymentSecurity />
                </div>
                <div>
                  <p className='group-hover:text-white lg:text-lg font-semibold mb-2'>100% Sucure Payment</p>
                  <p className='group-hover:text-white text-sm'>We ensure your money is save</p>
                </div>
              </div>
              <div className='p-6 xl:p-10 hover:bg-primary group duration-200 border-[1px] hover:border-primary border-green-100 bg-white rounded-r-lg'>
                <div className='w-[70px] h-[70px] bg-white flex items-center rounded-full justify-center border-[1px] border-green-100 mb-4'>
                  <Guarantee />
                </div>
                <div>
                  <p className='group-hover:text-white lg:text-lg font-semibold mb-2'>Money-Back Guarantee</p>
                  <p className='group-hover:text-white text-sm'>30 days money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}