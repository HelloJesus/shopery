import { useState } from "react"
import { FieldError, FieldErrors, UseFormRegister } from "react-hook-form"
import Eye from "/public/images/auth/eye.svg"

type Inputs = {
    email: string
    password: string,
    confirmPassword: string
}

type Props = {
    error: FieldError | undefined
    register: UseFormRegister<Inputs>
    type: "email"
}

export const InputEmail = ({ error, register, type }: Props) => {

    return (
        <div className="mb-3">
            <div className="relative">
                <input id={type} type={type}
                    className={`max-h-[50px] ps-4 pe-11 py-3 rounded-md border-[1px] 
                            ${error?.type === 'min' || error?.type === 'required' ? 'border-red-500' : 'border-gray-100'} w-full outline-none`} placeholder={type}
                    {...register("email", { required: true })}
                />
            </div>
            {error && <span className="text-sm text-red-500">{error.message}</span>}
        </div>
    )
}