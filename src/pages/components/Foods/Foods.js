import FoodItems from "./FoodItems";

export default function Foods({ }) {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto mb-2">
                <h1 className="text-xl font-medium">Featured items</h1>
            </div>
            <div className="w-full h-auto grid grid-cols-8 items-center justify-center gap-4">
                <FoodItems />
            </div>
        </div>
    )
}