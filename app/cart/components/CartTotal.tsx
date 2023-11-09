type Props = {
    totalPrice: string
}

export const CartTotal = ({ totalPrice }: Props) => {
    return (
        <div className="p-6 border border-gray-100 rounded-md h-min w-full md:w-[425px]">
            <p className="text-gray-900 text-xl font-medium">Cart Total</p>
            <div>
                <div className="flex border-b border-gray-100 text-gray-700 text-sm py-3 justify-between">
                    <span>Subtotal:</span>
                    <span className="font-medium text-gray-900">${totalPrice ? totalPrice : '0'}</span>
                </div>
                <div className="flex border-b border-gray-100 text-gray-700 text-sm py-3 justify-between">
                    <span>Shipping:</span>
                    <span className="font-medium text-gray-900">Free</span>
                </div>
                <div className="flex text-gray-700 text-sm py-3 justify-between">
                    <span>Total:</span>
                    <span className="font-medium text-gray-900">${totalPrice ? totalPrice : '0'}</span>
                </div>
            </div>
            <button className="rounded-full bg-primary text-white text-sm lg:text-base w-full p-3 lg:p-4 font-semibold mt-5">
                Proceed to checkout
            </button>
        </div>
    )
}