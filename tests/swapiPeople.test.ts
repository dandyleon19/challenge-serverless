import swapiPersonService from "../src/services/SwapiPerson";

describe('Get all people from swapi', () => {
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
        const people = await swapiPersonService.index(event)
        expect(Array.isArray(people)).toBe(true);
    });
})

describe('Get person from swapi', () => {
    test('should return a successful response', async () => {
        const event: any = {
            httpMethod: 'GET',
            path: '/',
            pathParameters: {id: 11},
            body: null,
            headers: {},
            multiValueHeaders: {},
            isBase64Encoded: false,
        };
        const person = await swapiPersonService.show(event)
        expect(typeof person).toBe('object');
    });
})