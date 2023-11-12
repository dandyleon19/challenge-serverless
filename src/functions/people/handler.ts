import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { errorFormatJSONResponse, successFormatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import personService from "../../services/Person";

export const getPeople = middyfy(async (): Promise<APIGatewayProxyResult> => {
    try {
        const people = await personService.index()
        return successFormatJSONResponse({data: people})
    } catch (e) {
        return errorFormatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const createPerson = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const person = await personService.create(event)
        return successFormatJSONResponse({data: person});
    } catch (e) {
        return errorFormatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const getPerson = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const person = await personService.show(event)
        return successFormatJSONResponse({data: person})
    } catch (e) {
        return errorFormatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const updatePerson = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const person = await personService.update(event)
        return successFormatJSONResponse({data: person});
    } catch (e) {
        return errorFormatJSONResponse({
            status: 500,
            message: e
        });
    }
})