import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <NavLink to="/" className="navbar-brand m-0">
                    ITI - LAB
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                Cart
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
