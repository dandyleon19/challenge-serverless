import { Persona } from "../../models/Person";
import { APIGatewayProxyEvent } from "aws-lambda";
import { getPeople, getPerson } from "../../repositories/swapi";

export default class SwapiPersonService {

    constructor() { }

    async index(event: APIGatewayProxyEvent): Promise<Persona[]> {
        const queryParams = event.queryStringParameters;
        let page: string = "1"
        if (queryParams && queryParams.page) {
            page = queryParams.page
        }
        return await getPeople(page)
    }

    async show(event: APIGatewayProxyEvent): Promise<Persona> {
        const personId = event.pathParameters.id
        return await getPerson(personId)
    }
}