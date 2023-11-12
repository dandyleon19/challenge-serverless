import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { dynamoDBClient } from '../models';
import { Persona } from "../models/Person";
import { buildUpdateItemInputParams } from "../helpers";

const tableName: string = "Person"
const docClient: DocumentClient = dynamoDBClient()

export const getPeople = async (): Promise<Persona[]> => {
    try {
        const people = await docClient.scan({
            TableName: tableName
        }).promise()

        return people.Items as Persona[];
    } catch (error) {
        throw error
    }
}

export const createPerson = async (person: Persona): Promise<Persona> => {
    try {
        await docClient.put({
            TableName: tableName,
            Item: person
        }).promise()

        return person as Persona;
    } catch (error) {
        throw error
    }
}

export const getPerson = async (id: string): Promise<Persona> => {
    try {
        const person = await docClient.get({
            TableName: tableName,
            Key: {
                id: id
            }
        }).promise()

        if (!person.Item) {
            throw new Error("Person does not exist.");
        }

        return person.Item as Persona;
    } catch (error) {
        throw error
    }
}

export const updatePerson = async (id: string, person: Persona): Promise<Persona> => {
    try {
        const buildPersonParams = buildUpdateItemInputParams(tableName, person, id)
        const updated  = await docClient.update(buildPersonParams).promise()
        return updated.Attributes as Persona;
    } catch (error) {
        throw error
    }
}