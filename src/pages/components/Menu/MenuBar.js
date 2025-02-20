import Link from "next/link";
import { TbLogout, TbUserCircle } from "react-icons/tb";
import MenuItems from "./MenuItems";

export default function MenuBar({ }) {

    return (
        <div className="w-full h-screen py-8 px-2">
            <div className="w-full h-full flex flex-col items-center justify-between">
                <Link
                    className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-active-color duration-300 rounded-full"
                    href={"/"}
                >
                    <TbUserCircle className="text-white" size={32} strokeWidth={1.5} />
                </Link>

                <div className="w-full h-auto grid grid-cols-1 items-center justify-center gap-2">
                    <MenuItems />
                </div>

                <Link
                    className="w-12 h-8 flex items-center justify-center bg-white/20 hover:bg-orange-800 duration-300 rounded-lg"
                    href={"/"}
                >
                    <TbLogout className="text-white" size={22} />
                </Link>
            </div>
        </div>
    )

}