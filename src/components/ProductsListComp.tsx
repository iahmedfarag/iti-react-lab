import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import ProductItem from "./ProductItem";
import { setCategories, setProducts, setSelectedCategory } from "../slices/productsSlice";
import { Category } from "../types/types";

export default function ProductsList() {
    const dispatch = useDispatch();
    const { products, categories, selectedCategory } = useSelector((state: RootState) => state.products);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 9;

    // Fetch products using TanStack Query
    const { isLoading: productsLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch("https://dummyjson.com/products?limit=50");
            const data = await res.json();
            dispatch(setProducts(data.products));
            return data.products;
        },
    });

    // Fetch categories using TanStack Query
    const { isLoading: categoriesLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("https://dummyjson.com/products/categories");
            const data = await res.json();
            dispatch(setCategories(data));
            return data;
        },
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleCategoryClick = (category: string) => {
        setSearchQuery("");
        dispatch(setSelectedCategory(category));
        setCurrentPage(1);
    };

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase())).filter((product) => (selectedCategory ? product.category === selectedCategory : true));

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (productsLoading || categoriesLoading) {
        return (
            <div className="container mt-5 text-center">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            {/* Categories */}
            <div className="categories-container d-flex flex-wrap justify-content-center gap-3 mb-4">
                <div className={`category-item text-center border rounded px-4 py-2 ${selectedCategory === "" ? "bg-primary text-white" : "bg-light"}`} onClick={() => handleCategoryClick("")} style={{ cursor: "pointer", minWidth: "150px" }}>
                    All Categories
                </div>
                {categories.map((category: Category) => (
                    <div key={category.slug} className={`category-item text-center border rounded px-4 py-2 ${selectedCategory === category.slug ? "bg-primary text-white" : "bg-light"}`} onClick={() => handleCategoryClick(category.slug)} style={{ cursor: "pointer", minWidth: "150px" }}>
                        {category.name}
                    </div>
                ))}
            </div>

            {/* Search Input */}
            <input className="form-control mb-4" type="search" placeholder="Search by title" aria-label="Search" value={searchQuery} onChange={handleSearch} />

            {/* Products Grid */}
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

            {filteredProducts.length > itemsPerPage && (
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
            )}
        </div>
    );
}
