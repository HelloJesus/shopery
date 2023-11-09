export type CountProductsByCat = {
    id: number;
    title: string;
    products: any
}[]


export type Products = {
    category_id: number | null
    countExist: number | null
    created_at: string
    desc: string | null
    id: number
    img: string | null
    price: number | null
    review: number | null
    title: string | null
    imgUrl: string | null
    categories?: {
        id: number
        title: string
    } | null
}[]


export type Profile ={
    avatar_img: string | null;
    created_at: string;
    first_name: string | null;
    id: number;
    last_name: string | null;
    phone_number: number | null;
    user_id: string | null;
} | null

export type AuthInputs = {
    email: string
    password: string
    confirmPassword: string
    passwordRequired?: string
}