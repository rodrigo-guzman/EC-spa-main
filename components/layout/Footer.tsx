import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { translations } from '@/i18n';

export default function Footer() {
    const t = translations.es;

    const footerLinks = {
        company: [
            { label: 'Sobre Nosotros', href: '/nosotros' },
            { label: 'Nuestra Historia', href: '/historia' },
            { label: 'Trabaja con Nosotros', href: '/trabaja-con-nosotros' },
            { label: 'Prensa', href: '/prensa' },
        ],
        support: [
            { label: 'Centro de Ayuda', href: '/ayuda' },
            { label: 'Contacto', href: '/contacto' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Soporte Técnico', href: '/soporte' },
        ],
        legal: [
            { label: 'Términos y Condiciones', href: '/terminos' },
            { label: 'Política de Privacidad', href: '/privacidad' },
            { label: 'Política de Cookies', href: '/cookies' },
            { label: 'Reembolsos', href: '/reembolsos' },
        ],
        categories: [
            { label: 'Electrónicos', href: '/categoria/electronicos' },
            { label: 'Hogar', href: '/categoria/hogar' },
            { label: 'Moda', href: '/categoria/moda' },
            { label: 'Deportes', href: '/categoria/deportes' },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Youtube, href: '#', label: 'Youtube' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main footer content */}
            <div className="container-max py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-primary-400 mb-4 block">
                            VICTORICA
                        </Link>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Tu tienda online de confianza con los mejores productos y precios.
                            Ofrecemos una experiencia de compra excepcional con envío rápido y atención al cliente 24/7.
                        </p>

                        {/* Contact info */}
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-300">
                                <MapPin size={16} className="mr-3 text-primary-400" />
                                <span>123 Calle Principal, Ciudad, País</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <Phone size={16} className="mr-3 text-primary-400" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <Mail size={16} className="mr-3 text-primary-400" />
                                <span>info@ec-spa.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Company links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Empresa</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Soporte</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Categorías</h3>
                        <ul className="space-y-2">
                            {footerLinks.categories.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="max-w-md">
                        <h3 className="text-lg font-semibold mb-2">Suscríbete a nuestro newsletter</h3>
                        <p className="text-gray-300 mb-4">
                            Recibe las últimas ofertas y novedades directamente en tu email.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 transition-colors rounded-r-lg font-medium"
                            >
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom footer */}
            <div className="border-t border-gray-800">
                <div className="container-max py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2025 VICTORICA. Todos los derechos reservados.
                        </div>

                        {/* Legal links */}
                        <div className="flex space-x-6 text-sm">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-400 hover:text-primary-400 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="text-gray-400 hover:text-primary-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
