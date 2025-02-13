import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsList />} />
                <Route path="/login" element={<ProtectedRoute element={<Login />} redirectTo="/" />} />
                <Route path="/register" element={<ProtectedRoute element={<Register />} redirectTo="/" />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
