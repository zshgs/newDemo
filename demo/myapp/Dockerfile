FROM node:alpine
WORKDIR /app
COPY package*.json ./
npm install --no-optional && npm cache clean --force
COPY . .
EXPOSE 3000
RUN npm run build
FROM nginx:1.19
COPY --from=0 /app/build /usr/share/nginx/html
