import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header title="Welcome to ITI LAB" />
            <div className="container mt-5">
                <section className="mb-5">
                    <h3 className="text-center mb-4">Our Application Features</h3>
                    <div className="row">
                        {/* Products Page Details */}
                        <div className="col-md-6">
                            <div className="card shadow-lg mb-4">
                                <div className="card-header bg-primary text-white">Products Page</div>
                                <div
                                    className="card-body"
                                    style={{
                                        background: "rgba(0, 123, 255, 0.05)",
                                        padding: "1.5rem",
                                        borderLeft: "5px solid #0d6efd",
                                    }}>
                                    <p>
                                        <strong>Lazy Loading:</strong> The products are loaded lazily to enhance performance.
                                    </p>
                                    <p>
                                        <strong>Category Filters:</strong> All available categories are displayed. Clicking on a category filters the products accordingly.
                                    </p>
                                    <p>
                                        <strong>Search & Pagination:</strong> Typing in the search input filters products by title, and the pagination adapts based on the filtered results. Clicking on a pagination link navigates you to the corresponding page.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Cart & Notifications Details */}
                        <div className="col-md-6">
                            <div className="card shadow-lg mb-4">
                                <div className="card-header bg-success text-white">Cart & Notifications</div>
                                <div
                                    className="card-body"
                                    style={{
                                        background: "rgba(25, 135, 84, 0.05)",
                                        padding: "1.5rem",
                                        borderLeft: "5px solid #198754",
                                    }}>
                                    <p>
                                        <strong>Add to Cart:</strong> When you click "Add to Cart", a toast notification is displayed. If the product is already in the cart, you'll be informed that the quantity has increased.
                                    </p>
                                    <p>
                                        <strong>Cart Page:</strong> The Cart page shows a detailed summary of your selected products, including quantities, individual prices, and a total price summary.
                                    </p>
                                    <p>
                                        <strong>Quantity Management:</strong> You can increase or decrease the product quantity. If the quantity decreases to zero, the product is automatically removed from the cart.
                                    </p>
                                    <p>
                                        <strong>Conditional Checkout:</strong> If you are logged in, you will see a "Checkout" button. If you are not logged in, a "Login" button is displayed to prompt secure access before proceeding.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Authentication Details */}
                        <div className="col-md-6">
                            <div className="card shadow-lg mb-4">
                                <div className="card-header bg-warning text-white">Authentication (Login / Register)</div>
                                <div
                                    className="card-body"
                                    style={{
                                        background: "rgba(255, 193, 7, 0.05)",
                                        padding: "1.5rem",
                                        borderLeft: "5px solid #ffc107",
                                    }}>
                                    <p>
                                        Our authentication system uses <strong className="text-danger">react-hook-form</strong> for efficient, <strong className="text-danger">real-time form validation</strong> on both the login and registration pages.
                                    </p>
                                    <p>This ensures that user inputs (such as a valid email format and a minimum password length) are checked before form submission.</p>
                                    <p>
                                        On successful login, a dummy token <strong className="text-danger">(e.g., "fake-token")</strong> is generated and stored in localStorage, while the Redux store is updated. This dummy token mechanism simulates the authentication process and allows
                                        <strong className="text-danger"> protected routes </strong>
                                        to verify the user's logged-in state.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Overall Experience Details */}
                        <div className="col-md-6">
                            <div className="card shadow-lg mb-4">
                                <div className="card-header bg-info text-white">Overall Experience</div>
                                <div
                                    className="card-body"
                                    style={{
                                        background: "rgba(13, 202, 240, 0.05)",
                                        padding: "1.5rem",
                                        borderLeft: "5px solid #0dcaf0",
                                    }}>
                                    <p>
                                        The application uses <strong className="text-danger">Redux</strong> for robust state management, ensuring that all the features—from filtering to notifications—work seamlessly.
                                    </p>
                                    <p>
                                        We also have a <strong className="text-danger">custom hook</strong> called <strong>useWindowSize</strong>, which detects window size changes. It logs the current width and height to the console, and automatically switches the header's background gradient when
                                        the window is less than 600px wide.
                                    </p>
                                    <p>
                                        Enjoy a smooth, dynamic, and <strong className="text-danger">responsive interface</strong> powered by <strong className="text-danger">lazy loading</strong>, <strong className="text-danger">active navigation</strong>, and{" "}
                                        <strong className="text-danger">real-time updates—all</strong> styled with <strong className="text-danger">Bootstrap</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
