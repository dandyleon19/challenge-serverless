export interface Persona {
    id?: string;
    nombre: string;
    altura: string;
    genero: string;
    color_cabello: string;
    color_piel: string;
    color_ojos: string;
    cumpleaños: string;
    mundo_natal: string;
    peliculas?: string;
    especies?: string;
    vehiculos?: string;
    naves_estelares?: string;
    url: string;
    creado: string;
    editado: string;
}

export interface Person {
    name: string;
    height: string;
    gender: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    homeworld: string;
    films: string;
    species: string;
    vehicles: string;
    starships: string;
    url: string;
    created: string;
    edited: string;
}