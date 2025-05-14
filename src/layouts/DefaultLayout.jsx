import { Outlet } from "react-router-dom";
import Header from "../componets/Header";

const DeafaultLayout = () => {
    return (
        <>
            <body className="bg-black text-white">
                <Header />
                <main className="container">
                    <Outlet />
                </main>
                <footer className="container mt-4">Footer</footer>
            </body>

        </>
    );
}

export default DeafaultLayout;