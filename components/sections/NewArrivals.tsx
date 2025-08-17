import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Product } from '@/types';
import { translations } from '@/i18n';

interface NewArrivalsProps {
    products: Product[];
}

export default function NewArrivals({ products }: NewArrivalsProps) {
    const t = translations.es;

    // Simular productos nuevos (en un proyecto real vendrían de la API)
    const newProducts = products.slice(0, 4);

    return (
        <section className="section-padding bg-white">
            <div className="container-max">
                {/* Section header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t.common.newArrivals}
                        </h2>
                        <p className="text-lg text-gray-600">
                            Los productos más recientes que hemos agregado a nuestra colección
                        </p>
                    </div>

                    <Link
                        href="/novedades"
                        className="hidden md:flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
                    >
                        Ver todas las novedades
                        <ArrowRight
                            size={20}
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </div>

                {/* New products grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newProducts.map((product, index) => (
                        <div key={product.id} className="group">
                            <div className="card hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                {/* Product image */}
                                <div className="relative aspect-square overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            backgroundImage: `url(${product.images[0]})`,
                                        }}
                                    />

                                    {/* New badge */}
                                    <div className="absolute top-3 left-3 bg-brown-900 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                                        <Clock size={12} className="mr-1" />
                                        Nuevo
                                    </div>

                                    {/* Arrival order */}
                                    <div className="absolute top-3 right-3 bg-[#5D6532] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                                        #{index + 1}
                                    </div>
                                </div>

                                {/* Product info */}
                                <div className="p-4">
                                    <div className="text-sm text-primary-600 mb-2">
                                        {product.category}
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                                        <Link href={`/producto/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </h3>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-gray-900">
                                            ${product.price}
                                        </span>

                                        <Link
                                            href={`/producto/${product.id}`}
                                            className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline"
                                        >
                                            Ver detalles
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile view all button */}
                <div className="text-center mt-12 md:hidden">
                    <Link
                        href="/novedades"
                        className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Ver todas las novedades
                        <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
