// context --- //
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { AuthProvider } from "./context/AuthContext.tsx";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import { CartProvider } from "./context/CartContext.tsx";

// const root = ReactDOM.createRoot(document.getElementById("root")!);
// root.render(
//     <BrowserRouter>
//         <AuthProvider>
//             <CartProvider>
//                 <App />
//                 <ToastContainer />
//             </CartProvider>
//         </AuthProvider>
//     </BrowserRouter>
// );

// ---------------- Redux ---------------- //
// -------------------------------------------------------- //
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
            <ToastContainer />
        </Provider>
    </BrowserRouter>
);
