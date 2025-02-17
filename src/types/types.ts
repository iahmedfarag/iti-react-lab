export interface Product {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    category: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Category {
    slug: string;
    name: string;
    url: string;
}

export interface RegisterFormInputs {
    email: string;
    password: string;
    confirmPassword: string;
}
