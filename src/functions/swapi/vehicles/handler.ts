import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { errorFormatJSONResponse, successFormatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import swapiVehicleService from "../../../services/SwapiVehicle";

export const getVehicles = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const vehicles = await swapiVehicleService.index(event)
        return successFormatJSONResponse({data: vehicles})
    } catch (e) {
        return errorFormatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const getVehicle = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const vehicle = await swapiVehicleService.show(event)
        return successFormatJSONResponse({data: vehicle})
    } catch (e) {
        return errorFormatJSONResponse({
            status: 500,
            message: e
        });
    }
})