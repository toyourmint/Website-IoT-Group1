FROM node:20

WORKDIR /app

# Copy package files ก่อนเพื่อ cache layer
COPY package*.json ./

# ติดตั้ง dependency ทั้งหมด (Strapi ต้องใช้ dev deps ตอน build)
RUN npm install

# Copy source code
COPY . .

# Build production
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]