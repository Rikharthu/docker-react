# Build phase
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# /app/build folder is produced with built app
# Run phase
# Copy output of /build command, delete unnecessary stuff and start web-server
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
# Default command of nginx image will start nginx for us automatically
 