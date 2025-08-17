export const i18n = {
    defaultLocale: 'es',
    locales: ['es', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const translations = {
    es: {
        common: {
            search: 'Buscar',
            cart: 'Carrito',
            login: 'Iniciar sesión',
            register: 'Registrarse',
            categories: 'Categorías',
            featured: 'Destacados',
            newArrivals: 'Novedades',
            sale: 'Ofertas',
            viewAll: 'Ver todo',
            addToCart: 'Agregar al carrito',
            buyNow: 'Comprar ahora',
        },
        navigation: {
            home: 'Inicio',
            products: 'Productos',
            about: 'Nosotros',
            contact: 'Contacto',
            help: 'Ayuda',
        },
    },
    en: {
        common: {
            search: 'Search',
            cart: 'Cart',
            login: 'Login',
            register: 'Register',
            categories: 'Categories',
            featured: 'Featured',
            newArrivals: 'New Arrivals',
            sale: 'Sale',
            viewAll: 'View All',
            addToCart: 'Add to Cart',
            buyNow: 'Buy Now',
        },
        navigation: {
            home: 'Home',
            products: 'Products',
            about: 'About',
            contact: 'Contact',
            help: 'Help',
        },
    },
} as const;
