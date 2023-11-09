import { useStore } from "@/app/providers/StoreProvider"
import Heart from "/public/images/main/heart.svg"

export const FavBtn = ({ id }: { id: number }) => {
    const { favourites, addToStore, removeFromStore } = useStore()
    const favExist = favourites.some((found) => found === id.toString())

    return (
        <div onClick={() => favExist ? removeFromStore('favourites', id) : addToStore('favourites', id)} 
        className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full ${favExist ? 'bg-hard-primary/10 ' : 'bg-primary' }  cursor-pointer flex items-center justify-center`}>
            <Heart className={` ${favExist ? 'stroke-hard-primary' : 'stroke-white' } w-5 lg:w-6`}/>
        </div>
    )
}