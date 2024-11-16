# Etapa 1: Construcción de la aplicación
FROM node:18 AS builder

# Configurar directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias
COPY package.json yarn.lock ./ 

# Instalar dependencias
RUN yarn install

# Copiar todo el proyecto al contenedor
COPY . .

# Construir la aplicación
RUN yarn build

# Etapa 2: Configuración del servidor de producción
FROM node:18-alpine AS runner

# Instalar solamente las dependencias de producción
WORKDIR /app
COPY --from=builder /app/package.json ./ 
RUN yarn install --production

# Copiar los archivos de la aplicación ya compilados
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Configurar puerto para la aplicación
EXPOSE 3000

# Comando de inicio
CMD ["yarn", "start"]
