# Etapa 1: construccion (build)
# Instalar dependencias y generar los artefactos optimizados para producción

FROM node:22-alpine AS builder

# Directorio de trabajo
WORKDIR /app

# Instalar dependencias
COPY package.json  package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Testing
# Ejecutar pruebas automáticas para verificar la calidad del código.

FROM node:22-alpine AS tester

WORKDIR /app

COPY --from=builder /app /app

# Ejecuta las pruebas
RUN npm run test

# Etapa 3: Linter/Formatter
# Ejecutar herramientas de linters y formateadores de código (como ESLint, Prettier) para mantener la calidad del código.

FROM node:22-alpine AS linter

WORKDIR /app

COPY --from=builder /app /app

# Ejecuta ESlint y Prettier
RUN npm run lint
RUN npm run format


# Etapa 4: Desarrollo (development)
# Preparar un entorno de desarrollo donde se puedan realizar cambios en vivo, con un servidor de desarrollo

FROM node:22-alpine AS development

WORKDIR /app

COPY --from=builder /app /app

RUN npm install

# Definir volúmenes para la sincronización de cambios
VOLUME ["/app", "/app/node_modules"]

# Variables de entorno para desarrollo
ENV NODE_ENV=development

# Exponer el puerto para el servidor de desarrollo
EXPOSE 3000

# Iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]

# Etapa 5: Producción (production)
# Crear un contenedor optimizado para ejecutar la aplicación en producción.

# FROM node:22-alpine AS production

# WORKDIR /app

# COPY --from=builder /app /app

# RUN npm install --production

# EXPOSE 3000

# Iniciar el servidor 
# CMD ["npm", "start"] 
