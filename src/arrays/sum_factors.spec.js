import { hasFactors } from "./sum_factors";

describe('[n^2] Look for factors', () => {
    test('Array 1', () => {
        let items = [10, 15, 3, 7];
        expect(hasFactors(items, 17)).toEqual(true);
    });

    test('Array 2', () => {
        let items = [11, 15, 3, 7, 15, 16, 17, 18, 0];
        expect(hasFactors(items, 17)).toEqual(true);
    });
});
