# שלב 1 - Build frontend React
FROM node:18 AS frontend-build
WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ ./
RUN npm run build

# שלב 2 - Nginx
FROM nginx:alpine
# ודא שהקובץ nginx.conf קיים ב-context build
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-build /app/build /usr/share/nginx/html


