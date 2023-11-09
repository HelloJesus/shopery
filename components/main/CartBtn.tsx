import { Dispatch, SetStateAction } from "react"
import Bucket from "/public/images/main/bucket.svg"

type Props = {
    id: number,
    cart: Array<string>,
    addToStore: (option: string, id: number) => void,
    removeFromStore: (option: string, id: number) => void
}

export const CartBtn = ({ id, cart, addToStore, removeFromStore }: Props) => {
    const cartExist = cart.some((found) => found === id.toString())

    return (
        <>
            <button onClick={() => cartExist ? removeFromStore('cart', id) : addToStore('cart', id)} className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full flex justify-center items-center 
        ${cartExist ? 'bg-primary' : 'bg-green-100'}`}>
                <Bucket className={`${cartExist ? 'stroke-white' : 'stroke-green-900'} w-[20px]`} />
            </button>
        </>
    )
}