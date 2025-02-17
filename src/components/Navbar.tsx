// ---------------- useContext ---------------- //
// -------------------------------------------------------- //
// import { NavLink } from "react-router-dom";
// import useAuth from "../context/useAuth";
// import useCart from "../context/useCart";

// export default function Navbar() {
//     const { isAuthenticated, logout } = useAuth();
//     const { totalQuantity } = useCart();

//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container">
//                 <NavLink to="/" className="navbar-brand m-0">
//                     ITI - LAB
//                 </NavLink>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item">
//                             <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
//                                 Products
//                             </NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
//                                 Cart
//                                 {totalQuantity > 0 && <span className="badge bg-danger ms-1">{totalQuantity}</span>}
//                             </NavLink>
//                         </li>
//                         {isAuthenticated ? (
//                             <li className="nav-item d-flex align-items-center">
//                                 <button onClick={logout} className="btn btn-danger btn-sm ms-2" style={{ borderRadius: "5px", padding: "5px 10px" }}>
//                                     Logout
//                                 </button>
//                             </li>
//                         ) : (
//                             <>
//                                 <li className="nav-item">
//                                     <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
//                                         Login
//                                     </NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink to="/register" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
//                                         Register
//                                     </NavLink>
//                                 </li>
//                             </>
//                         )}
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// ---------------- Redux ---------------- //
// -------------------------------------------------------- //
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { logout } from "../slices/authSlice";

export default function Navbar() {
    const dispatch = useAppDispatch();

    const token = useAppSelector((state) => state.auth.token);
    const isAuthenticated = Boolean(token);

    const cartItems = useAppSelector((state) => state.cart.cart);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleLogout = () => {
        dispatch(logout());
    };

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
                                {totalQuantity > 0 && <span className="badge bg-danger ms-1">{totalQuantity}</span>}
                            </NavLink>
                        </li>
                        {isAuthenticated ? (
                            <li className="nav-item d-flex align-items-center">
                                <button onClick={handleLogout} className="btn btn-danger btn-sm ms-2" style={{ borderRadius: "5px", padding: "5px 10px" }}>
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <>
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
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
