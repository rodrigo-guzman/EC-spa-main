export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    images: string[];
    category: string;
    tags: string[];
    inStock: boolean;
    rating: number;
    reviewCount: number;
    variants?: ProductVariant[];
}

export interface ProductVariant {
    id: string;
    name: string;
    value: string;
    price?: number;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    productCount: number;
}

export interface CartItem {
    product: Product;
    quantity: number;
    selectedVariant?: ProductVariant;
}

export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
}

export interface Banner {
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    link: string;
    buttonText: string;
}

export interface NavigationItem {
    id: string;
    label: string;
    href: string;
    children?: NavigationItem[];
}
