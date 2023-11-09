"use client"
import { useEffect, useState } from "react"
import { Filter } from "../[category]/components/Filter"
import { ProductsByCategories } from "../[category]/components/ProductsByCategories"
import { getCountProducts, getProducts } from "@/Actions/getProducts"
import { SearchParams } from "@/types/SearchParams"
import { CountProductsByCat, Products } from "@/types/types"
import { HeaderRoad } from "./HeaderRoad"

type Props = {
    category: string,
    countAllProducts?: number
    searchParams: SearchParams
}

export const Main = ({ category, searchParams }: Props) => {
    const [products, setProducts] = useState<Products | null>(null)
    const [countProducts, setCountProducts] = useState<number | null>(0)
    const [countProductsByCat, setCountProductsByCat] = useState<CountProductsByCat | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
            try {
                const { products, countProducts } = await getProducts(category, searchParams)
                if (products) {
                    setProducts(products)
                    setCountProducts(countProducts)
                }
            } catch (err) {
                console.log(err)
            }
        }

        const getCountProductsByCat = async () => {
            try {
                const { countProductsByCat } = await getCountProducts(searchParams)
                if (countProductsByCat) {
                    setCountProductsByCat(countProductsByCat)
                }

            } catch (err) {
                console.log(err)
            }
        }

        getData()
        getCountProductsByCat()

        setIsLoading(false)
    }, [category, searchParams])

    return (
        <>
            <HeaderRoad category={category}/>
            <Filter category={category} countProductsByCat={countProductsByCat} />
            <ProductsByCategories
                category={category}
                products={products}
                countProducts={countProducts}
                countProductsByCat={countProductsByCat}
            />
        </>
    )
}