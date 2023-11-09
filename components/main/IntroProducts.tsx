"use client"

import { useState } from 'react'
import { Menu } from './introProducts/menu'
import { Product } from './introProducts/Product'

export default  function IntroProducts() {
  const [category, setCategory] = useState('')

  return (
    <div className='bg-green-50 py-10 md:py-20 lg:pt-[210px] lg:pb-24 px-10 w-full px-2'>
      <div className=''>
        <h2 className='text-2xl md:text-4xl font-semibold mb-6 text-center'>
          Introducing Our Products
        </h2>
        <Menu category={category} setCategory={setCategory}/>
        <div className='max-w-[330px] sx:max-w-[660px] lg:max-w-[1320px] grid grid-cols-1 sx:grid-cols-2 lg:grid-cols-4 mt-12 mx-auto'>
          <Product category={category}/>
        </div>
      </div>
    </div>
  )
}