import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <ProductsList />
            </div>
        </>
    );
}

export default App;
