# ---- Stage 1: Build the React app ----
FROM node:22-alpine AS build

WORKDIR /app

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the source and build
COPY . .
RUN npm run build

# ---- Stage 2: Serve with Nginx ----
FROM nginx:alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Custom nginx config (optional but recommended for React routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
