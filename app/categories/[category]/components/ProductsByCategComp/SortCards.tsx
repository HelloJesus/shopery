"use client"
import { useCallback, useState } from "react"
import Arrow from "/public/images/all/miniArrow.svg"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

type Props = {
    count?: number | null
}

export const SortCards = ({ count }: Props) => {
    const searchParams = useSearchParams()

    const [sort, setSort] = useState<string>(searchParams.get('sort') || 'Latest')
    const router = useRouter()
    const pathname = usePathname()
    const params = new URLSearchParams(searchParams)

    const handlerSort = (value: string) => {
        setSort(value)
        params.set('sort', value)
        router.push(pathname + '?' + params)
    }

    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <span>Sort By:</span>
                <div className="relative group bg-white cursor-pointer w-[150px]">
                    <div className="relative py-2 px-4 flex gap-10 items-center rounded-md border-2 
                    group-hover:rounded-b-none border-gray-100 justify-between z-20">
                        <span className="text-gray-700 text-sm">{sort}</span>
                        <Arrow />
                    </div>
                    <div className="absolute hidden group-hover:block flex flex-col border-x-2 border-b-2 bg-white rounded-b-lg w-full z-20">
                        <div onClick={() => handlerSort('Latest')}
                            className="py-2 px-4 text-gray-700 text-sm border-b-[1px] border-b-gray-100 hover:bg-gray-100">
                            Latest
                        </div>
                        <div onClick={() => handlerSort('Newest')}
                            className="py-2 px-4 text-gray-700 text-sm border-b-[1px] border-b-gray-100 hover:bg-gray-100">
                            Newest
                        </div>
                        <div onClick={() => handlerSort('LowPrice')}
                            className="py-2 px-4 text-gray-700 text-sm border-b-[1px] border-b-gray-100 hover:bg-gray-100">
                            LowPrice
                        </div>
                        <div onClick={() => handlerSort('HighPrice')}
                            className="py-2 px-4 text-gray-700 text-sm hover:bg-gray-100">
                            HighPrice
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="mr-2 gray-scale-900 font-semibold">{count || '0'}</span>
                <span className="text-gray-600">Results Found</span>
            </div>
        </div>
    )
}