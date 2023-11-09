import { experimental_useFormStatus } from "react-dom"

export const Botton = () => {
    const { pending } = experimental_useFormStatus()

    return (
        <button className="text-white text-sm font-semibold py-3 sm:py-4 px-6 sm:px-8 bg-primary rounded-full mt-7 sm:mt-6 w-full sm:w-auto outline-none">
            {pending ? 'Sending...' : 'Save Changes'}
        </button>
    )
}