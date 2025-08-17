import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { translations } from '@/i18n';

interface HeaderProps {
    cartItemsCount: number;
}

export default function Header({ cartItemsCount }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const t = translations.es; // Por ahora solo español

    const navigationItems = [
        { label: t.navigation.home, href: '/' },
        { label: t.navigation.products, href: '/productos' },
        { label: t.navigation.about, href: '/nosotros' },
        { label: t.navigation.contact, href: '/contacto' },
        { label: t.navigation.help, href: '/ayuda' },
    ];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implementar búsqueda
        console.log('Searching for:', searchQuery);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            {/* Top bar */}
            <div className="bg-brown-500 text-white py-2">
                <div className="container-max">
                    <div className="grid grid-cols-3 items-center text-sm">
                        <div className="flex items-center space-x-4">

                        </div>
                        {/* Center - Instagram */}
                        <div className="flex justify-center">
                            <span><a href="http://instagram.com/victorica.lp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span className="text-white font-medium">Instagram</span>
                            </a></span>
                        </div>

                        {/* Right side */}
                        <div className="flex items-center justify-end space-x-4">
                            <Link href="/login" className="hover:text-primary-200 transition-colors">
                                {t.common.login}
                            </Link>
                            <Link href="/register" className="hover:text-primary-200 transition-colors">
                                {t.common.register}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="container-max py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/inscripciones-congresomedicina.appspot.com/o/logo-etiqueta.png?alt=media&token=93c8481c-7820-4d42-8847-ba7ab020515b"
                            alt="Logo"
                            className="w-10 h-10 rounded-lg" />
                        <Link href="/" className="text-2xl font-bold text-brown-500">
                            VICTORICA
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Search, Cart, User */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            <Search size={20} />
                        </button>

                        {/* Cart */}
                        <Link href="/cart" className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
                            <ShoppingCart size={20} />
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                            )}
                        </Link>

                        {/* User */}
                        <Link href="/account" className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                            <User size={20} />
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Search bar */}
                {isSearchOpen && (
                    <div className="mt-4">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t.common.search}
                                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-md hover:bg-primary-700 transition-colors"
                            >
                                {t.common.search}
                            </button>
                        </form>
                    </div>
                )}
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <nav className="container-max py-4">
                        <div className="flex flex-col space-y-4">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
