FROM node:22-alpine as builder

WORKDIR /app

COPY package.json  package-lock.json ./

RUN npm install
COPY . .

RUN npm run build

FROM node:22-alpine as runner

WORKDIR /app

COPY --from=builder /app/package.json ./
RUN npm install --production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3000

CMD ["npm", "start"]