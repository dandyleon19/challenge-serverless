import { handlerPath } from "@libs/handler-resolver";

export const getSwapiVehicles = {
    handler: `${handlerPath(__dirname)}/handler.getVehicles`,
    events: [
        {
            http: {
                method: 'get',
                path: 'swapi/vehicles/',
            },
        },
    ],
};

export const getSwapiVehicle = {
    handler: `${handlerPath(__dirname)}/handler.getVehicle`,
    events: [
        {
            http: {
                method: 'get',
                path: 'swapi/vehicles/{id}',
            },
        },
    ],
}