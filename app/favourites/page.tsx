import { Socials } from "../categories/[category]/[id]/components/ProductBody/Socials";
import { Table } from "./components/Table";

export default async function Favourite() {
    return (
        <div className="py-5 lg:py-10 px-2 max-w-[1336px] m-auto">
            <div>
                <h1 className="text-gray-900 font-semibold mb-8 text-3xl text-center">My Wishlist</h1>
                <div className=" overflow-x-auto py-2">
                    <Table />
                    <div className=" min-w-[650px]">
                        <div className="h-[100px] pl-3 border border-gray-100 rounded-bl-lg">
                            <div className="flex items-center mt-2 h-full">
                                <Socials />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}