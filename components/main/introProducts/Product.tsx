'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ReviewStar from "/public/images/all/review-star.svg"
import Bucket from "/public/images/main/bucket.svg"
import Eye from "/public/images/main/Eye1.svg"
import Heart from "/public/images/main/heart.svg"
import { FavoriteBtn } from "../FavoriteBtn"
import { CartBtn } from "../CartBtn"
import { useCart } from "@/hooks/useCart"
import { useStore } from "@/app/providers/StoreProvider"
import { useModalProduct } from "@/app/providers/ModalProvider"
import { ProductModal } from "@/components/modals/ProductModal"


interface Props {
    category: string
}

type Product = Array<{
    category_id: number | null;
        countExist: number | null;
        created_at: string;
        desc: string | null;
        id: number;
        img: string | null;
        price: number | null;
        review: number | null;
        title: string | null;
        imgUrl: string | null;
        categories?: {
            id: number;
            title: string;
        } | null | undefined;
}>


export const Product = ({ category }: Props) => {
    const [products, setProducts] = useState<Product | null>([])
    const [isLoading, setIsLoading] = useState(true)
    const { cart, favourites, addToStore, removeFromStore } = useStore();
    const { openModal, hideModal } = useModalProduct()

    const productsLoading = Array.from(Array(8).keys())

    useEffect(() => {
        setIsLoading(true)
        const supabase = createClientComponentClient()
        const getData = async () => {
            const { data: products } = await supabase.from('products')
                .select(`*, ${category === '' ? 'categories (*)' : 'categories!inner(*)'}`)
                .eq('categories.title', category)
                .range(0, 7)

            products?.map((product) => {
                const { data: productImg } = supabase.storage.from('products').getPublicUrl(`images/${product.img}`)
                product.imgUrl = productImg.publicUrl
            })
            setProducts(products)
            setIsLoading(false)
        }
        getData()
    }, [category])

    return (
        <>
            {isLoading === true && products ?
                productsLoading.map((index) => {
                    return (
                        <div className="p-3 lg:p-5 bg-white max-w-[330px]" key={index}>
                            <div className="max-w-[300px] w-full pb-[100%] card__image">

                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <div className="w-full mr-10">
                                    <p className="card__p w-full h-[20px] lg:h-[24px]"></p>
                                    <p className="card__p h-[24px] mt-1"></p>
                                    <div className="flex gap-0.5 mt-3">
                                        <ReviewStar className='fill-gray-200' />
                                        <ReviewStar className='fill-gray-200' />
                                        <ReviewStar className='fill-gray-200' />
                                        <ReviewStar className='fill-gray-200' />
                                        <ReviewStar className='fill-gray-200' />
                                    </div>
                                </div>
                                <button className="min-w-[48px] h-12 rounded-full flex card__p"></button>
                            </div>
                        </div>
                    )
                })

                :
                products?.map(p => {
                    return (
                        <div className="group/other max-w-[330px] p-3 lg:p-5 bg-white border-gray-100 border-[1px] hover:border-hard-primary hover:shadow-[0_0px_10px_0px_rgba(32,181,38,0.32)] hover:z-10" key={p.id}>
                            <div className="max-w-[302px] w-full pb-[100%] relative">
                                <Image src={p.imgUrl ? p.imgUrl : ''} alt={p.title ? p.title : ''} priority={true} fill={true} sizes="(max-width: 768px) 100vw" />
                                <FavoriteBtn id={p.id} removeFromStore={removeFromStore} addToStore={addToStore} favourites={favourites} />
                                <button onClick={() => openModal(<ProductModal product={p} category={category} />)}
                                className="absolute top-[54px] right-0 w-10 sm:w-12 h-10 sm:h-12 rounded-full border-[1px] border-gray-50 
                                justify-center items-center hidden group-hover/other:flex bg-white hover:bg-primary hover:border-primary hover:stroke-white stroke-green-900">
                                    <Eye  />
                                </button>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <div>
                                    <p className="text-sm lg:text-base text-green-700">{p.title}</p>
                                    <p className="text-base lg:text-lg font-medium text-green-900">
                                        <span>$</span>{p.price}
                                    </p>
                                    <div className="flex gap-0.5 mt-3">
                                        <ReviewStar className={p.review && p.review > 0 ? 'fill-warning' : 'fill-gray-200'} />
                                        <ReviewStar className={p.review && p.review > 1 ? 'fill-warning' : 'fill-gray-200'} />
                                        <ReviewStar className={p.review && p.review > 2 ? 'fill-warning' : 'fill-gray-200'} />
                                        <ReviewStar className={p.review && p.review > 3 ? 'fill-warning' : 'fill-gray-200'} />
                                        <ReviewStar className={p.review && p.review > 4 ? 'fill-warning' : 'fill-gray-200'} />
                                    </div>
                                </div>
                                <CartBtn id={p.id} removeFromStore={removeFromStore} addToStore={addToStore} cart={cart} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}