import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductsListComp from "../components/ProductsListComp";
export default function ProductsList() {
    return (
        <>
            <Navbar />
            <Header title="Products" />
            <ProductsListComp />
        </>
    );
}
