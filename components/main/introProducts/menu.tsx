"use client"
import { Dispatch } from 'react'
import Link from 'next/link'

interface Props {
    category: string,
    setCategory: Dispatch<string>
}

export const Menu = ({ category, setCategory }: Props) => {

    return (
        <div className='flex flex-wrap gap-3 sm:gap-6 justify-center'>
            <div onClick={() => setCategory('')}
                className={`inline px-2 relative text-gray-500 hover:text-primary font-medium cursor-pointer 
              after:absolute after:content-[""] ${category === '' ? 'after:block text-primary' : 'after:hidden'} hover:after:block after:w-full after:h-[2px] after:bg-primary after:-bottom-1/2 after:left-0`}>
                All
            </div>
            <span className='text-green-200'>
                |
            </span>
            <div onClick={() => setCategory('Vegetables')}
                className={`inline px-2 relative text-gray-500 hover:text-primary font-medium cursor-pointer 
              after:absolute after:content-[""] ${category === 'Vegetables' ? 'after:block text-primary' : 'after:hidden'} hover:after:block after:w-full after:h-[2px] after:bg-primary after:-bottom-1/2 after:left-0`}>
                Vegetable
            </div>
            <span className='text-green-200'>
                |
            </span>
            <div onClick={() => setCategory('Fruits')}
                className={`inline px-2 relative text-gray-500 hover:text-primary font-medium cursor-pointer 
              after:absolute after:content-[""] ${category === 'Fruits' ? 'after:block text-primary' : 'after:hidden'} hover:after:block after:w-full after:h-[2px] after:bg-primary after:-bottom-1/2 after:left-0`}>
                Fruit
            </div>
            <span className='text-green-200'>
                |
            </span>
            <div onClick={() => setCategory('Meat')}
                className={`inline px-2 relative text-gray-500 hover:text-primary font-medium cursor-pointer 
              after:absolute after:content-[""] ${category === 'Meat' ? 'after:block text-primary' : 'after:hidden'} hover:after:block after:w-full after:h-[2px] after:bg-primary after:-bottom-1/2 after:left-0`}>
                Meat
            </div>
            <span className='text-green-200'>
                |
            </span>
            <Link href='/categories'
                className={`inline px-2 relative text-gray-500 hover:text-primary font-medium cursor-pointer 
              after:absolute after:content-[""] hover:after:block after:hidden after:w-full after:h-[2px] after:bg-primary after:-bottom-1/2 after:left-0`}>
                View All
            </Link>
        </div>
    )
}