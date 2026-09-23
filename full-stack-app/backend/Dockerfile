FROM node:22-alpine

WORKDIR /app

ENV PORT=4000

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy application source
COPY src ./src

# Backend listens on this port
EXPOSE 4000

# Docker-native health check (in addition to the /health endpoint)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "fetch('http://localhost:4000/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "src/index.js"]
