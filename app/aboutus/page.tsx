import GreatSupport from "/public/images/all/greatSupport.svg"
import CustomFeedback from "/public/images/all/customFeedback.svg"
import SecurePayment from "/public/images/all/securePayment.svg"
import FreeShipping from "/public/images/all/freeShipping.svg"
import OrganicFood2 from "/public/images/all/organicFood2.svg"
import OrganicFoodIcon from "/public/images/all/organic-food-icon.svg"
import GreenArrowIcon from "/public/images/all/greenArrowIcon.svg"

import Image from "next/image";

export default function Aboutus() {
    return (
        <div className=" m-auto">
            <div className="m-auto max-w-[1365px] px-2 flex flex-col flex-col-reverse md:flex-row items-center gap-5 lg:gap-10 pt-5 pb-8 md:py-10 lg:py-20">
                <div className="lg:max-w-[600px]">
                    <h1 className="text-gray-900 text-xl md:text-2xl lg:text-4xl mb-4 lg:mb-6 font-semibold">100% Trusted Organic Food Store</h1>
                    <p className="text-gray-600 text-base lg:text-lg">
                        Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                    </p>
                </div>
                <div>
                    <Image className="md:min-w-[400px]" src='/images/all/aboutus1.jpg' width={716} height={492} alt='trusted' />
                </div>
            </div>
            <div className="organic-food-section ">
                <div className="max-w-[1365px] m-auto px-2 flex">
                    <div className="">
                        <Image className="organic-food-section__img" src='/images/all/organic-food-img.png' width={745} height={685} alt='trusted' />
                    </div>
                    <div className="pt-5 pb-8 md:py-10 lg:py-20 lg:max-w-[650px] mr-auto ml-auto lg:ml-auto lg:mr-0">
                        <h1 className="text-green-900 text-xl md:text-2xl lg:text-4xl mb-6 font-semibold">
                            100% Trusted
                            Organic Food Store
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg mb-6">
                            Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <div className="flex gap-4 items-center">
                                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-primary/10">
                                    <OrganicFoodIcon />
                                </div>
                                <div className="flex flex-col">
                                    <p className="mb-2 text-gray-900 font-medium text-lg">100% Organic food</p>
                                    <p className="text-gray-500 text-sm">100% healthy & Fresh food.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-primary/10">
                                    <GreatSupport />
                                </div>
                                <div className="flex flex-col">
                                    <p className="mb-2 text-gray-900 font-medium text-lg">Great Support 24/7</p>
                                    <p className="text-gray-500 text-sm">Instant access to Contact</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-primary/10">
                                    <CustomFeedback />
                                </div>
                                <div className="flex flex-col">
                                    <p className="mb-2 text-gray-900 font-medium text-lg">Customer Feedback</p>
                                    <p className="text-gray-500 text-sm">Our happy customer</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-primary/10">
                                    <SecurePayment />
                                </div>
                                <div className="flex flex-col">
                                    <p className="mb-2 text-gray-900 font-medium text-lg">100% Sucure Payment</p>
                                    <p className="text-gray-500 text-sm">We ensure your money is save</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-primary/10">
                                    <FreeShipping />
                                </div>
                                <div className="flex flex-col">
                                    <p className="mb-2 text-gray-900 font-medium text-lg">Free Shipping</p>
                                    <p className="text-gray-500 text-sm">Free shipping with discount</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-primary/10">
                                    <OrganicFood2 />
                                </div>
                                <div className="flex flex-col">
                                    <p className="mb-2 text-gray-900 font-medium text-lg">100% Organic Food</p>
                                    <p className="text-gray-500 text-sm">100% healthy & Fresh food.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto max-w-[1365px] px-2 flex flex-col flex-col-reverse md:flex-row items-center gap-5 lg:gap-10 pt-5 pb-8 md:py-10 lg:py-20">
                <div className="lg:max-w-[600px]">
                    <h1 className="text-gray-900 text-xl md:text-2xl lg:text-4xl mb-4 lg:mb-6 font-semibold">
                        We Delivered, You Enjoy Your Order.
                    </h1>
                    <p className="text-gray-600 text-base lg:text-lg mb-5">
                        Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
                    </p>
                    <div>
                        <div className="flex gap-2 mb-4">
                            <div className="min-w-[20px] h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                <GreenArrowIcon />
                            </div>
                            <p className="text-sm text-gray-600">Sed in metus pellentesque.</p>
                        </div>
                        <div className="flex gap-2 mb-4">
                            <div className="min-w-[20px] h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                <GreenArrowIcon />
                            </div>
                            <p className="text-sm text-gray-600">Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
                        </div>
                        <div className="flex gap-2 mb-4">
                            <div className="min-w-[20px] h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                <GreenArrowIcon />
                            </div>
                            <p className="text-sm text-gray-600">Maecenas ut nunc fringilla erat varius.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image className="md:min-w-[400px]" src='/images/all/aboutusDelivery.png' width={895} height={606} alt='delivery' />
                </div>
            </div>
        </div >
    )
}