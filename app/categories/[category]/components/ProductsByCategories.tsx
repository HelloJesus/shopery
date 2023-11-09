"use client"
import { useStore } from "@/app/providers/StoreProvider";
import { Card } from "./ProductsByCategComp/Card"
import { SortCards } from "./ProductsByCategComp/SortCards";
import { CountProductsByCat, Products } from "@/types/types";

type Props = {
    category: string,
    products: Products | null
    countProductsByCat: CountProductsByCat | null
    countProducts: number | null
}

export const ProductsByCategories = ({ category, countProductsByCat, countProducts, products }: Props) => {
    const { cart, favourites, addToStore, removeFromStore } = useStore()
    const findProductsCount = countProductsByCat?.find(c => c.title === category)

    return ( 
        <div className='w-full max-w-[984px] col-span-12 md:col-span-9 pb-4'>
            <SortCards
                count={countProducts}
            />
            <div className="grid sx:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-6">
                {products?.map((product, i) => <Card
                    product={product}
                    cart={cart}
                    favourites={favourites}
                    addToStore={addToStore}
                    removeFromStore={removeFromStore}
                    key={i}
                />
                )}
            </div>
        </div>
    )
}