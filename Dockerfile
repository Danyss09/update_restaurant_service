#  Imagen base oficial de Node.js
FROM node:18

#  Establecer el directorio de trabajo
WORKDIR /app

#  Copiar package.json y package-lock.json
COPY package*.json ./

#  Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto definido en .env (o 3000 por defecto)
EXPOSE 3000

#  Definir el comando para iniciar el servidor
CMD ["node", "app.js"]
