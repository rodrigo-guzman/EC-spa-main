# Paleta de Colores Brown - VICTORICA

## 🎨 Color Principal: Brown

El color brown personalizado está basado en `rgb(170 133 69 / 78%)` y está disponible en todo el proyecto.

## 📋 Clases Disponibles

### Clases de Utilidad Personalizadas

```css
.brown-color          /* background-color: rgb(170 133 69 / 78%) */
.brown-color-text    /* color: rgb(170 133 69 / 78%) */
.brown-color-border  /* border-color: rgb(170 133 69 / 78%) */
```

### Clases de Tailwind con Variaciones

```css
.bg-brown            /* Fondo con opacidad 78% */
.bg-brown-50        /* Fondo con opacidad 10% */
.bg-brown-100       /* Fondo con opacidad 20% */
.bg-brown-200       /* Fondo con opacidad 40% */
.bg-brown-300       /* Fondo con opacidad 60% */
.bg-brown-400       /* Fondo con opacidad 70% */
.bg-brown-500       /* Fondo con opacidad 78% (default) */
.bg-brown-600       /* Fondo con opacidad 85% */
.bg-brown-700       /* Fondo con opacidad 90% */
.bg-brown-800       /* Fondo con opacidad 95% */
.bg-brown-900       /* Fondo con opacidad 100% */
```

### Clases de Texto

```css
.text-brown          /* Color de texto con opacidad 78% */
.text-brown-50       /* Color de texto con opacidad 10% */
.text-brown-100      /* Color de texto con opacidad 20% */
.text-brown-200      /* Color de texto con opacidad 40% */
.text-brown-300      /* Color de texto con opacidad 60% */
.text-brown-400      /* Color de texto con opacidad 70% */
.text-brown-500      /* Color de texto con opacidad 78% (default) */
.text-brown-600      /* Color de texto con opacidad 85% */
.text-brown-700      /* Color de texto con opacidad 90% */
.text-brown-800      /* Color de texto con opacidad 95% */
.text-brown-900      /* Color de texto con opacidad 100% */
```

### Clases de Borde

```css
.border-brown        /* Color de borde con opacidad 78% */
.border-brown-50     /* Color de borde con opacidad 10% */
.border-brown-100    /* Color de borde con opacidad 20% */
.border-brown-200    /* Color de borde con opacidad 40% */
.border-brown-300    /* Color de borde con opacidad 60% */
.border-brown-400    /* Color de borde con opacidad 70% */
.border-brown-500    /* Color de borde con opacidad 78% (default) */
.border-brown-600    /* Color de borde con opacidad 85% */
.border-brown-700    /* Color de borde con opacidad 90% */
.border-brown-800    /* Color de borde con opacidad 95% */
.border-brown-900    /* Color de borde con opacidad 100% */
```

## 🚀 Ejemplos de Uso

### En el Header (Top Bar)
```tsx
<div className="brown-color text-white py-2">
    {/* Contenido del top bar */}
</div>
```

### Botones
```tsx
<button className="bg-brown-500 hover:bg-brown-600 text-white px-4 py-2 rounded">
    Botón Brown
</button>
```

### Textos
```tsx
<h2 className="text-brown-700 text-2xl font-bold">
    Título en Brown
</h2>
```

### Bordes
```tsx
<div className="border-2 border-brown-300 p-4 rounded">
    Contenedor con borde brown
</div>
```

### Gradientes
```tsx
<div className="bg-gradient-to-r from-brown-400 to-brown-600 p-6">
    Gradiente brown
</div>
```

## 🎯 Casos de Uso Recomendados

- **Top bars y headers**: `.brown-color` o `.bg-brown-500`
- **Botones principales**: `.bg-brown-500` con `.hover:bg-brown-600`
- **Textos destacados**: `.text-brown-700` o `.text-brown-800`
- **Bordes sutiles**: `.border-brown-200` o `.border-brown-300`
- **Elementos de acento**: `.bg-brown-100` o `.bg-brown-200`

## 🔧 Personalización

Para modificar el color base, edita el archivo `tailwind.config.js`:

```javascript
brown: {
    DEFAULT: 'rgb(170 133 69 / 78%)',
    // ... otras variaciones
}
```

## 📱 Responsive

Todas las clases funcionan con los breakpoints de Tailwind:

```tsx
<div className="bg-brown-500 md:bg-brown-600 lg:bg-brown-700">
    {/* Color que cambia según el tamaño de pantalla */}
</div>
```
