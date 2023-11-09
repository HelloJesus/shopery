import { ProductBody } from "@/app/categories/[category]/[id]/components/ProductBody";
import { useModalProduct } from "@/app/providers/ModalProvider";
import { Products } from "@/types/types"

type Props = {
    product: {
        category_id: number | null;
        countExist: number | null;
        created_at: string;
        desc: string | null;
        id: number;
        img: string | null;
        price: number | null;
        review: number | null;
        title: string | null;
        imgUrl: string | null;
        categories?: {
            id: number;
            title: string;
        } | null | undefined;
    },
    category?: string
}

export const ProductModal = ({ product, category }: Props) => {
    const { hideModal } = useModalProduct()

    return (
        <div className="w-full h-full fixed z-30 top-0">
            <div className="flex items-center justify-center  w-full h-full bg-black/75">
                <div className="text-white text-lg p-4 lg:p-10 bg-white max-w-[1120px] rounded-lg relative">
                    <button onClick={hideModal}
                     className="rounded-md py-2 px-4 bg-white hover:bg-gray-100 text-black text-sm font-semibold absolute -top-12 right-0">
                        Close
                    </button>
                    <ProductBody product={[product]} category={category} />
                </div>
            </div>
        </div>
    )
}