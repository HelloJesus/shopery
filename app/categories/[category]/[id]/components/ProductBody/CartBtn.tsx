import { useStore } from "@/app/providers/StoreProvider";
import Bucket from "/public/images/main/bucket.svg"

export const CartBtn = ({ id }: { id: number }) => {
    const { cart, addToStore, removeFromStore, isLoading } = useStore()
    const cartExist = cart.some((found) => found === id.toString())

    return (
        <button onClick={() => cartExist ? removeFromStore('cart', id) : addToStore('cart', id)}
            className={`flex order-1 flex-auto h-10 lg:h-12 xs:h-auto w-full sx:w-auto text-sm lg:text-base gap-4 items-center ${cartExist ? 'text-hard-primary bg-hard-primary/10' : 'bg-primary text-white' } 
            flex-1 rounded-full justify-center`}>
            <span className="font-bold">
                {!isLoading && (cartExist ? ' Delete from Cart' : 'Add to Cart')}
            </span>
            <Bucket className={` ${cartExist ? 'stroke-hard-primary' : 'stroke-white' } w-4 h-4`} />
        </button>
    )
}