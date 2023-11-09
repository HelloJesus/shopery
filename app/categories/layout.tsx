import { ModalProductProvider } from '@/app/providers/ModalProvider'
export const dynamic = 'force-dynamic'

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div>
            {children}
        </div>
    )
}
