import useCart from "../context/useCart";
import { Product } from "./ProductsListComp";

interface ProductItemProps {
    product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
    const { addToCart } = useCart();

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={product.thumbnail} alt={product.title} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                        <strong>Current Price:</strong> ${product.price}
                    </p>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
