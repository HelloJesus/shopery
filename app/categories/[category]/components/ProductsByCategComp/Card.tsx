'use client'

import { useStore } from "@/app/providers/StoreProvider"
import Image from "next/image";
import Link from "next/link"
import ReviewStar from "/public/images/all/review-star.svg"
import Eye from "/public/images/main/Eye1.svg"
import { FavoriteBtn } from "@/components/main/FavoriteBtn"
import { CartBtn } from "@/components/main/CartBtn";
import { useModalProduct } from "@/app/providers/ModalProvider";
import { ProductModal } from "@/components/modals/ProductModal";


export const Card = ({ product, cart, favourites, addToStore, removeFromStore }: any) => {
    const { openModal, hideModal } = useModalProduct()
    return (
        <div className="group/other rounded-md min-w-[190px] md:max-w-[330px] p-3 lg:p-5 bg-white border-gray-100 border-[1px] hover:border-hard-primary hover:shadow-[0_0px_10px_0px_rgba(32,181,38,0.32)] hover:z-10" key={product.id}>
            <div className="sm:max-w-[302px] w-full pb-[100%] relative">
                <Image src={product.imgUrl} alt={product.title} priority={true} fill={true} sizes="(max-width: 768px) 100vw" />
                <FavoriteBtn id={product.id} removeFromStore={removeFromStore} addToStore={addToStore} favourites={favourites} />
                <button onClick={() => openModal(<ProductModal product={product} category={product.categories.title}/>)} className="absolute top-[54px] right-0 w-10 sm:w-12 h-10 sm:h-12 rounded-full border-[1px] border-gray-50 
                                justify-center items-center hidden group-hover/other:flex bg-white hover:bg-primary hover:border-primary hover:stroke-white stroke-green-900">
                    <Eye />
                </button>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <div>
                    <p className="text-sm lg:text-base text-green-700">{product.title}</p>
                    <p className="text-base lg:text-lg font-medium text-green-900">
                        <span>$</span>{product.price}
                    </p>
                    <div className="flex gap-0.5 mt-3">
                        <ReviewStar className={product.review > 0 ? 'fill-warning' : 'fill-gray-200'} />
                        <ReviewStar className={product.review > 1 ? 'fill-warning' : 'fill-gray-200'} />
                        <ReviewStar className={product.review > 2 ? 'fill-warning' : 'fill-gray-200'} />
                        <ReviewStar className={product.review > 3 ? 'fill-warning' : 'fill-gray-200'} />
                        <ReviewStar className={product.review > 4 ? 'fill-warning' : 'fill-gray-200'} />
                    </div>
                </div>
                <CartBtn id={product.id} removeFromStore={removeFromStore} addToStore={addToStore} cart={cart} />
            </div>
        </div>
    )
}