# Microservice base api

Microservice base api with nodejs server

## Install dependencies

```sh
npm install
```
### Config by environments

local, development, stage and production. These are set by the ENV called **NODE_ENV**

```sh
NODE_ENV=local
```

The specfic configurations are in **config**.

## To run  local

```sh
npm run local-w
```
## Postman collection

The is a postman collection to test the endpoints locally. The collection is in **app/postmane-collection/collection.json**

## TODO

- Map and handle errors into middleware layer (catch block)
- Write to file logger
- Recursive search into getMiddlewares method
