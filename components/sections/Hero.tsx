import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Banner } from '@/types';
import { translations } from '@/i18n';

interface HeroProps {
    banners: Banner[];
}

export default function Hero({ banners }: HeroProps) {
    const [currentBanner, setCurrentBanner] = useState(0);
    const t = translations.es;

    // Auto-advance banners
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [banners.length]);

    const goToBanner = (index: number) => {
        setCurrentBanner(index);
    };

    const goToPrevious = () => {
        setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
    };

    const goToNext = () => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
    };

    if (banners.length === 0) {
        return (
            <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
                <div className="container-max text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Bienvenido a EC SPA
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                        Descubre los mejores productos con precios increíbles
                    </p>
                    <Link
                        href="/productos"
                        className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                    >
                        Ver Productos
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
            {/* Banner carousel */}
            <div className="relative h-full">
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBanner ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Background image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${banner.image})`,
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40" />
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex items-center">
                            <div className="container-max">
                                <div className="max-w-2xl text-white">
                                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                                        {banner.title}
                                    </h1>
                                    {banner.subtitle && (
                                        <p className="text-xl md:text-2xl mb-8 animate-slide-up">
                                            {banner.subtitle}
                                        </p>
                                    )}
                                    <Link
                                        href={banner.link}
                                        className="inline-flex items-center bg-brown-500 hover:bg-brown-300 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors group"
                                    >
                                        {banner.buttonText}
                                        <Play
                                            size={20}
                                            className="ml-2 group-hover:translate-x-1 transition-transform"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation arrows */}
            {banners.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all backdrop-blur"
                        aria-label="Banner anterior"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all backdrop-blur"
                        aria-label="Banner siguiente"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {/* Dots indicator */}
            {banners.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToBanner(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentBanner
                                ? 'bg-white scale-125'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                            aria-label={`Ir al banner ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
