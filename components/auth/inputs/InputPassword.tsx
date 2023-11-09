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
    type: "password" | "confirmPassword"
}

export const InputPassword = ({error, register, type} : Props) => {
    const [visiblePass, setVisiblePass] = useState(false)

    return (
        <div className="mb-3">
            <div className="relative">
                <input id={type} type={visiblePass ? `text` : `password`}
                    className={`max-h-[50px] ps-4 pe-11 py-3 rounded-md border-[1px] 
                            ${error?.type === 'min' || error?.type === 'required' ? 'border-red-500' : 'border-gray-100'} w-full outline-none`} placeholder={type}
                    {...register(type, { required: true })}
                />
                <Eye onClick={() => setVisiblePass(!visiblePass)} className='absolute right-[18px] cursor-pointer top-1/2 -translate-y-1/2 outline-none' />
            </div>
            {error && <span className="text-sm text-red-500">{error.message}</span>}
        </div>
    )
}