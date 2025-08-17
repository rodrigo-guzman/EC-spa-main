import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { translations } from '@/i18n';

export default function SaleBanner() {
    const t = translations.es;

    // Simular ofertas (en un proyecto real vendrían de la API)
    const offers = [
        {
            id: '1',
            title: 'Ofertas Flash',
            subtitle: 'Hasta 70% de descuento',
            description: 'Solo por tiempo limitado. No te pierdas estas increíbles ofertas.',
            endTime: '2024-12-31T23:59:59',
            buttonText: 'Ver Ofertas',
            link: '/ofertas-flash',
            bgColor: 'from-[#5D6532] to-[#3D4221]',
            textColor: 'text-white',
        },
        {
            id: '2',
            title: 'Envío Gratis',
            subtitle: 'En pedidos superiores a $50',
            description: 'Aprovecha el envío gratis en toda tu compra.',
            endTime: '2024-12-31T23:59:59',
            buttonText: 'Comprar Ahora',
            link: '/productos',
            bgColor: 'from-[#3E3A36] to-[#2C2C2C]',
            textColor: 'text-white',
        },
    ];

    const formatTimeLeft = (endTime: string) => {
        const now = new Date().getTime();
        const end = new Date(endTime).getTime();
        const timeLeft = end - now;

        if (timeLeft <= 0) return 'Oferta terminada';

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) return `${days}d ${hours}h`;
        if (hours > 0) return `${hours}h ${minutes}m`;
        return `${minutes}m`;
    };

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-max">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.common.sale}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Aprovecha nuestras mejores ofertas y promociones especiales
                    </p>
                </div>

                {/* Offers grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${offer.bgColor} ${offer.textColor}`}
                        >
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
                            </div>

                            {/* Content */}
                            <div className="relative p-8">
                                {/* Badge */}
                                <div className="inline-flex items-center bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                                    <Tag size={16} className="mr-2" />
                                    Oferta Especial
                                </div>

                                {/* Title and subtitle */}
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                    {offer.title}
                                </h3>
                                <p className="text-xl font-semibold mb-4 opacity-90">
                                    {offer.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-lg mb-6 opacity-80">
                                    {offer.description}
                                </p>

                                {/* Countdown timer */}
                                <div className="flex items-center mb-6 text-sm opacity-80">
                                    <Clock size={16} className="mr-2" />
                                    <span>Termina en: {formatTimeLeft(offer.endTime)}</span>
                                </div>

                                {/* CTA button */}
                                <Link
                                    href={offer.link}
                                    className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
                                >
                                    {offer.buttonText}
                                    <ArrowRight
                                        size={20}
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 text-6xl font-bold opacity-10">
                                %
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional promotion */}
                <div className="mt-12 bg-gradient-to-r from-[#8B5E3C] to-[#8B5E3C] rounded-2xl p-8 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            ¡Únete a nuestro programa de fidelidad!
                        </h3>
                        <p className="text-lg text-white mb-6 opacity-90">
                            Gana puntos en cada compra y canjéalos por descuentos exclusivos
                        </p>
                        <Link
                            href="/fidelidad"
                            className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Saber más
                            <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
