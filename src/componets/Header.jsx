import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-black py-3 mb-4 border-orang">
            <div className="container d-flex justify-content-between align-items-center">
                <img src="/space_cinema_header.png" alt="Logo" style={{ height: "50px" }} />
                <ul className="d-flex  list-unstyled m-0 gap-2">
                    <li>
                        <NavLink to="/" className="t-white text-decoration-none">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className="t-white text-decoration-none">Movies</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;