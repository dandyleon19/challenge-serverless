import { handlerPath } from "@libs/handler-resolver";

export const getPeople = {
    handler: `${handlerPath(__dirname)}/handler.getPeople`,
    events: [
        {
            http: {
                method: 'get',
                path: 'people/',
            },
        },
    ],
};

export const createPerson = {
    handler: `${handlerPath(__dirname)}/handler.createPerson`,
    events: [
        {
            http: {
                method: 'post',
                path: 'people/',
            },
        },
    ],
}

export const getPerson = {
    handler: `${handlerPath(__dirname)}/handler.getPerson`,
    events: [
        {
            http: {
                method: 'get',
                path: 'people/{id}',
            },
        },
    ],
}

export const updatePerson = {
    handler: `${handlerPath(__dirname)}/handler.updatePerson`,
    events: [
        {
            http: {
                method: 'put',
                path: 'people/{id}',
            },
        },
    ],
}