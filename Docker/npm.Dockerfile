# Most of this taken from the official Laravel Dockerfile and modified to meet
# my needs.

FROM --platform=linux/amd64 node:22

WORKDIR /var/www/html

ENV HOST="0.0.0.0"
ENV PORT="5174"

COPY Client/package.json .

RUN npm install

COPY . .

# RUN apt-get update && apt-get upgrade -y \
#     && apt-get -y autoremove \
#     && apt-get clean \
#     && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENTRYPOINT ["npm", "run", "dev", "--host"]
