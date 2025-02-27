// ---------------- useContext ---------------- //
// -------------------------------------------------------- //
// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import useAuth from "../context/useAuth";
// import useCart from "../context/useCart";
// import { ToastContainer } from "react-toastify";

// export default function Cart() {
//     const { cart, removeFromCart, clearCart, totalQuantity, totalPrice, addToCart, decreaseQuantity } = useCart();
//     const { isAuthenticated } = useAuth();
//     return (
//         <>
//             <Navbar />
//             <Header title="Cart" />
//             <div className="container mt-4">
//                 {cart.length > 0 ? (
//                     <div className="row">
//                         <div className="col-md-8">
//                             {cart.map((item) => (
//                                 <div key={item.id} className="card mb-3 shadow-sm">
//                                     <div className="row g-0">
//                                         <div className="col-md-4">
//                                             <img src={item.thumbnail} alt={item.title} className="img-fluid rounded-start" style={{ height: "150px", objectFit: "cover" }} />
//                                         </div>
//                                         <div className="col-md-8">
//                                             <div className="card-body">
//                                                 <h5 className="card-title">{item.title}</h5>
//                                                 <p className="card-text mb-1">
//                                                     <strong>Price:</strong> ${item.price}
//                                                 </p>
//                                                 <p className="card-text mb-2">
//                                                     <strong>Total:</strong> ${item.price * item.quantity}
//                                                 </p>
//                                                 <div className="d-flex align-items-center">
//                                                     <button className="btn btn-secondary btn-sm me-2" onClick={() => decreaseQuantity(item.id)}>
//                                                         -
//                                                     </button>
//                                                     <span className="badge bg-primary px-3">{item.quantity}</span>
//                                                     <button className="btn btn-secondary btn-sm ms-2" onClick={() => addToCart(item)}>
//                                                         +
//                                                     </button>
//                                                     <button className="btn btn-danger btn-sm ms-auto" onClick={() => removeFromCart(item.id)}>
//                                                         Remove
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="col-md-4">
//                             <div className="card shadow-sm">
//                                 <div className="card-body">
//                                     <h5 className="card-title">Cart Summary</h5>
//                                     <hr />
//                                     <p className="card-text">
//                                         <strong>Total Items:</strong> {totalQuantity}
//                                     </p>
//                                     <p className="card-text">
//                                         <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
//                                     </p>
//                                     <button className="btn btn-warning w-100 mb-2" onClick={clearCart}>
//                                         Clear Cart
//                                     </button>
//                                     {isAuthenticated ? (
//                                         <button className="btn btn-success w-100">Checkout</button>
//                                     ) : (
//                                         <Link to={"/login"} className="btn btn-success w-100 mb-2">
//                                             Login
//                                         </Link>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <p className="text-center mt-5">Your cart is empty.</p>
//                 )}
//             </div>

//             {/* Toast Notifications */}
//             <ToastContainer />
//         </>
//     );
// }

// ---------------- Redux ---------------- //
// -------------------------------------------------------- //
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart, decreaseQuantity, removeFromCart, clearCart } from "../slices/cartSlice";

export default function Cart() {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart.cart);
    const token = useAppSelector((state) => state.auth.token);
    const isAuthenticated = Boolean(token);

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    console.log(cart);

    return (
        <>
            <Navbar />
            <Header title="Cart" />
            <div className="container mt-4">
                {cart.length > 0 ? (
                    <div className="row">
                        <div className="col-md-8">
                            {cart.map((item) => (
                                <div key={item.id} className="card mb-3 shadow-sm">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.thumbnail} alt={item.title} className="img-fluid rounded-start" style={{ height: "150px", objectFit: "cover" }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text mb-1">
                                                    <strong>Price:</strong> ${item.price}
                                                </p>
                                                <p className="card-text mb-2">
                                                    <strong>Total:</strong> ${item.price * item.quantity}
                                                </p>
                                                <div className="d-flex align-items-center">
                                                    <button className="btn btn-secondary btn-sm me-2" onClick={() => dispatch(decreaseQuantity(item.id))}>
                                                        -
                                                    </button>
                                                    <span className="badge bg-primary px-3">{item.quantity}</span>
                                                    <button className="btn btn-secondary btn-sm ms-2" onClick={() => dispatch(addToCart(item))}>
                                                        +
                                                    </button>
                                                    <button className="btn btn-danger btn-sm ms-auto" onClick={() => dispatch(removeFromCart(item.id))}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Cart Summary</h5>
                                    <hr />
                                    <p className="card-text">
                                        <strong>Total Items:</strong> {totalQuantity}
                                    </p>
                                    <p className="card-text">
                                        <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
                                    </p>
                                    <button className="btn btn-warning w-100 mb-2" onClick={() => dispatch(clearCart())}>
                                        Clear Cart
                                    </button>
                                    {isAuthenticated ? (
                                        <button className="btn btn-success w-100">Checkout</button>
                                    ) : (
                                        <Link to={"/login"} className="btn btn-success w-100 mb-2">
                                            Login
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container mt-5">
                        <div className="card border-0">
                            <div className="card-body text-center">
                                <h4 className="card-title mb-3">Your cart is empty</h4>
                                <p className="card-text mb-4">It looks like you haven't added any products yet.</p>
                                <a href="/products" className="btn btn-primary">
                                    Browse Products
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
