import "@/styles/globals.css";
import MenuBar from "./components/Menu/MenuBar";

export default function App({ Component, pageProps }) {
    return (
        <div className="main-content">
            <div className="menubar">
                <MenuBar />
            </div>
            <div className="content">
                <Component {...pageProps} />
            </div>
        </div>
    )
}
