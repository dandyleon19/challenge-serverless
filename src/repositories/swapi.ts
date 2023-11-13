import axios from "axios";
import { translatePersonObject, translateVehicleObject } from "../helpers";
import { Person, Persona } from "../models/Person";
import { Vehicle, Vehiculo } from "src/models/Vehicle";

export const getPeople = async (page: string): Promise<Persona[]> => {
    try {
        const response = await axios.get(`https://swapi.py4e.com/api/people/?page=${page}`);
        response.data.results = response.data.results.map((item: Person) => translatePersonObject(item)) as Persona[]
        return response.data.results as Persona[]
    } catch (error) {
        throw error
    }
}

export const getPerson = async (personId: string): Promise<Persona> => {
    try {
        const response = await axios.get(`https://swapi.py4e.com/api/people/${personId}`);
        return translatePersonObject(response.data) as Persona
    } catch (error) {
        throw error
    }
}

export const getVehicles = async (page: string): Promise<Vehiculo[]> => {
    try {
        const response = await axios.get(`https://swapi.py4e.com/api/vehicles/?page=${page}`);
        response.data.results = response.data.results.map((item: Vehicle) => translateVehicleObject(item)) as Vehiculo[]
        return response.data.results as Vehiculo[]
    } catch (error) {
        throw error
    }
}

export const getVehicle = async (personId: string): Promise<Vehiculo> => {
    try {
        const response = await axios.get(`https://swapi.py4e.com/api/vehicles/${personId}`);
        return translateVehicleObject(response.data) as Vehiculo
    } catch (error) {
        throw error
    }
}