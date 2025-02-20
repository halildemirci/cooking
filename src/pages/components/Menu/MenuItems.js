import { MenuItems as Items } from "@/pages/Data/Menu/MenuItems"
import classNames from "classnames";
import Link from "next/link";

export default function MenuItems({ }) {
    return (
        <>
            {Items?.map((item, index) => (
                <Link
                    key={index}
                    className="group w-full h-14 flex flex-col items-center justify-center gap-1"
                    href={"/"}
                >
                    <button className={classNames(
                        "w-14 h-8 flex items-center justify-center rounded-xl",
                        index === 0 ? "bg-active-color" : "group-hover:bg-active-color duration-300"
                    )}>
                        <item.icon size={20} />
                    </button>
                    <span className="text-xs">
                        {item?.title}
                    </span>
                </Link>
            ))}
        </>
    )
}