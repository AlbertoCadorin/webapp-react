import { Outlet } from "react-router-dom";
import Header from "../componets/Header";

const DeafaultLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default DeafaultLayout;