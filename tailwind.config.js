/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    900: '#0c4a6e',
                },
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    900: '#0f172a',
                },
                brown: {
                    DEFAULT: 'rgb(170 133 69 / 78%)',
                    50: 'rgb(170 133 69 / 10%)',
                    100: 'rgb(170 133 69 / 20%)',
                    200: 'rgb(170 133 69 / 40%)',
                    300: 'rgb(170 133 69 / 60%)',
                    400: 'rgb(170 133 69 / 70%)',
                    500: 'rgb(170 133 69 / 78%)',
                    600: 'rgb(170 133 69 / 85%)',
                    700: 'rgb(170 133 69 / 90%)',
                    800: 'rgb(170 133 69 / 95%)',
                    900: 'rgb(170 133 69 / 100%)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
