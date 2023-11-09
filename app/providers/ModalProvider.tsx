"use client"
import { ProductModal } from "@/components/modals/ProductModal";
import React, { SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { Dispatch } from "react"

type InitialStateType = {
    openModal: any
    hideModal: any
}

const initialState = {
    openModal: false,
    hideModal: () => { }
}

const ModalProductContext = createContext<InitialStateType>(initialState);


export function ModalProductProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [modalContent, setModalContent] = useState<JSX.Element | null>(null)

    const openModal = (modalComponent: JSX.Element) => {
        setModalContent(modalComponent)
    }

    const hideModal = () => setModalContent(null)

    return (
        <ModalProductContext.Provider value={{ openModal, hideModal }}>
            {modalContent ?
                modalContent
                : null}
            {children}
        </ModalProductContext.Provider>
    );
}


export function useModalProduct() {
    const value = useContext(ModalProductContext)
    if (!value) {
        throw new Error('state context modal product has not been set yet')
    }
    return value
}  