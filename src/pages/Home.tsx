import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header title="Welcome to ITI LAB" />
            <div className="container mt-5">
                <section className="text-center mb-5">
                    <h3 className="mb-4">Explore Our Features</h3>
                    <p className="text-muted">Discover everything our e-commerce platform offers to make your shopping experience seamless and enjoyable.</p>
                </section>

                <section className="row gy-4">
                    {/* Feature 1 */}
                    <div className="col-12">
                        <div className="card shadow-lg border-0">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-4">
                                    <div className="p-4 text-center">
                                        <h5 className="card-title text-primary">User Authentication</h5>
                                        <p className="card-text">Secure login and registration with real-time form validation and toast notifications for feedback.</p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="bg-light" style={{ height: "150px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="col-12">
                        <div className="card shadow-lg border-0">
                            <div className="row g-0 align-items-center flex-md-row-reverse">
                                <div className="col-md-4">
                                    <div className="p-4 text-center">
                                        <h5 className="card-title text-primary">Protected Routes</h5>
                                        <p className="card-text">Access protected pages only after authentication, ensuring a secure experience.</p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="bg-secondary" style={{ height: "150px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="col-12">
                        <div className="card shadow-lg border-0">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-4">
                                    <div className="p-4 text-center">
                                        <h5 className="card-title text-primary">Product Listing</h5>
                                        <p className="card-text">Browse products with advanced features like category filters, search functionality, and pagination.</p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="bg-light" style={{ height: "150px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="col-12">
                        <div className="card shadow-lg border-0">
                            <div className="row g-0 align-items-center flex-md-row-reverse">
                                <div className="col-md-4">
                                    <div className="p-4 text-center">
                                        <h5 className="card-title text-primary">Cart Management</h5>
                                        <p className="card-text">Add, remove, or update products in your cart with a detailed summary of total items and price.</p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="bg-secondary" style={{ height: "150px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="col-12">
                        <div className="card shadow-lg border-0">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-4">
                                    <div className="p-4 text-center">
                                        <h5 className="card-title text-primary">Toast Notifications</h5>
                                        <p className="card-text">Get real-time feedback on your actions like adding to cart or successful login.</p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="bg-light" style={{ height: "150px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 6 */}
                    <div className="col-12">
                        <div className="card shadow-lg border-0">
                            <div className="row g-0 align-items-center flex-md-row-reverse">
                                <div className="col-md-4">
                                    <div className="p-4 text-center">
                                        <h5 className="card-title text-primary">Checkout Process</h5>
                                        <p className="card-text">View a detailed cart summary with total price and item count, and proceed to checkout easily.</p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="bg-secondary" style={{ height: "150px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
