"use client"
import { Profile } from "@/types/types"
import { useState } from "react"
import { Botton } from "./Botton"

type Props = {
    addTodo: (formData: FormData) => Promise<void>
    profile: Profile
    email: string
}

type StateProfile = {
    [x: string]: string;
}

export const FormProfile = ({ addTodo, profile, email }: Props) => {
    const [stateProfile, setStateProfile] = useState<StateProfile>({
        firstName: profile?.first_name || '',
        lastName: profile?.last_name || '',
        phone: profile?.phone_number?.toString() || '',
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateProfile({ ...stateProfile, [e.target.name]: e.target.value })
    }

    return (
        <form action={addTodo} className="w-full">
            <div className="flex flex-col gap-5 sm:gap-3 sm:flex-row w-full items-center">
                <div className="max-w-[412px] w-full flex flex-col gap-3">
                    <label htmlFor="firstName">
                        <p className="text-gray-900 text-sm mb-1">First name</p>
                        <input id="firstName" name="firstName" type="text" className="p-3 text-gray-600 border border-gray-100 rounded-lg outline-none w-full"
                            value={stateProfile?.firstName} onChange={onChange} />
                    </label>
                    <label htmlFor="lastName">
                        <p className="text-gray-900 text-sm mb-1">Last Name</p>
                        <input id="lastName" name="lastName" type="text" className="p-3 text-gray-600 border border-gray-100 rounded-lg outline-none w-full"
                            value={stateProfile?.lastName} onChange={onChange} />
                    </label>
                    <label htmlFor="email">
                        <p className="text-gray-900 text-sm mb-1">Email</p>
                        <input id="email" type="email" className="p-3 bg-gray-100 text-gray-600 border 
                        border-gray-100 rounded-lg outline-none w-full cursor-default"
                            value={email} readOnly />
                    </label>
                    <label htmlFor="phone">
                        <p className="text-gray-900 text-sm mb-1">Email</p>
                        <input id="phone" name="phone" type="text" className="p-3 text-gray-600 border border-gray-100 rounded-lg outline-none w-full"
                            value={stateProfile?.phone} onChange={onChange} />
                    </label>
                </div>
            </div>
            <Botton />
        </form>
    )
}