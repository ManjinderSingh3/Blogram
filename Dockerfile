FROM node:20-alpine

WORKDIR /app

COPY . .

RUN yarn install
RUN npx prisma generate

EXPOSE 3000

CMD ["yarn", "dev"]