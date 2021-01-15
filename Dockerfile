FROM alpine

RUN apk add --update nodejs npm
RUN npm install --global http-server

RUN mkdir app/
COPY . app/

ENTRYPOINT ["http-server", "app/"]
