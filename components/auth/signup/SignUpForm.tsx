"use client"

import Link from "next/link";
import Eye from "/public/images/auth/eye.svg"
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { schema } from "@/lib/validateAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputPassword } from "../inputs/InputPassword";
import { InputEmail } from "../inputs/InputEmail";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { AuthInputs } from "@/types/types";

export default function Signup() {
    const supabase = createClientComponentClient()
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError
    } = useForm<AuthInputs>({
        resolver: yupResolver(schema),
    })
    const onSubmit: SubmitHandler<AuthInputs> = (data) => handleSignUp(data)

    const handleSignUp = async (data: AuthInputs) => {
        const { error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password
        })
        const jsonError = JSON.parse(JSON.stringify(error))

        if (error) {
            if (jsonError.message === "User already registered") {
                setError("email", { type: "focus", message: jsonError.message }, { shouldFocus: true });
            } 
        } else {
            router.refresh()
        }
    }

    return (
        <div className="py-20">
            <div className="max-w-[520px] m-auto px-6 pt-6 pb-8 border-gray-50 rounded-md shadow-[0_0px_25px_0_rgba(0,0,0,0.1)]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-3xl font-semibold text-center mb-5">Create Account</h2>
                    <InputEmail
                        error={errors.email}
                        register={register}
                        type="email"
                    />
                    <InputPassword
                        error={errors.password}
                        register={register}
                        type="password"
                    />
                    <InputPassword
                        error={errors.confirmPassword}
                        register={register}
                        type="confirmPassword"
                    />
                    <div className="flex justify-between mb-5">
                        <div className="cursor-pointer flex items-center">
                            <input type="checkbox" id="remember" className="cursor-pointer appearance-none h-5 w-5 border-[1px] border-gray-200 rounded-[4px] checked:bg-blue-500 checked:border-blue-500" />
                            <Link href="#" className="cursor-pointer pl-2 text-gray-600 text-sm">Accept all terms & Conditions</Link>
                        </div>
                    </div>
                    <button className="py-[14px] w-full flex justify-center text-white rounded-full items-center bg-primary mb-5" type="submit">Create Account</button>
                    <div className="text-center">
                        <span className="text-gray-600">
                            Already have account
                        </span>
                        <Link href="/signin" className="text-gray-900 font-medium ms-1">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}