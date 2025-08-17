import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Categories from '@/components/sections/Categories';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import NewArrivals from '@/components/sections/NewArrivals';
import SaleBanner from '@/components/sections/SaleBanner';
import Newsletter from '@/components/sections/Newsletter';
import Footer from '@/components/layout/Footer';
import { Product, Category, Banner } from '@/types';

// Mock data - en un proyecto real esto vendría de una API
const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Vestido Escote Redondo',
        description: 'Vestido con escote redondo y mangas largas',
        price: 49.99,
        originalPrice: 69.99,
        images: ['https://firebasestorage.googleapis.com/v0/b/inscripciones-congresomedicina.appspot.com/o/tunica-escote-redondo%2Ffrente.jpg?alt=media&token=24d160e6-f1ca-49d5-b404-5debb5902e44'],
        category: 'Vestidos Cortos',
        tags: ['destacado', 'nuevo'],
        inStock: true,
        rating: 4.5,
        reviewCount: 128,
    },
    {
        id: '2',
        name: 'Vestido Largo',
        description: 'Vestido largo con mangas largas',
        price: 79.99,
        images: ['https://firebasestorage.googleapis.com/v0/b/inscripciones-congresomedicina.appspot.com/o/tunica-larga%2Ftunica-larga.jpg?alt=media&token=9abb9485-2680-47a3-9a29-23b5bf9ea425'],
        category: 'Vestidos Largos',
        tags: ['destacado'],
        inStock: true,
        rating: 4.2,
        reviewCount: 89,
    },
    {
        id: '3',
        name: 'Vestido Largo',
        description: 'Vestido holgado con mangas largas',
        price: 59.99,
        images: ['https://firebasestorage.googleapis.com/v0/b/inscripciones-congresomedicina.appspot.com/o/vestido-holgado%2Ffrente.jpg?alt=media&token=e5265048-6ee5-4715-802b-56d7964b07d5'],
        category: 'Vestidos Largos',
        tags: ['destacado'],
        inStock: true,
        rating: 4.2,
        reviewCount: 89,
    },
    {
        id: '4',
        name: 'Vestido Corto Escote V',
        description: 'Vestido corto con escote en V y mangas largas',
        price: 49.99,
        originalPrice: 69.99,
        images: ['https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/hekhwikomdcjnmtwhrol.jpg'],
        category: 'Vestidos Cortos',
        tags: ['destacado', 'nuevo'],
        inStock: true,
        rating: 4.5,
        reviewCount: 128,
    },
    // Más productos...
];

const mockCategories: Category[] = [
    {
        id: '1',
        name: 'Vestidos Cortos',
        slug: 'vestidos-cortos',
        image: 'https://firebasestorage.googleapis.com/v0/b/inscripciones-congresomedicina.appspot.com/o/tunica-larga.jpg?alt=media&token=e7efcc42-5c1e-4346-b7b5-58e625a3f60a',
        productCount: 156,
    },
    {
        id: '2',
        name: 'Vestidos Largos',
        slug: 'vestidos-largos',
        image: 'https://firebasestorage.googleapis.com/v0/b/inscripciones-congresomedicina.appspot.com/o/frente-ejemplo.jpg?alt=media&token=2e499634-cf40-46e3-8f8a-a17eeb70c62b',
        productCount: 89,
    },
    // Más categorías...
];

const mockBanners: Banner[] = [
    {
        id: '1',
        title: 'Ofertas Especiales',
        subtitle: 'Hasta 50% de descuento',
        image: 'https://firebasestorage.googleapis.com/v0/b/inscripciones-congresomedicina.appspot.com/o/frente-carrousel.jpg?alt=media&token=ad381ad6-722f-44e2-ac37-3f3617969e69',
        link: '/ofertas',
        buttonText: 'Ver Ofertas',
    },
];

export default function Home() {
    const [cartItems, setCartItems] = useState<number>(0);

    return (
        <>
            <Head>
                <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/inscripciones-congresomedicina.appspot.com/o/logos%2Fredondo-sin-borde.png?alt=media&token=da3be392-0266-4a2a-a276-ee21556216da" />
                <title>VICTORICA - Tu Tienda Online</title>
                <meta name="description" content="Descubre los mejores productos en nuestra tienda online" />
                <meta name="keywords" content="ecommerce, tienda online, productos, ofertas" />
                <meta property="og:title" content="VICTORICA - Tu Tienda Online" />
                <meta property="og:description" content="Descubre los mejores productos en nuestra tienda online" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://victoricalp.com" />
            </Head>

            <div className="min-h-screen bg-gray-50">
                <Header cartItemsCount={cartItems} />

                <main>
                    <Hero banners={mockBanners} />
                    <Categories categories={mockCategories} />
                    <FeaturedProducts products={mockProducts} />
                    <NewArrivals products={mockProducts} />
                    <SaleBanner />
                    <Newsletter />
                </main>

                <Footer />
            </div>
        </>
    );
}
