FROM node:14-alpine

RUN npm install -g serve

WORKDIR /frontend
COPY package.json yarn.lock* /frontend/
# COPY scripts /frontend/scripts

RUN yarn --no-progress && rm -rf /tmp/*

COPY . /frontend/

RUN yarn build

EXPOSE 3000 6006
CMD ["yarn", "start"]
