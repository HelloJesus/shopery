import { SearchParams } from '@/types/SearchParams';
import { Main } from '../components/main';
import { Metadata } from 'next';

type Props = {
    params: { category: string },
    searchParams: SearchParams
};


export  function generateMetadata({ params, searchParams }: Props): Metadata {
    return {
        title: params.category
    }
}

export default async function Category({ params, searchParams }: Props) {

    return (
        <div className='grid grid-cols-12 w-full max-w-[1332px] gap-6 px-3 mx-auto mt-7'>
            <Main category={params.category} searchParams={searchParams} />
        </div>
    )
}  