
import Plus from "/public/images/all/plusAddCount.svg"
import Minus from "/public/images/all/minusRemoveCount.svg"
import { Dispatch, SetStateAction } from "react"

type Props = {
    counter: number
    setCounter: Dispatch<SetStateAction<number>>
    productCount: number | null
}

export const CounterProducts = ({counter, setCounter, productCount}: Props) => {

    const add = () => {
        if (counter === productCount) return
        setCounter(counter + 1)
    }

    const remove = () => {
        if (counter < 2) return
        setCounter(counter - 1)
    }

    return (
        <div className="lg:min-w-[128px] w-32 h-10 lg:h-12 p-2 rounded-full border-[1px] border-gray-50 flex items-center justify-between select-none">
            <div onClick={remove} className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full cursor-pointer">
                <Minus className={`${counter === 1 ? 'stroke-gray-600' : 'stroke-gray-900'}`} />
            </div>
            <span className="text-gray-900">{counter}</span>
            <div onClick={add} className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full cursor-pointer">
                <Plus className={`${productCount === counter ? 'stroke-gray-600' : 'stroke-gray-900'}`} />
            </div>
        </div>
    )
}