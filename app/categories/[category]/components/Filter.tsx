"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import { Category } from './FilterComponents/Category'
import { useState } from 'react'
import { RangePrice } from './FilterComponents/RangePrice'
import { Rating } from './FilterComponents/Rating'

type searchParams = {
    rangePrice?: string,
    rating?: string
} | any

type Props = {
    category: string
    countProductsByCat : {
        id: number
        title: string
        products: {
            count: number | null;
        }[]
    }[] | null
}

export const Filter = ({ category, countProductsByCat }: Props) => {
    const searchParams = useSearchParams()
    const [openFilter, setOpenFilter] = useState<boolean>(false)
    const [queryCategory, setQueryCategory] = useState<string>(category)
    const [queryRangePrice, setQueryRangePrice] = useState<string[]>(searchParams?.get('rangePrice')?.split('-') || ['0', '1000'])
    const [queryRating, setQueryRating] = useState<string[]>(searchParams?.get('rating')?.split(',') || ['1', '2', '3', '4', '5'])
    const router = useRouter()

    const filter = () => {
        const params = new URLSearchParams(searchParams)

        params.set('rangePrice', `${queryRangePrice[0]}-${queryRangePrice[1]}`)
        params.set('rating', queryRating.toString())

        if (queryRating.length === 0) {
            params.delete('rating')
        }

        router.push(`/categories${`/${queryCategory}`}${`?${params.toString()}`}`)
    }
    
    return (
        <div className="flex flex-col gap-4 w-full px-2 md:px-0 md:max-w-[321px] min-w-[170px] col-span-12 md:col-span-3 m-auto md:m-0">
            <button className='px-8 py-4 bg-primary text-sm font-semibold 
            text-white w-max m-auto rounded-full md:hidden z-10' onClick={() => setOpenFilter(!openFilter)}>Filter</button>
            <div className={`overflow-hidden border-b-2 md:border-b-0 border-gray-100 md:max-h-full md:visible ${openFilter ? 'max-h-[628px] visible' : 'max-h-[0px] invisible'} duration-300`}>
                <button className='m-auto block' onClick={filter}>Apply</button>
                <Category queryCategory={queryCategory} setQueryCategory={setQueryCategory} countProductsByCat={countProductsByCat}/>
                <RangePrice queryRangePrice={queryRangePrice} setQueryRangePrice={setQueryRangePrice} />
                <Rating queryRating={queryRating} setQueryRating={setQueryRating} />
            </div>
        </div>
    )
}