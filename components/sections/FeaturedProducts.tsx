import { useState } from 'react';
import Link from 'next/link';
import { Heart, Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/types';
import { translations } from '@/i18n';
import { formatPrice, calculateDiscount } from '@/utils';

interface FeaturedProductsProps {
    products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
    const [wishlist, setWishlist] = useState<Set<string>>(new Set());
    const t = translations.es;

    const toggleWishlist = (productId: string) => {
        setWishlist(prev => {
            const newSet = new Set(prev);
            if (newSet.has(productId)) {
                newSet.delete(productId);
            } else {
                newSet.add(productId);
            }
            return newSet;
        });
    };

    const addToCart = (product: Product) => {
        // Implementar lógica de carrito
        console.log('Adding to cart:', product);
    };

    const quickView = (product: Product) => {
        // Implementar vista rápida
        console.log('Quick view:', product);
    };

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-max">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.common.featured}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Descubre nuestros productos más populares y mejor valorados por nuestros clientes
                    </p>
                </div>

                {/* Products grid */}
                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="card group hover:shadow-lg transition-all duration-300">
                            {/* Product image */}
                            <div className="relative aspect-square overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        backgroundImage: `url(${product.images[0]})`,
                                    }}
                                />

                                {/* Discount badge */}
                                {product.originalPrice && (
                                    <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                                        -{calculateDiscount(product.originalPrice, product.price)}%
                                    </div>
                                )}

                                {/* Action buttons overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            onClick={() => toggleWishlist(product.id)}
                                            className={`p-2 rounded-full transition-colors ${wishlist.has(product.id)
                                                ? 'bg-red-500 text-white'
                                                : 'bg-white text-gray-700 hover:bg-red-500 hover:text-white'
                                                }`}
                                            aria-label="Agregar a favoritos"
                                        >
                                            <Heart size={18} fill={wishlist.has(product.id) ? 'currentColor' : 'none'} />
                                        </button>

                                        <button
                                            onClick={() => quickView(product)}
                                            className="p-2 bg-white text-gray-700 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                                            aria-label="Vista rápida"
                                        >
                                            <Eye size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Stock status */}
                                {!product.inStock && (
                                    <div className="absolute top-3 right-3 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                                        Agotado
                                    </div>
                                )}
                            </div>

                            {/* Product info */}
                            <div className="p-4">
                                {/* Category */}
                                <div className="text-sm text-primary-600 mb-2">
                                    {product.category}
                                </div>

                                {/* Product name */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                                    <Link href={`/producto/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </h3>

                                {/* Rating */}
                                <div className="flex items-center mb-3">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className={`${i < Math.floor(product.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500 ml-2">
                                        ({product.reviewCount})
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xl font-bold text-gray-900">
                                            {formatPrice(product.price)}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">
                                                {formatPrice(product.originalPrice)}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Add to cart button */}
                                <button
                                    onClick={() => addToCart(product)}
                                    disabled={!product.inStock}
                                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${product.inStock
                                        ? 'bg-brown-500 hover:bg-brown-400 text-white'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    {product.inStock ? (
                                        <span className="flex items-center justify-center">
                                            <ShoppingCart size={16} className="mr-2" />
                                            {t.common.addToCart}
                                        </span>
                                    ) : (
                                        'Agotado'
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all products button */}
                <div className="text-center mt-12">
                    <Link
                        href="/productos"
                        className="inline-flex items-center bg-brown-500 hover:bg-brown-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Ver todos los productos
                    </Link>
                </div>
            </div>
        </section>
    );
}
