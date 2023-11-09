"use client"
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  
  return (
    <div className='flex flex-col items-center py-10 md:py-20 px-2'>
      <Image src='/images/all/Illustration.png' alt='notFound' width={582} height={354} sizes='100vw' priority={true}/>
      <h1 className='text-gray-900 text-2xl md:text-4xl font-semibold mt-8'>Oops! page not found</h1>
      <p className='mt-5 text-gray-500'>
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis
        </p>
      <Link className='mt-6 py-4 px-8 text-sm text-white font-semibold bg-primary rounded-full' href="/">Back to Home</Link>
    </div>
  )
}