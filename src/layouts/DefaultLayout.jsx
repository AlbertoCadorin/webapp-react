import { Outlet } from "react-router-dom";
import Header from "../componets/Header";

const DeafaultLayout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <footer className="container mt-4">Footer</footer>
        </>
    );
}

export default DeafaultLayout;