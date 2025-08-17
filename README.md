# EC SPA - Ecommerce Frontend

Un proyecto moderno de ecommerce construido con Next.js, React, TypeScript y Tailwind CSS, diseñado para proporcionar una experiencia de usuario excepcional.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos modernos y responsivos
- **Componentes reutilizables** y modulares
- **Diseño responsivo** para todos los dispositivos
- **Internacionalización** (i18n) preparado
- **Optimización de rendimiento** con Next.js
- **SEO optimizado** con metadatos dinámicos

## 📁 Estructura del Proyecto

```
EC-spa-main/
├── .env                    # Variables de entorno
├── .eslintrc.json         # Configuración de ESLint
├── .firebase              # Configuración de Firebase (opcional)
├── .firebaserc            # Configuración de Firebase (opcional)
├── .github                # Configuración de GitHub Actions
├── .gitignore             # Archivos ignorados por Git
├── .gitmodules            # Submódulos de Git
├── .npmrc                 # Configuración de npm
├── características        # Características del proyecto
├── firebase.json          # Configuración de Firebase
├── i18n.ts               # Configuración de internacionalización
├── next-env.d.ts         # Tipos de Next.js
├── next.config.js        # Configuración de Next.js
├── node_modules          # Dependencias
├── package-lock.json     # Lock de dependencias
├── package.json          # Dependencias y scripts
├── páginas               # Páginas de la aplicación
├── públicas              # Archivos estáticos
├── README.md             # Documentación del proyecto
├── estilos de tienda     # Estilos específicos de la tienda
├── utilidades            # Funciones utilitarias
└── tsconfig.json         # Configuración de TypeScript
```

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Utilidades**: clsx, tailwind-merge
- **Linting**: ESLint con configuración TypeScript

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd EC-spa-main
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   # Editar .env.local con tus configuraciones
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📱 Componentes Principales

### Layout
- **Header**: Navegación principal, búsqueda, carrito
- **Footer**: Enlaces, información de contacto, newsletter

### Secciones
- **Hero**: Banner principal con carrusel de imágenes
- **Categories**: Grid de categorías de productos
- **FeaturedProducts**: Productos destacados
- **NewArrivals**: Productos nuevos
- **SaleBanner**: Ofertas y promociones
- **Newsletter**: Suscripción a newsletter

## 🎨 Estilos y Diseño

El proyecto utiliza Tailwind CSS con un sistema de diseño personalizado:

- **Colores primarios**: Azul (#0ea5e9)
- **Colores secundarios**: Grises (#64748b)
- **Tipografía**: Inter font family
- **Componentes**: Botones, cards, inputs predefinidos
- **Responsive**: Mobile-first approach

## 🌐 Internacionalización

El proyecto está preparado para múltiples idiomas:

- **Español** (default)
- **Inglés**
- **Sistema de traducciones** centralizado en `i18n.ts`

## 📦 Scripts Disponibles

```json
{
  "dev": "next dev",           # Desarrollo local
  "build": "next build",       # Build de producción
  "start": "next start",       # Servidor de producción
  "lint": "next lint",         # Linting del código
  "type-check": "tsc --noEmit" # Verificación de tipos
}
```

## 🔧 Configuración

### TypeScript
- Configuración estricta habilitada
- Path mapping para imports limpios
- Tipos personalizados para ecommerce

### ESLint
- Reglas de Next.js
- Configuración TypeScript
- Reglas personalizadas para el proyecto

### Tailwind CSS
- Configuración personalizada
- Componentes predefinidos
- Sistema de colores consistente

## 📱 Responsive Design

El proyecto está optimizado para todos los dispositivos:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
# Conectar con Vercel para despliegue automático
```

### Otros proveedores
```bash
npm run build
npm run start
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

- **Email**: info@ec-spa.com
- **Documentación**: [Wiki del proyecto]
- **Issues**: [GitHub Issues]

## 🙏 Agradecimientos

- Next.js team por el framework increíble
- Tailwind CSS por el sistema de utilidades
- Comunidad de React por el ecosistema
- Todos los contribuidores del proyecto

---

**Desarrollado con ❤️ por el equipo de EC SPA**
