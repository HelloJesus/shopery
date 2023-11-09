import Link from "next/link"
import HouseCat from "/public/images/all/houseCat.svg"
import ArrowCat from "/public/images/all/arrowCat.svg"

export const HeaderRoad = ({ category = '', id = '' }) => {
    return (
        <div className="col-span-12 flex items-center gap-3">
            <Link href="/">
                <HouseCat />
            </Link>
            <ArrowCat />
            <Link href="/categories" className="text-gray-600 hover:text-primary">Categories</Link>
            {category && (<> <ArrowCat /> <Link href={`/categories/${category}`}
             className={`hover:text-primary ${id ? 'text-gray-600' : 'text-primary'}`}>{category}</Link></>)}
            {id && (<> <ArrowCat /> <Link href={`/categories/${category}/${id}`} className="text-primary">{id}</Link></>)}
        </div>
    )
}