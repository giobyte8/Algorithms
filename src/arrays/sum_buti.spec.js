import { sumAllButI } from "./sum_buti";

describe('Sum all items but i', () => {
    test('Pure positive', () => {
        let items = [1, 2, 3];
        let result = [5, 4, 3];

        expect(sumAllButI(items)).toEqual(result);
    });

    test('With negative values', () => {
        let items = [1, -2, -3];
        let result = [-5, -2, -1];

        expect(sumAllButI(items)).toEqual(result);
    });

    test('With zeros and negatives', () => {
        let items = [0, 0, 1, -2, -3];
        let result = [-4, -4, -5, -2, -1];

        expect(sumAllButI(items)).toEqual(result);
    })
})
