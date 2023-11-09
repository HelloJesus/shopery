"use client"
import { getProductsByFavourite } from "@/Actions/getProducts"
import { useStore } from "@/app/providers/StoreProvider"
import { Products } from "@/types/types"
import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import CloseFav from "/public/images/all/closeFav.svg"
import { Socials } from "@/app/categories/[category]/[id]/components/ProductBody/Socials"

type Props = {
    setTotalPrice: Dispatch<SetStateAction<string>>
}

export const Table = ({ setTotalPrice }: Props) => {
    const { cart, favourites: favouritesState, removeFromStore, addToStore } = useStore()
    const [products, setProducts] = useState<Products | null>([])
    const [isLoading, setIsLoading] = useState(true)
    const productsLoading = Array.from(Array(4).keys())

    useEffect(() => {
        if (cart.length > 0) {
            const getProducts = async () => {
                
                const { products } = await getProductsByFavourite(cart)
                
                let sumPrice = 0

                products.map(product => {
                    if (!product.price) return
                    sumPrice += product.price
                })
                setTotalPrice(sumPrice.toFixed(2))
                setProducts(products)
            }

            getProducts()
            setIsLoading(false)
        }
    }, [cart])

    return (
        <table className="w-full m-auto min-w-[450px] max-w-[872px] border-separate border-spacing-0	">
            <thead>
                <tr>
                    <th className="text-gray-500 px-2 py-2 text-sm uppercase font-normal text-start rounded-tl-lg border-l border-t border-b border-gray-100">Product</th>
                    <th className="text-gray-500 px-2 py-2 text-sm uppercase font-normal text-start border-t border-b border-gray-100">Price</th>
                    <th className="rounded-tr-lg border-r border-t border-b border-gray-100 py-2 px-2"></th>
                </tr>
            </thead>
            <tbody>
                {isLoading
                    ?
                    productsLoading?.map((index) => {
                        return (
                            <tr key={index}>
                                <td className="border-l border-gray-100 p-0 pl-3">
                                    <div className="flex gap-3 lg:gap-5 items-center border-b  border-gray-100 py-2">
                                        <div className="card__image w-[100px] h-[100px]"></div>
                                        <p className="card__p h-[24px] w-40">
                                        </p>
                                    </div>
                                </td>
                                <td className="md:w-1/5 align-center p-0 border-b border-gray-100">
                                    <div className="flex items-center px-2 align-center">
                                        <p className="card__p h-[24px]  w-28">
                                        </p>
                                    </div>
                                </td>
                                <td className="border-r border-gray-100 md:w-1/5 p-0 pr-3 h-[100px] ">
                                    <div className="flex items-center gap-5 justify-end border-b border-gray-100 h-full">
                                        <button>
                                            <CloseFav />
                                        </button>
                                    </div>
                                </td>
                            </tr >
                        )
                    })
                    :
                    products?.map((product, index) => {
                        const cartExist = cart.some((found) => found === product.id.toString())

                        return (
                            <tr key={index}>
                                <td className="border-l border-gray-100 p-0 pl-3">
                                    <div className="flex gap-3 lg:gap-5 items-center border-b  border-gray-100  py-2">
                                        <Image src={product.imgUrl || ''}
                                            width={100} height={100} alt={product.title || ''}></Image>
                                        <p className="text-gray-900">
                                            {product.title}
                                        </p>
                                    </div>
                                </td>
                                <td className="md:w-1/5 align-center p-0 border-b border-gray-100">
                                    <div className="flex items-center px-2 align-center">
                                        <p className="text-gray-900 font-medium ">
                                            ${product.price?.toFixed(2)}
                                        </p>
                                    </div>
                                </td>
                                <td className="border-r border-gray-100 md:w-1/5 p-0 pr-3 h-[100px] ">
                                    <div className="flex items-center gap-5 justify-end border-b border-gray-100 h-full">
                                        <button onClick={() => removeFromStore('cart', product.id)}>
                                            <CloseFav />
                                        </button>
                                    </div>
                                </td>
                            </tr >
                        )
                    })
                }



            </tbody>

        </table >
    )
}