import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/types';
import { translations } from '@/i18n';

interface CategoriesProps {
    categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
    const t = translations.es;

    return (
        <section className="section-padding bg-white">
            <div className="container-max">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.common.categories}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explora nuestras categorías principales y encuentra exactamente lo que buscas
                    </p>
                </div>

                {/* Categories grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/categoria/${category.slug}`}
                            className="group block"
                        >
                            <div className="card hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                {/* Category image */}
                                <div className="relative aspect-square overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            backgroundImage: `url(${category.image})`,
                                        }}
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors" />

                                    {/* Product count badge */}
                                    <div className="absolute top-3 right-3 bg-white bg-opacity-90 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                                        {category.productCount} productos
                                    </div>
                                </div>

                                {/* Category info */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                        {category.name}
                                    </h3>

                                    {/* Arrow indicator */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">
                                            Ver todos
                                        </span>
                                        <ArrowRight
                                            size={16}
                                            className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View all categories button */}
                <div className="text-center mt-12">
                    <Link
                        href="/categorias"
                        className="inline-flex items-center bg-brown-500 hover:bg-brown-300 text-white px-8 py-3 rounded-lg font-semibold transition-colors group"
                    >
                        Ver todas las categorías
                        <ArrowRight
                            size={20}
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
