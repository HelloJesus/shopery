"use client"
import { getProductsByFavourite } from "@/Actions/getProducts"
import { useStore } from "@/app/providers/StoreProvider"
import { Products } from "@/types/types"
import Image from "next/image"
import { useEffect, useState } from "react"
import CloseFav from "/public/images/all/closeFav.svg"
import { Socials } from "@/app/categories/[category]/[id]/components/ProductBody/Socials"


export const Table = () => {
    const { cart, favourites: favouritesState, removeFromStore, addToStore } = useStore()
    const [products, setProducts] = useState<Products | null>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (favouritesState.length > 0) {
            const getProducts = async () => {
                const { products } = await getProductsByFavourite(favouritesState)
                setProducts(products)
                setIsLoading(false)
            }

            getProducts()
        }
    }, [favouritesState])

    return (
        <table className="w-full m-auto min-w-[650px] border-separate border-spacing-0	">
            <thead>
                <tr>
                    <th className="text-gray-500 px-2 py-2 text-sm uppercase font-normal text-start rounded-tl-lg border-l border-t border-b border-gray-100">Product</th>
                    <th className="text-gray-500 px-2 py-2 text-sm uppercase font-normal text-start border-t border-b border-gray-100">Price</th>
                    <th className="text-gray-500 px-2 py-2 text-sm uppercase font-normal text-start border-t border-b border-gray-100">Stock Status</th>
                    <th className="rounded-tr-lg border-r border-t border-b border-gray-100 py-2 px-2"></th>
                </tr>
            </thead>
            <tbody>
                {products?.map((product, index) => {
                    const cartExist = cart.some((found) => found === product.id.toString())

                    return (
                        <tr key={index}>
                            <td className="border-l border-gray-100 p-0 pl-3">
                                <div className="flex gap-3 lg:gap-5 items-center border-b  border-gray-100">
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
                                        ${product.price}
                                    </p>
                                </div>
                            </td>
                            <td className="md:w-1/6 px-2 p-0 border-b border-gray-100">
                                {product.countExist && product.countExist > 0
                                    ?
                                    <div className="py-1 px-2 w-max rounded text-hard-primary text-sm bg-primary/20">
                                        In Stock
                                    </div>
                                    :
                                    <div className="py-1 px-2 w-max rounded text-hard-danger text-sm bg-danger/20">
                                        Out of Stock
                                    </div>
                                }
                            </td>
                            <td className="border-r border-gray-100 md:w-1/5 p-0 pr-3 h-[100px] ">
                                <div className="flex items-center gap-5 justify-end border-b border-gray-100 h-full">
                                    <button onClick={() => addToStore('cart', product.id)}
                                        className={`py-3 px-4 lg:px-8 ${cartExist ? 'bg-gray-50 text-gray-300' : 'bg-primary text-white'}  
                                        text-sm font-semibold rounded-full w-max`}
                                        disabled={cartExist ? true : false}>
                                        Add to Cart
                                    </button>
                                    <button onClick={() => removeFromStore('favourites', product.id)}>
                                        <CloseFav />
                                    </button>
                                </div>
                            </td>
                        </tr >
                    )
                })}

            </tbody>

        </table >
    )
}