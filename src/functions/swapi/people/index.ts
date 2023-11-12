import { handlerPath } from "@libs/handler-resolver";

export const getSwapiPeople = {
    handler: `${handlerPath(__dirname)}/handler.getPeople`,
    events: [
        {
            http: {
                method: 'get',
                path: 'swapi/people/',
            },
        },
    ],
};

export const getSwapiPerson = {
    handler: `${handlerPath(__dirname)}/handler.getPerson`,
    events: [
        {
            http: {
                method: 'get',
                path: 'swapi/people/{id}',
            },
        },
    ],
}