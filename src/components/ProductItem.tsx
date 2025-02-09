import { useState } from "react";
import { Product } from "./ProductsList";

interface ProductItemProps {
    product: Product;
    onUpdatePrice: (id: number, newPrice: number) => void;
    onDelete: (id: number) => void;
}

export default function ProductItem({ product, onUpdatePrice, onDelete }: ProductItemProps) {
    const [newPrice, setNewPrice] = useState<string>(product.price.toString());
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPrice(e.target.value);
    };

    const handleSavePrice = () => {
        const parsedPrice = parseFloat(newPrice);

        if (isNaN(parsedPrice) || parsedPrice <= 0) {
            alert("Please enter a valid number greater than 0.");
            return;
        }

        onUpdatePrice(product.id, parsedPrice);

        setIsEditing(false);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={product.thumbnail} alt={product.title} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                        <strong>Current Price:</strong> ${product.price}
                    </p>

                    {isEditing ? (
                        <div className="mb-2">
                            <label className="form-label">Enter New Price:</label>
                            <input type="text" className="form-control" value={newPrice} onChange={handlePriceInputChange} placeholder="e.g. 29.99" />

                            <button className="btn btn-success btn-sm mt-2 me-2" onClick={handleSavePrice}>
                                Save
                            </button>
                            <button className="btn btn-secondary btn-sm mt-2" onClick={() => setIsEditing(false)}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button className="btn btn-success btn-sm me-2" onClick={() => setIsEditing(true)}>
                            Update Price
                        </button>
                    )}

                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(product.id)}>
                        Delete Product
                    </button>
                </div>
            </div>
        </div>
    );
}
