import { useState } from "react"
import Arrow from "/public/images/all/arrow.svg"

type Props = {
    queryCategory: string
    setQueryCategory: (title: string) => void
    countProductsByCat: {
        id: number
        title: string
        products: {
            count: number | null;
        }[]
    }[] | null
}

const categories = [
    { title: 'Vegetables', id: 'categoryVegetables', value: 'Vegetables' },
    { title: 'Meat', id: 'categoryMeat', value: 'Meat' },
    { title: 'Fruits', id: 'categoryFruits', value: 'Fruits' },
    { title: 'Fish', id: 'categoryFish', value: 'Fish' }
]

export const Category = ({ queryCategory, setQueryCategory, countProductsByCat }: Props) => {
    const [visible, setVisible] = useState<boolean>(true)

    const changeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQueryCategory(e.target.value)
    }

    return (
        <>
            <div className='bg-white z-20 relative'>
                <div onClick={() => setVisible(!visible)} className='flex justify-between items-center bg-white cursor-pointer'>
                    <h5 className='text-xl font-medium'>All Categories</h5>
                    <Arrow className={`stroke-gray-900 stroke-[2px] ${visible ? '' : 'rotate-180'} transition duration-300`} />
                </div>
                <div className={`mt-5  ${visible ? 'visible max-h-[148px]' : 'max-h-0 invisible'}  duration-300`}>
                    <div onChange={changeCategory} className="flex flex-col pb-4 gap-3">
                        {categories.map((c, index) => {
                            return (
                                <label className='flex items-center gap-2 cursor-pointer' key={index}>
                                    <input className={`appearance-none text-sm items-center w-5 h-5 border-2 border-gray-200
                                checked:border-primary relative rounded-full
                                after:content-[""] after:w-3 after:h-3 after:top-1/2 after:left-1/2
                                after:-translate-y-1/2 after:-translate-x-1/2 after:rounded-full cursor-pointer
                                ${queryCategory === c.value ? 'after:bg-primary' : ''} after:absolute`}
                                        type='radio' id={c.id} name='category' value={c.value} />
                                    <div>{c.title}</div>
                                    {
                                        countProductsByCat?.map(item => {
                                            if (item.title === c.title) {
                                                return (
                                                    <span className="text-gray-500 text-sm" key={item.id}>
                                                        ({item.products[0].count})
                                                    </span>
                                                )
                                            }
                                        })
                                    }
                                </label>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}