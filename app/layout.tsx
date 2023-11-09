import { StoreProvider } from '@/app/providers/StoreProvider';
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from '@/types/supabase';
import { ModalProductProvider } from '@/app/providers/ModalProvider';
export const dynamic = 'force-dynamic'


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Ecobazar',
  description: 'fresh and healthy organic food',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const serverSupabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } }: any = await serverSupabase.auth.getUser()

  return (
    <html lang="en">
      <body className={`${poppins.className} md:overflow-auto`} >
        <StoreProvider >
          <ModalProductProvider >
            <Header userId={user?.id} />
            {children}
            <Footer />
          </ModalProductProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
