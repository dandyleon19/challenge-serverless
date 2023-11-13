export interface Vehiculo {
    id?: string;
    nombre: string;
    modelo: string;
    fabricante: string; 
    costo_en_créditos: string;
    longitud: string;
    velocidad_atmosférica_máxima: string; 
    multitud: string; 
    pasajeros: string;
    capacidad_de_carga: string;
    consumibles: string;
    clase_vehículo: string; 
    pilotos?: string[];
    peliculas?: string[];
    url: string;
    creado: string; 
    editado: string; 
}

export interface Vehicle {
    name: string; 
    model: string;
    manufacturer: string;
    cost_in_credits: string; 
    length: string;
    max_atmosphering_speed: string;
    crew: string; 
    passengers: string;
    cargo_capacity: string; 
    consumables: string;
    vehicle_class: string;
    pilots: string[], 
    films: string[], 
    url: string;
    created: string; 
    edited: string; 
}