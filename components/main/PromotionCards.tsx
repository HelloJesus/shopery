import Card from "./promotionCards/Card";

export default function PromotionCards() {
    return (
        <div className="flex flex-wrap flex-col items-center sm:flex-row gap-4 xl:gap-6 w-full px-2 py-10 md:py-24 justify-center">
            <Card mainText={'100% Fresh Cow Milk'} otherText={'Starting at '} imgUrl='/images/main/milkPromotion.jpg' colorText={'text-[#FFFFFF]'}/>
            <Card headerText={'Drink Sale'} mainText={'Water & Soft Drink'} imgUrl='/images/main/colaaPromotion.jpg' colorText={'text-green-900'} index={2}/>
            <Card headerText={'100% Organic'} mainText={'Quick Breakfast'} imgUrl='/images/main/breakfastPromotion.jpg' colorText={'text-green-900'}/>
        </div>
    )
}