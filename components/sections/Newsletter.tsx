import { useState } from 'react';
import { Mail, Bell, Gift, Shield, Truck } from 'lucide-react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) return;

        setIsLoading(true);

        // Simular envío de formulario
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubscribed(true);
        setIsLoading(false);
        setEmail('');
    };

    const benefits = [
        {
            icon: Gift,
            title: 'Ofertas Exclusivas',
            description: 'Recibe descuentos especiales solo para suscriptores',
        },
        {
            icon: Bell,
            title: 'Novedades Primero',
            description: 'Sé el primero en conocer nuevos productos',
        },
        {
            icon: Shield,
            title: 'Sin Spam',
            description: 'Solo contenido relevante, puedes cancelar cuando quieras',
        },
        {
            icon: Truck,
            title: 'Envío Prioritario',
            description: 'Acceso a envíos especiales y tracking en tiempo real',
        },
    ];

    if (isSubscribed) {
        return (
            <section className="section-padding bg-primary-600 text-white">
                <div className="container-max text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Mail size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            ¡Gracias por suscribirte!
                        </h2>
                        <p className="text-xl mb-6 opacity-90">
                            Te hemos enviado un email de confirmación. Revisa tu bandeja de entrada para activar tu suscripción.
                        </p>
                        <button
                            onClick={() => setIsSubscribed(false)}
                            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Suscribir otro email
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section-padding bg-brown-500 text-white">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Newsletter form */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            ¡No te pierdas nada!
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Suscríbete a nuestro newsletter y recibe las mejores ofertas, novedades y consejos directamente en tu email.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Tu dirección de email"
                                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !email}
                                    className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Suscribiendo...' : 'Suscribirse'}
                                </button>
                            </div>

                            <p className="text-sm opacity-75">
                                Al suscribirte, aceptas recibir emails promocionales. Puedes cancelar tu suscripción en cualquier momento.
                            </p>
                        </form>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-6">
                            Beneficios de suscribirte:
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <benefit.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                                        <p className="text-sm opacity-80">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social proof */}
                        <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
                            <div className="text-center">
                                <div className="text-2xl font-bold mb-2">15,000+</div>
                                <div className="text-sm opacity-80">Clientes ya suscritos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
