# Challenge - Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

## Testing our application

### Invoke Locally

To get all people from dynamodb, run the command:

- `npx sls invoke local -f getPeople -p tests/mocks/index-people.json` if you're using NPM
- `yarn sls invoke local -f getPeople -p tests/mocks/index-people.json` if you're using Yarn


To get a person from dynamodb, run the command:

- `npx sls invoke local -f getPerson -p tests/mocks/get-person.json` if you're using NPM
- `yarn sls invoke local -f getPerson -p tests/mocks/get-person.json` if you're using Yarn

To create a person from dynamodb, run the command:

- `npx sls invoke local -f createPerson -p tests/mocks/create-person.json` if you're using NPM
- `yarn sls invoke local -f createPerson -p tests/mocks/create-person.json` if you're using Yarn

To update a person from dynamodb, run the command:

- `npx sls invoke local -f updatePerson -p tests/mocks/update-person.json` if you're using NPM
- `yarn sls invoke local -f updatePerson -p tests/mocks/update-person.json` if you're using Yarn

To get all people from swapi, run the command:

- `npx sls invoke local -f getSwapiPeople -p tests/mocks/index-swapi-people.json` if you're using NPM
- `yarn sls invoke local -f getSwapiPeople -p tests/mocks/index-swapi-people.json` if you're using Yarn

To get a person from swapi, run the command:

- `npx sls invoke local -f getSwapiPerson -p tests/mocks/get-swapi-person.json` if you're using NPM
- `yarn sls invoke local -f getSwapiPerson -p tests/mocks/get-swapi-person.json` if you're using Yarn

To get all vehicles from swapi, run the command:

- `npx sls invoke local -f getSwapiVehicles -p tests/mocks/index-swapi-vehicles.json` if you're using NPM
- `yarn sls invoke local -f getSwapiVehicles -p tests/mocks/index-swapi-vehicles.json` if you're using Yarn

To get a vehicle from swapi, run the command:

- `npx sls invoke local -f getSwapiVehicle -p tests/mocks/get-swapi-vehicle.json` if you're using NPM
- `yarn sls invoke local -f getSwapiVehicle -p tests/mocks/get-swapi-vehicle.json` if you're using Yarn

### Test in your deployed API

You can test in Postman with the following endpoints:

- From `DynamoDB`:

```
# Get all people from dynamodb:

/GET https://yourApiEdnpoint/dev/people
```
```
# Create person from dynamodb:

/POST https://yourApiEdnpoint/dev/people

{
    "nombre": "Anakin Skywalker",
    "altura": "188",
    "genero": "male",
    "color_cabello": "blond",
    "color_piel": "fair",
    "color_ojos": "blue",
    "cumpleaños": "41.9BBY",
    "mundo_natal": "https://swapi.py4e.com/api/planets/1/",
    "url": "https://swapi.py4e.com/api/people/11/"
}
```
```
# Get person from dynamodb:

/GET https://yourApiEdnpoint/dev/people/{id}
```
```
# Update person from dynamodb:

/PUT https://yourApiEdnpoint/dev/people/{id}

{
    "nombre": "Anakin Skywalker",
    "altura": "188",
    "genero": "male",
    "color_cabello": "blond",
    "color_piel": "fair",
    "color_ojos": "blue",
    "cumpleaños": "41.9BBY",
    "mundo_natal": "https://swapi.py4e.com/api/planets/1/",
    "url": "https://swapi.py4e.com/api/people/11/"
}
```
- From `SWAPI`

```
# Get all people from SWAPI:

/GET https://yourApiEdnpoint/dev/swapi/people
```
```
# Get person from SWAPI:

/GET https://yourApiEdnpoint/dev/swapi/people/{id}
```
```
# Get vehicles from SWAPI:

/GET https://yourApiEdnpoint/dev/swapi/vehicles
```
```
# Get vehicle from SWAPI:

/GET https://yourApiEdnpoint/dev/swapi/vehicles/{id}
```

### Swagger Test

To test in Swagger, you must first have run the following commands

- `sls deploy`

After that, you need to go to the link provided in the terminal, for example:

- `https://yourApiEdnpoint/dev/challenge-serverless`


### Test offline

To start a server locally, run de commands:

- `sls dynamodb install`
- `sls offline start`

You can test in Postman with the following endpoints:

- From `DynamoDB`:

```
# Get all people from dynamodb:

/GET http://localhost:3000/dev/people
```
```
# Create person from dynamodb:

/POST http://localhost:3000/dev/people

{
    "nombre": "Anakin Skywalker",
    "altura": "188",
    "genero": "male",
    "color_cabello": "blond",
    "color_piel": "fair",
    "color_ojos": "blue",
    "cumpleaños": "41.9BBY",
    "mundo_natal": "https://swapi.py4e.com/api/planets/1/",
    "url": "https://swapi.py4e.com/api/people/11/"
}
```
```
# Get person from dynamodb:

/GET http://localhost:3000/dev/people/{id}
```
```
# Update person from dynamodb:

/PUT http://localhost:3000/dev/people/{id}

{
    "nombre": "Anakin Skywalker",
    "altura": "188",
    "genero": "male",
    "color_cabello": "blond",
    "color_piel": "fair",
    "color_ojos": "blue",
    "cumpleaños": "41.9BBY",
    "mundo_natal": "https://swapi.py4e.com/api/planets/1/",
    "url": "https://swapi.py4e.com/api/people/11/"
}
```
- From `SWAPI`

```
# Get all people from SWAPI:

/GET http://localhost:3000/dev/swapi/people
```
```
# Get person from SWAPI:

/GET http://localhost:3000/dev/swapi/people/{id}
```
```
# Get all vehicles from SWAPI:

/GET http://localhost:3000/dev/swapi/vehicles
```
```
# Get vehicle from SWAPI:

/GET http://localhost:3000/dev/swapi/vehicles/{id}
```
## Unit Tests

Run the command: 

- `npm test`

