import { containsSumFactors } from "./solution";

describe("Look for sum factors", () => {
    test('Basic test', () => {
        let items = [10, 15, 3, 7];
        let k = 17;

        expect(containsSumFactors(items, k)).toEqual(true);
    });

    test('Empty array', () => {
        let items = [];
        let k = 17;

        expect(containsSumFactors(items, k)).toEqual(false);
    });

    test('Array without factors', () => {
        let items = [10, 20, 30, 40];
        let k = 7;

        expect(containsSumFactors(items, k)).toEqual(false);
    });

    test('With negative values', () => {
        let items = [10, 20, 30, 40, -3];
        let k = 17;

        expect(containsSumFactors(items, k)).toEqual(true);
    });
});
