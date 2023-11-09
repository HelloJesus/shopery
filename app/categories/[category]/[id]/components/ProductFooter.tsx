import ArrowDescProd from "/public/images/all/arrowDescProd.svg"

export const Productfooter = () => {
    return (
        <div className="mt-4 lg:mt-10">
            <div className="flex justify-center flex-wrap gap-3 sm:gap-0">
                <div className="p-2 sm:p-4 text-gray-900 font-medium border-b-2 border-primary
                 hover:border-b-2 hover:border-primary hover:text-gray-900 cursor-pointer">
                    Descriptions
                </div>
                <div className="p-2 sm:p-4 text-gray-500 font-medium 
                hover:border-b-2 hover:border-primary hover:text-gray-900 cursor-pointer">
                    Additional Information
                </div>
                <div className="p-2 sm:p-4 text-gray-500 font-medium
                hover:border-b-2 hover:border-primary hover:text-gray-900 cursor-pointer">
                    Customer Feedback
                </div>
            </div>
            <div className="py-4 lg:py-8">
                <div className="text-gray-500 text-sm">
                    <p>
                        Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.
                    </p>
                    <p className="mt-6">
                        Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.
                    </p>
                </div>
                <div className="mt-5 text-gray-500 text-sm">
                    <div className="flex gap-2 mt-3">
                        <div className="w-5 h-5 rounded-full bg-primary relative">
                            <ArrowDescProd className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"/>
                        </div>
                        <p>100 g of fresh leaves provides.</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                        <div className="w-5 h-5 rounded-full bg-primary relative">
                            <ArrowDescProd className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"/>
                        </div>
                        <p>Aliquam ac est at augue volutpat elementum.</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                        <div className="w-5 h-5 rounded-full bg-primary relative">
                            <ArrowDescProd className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"/>
                        </div>
                        <p>Quisque nec enim eget sapien molestie.</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                        <div className="w-5 h-5 rounded-full bg-primary relative">
                            <ArrowDescProd className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"/>
                        </div>
                        <p>Proin convallis odio volutpat finibus posuere.</p>
                    </div>
                </div>
                <div className="mt-5 text-gray-500 text-sm">
                    <p>
                    Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. 
                    </p>
                </div>
            </div>
        </div>
    )
}