# NestJS URL-Shortner

A local development setup or boilerplate for [Nest.js framework](https://nestjs.com/) with [PostgreSQL](https://www.postgresql.org/) and [pgAdmin4](https://www.pgadmin.org/) using [Docker Compose](https://docs.docker.com/compose/).
A URL-shortner app which will shorten the URL by the given name of your choice. 
For example in your postman make a post request:
```bash
POST http://localhost:3000/links
with JSON body {
    "name":"microsoft",
    "url":"https://www.microsoft.com"
}
```
This will return you the shorten URL with the give name like: ShortenURL=http://localhost:3000/microsoft

## End Points
```GET
GET http://localhost:3000/links will get all the links
GET http://localhost:3000/shortenUrl/:name will get the shorten URL
DELETE http://localhost:3000/links/:id will delete the entery with given id
PUT http://localhost:3000/links/6e8ce823-cd67-42e9-827d-adceaf17e663 Update the given id with the given body data
GET http://localhost:3000/:name redirect to the webpage by taking shorten name as input
```
## Quick Start

1. Install [Node.js](https://nodejs.org/en/download/) - _for IDE type checking_.
2. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/) - _for IDE type checking_.
3. Install [Docker Compose](https://docs.docker.com/compose/install/) and make sure it is running in the system background.
4. 
```bash
cd URL-Shortner-NestJS
yarn install --frozen-lockfile
```

5. Build and run the Docker image.

```bash
yarn docker-compose:dev
```

6. Access the app at http://localhost:3000.
7. Make file changes and it will automatically rebuild the app.

## Running All Tests

```bash
yarn docker-compose:test
```

## Running All Tests (with coverage)

```bash
yarn docker-compose:test:cov
```

## Running Tests (Watch)

1. Build and run the Docker image.

```bash
yarn docker-compose:test:watch
```

2. Make file changes and it will automatically rerun tests related to changed files.

## Build For Production

```bash
yarn docker-compose:prod
```

## VSCode Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


