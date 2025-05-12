import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-success text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <div>Logo</div>
                <ul className="d-flex  list-unstyled m-0 gap-2">
                    <li>
                        <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className="hover:text-gray-400">Movies</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;