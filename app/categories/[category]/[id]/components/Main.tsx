import { HeaderRoad } from "@/app/categories/components/HeaderRoad"
import { ProductBody } from "./ProductBody"
import { getProduct } from "@/Actions/getProducts"

type Props = {
    category: string
    id: string
}

export const Main = async ({ category, id }: Props) => {
    const { product } = await getProduct(id)
   
    return (
        <div className='max-w-[1332px] mx-auto mt-7'>
            <HeaderRoad category={category} id={id} />
            <ProductBody product={product} />
        </div>
    )
}