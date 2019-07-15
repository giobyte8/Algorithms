import { subtractIFactor, subtractIFactorWithoutDivide } from "./solution";

describe('Array of total products without factor at "i" position', () => {
    test('Pure positive integers', () => {
        let items = [1, 2, 3, 4, 5];
        let result = [120, 60, 40, 30, 24];

        expect(subtractIFactor(items)).toEqual(result);
    });

    test('Pure positive integers 2', () => {
        let items = [3, 2, 1];
        let result = [2, 3, 6];

        expect(subtractIFactor(items)).toEqual(result);
    });

    test('With negative values', () => {
        let items = [-3, -2, 1, 2];
        let result = [-4, -6, 12, 6];

        expect(subtractIFactor(items)).toEqual(result);
    });
});

describe('Array of total products without factor at "i" position (Without usage of "/" operator', () => {
    test('Pure positive integers', () => {
        let items = [1, 2, 3, 4, 5];
        let result = [120, 60, 40, 30, 24];

        expect(subtractIFactorWithoutDivide(items)).toEqual(result);
    });

    test('Pure positive integers 2', () => {
        let items = [3, 2, 1];
        let result = [2, 3, 6];

        expect(subtractIFactorWithoutDivide(items)).toEqual(result);
    });

    test('With negative values', () => {
        let items = [-3, -2, 1, 2];
        let result = [-4, -6, 12, 6];

        expect(subtractIFactorWithoutDivide(items)).toEqual(result);
    });
});
