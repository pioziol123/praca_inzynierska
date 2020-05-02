FROM node:10
RUN apt update && apt upgrade -y
RUN npm install --global webpack webpack-cli
WORKDIR /root/
CMD webpack --watch --config=webpack.config.js


