import { useState } from "react"
import Arrow from "/public/images/all/arrow.svg"
import CompleteArrow from "/public/images/all/complete-arrow.svg"

type Props = {
    queryRating: string[],
    setQueryRating: any
}

const ratings = [
    { title: '5.0', id: 'rating1', value: '5' },
    { title: '4.0 & up', id: 'rating1', value: '4' },
    { title: '3.0 & up', id: 'rating1', value: '3' },
    { title: '2.0 & up', id: 'rating1', value: '2' },
    { title: '1.0 & up', id: 'rating1', value: '1' }
]

export const Rating = ({ queryRating, setQueryRating }: Props) => {
    const [visible, setVisible] = useState<boolean>(true)

    const changeRating = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (queryRating?.includes(e.target.value)) {
            setQueryRating([...queryRating.filter((found) => found !== e.target.value)])
        } else {
            setQueryRating([...queryRating, e.target.value])
        }

    }

    return (
        <>
            <div className='bg-white z-20 relative'>
                <div onClick={() => setVisible(!visible)} className='flex justify-between items-center bg-white cursor-pointer'>
                    <h5 className='text-xl font-medium'>Rating</h5>
                    <Arrow className={`stroke-gray-900 stroke-[2px] ${visible ? '' : 'rotate-180'} transition duration-300`} />
                </div>
                <div className={`mt-5  ${visible ? 'visible max-h-[201px]' : 'max-h-0 invisible'}   duration-300`}>
                    <div onChange={changeRating} className="flex flex-col pb-4 gap-3">
                        {ratings.map((c, index) => {
                            return (
                                <label className='flex items-center gap-2 cursor-pointer' key={index}>
                                    <div className="relative ">
                                        <input className={`peer appearance-none text-sm items-center w-5 h-5 border-2 border-gray-200
                                 relative rounded-[3px]
                                after:content-[""] after:w-full after:h-full
                                 ${queryRating.includes(c.value) ? 'after:bg-primary border-primary' : ''} after:absolute cursor-pointer`}
                                            type='checkbox' id={c.id} name='category' value={c.value} />
                                        <CompleteArrow className={`absolute  
                                    ${queryRating.includes(c.value) ? 'block' : 'hidden'}
                                         -translate-y-1/2 -translate-x-1/2 top-1/3 left-1/2 z-10`} />
                                    </div>
                                    <div>{c.title}</div>
                                </label>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}