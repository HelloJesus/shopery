"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import SearchIcon from "/public/images/header/Search.svg"
import { useState } from "react"

export const SearchHeader = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const [value, setValue] = useState('')
   
    const setSearch = () => {
        if (value === '') {
            params.delete('search')
            router.push(`${pathname}${`?${params.toString()}`}`)
            return
        } 

        params.set('search', value)

        if (pathname.includes('categories')) {
            router.push(`${pathname}${`?${params.toString()}`}`)
        } else {
            router.push(`/categories${`?${params.toString()}`}`)
        }
    }

    return (
        <div className='md:flex items-center rounded-[5px] shadow-md bg-transparent overflow-hidden hidden'>
            <div className='flex items-center px-4 gap-2 border-2 border-r-0 rounded-l-[5px] border-gray-100 h-11'>
                <SearchIcon />
                <input onChange={event => setValue(event.currentTarget.value)} className='text-sm outline-none' type="text" placeholder='Search' />
            </div>
            <button onClick={setSearch} className='h-11 px-6 bg-primary text-sm text-white'>Search</button>
        </div>
    )
}