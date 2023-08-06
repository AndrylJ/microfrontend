FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN npm i -g npm@9.8.1
RUN npm i
WORKDIR /usr/src/app/packages/stencil-library
RUN npm run build

WORKDIR /usr/src/app/packages/angular-workspace
RUN npx -p @angular/cli ng build component-library
RUN npm run build user-admin-app
RUN npm run build users-module

FROM nginx:1.25.1-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/packages/angular-workspace/dist/user-admin-app /usr/share/nginx/html/user-admin-app
COPY --from=build /usr/src/app/packages/angular-workspace/dist/users-module /usr/share/nginx/html/users-module