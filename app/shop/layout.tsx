import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function ShopLayout ({children}:{children:React.ReactNode}) {
    return (
        <section>
            <Header/>
            {children}
            <Footer />
        </section>
    )
}