import { TbMicrophone, TbSearch } from "react-icons/tb";

export default function SearchBar({ }) {
    return (
        <div className="w-full h-11 relative">
            <div className="w-auto h-full py-0 px-4 flex items-center justify-center absolute top-0 left-0">
                <TbSearch className="text-white/50" size={16} />
            </div>
            <input
                type="text"
                className="w-full h-full py-0 pl-12 px-4 text-sm font-normal bg-background-search rounded-full outline-none"
                placeholder="Search"
            />

            <div className="w-auto h-full py-0 px-4 flex items-center justify-center absolute top-0 right-0">
                <TbMicrophone className="text-white/50" size={16} />
            </div>
        </div>
    )
}