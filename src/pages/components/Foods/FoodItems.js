import { Foods } from "@/pages/Data/Foods/FoodItems";
import Image from "next/image";
import { TbStar, TbStarFilled } from "react-icons/tb";

export default function FoodItems({ }) {

    const FoodsImages = [
        "/Images/Foods/brioche-french-toast.jpg",
        "/Images/Foods/buritto.jpg",
        "/Images/Foods/buttermilk-pancakes.jpg",
        "/Images/Foods/english-breakfast-bowl.jpg",
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <>
            {Foods?.map((item, index) => (
                <div key={index} className="w-full h-44 py-4 px-4 flex flex-col items-center justify-center gap-4 bg-background-card rounded-2xl relative">
                    {item?.favorite === 1 ? (
                        <div className="absolute top-3 right-3">
                            <TbStarFilled className="text-orange-500" size={16} />
                        </div>
                    ) : null}

                    <Image
                        className="w-24 h-24 object-cover rounded-full"
                        src={FoodsImages[getRandomInt(3)]}
                        width={1920}
                        height={1080}
                        alt={item?.title}
                    />

                    <p className="text-sm font-medium text-center">
                        {item?.title}
                    </p>
                </div>
            ))}
        </>
    )
}