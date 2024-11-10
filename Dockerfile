FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./ 
COPY yarn.lock ./

RUN yarn install --production
RUN yarn add typescript --dev

COPY . .

RUN yarn build

##########################################################################

FROM nginx:alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 4000

CMD ["nginx", "-g", "daemon off;"]
