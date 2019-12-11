FROM node:10
RUN apt update && apt upgrade
RUN npm install --global webpack webpack-cli
WORKDIR /root/
CMD webpack --watch --config=webpack.config.js


