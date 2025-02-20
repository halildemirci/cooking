import Foods from "./components/Foods/Foods";
import SearchBar from "./components/Search/SearchBar";
import Tabs from "./components/Tabs/TabsBar";

export default function Home() {
    return (
        <div className="w-full h-auto py-8 px-4">
            <SearchBar />

            <div className="w-full h-auto my-4">
                <Tabs />
            </div>

            <div className="w-full h-auto my-4">
                <Foods />
            </div>
        </div>
    );
}
