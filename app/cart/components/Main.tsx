"use client"
import { useState } from "react"
import { CartTotal } from "./CartTotal"
import { Table } from "./Table"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useStore } from "@/app/providers/StoreProvider"

export const Main = () => {
    const [totalPrice, setTotalPrice] = useState('')
    const router = useRouter()

    return (
        <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
            <div className="overflow-x-auto w-full">
                <Table setTotalPrice={setTotalPrice} />
                <div className="min-w-[450px] max-w-[872px] m-auto">
                    <div className="h-[80px] text-sm md:text-base px-5 border border-gray-100 rounded-bl-lg rounded-br-lg flex gap-3 items-center justify-between">
                        <Link href="/" className="h-[45px] bg-gray-50 text-gray-700 px-5 md:px-8 py-2 md:py-3 font-semibold rounded-full flex items-center">
                            Return to shop
                        </Link>
                        <button onClick={() => router.refresh()} className="h-[45px] bg-gray-50 text-gray-700 px-5 md:px-8 py-2 md:py-3 font-semibold rounded-full">
                            Update Cart
                        </button>
                    </div>
                </div>
            </div>
            <CartTotal totalPrice={totalPrice} />
        </div>
    )
}