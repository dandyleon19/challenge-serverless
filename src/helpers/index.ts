import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Person, Persona } from "../models/Person";
import { Vehicle, Vehiculo } from "src/models/Vehicle";

export const translatePersonObject = (input: Person): Persona => {
    return {
        nombre: input.name,
        altura: input.height,
        genero: input.gender,
        color_cabello: input.hair_color,
        color_piel: input.skin_color,
        color_ojos: input.eye_color,
        cumpleaños: input.birth_year,
        mundo_natal: input.homeworld,
        peliculas: input.films,
        especies: input.species,
        vehiculos: input.vehicles,
        naves_estelares: input.starships,
        url: input.url,
        creado: input.created,
        editado: input.edited,
    };
}

export const translateVehicleObject = (input: Vehicle): Vehiculo => {
    return {
        nombre: input.name,
        modelo: input.model,
        fabricante: input.manufacturer, 
        costo_en_créditos: input.cost_in_credits,
        longitud: input.length,
        velocidad_atmosférica_máxima: input.max_atmosphering_speed, 
        multitud: input.crew, 
        pasajeros: input.passengers,
        capacidad_de_carga: input.cargo_capacity,
        consumibles: input.consumables,
        clase_vehículo: input.vehicle_class, 
        pilotos: input.pilots,
        peliculas: input.films,
        url: input.url,
        creado: input.created, 
        editado: input.edited,
    };
}

export const validatePersonInput = (persona: Persona): boolean => {
    if (
        !persona.nombre ||
        !persona.altura ||
        !persona.genero ||
        !persona.color_cabello ||
        !persona.color_piel ||
        !persona.color_ojos ||
        !persona.cumpleaños ||
        !persona.mundo_natal ||
        !persona.url
    ) {
        return false;
    }
    return true;
}

export const buildUpdateItemInputParams = (table: string, item: Persona, id: string): DocumentClient.UpdateItemInput => {
    let updateExpression = 'set '
    let expressionAttributeNames = {}
    let expressionAttributeValues = {}
    let i = 0
    delete item.id
    delete item.creado
    for (const [key, value] of Object.entries(item)) {
        if(value != undefined){
            updateExpression += `#${i} = :${i},`
            expressionAttributeNames[`#${i}`] = key
            expressionAttributeValues[`:${i}`] = value
            i++
        }
        else continue
    }
    updateExpression = updateExpression.slice(0, -1)

    return {
        TableName: table,
        Key: { "id": id },
        ConditionExpression: 'attribute_exists(id)',
        UpdateExpression: updateExpression,
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues,
        ReturnValues: "ALL_NEW",
    }
}