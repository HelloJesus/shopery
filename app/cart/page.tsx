import { CartTotal } from "./components/CartTotal";
import { Main } from "./components/Main";
import { Table } from "./components/Table";

export default function Cart() {
    return (
        <div className="py-5 lg:py-10 px-2 max-w-[1336px] m-auto">
            <div>
                <h1 className="text-gray-900 font-semibold mb-8 text-3xl text-center">My Shopping Cart</h1>
                <Main />
            </div>
        </div>
    )
}