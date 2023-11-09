"use client"
import { createContext, useContext, useEffect, useState } from "react";

type InitialStateType = {
    cart: string[],
    favourites: string[],
    addToStore: (option: string, id: number) => void,
    removeFromStore: (option: string, id: number) => void,
    isLoading: boolean
}

const initialState = {
    cart: [''],
    favourites: [''],
    addToStore: () => { },
    removeFromStore: () => { },
    isLoading: true
}

const StoreContext = createContext<InitialStateType>(initialState);


export function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [cart, setCart] = useState<Array<string>>([])
    const [favourites, setFavourites] = useState<Array<string>>([])
    const [firstRender, setFirstRender] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!firstRender) return
        const cartValue = localStorage.getItem('cart')
        const favouritesValue = localStorage.getItem('favourites')

        if (cartValue) {
            setCart(JSON.parse(cartValue))
        } else {
            localStorage.setItem('cart', JSON.stringify(cart))
        }

        if (favouritesValue) {
            setFavourites(JSON.parse(favouritesValue))
        } else {
            localStorage.setItem('favourites', JSON.stringify(favourites))
        }
        setIsLoading(false)
        setFirstRender(false)
    }, [firstRender])

    useEffect(() => {
        if (firstRender) return
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart, firstRender])

    useEffect(() => {
        if (firstRender) return
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites, firstRender])

    const addToStore = (option: string, id: number) => {
        if (option === 'cart') {
            setCart([...cart, id.toString()])
        }
        if (option === 'favourites') {
            setFavourites([...favourites, id.toString()])
        }
    }

    const removeFromStore = (option: string, id: number) => {
        if (option === 'cart') {
            setCart([...cart.filter((found) => found !== id.toString())])
        }
        if (option === 'favourites') {
            setFavourites([...favourites.filter((found) => found !== id.toString())])
        }
    }

    return (
        <StoreContext.Provider value={{ cart, favourites, addToStore, removeFromStore, isLoading }}>
            {children}
        </StoreContext.Provider>
    );
}


export function useStore() {
    const value = useContext(StoreContext)
    if (!value) {
        throw new Error('state context has not been set yet')
    }
    return value
}  