import Heart from "/public/images/main/heart.svg"
import { Dispatch } from "react"

type Props = {
    id: number,
    favourites: Array<string>,
    addToStore: (option: string, id: number) => void,
    removeFromStore: (option: string, id: number) => void
}

export const FavoriteBtn = ({ id, favourites, addToStore, removeFromStore }: Props) => {
    const favExist = favourites.some((found) => found === id.toString())

    return (
        <>
            <button onClick={() => favExist ? removeFromStore('favourites', id) : addToStore('favourites', id)} className={`absolute right-0 w-10 sm:w-12 h-10 sm:h-12 rounded-full border-[1px] border-gray-50 
        justify-center items-center group-hover/other:flex ${favExist ? `bg-primary stroke-white flex` : `hidden bg-white  `}  
         stroke-green-900`}>
                <Heart className='w-[21px]' />
            </button>
        </>
    )
}