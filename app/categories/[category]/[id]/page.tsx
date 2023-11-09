import { getProduct } from "@/Actions/getProducts";
import { HeaderRoad } from "../../components/HeaderRoad";
import { ProductBody } from "./components/ProductBody";
import { Productfooter } from "./components/ProductFooter";
import { Products } from "@/types/types";
import type { Metadata, ResolvingMetadata } from 'next'
import { SearchParams } from "@/types/SearchParams";

type Props = {
    params: { id: string }
    searchParams: SearchParams
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { product }: { product: Products } = await getProduct(params.id)
    const productTitle = product[0].title || ''
    const productDesc = product[0].desc || ''
    const productImg = product[0].imgUrl || ''

    return {
        title: productTitle,
        description: productDesc,
        openGraph: {
            title: productTitle,
            description: productDesc,
            images: productImg
        },
    }
}

export default async function ProductId({ params }: { params: { category: string, id: string } }) {
    const { product }: { product: Products } = await getProduct(params.id)

    return (
        <div className='max-w-[1332px] mx-auto mt-7 px-3'>
            <HeaderRoad category={params.category} id={params.id} />
            <ProductBody category={params.category} product={product} />
            <Productfooter />
        </div>
    )
}