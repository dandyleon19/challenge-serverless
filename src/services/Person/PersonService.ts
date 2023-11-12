import { Persona } from "../../models/Person";
import { getPeople, createPerson, getPerson, updatePerson } from "../../repositories/dynamodb";
import { APIGatewayProxyEvent } from "aws-lambda";
import { v4 } from "uuid";
import { validatePersonInput } from "../../helpers";

export default class PersonService {

    constructor() { }

    async index(): Promise<Persona[]> {
        return await getPeople()
    }

    async create(event: APIGatewayProxyEvent): Promise<Persona> {
        const id = v4()
        const input: Persona = JSON.parse(JSON.stringify(event.body))

        if (!validatePersonInput(input)) {
            throw new Error("Missing fields.")
        }

        const timestamp = new Date().toISOString()
        return await createPerson({
            id: id,
            ...input,
            creado: timestamp,
            editado: timestamp
        })
    }

    async show(event: APIGatewayProxyEvent): Promise<Persona> {
        const personId: string = event.pathParameters.id
        return await getPerson(personId)
    }

    async update(event: APIGatewayProxyEvent): Promise<Persona> {
        const personId: string = event.pathParameters.id
        const input: Persona = JSON.parse(JSON.stringify(event.body))

        if (!validatePersonInput(input)) {
            throw new Error("Missing fields.")
        }

        const timestamp = new Date().toISOString()
        return await updatePerson( personId,{
            ...input,
            editado: timestamp
        })
    }
}