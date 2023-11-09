import MainSwiper from '@/components/main/MainSwiper'
import IntroProducts from '@/components/main/IntroProducts';
import PromotionCards from '@/components/main/PromotionCards';
import SpecialProducts from '@/components/main/SpecialProducts';
import LatestNews from '@/components/main/LatestNews';

export default async function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <MainSwiper />
        <IntroProducts />
        <PromotionCards />
        <SpecialProducts />
        <LatestNews />
      </main>
    </>
  )
}

