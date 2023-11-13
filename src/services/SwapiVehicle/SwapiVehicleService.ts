import { Vehiculo } from "src/models/Vehicle";
import { APIGatewayProxyEvent } from "aws-lambda";
import { getVehicle, getVehicles } from "../../repositories/swapi";

export default class SwapiVehicleService {

    constructor() { }

    async index(event: APIGatewayProxyEvent): Promise<Vehiculo[]> {
        const queryParams = event.queryStringParameters;
        let page: string = "1"
        if (queryParams && queryParams.page) {
            page = queryParams.page
        }
        return await getVehicles(page)
    }

    async show(event: APIGatewayProxyEvent): Promise<Vehiculo> {
        const vehicleId = event.pathParameters.id
        return await getVehicle(vehicleId)
    }
}