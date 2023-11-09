import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import Arrow from "/public/images/all/arrow.svg"
import { useSearchParams } from 'next/navigation'

type Props = {
    queryRangePrice: string[]
    setQueryRangePrice: Dispatch<SetStateAction<string[]>>
}

const MIN = 0
const MAX = 1000

export const RangePrice = ({ queryRangePrice, setQueryRangePrice }: Props) => {
    const [min, setMin] = useState<number>(Number(queryRangePrice[0]) || MIN)
    const [max, setMax] = useState<number>(Number(queryRangePrice[1]) || MAX)
    const [visible, setVisible] = useState<boolean>(true)

    const setAfterChange = (value: number[]) => {
        const minValue = value[0].toString()
        const maxValue = value[1].toString()
        setQueryRangePrice([minValue, maxValue])
    }

    const onChangeValues = (value: number[]) => {
        setMin(value[0])
        setMax(value[1])
    }

    return (
        <>
            <div className='bg-white z-20 relative'>
                <div onClick={() => setVisible(!visible)} className='flex justify-between items-center bg-white cursor-pointer z-20 relative'>
                    <h5 className='text-xl font-medium'>Price</h5>
                    <Arrow className={`stroke-gray-900 stroke-[2px] ${visible ? '' : 'rotate-180'} transition duration-300`} />
                </div>
                <div className={`mt-5 ${visible ? 'visible max-h-[74px]' : 'max-h-0 invisible'}  transtion duration-300 `}>
                    <ReactSlider
                        className="w-full h-[18px] "
                        thumbClassName="example-thumb bg-white w-[18px] h-[18px] border-[2px] border-primary rounded-full cursor-pointer outline-none"
                        trackClassName="example-track bg-gray-100 h-[6px] top-1/2 -translate-y-1/2  rounded-xl"
                        defaultValue={[min, max]}
                        min={MIN}
                        max={MAX}
                        onChange={(value, index) => onChangeValues(value)}
                        onAfterChange={(value, index) => setAfterChange(value)}
                        pearling
                        minDistance={10}
                    />
                    <div className='mt-4 select-none pb-4'>
                        <p className='text-gray-700 font-sm'>Price: <span className='text-gray-900 font-medium'>{min} - {max}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}