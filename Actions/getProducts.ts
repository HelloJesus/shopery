import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from '@/types/supabase'
import { SearchParams } from '@/types/SearchParams';

export const getProducts = async (cetagory: string, searchParams: SearchParams) => {
    const serverSupabase = createClientComponentClient<Database>()

    const minPrice = searchParams?.rangePrice?.split('-')[0] || 0
    const maxPrice = searchParams?.rangePrice?.split('-')[1] || 1000
    const rating = searchParams.rating ? searchParams?.rating.split(',') : ['1', '2', '3', '4', '5']
    const sort = searchParams?.sort || 'Latest'
    const order = sort === 'Latest' || sort === 'Newest' ? 'created_at' : 'price'
    const orderAsc = order === 'created_at' ? sort === 'Latest' ? false : true : sort === 'HighPrice' ? false : true
    const search = searchParams?.search || ''

    const { data: products, count: countProducts, error } = await serverSupabase.from('products').select(`
        *,
        categories!inner(*)
    `, { count: 'exact' }).eq(cetagory && 'categories.title', cetagory)
        .gte('price', minPrice)
        .lte('price', maxPrice)
        .in('review', rating)
        .textSearch(search && 'title', search)
        .order(order, { ascending: orderAsc })

    products?.map((product) => {
        const { data: productImg } = serverSupabase.storage.from('products').getPublicUrl(`images/${product.img}`)
        product.imgUrl = productImg.publicUrl
    })

    if (error) {
        throw error
    }

    return { products, countProducts }
}

export const getCountProducts = async (searchParams: SearchParams) => {
    const serverSupabase = createClientComponentClient<Database>()

    const minPrice = searchParams?.rangePrice?.split('-')[0] || 0
    const maxPrice = searchParams?.rangePrice?.split('-')[1] || 1000
    const rating = searchParams.rating ? searchParams?.rating.split(',') : ['1', '2', '3', '4', '5']

    const { data: countProductsByCat, error } = await serverSupabase.from('categories').select(`
        *,
        products(count)
    `)
        .gte('products.price', minPrice)
        .lte('products.price', maxPrice)
        .in('products.review', rating)

    if (error) {
        throw error
    }

    return { countProductsByCat }
}

export const getProductsByFavourite = async (id: string[]) => {
    const serverSupabase = createClientComponentClient<Database>()

    const { data: products, error } = await serverSupabase.from('products').select(`*`)
        .in('id', [id])

    products?.map((product) => {
        const { data: productImg } = serverSupabase.storage.from('products').getPublicUrl(`images/${product.img}`)
        product.imgUrl = productImg.publicUrl
    })

    if (error) {
        throw error
    }

    return { products }
}

export const getProduct = async (id: string) => {
    const serverSupabase = createClientComponentClient<Database>()

    const { data: product, error } = await serverSupabase.from('products').select(`*`)
        .eq('id', id)

    product?.map((p) => {
        const { data: productImg } = serverSupabase.storage.from('products').getPublicUrl(`images/${p.img}`)
        p.imgUrl = productImg.publicUrl
    })

    if (error) {
        throw error
    }

    return { product }
}