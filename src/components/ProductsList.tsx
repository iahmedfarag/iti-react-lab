import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export interface Product {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
}

export default function ProductsList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products?limit=10");
                const prds = await res.json();
                setProducts(prds.products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleUpdatePrice = (id: number, newPrice: number) => {
        if (isNaN(newPrice) || newPrice <= 0) {
            alert("Please enter a valid price greater than 0.");
            return;
        }
        const updatedProducts = products.map((product) => (product.id === id ? { ...product, price: newPrice } : product));
        setProducts(updatedProducts);
    };

    const handleDeleteProduct = (id: number) => {
        const filteredProducts = products.filter((product) => product.id !== id);
        setProducts(filteredProducts);
    };

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Products</h2>
            <input className="form-control mb-4" type="search" placeholder="Search by title" aria-label="Search" value={searchQuery} onChange={handleSearch} />

            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => <ProductItem product={product} key={product.id} onUpdatePrice={handleUpdatePrice} onDelete={handleDeleteProduct} />)
                ) : (
                    <div className="text-center">
                        <p>No products found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
