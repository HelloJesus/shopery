"use client"
import Link from "next/link";
import Eye from "/public/images/auth/eye.svg"
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { AuthInputs } from "@/types/types";
import { InputEmail } from "../inputs/InputEmail";
import { InputPassword } from "../inputs/InputPassword";

export default function SignInForm() {
    const router = useRouter()
    const supabase = createClientComponentClient()
    const [visiblePass, setVisiblePass] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError
    } = useForm<AuthInputs>()
    const onSubmit: SubmitHandler<AuthInputs> = (data) => handleSignIn(data)

    const handleSignIn = async (data: AuthInputs) => {
        const { email, password } = data
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        const jsonError = JSON.parse(JSON.stringify(error))

        if (error) {
            if (jsonError.message === "Invalid login credentials") {
                setError("password", { type: "focus", message: jsonError.message });
            } else {
                setError("password", { type: "focus", message: "site doesn't work" });
            }
        } else {
            router.refresh()
        }
    }

    return (
        <div className="py-20">
            <div className="max-w-[520px] m-auto px-6 pt-6 pb-8 border-gray-50 rounded-md shadow-[0_0px_25px_0_rgba(0,0,0,0.1)]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-3xl font-semibold text-center mb-5">Sign In</h2>
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
                    <div className="flex justify-between mb-5">
                        <div className="cursor-pointer flex items-center">
                            <input type="checkbox" id="remember" className="cursor-pointer appearance-none h-5 w-5 border-[1px] border-gray-200 rounded-[4px] checked:bg-blue-500 checked:border-blue-500" />
                            <label className="cursor-pointer pl-2 text-gray-600 text-sm" htmlFor="remember">Remember me</label>
                        </div>
                        <Link className="text-gray-600 text-sm" href="#">
                            Forget Password
                        </Link>
                    </div>
                    <button className="py-3 lg:py-[14px] w-full flex justify-center text-white rounded-full items-center bg-primary mb-5" type="submit">
                        Login
                    </button>
                    <div className="text-center">
                        <span className="text-gray-600">
                            Don’t have account?
                        </span>
                        <Link href="/signup" className="text-gray-900 font-medium ms-1">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}