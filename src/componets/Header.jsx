import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-orang py-3 mb-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="text-white">Logo</div>
                <ul className="d-flex  list-unstyled m-0 gap-2">
                    <li>
                        <NavLink to="/" className="text-white text-decoration-none">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className="text-white text-decoration-none">Movies</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;