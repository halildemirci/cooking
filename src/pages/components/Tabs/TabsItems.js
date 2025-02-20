import { CategoryItems } from "@/pages/Data/Categories/CategoryItems";
import classNames from "classnames";

export default function TabsItems({ }) {
    return (
        <>
            {CategoryItems?.map((item, index) => (
                <button
                    key={index}
                    className={classNames(
                        "w-auto h-8 py-0 px-4 border-2 border-white/20 rounded-full",
                        index === 1 ? "bg-active-color border-blue-600 font-medium" : ""
                    )}
                >
                    <span className="text-sm">{item?.title}</span>
                </button>
            ))}
        </>
    )
}