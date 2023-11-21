# Stage 1: Build frontend

FROM node:14 as frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "frontend", "-l", "3000"]

# Stage 2: Build quickHotelQuotes
FROM python:3.8 as quickHotelQuotes
WORKDIR /app/quickHotelQuotes
COPY quickHotelQuotes/requeriments.txt ./
RUN pip install --no-cache-dir -r requeriments.txt
COPY quickHotelQuotes/ .
# Exponer el puerto 5000 para la aplicación quickHotelQuotes
EXPOSE 5000

WORKDIR /app
COPY --from=frontend /app/frontend/dist ./frontend
COPY --from=quickHotelQuotes /app/quickHotelQuotes ./
CMD ["python", "quickHotelQuotes/main.py"]