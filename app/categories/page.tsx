import { SearchParams } from '@/types/SearchParams'
import { Main } from './components/main';

type Props = {
    params?: { category: string },
    searchParams: SearchParams
};

export default async function Category({ searchParams }: Props) {

    return (
        <>
            <div className='grid grid-cols-12 w-full max-w-[1332px] gap-6 px-3 mx-auto mt-7'>
                <Main category={''} searchParams={searchParams} />
            </div>
        </>
    )
}  