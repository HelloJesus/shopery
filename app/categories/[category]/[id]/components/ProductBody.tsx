"use client"
import { Products } from "@/types/types"
import ReviewStar from "/public/images/all/review-star.svg"
import Image from "next/image"
import { CounterProducts } from "./ProductBody/CounterProducts"
import { useEffect, useState } from "react"
import { Socials } from "./ProductBody/Socials"
import { CartBtn } from "./ProductBody/CartBtn"
import { FavBtn } from "./ProductBody/FavBtn"

type Props = {
    category?: string
    product: Products
}

export const ProductBody = ({ category, product }: Props) => {
    const [counter, setCounter] = useState(1)
    const [price, setPrice] = useState<number | string | null>(product[0].price)

    useEffect(() => {
        if (!product[0].price) return
        const newPrice = (product[0].price * counter).toFixed(2)
        setPrice(newPrice)
    }, [product, counter])

    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 flex justify-center">
                    <div className="w-[302px] md:w-[459px]">
                        {product[0].imgUrl && product[0].title ?
                            (< Image className="w-full" src={product[0].imgUrl} width={0} height={0} sizes="100vw" alt={product[0].title}
                                />)
                            : ''
                        }
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="border-b-[1px] border-b-gray-50 pb-3 lg:pb-5">
                        <h2 className="text-gray-900 text-2xl md:text-4xl mb-3 font-medium">
                            {product[0].title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 lg:gap-5">
                            <div className="flex gap-0.5">
                                <ReviewStar className={product[0].review && product[0].review > 0 ? 'fill-warning' : 'fill-gray-200'} />
                                <ReviewStar className={product[0].review && product[0].review > 1 ? 'fill-warning' : 'fill-gray-200'} />
                                <ReviewStar className={product[0].review && product[0].review > 2 ? 'fill-warning' : 'fill-gray-200'} />
                                <ReviewStar className={product[0].review && product[0].review > 3 ? 'fill-warning' : 'fill-gray-200'} />
                                <ReviewStar className={product[0].review && product[0].review > 4 ? 'fill-warning' : 'fill-gray-200'} />
                            </div>
                            <div>
                                <p className="text-gray-800 text-sm font-medium">SKU:
                                    <span className="text-gray-600 text-sm font-normal ml-1">
                                        {product[0].id}
                                    </span>
                                </p>
                            </div>
                            <div className="w-full">
                                <span className="text-hard-primary text-2xl font-medium">
                                    ${price}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between py-3 lg:py-6 border-b-[1px] border-b-gray-50">
                        <span className="text-gray-900 text-sm">Brand:</span>
                        <Socials />
                        <div className="text-gray-500 text-sm flex-auto">
                            {product[0].desc}
                        </div>
                    </div>
                    <div className="py-3 lg:py-5 flex flex-wrap sx:flex-nowrap gap-3 border-b-[1px] border-b-gray-50">
                        <CounterProducts counter={counter} setCounter={setCounter} productCount={product[0].countExist} />
                        <CartBtn id={product[0].id} />
                        <FavBtn id={product[0].id} />
                    </div>
                    <div className="py-3 lg:py-5">
                        <p className="text-gray-500 text-sm">
                            <span className="text-gray-900 font-medium mr-2">Category:</span>
                            {category}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}