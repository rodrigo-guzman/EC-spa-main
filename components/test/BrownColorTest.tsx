import React from 'react';

const BrownColorTest: React.FC = () => {
    return (
        <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold text-center mb-8">🧪 Prueba de Colores Brown</h1>

            {/* Clases de Tailwind */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">🎨 Clases de Tailwind</h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="bg-brown-50 p-4 rounded text-center">
                        <div className="w-16 h-16 bg-brown-50 rounded mx-auto mb-2"></div>
                        <span className="text-sm">bg-brown-50</span>
                    </div>
                    <div className="bg-brown-100 p-4 rounded text-center">
                        <div className="w-16 h-16 bg-brown-100 rounded mx-auto mb-2"></div>
                        <span className="text-sm">bg-brown-100</span>
                    </div>
                    <div className="bg-brown-200 p-4 rounded text-center">
                        <div className="w-16 h-16 bg-brown-200 rounded mx-auto mb-2"></div>
                        <span className="text-sm">bg-brown-200</span>
                    </div>
                    <div className="bg-brown-300 p-4 rounded text-center">
                        <div className="w-16 h-16 bg-brown-300 rounded mx-auto mb-2"></div>
                        <span className="text-sm">bg-brown-300</span>
                    </div>
                    <div className="bg-brown-400 p-4 rounded text-center">
                        <div className="w-16 h-16 bg-brown-400 rounded mx-auto mb-2"></div>
                        <span className="text-sm">bg-brown-400</span>
                    </div>
                    <div className="bg-brown-500 p-4 rounded text-center">
                        <div className="w-16 h-16 bg-brown-500 rounded mx-auto mb-2"></div>
                        <span className="text-sm">bg-brown-500</span>
                    </div>
                    <div className="bg-brown-600 p-4 rounded text-center">
                        <div className="w-16 h-16 bg-brown-600 rounded mx-auto mb-2"></div>
                        <span className="text-sm">bg-brown-600</span>
                    </div>
                    <div className="bg-brown-700 p-4 rounded text-center">
                        <div className="w-16 h-16 bg-brown-700 rounded mx-auto mb-2"></div>
                        <span className="text-sm">bg-brown-700</span>
                    </div>
                    <div className="bg-brown-800 p-4 rounded text-center">
                        <div className="w-16 h-16 bg-brown-800 rounded mx-auto mb-2"></div>
                        <span className="text-sm">bg-brown-800</span>
                    </div>
                    <div className="bg-brown-900 p-4 rounded text-center">
                        <div className="w-16 h-16 bg-brown-900 rounded mx-auto mb-2"></div>
                        <span className="text-sm">bg-brown-900</span>
                    </div>
                </div>
            </div>

            {/* Clases personalizadas */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">🔧 Clases Personalizadas</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="brown-color p-6 rounded text-center">
                        <h3 className="text-white font-bold mb-2">brown-color</h3>
                        <p className="text-white text-sm">background-color personalizado</p>
                    </div>

                    <div className="p-6 rounded text-center border-2 border-gray-200">
                        <h3 className="brown-color-text font-bold mb-2">brown-color-text</h3>
                        <p className="brown-color-text text-sm">color de texto personalizado</p>
                    </div>

                    <div className="p-6 rounded text-center brown-color-border border-2">
                        <h3 className="font-bold mb-2">brown-color-border</h3>
                        <p className="text-sm">borde personalizado</p>
                    </div>
                </div>
            </div>

            {/* Ejemplos de uso */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">🚀 Ejemplos de Uso</h2>

                <div className="space-y-4">
                    {/* Botón */}
                    <button className="bg-brown-500 hover:bg-brown-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
                        Botón Brown
                    </button>

                    {/* Texto */}
                    <h3 className="text-brown-700 text-2xl font-bold">
                        Título en Brown
                    </h3>

                    {/* Borde */}
                    <div className="border-2 border-brown-300 p-4 rounded-lg">
                        <p>Contenedor con borde brown</p>
                    </div>

                    {/* Gradiente */}
                    <div className="bg-gradient-to-r from-brown-400 to-brown-600 p-6 rounded-lg text-white">
                        <h4 className="text-xl font-bold mb-2">Gradiente Brown</h4>
                        <p>Efecto de gradiente usando colores brown</p>
                    </div>
                </div>
            </div>

            {/* Comparación con el Header */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">📱 Comparación con Header</h2>

                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                    {/* Top bar simulado */}
                    <div className="bg-brown-500 text-white py-2 px-4">
                        <div className="flex justify-between items-center text-sm">
                            <span>📞 +1 (555) 123-4567</span>
                            <span>📧 info@ec-spa.com</span>
                        </div>
                    </div>

                    {/* Header simulado */}
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-800">VICTORICA</h3>
                            <nav className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-brown-600">Inicio</a>
                                <a href="#" className="text-gray-600 hover:text-brown-600">Productos</a>
                                <a href="#" className="text-gray-600 hover:text-brown-600">Contacto</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrownColorTest;
