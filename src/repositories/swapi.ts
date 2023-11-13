import axios from "axios";
import { translatePersonObject } from "../helpers";
import { Persona } from "../models/Person";

export const getPeople = async (page: string): Promise<Persona[]> => {
    try {
        const response = await axios.get(`https://swapi.py4e.com/api/people/?page=${page}`);
        response.data.results = response.data.results.map(item => translatePersonObject(item)) as Persona[]
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