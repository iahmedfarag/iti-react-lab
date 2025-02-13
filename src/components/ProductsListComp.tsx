import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export interface Product {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    category: string;
}

interface Category {
    slug: string;
    name: string;
    url: string;
}

export default function ProductsList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 9;

    const fetchProducts = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products?limit=50");
            const prds = await res.json();
            setProducts(prds.products);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products/categories");
            const cats = await res.json();
            setCategories(cats);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await Promise.all([fetchProducts(), fetchCategories()]);
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to page 1 when searching
    };

    const handleCategoryClick = (category: string) => {
        setSearchQuery("");
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to page 1 when changing category
    };

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase())).filter((product) => (selectedCategory ? product.category === selectedCategory : true));

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="categories-container d-flex flex-wrap justify-content-center gap-3 mb-4">
                <div className={`category-item text-center border rounded px-4 py-2 ${selectedCategory === "" ? "bg-primary text-white" : "bg-light"}`} onClick={() => handleCategoryClick("")} style={{ cursor: "pointer", minWidth: "150px" }}>
                    All Categories
                </div>
                {categories.map((category) => (
                    <div key={category.slug} className={`category-item text-center border rounded px-4 py-2 ${selectedCategory === category.slug ? "bg-primary text-white" : "bg-light"}`} onClick={() => handleCategoryClick(category.slug)} style={{ cursor: "pointer", minWidth: "150px" }}>
                        {category.name}
                    </div>
                ))}
            </div>

            <input className="form-control mb-4" type="search" placeholder="Search by title" aria-label="Search" value={searchQuery} onChange={handleSearch} />

            <div className="row">
                {paginatedProducts.length > 0 ? (
                    paginatedProducts.map((product) => <ProductItem product={product} key={product.id} />)
                ) : (
                    <div className="text-center">
                        <p>No products found.</p>
                    </div>
                )}
            </div>

            {/* Pagination */}
            <nav className="d-flex justify-content-center mt-4">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                            Previous
                        </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
