import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { errorFormatJSONResponse, successFormatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import swapiPersonService from "../../../services/SwapiPerson";

export const getPeople = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const people = await swapiPersonService.index(event)
        return successFormatJSONResponse({data: people})
    } catch (e) {
        return errorFormatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const getPerson = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const person = await swapiPersonService.show(event)
        return successFormatJSONResponse({data: person})
    } catch (e) {
        return errorFormatJSONResponse({
            status: 500,
            message: e
        });
    }
})