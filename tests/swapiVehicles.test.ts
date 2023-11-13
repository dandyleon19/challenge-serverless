import swapiVehicleService from "../src/services/SwapiVehicle";

describe('Get all vehicles from swapi', () => {
    test('should return a successful response', async () => {
        const event: any = {
            httpMethod: 'GET',
            path: '/',
            queryStringParameters: {page: "1"},
            body: null,
            headers: {},
            multiValueHeaders: {},
            isBase64Encoded: false,
        };
        const vehicles = await swapiVehicleService.index(event)
        expect(Array.isArray(vehicles)).toBe(true);
    });
})

describe('Get vehicle from swapi', () => {
    test('should return a successful response', async () => {
        const event: any = {
            httpMethod: 'GET',
            path: '/',
            pathParameters: {id: 4},
            body: null,
            headers: {},
            multiValueHeaders: {},
            isBase64Encoded: false,
        };
        const vehicle = await swapiVehicleService.show(event)
        expect(typeof vehicle).toBe('object');
    });
})