import { shiftZeros } from "./shift_zeros";

describe("Shift zeros to the right", () => {
    test("Array with intermeddiate zeros", () => {
        let items = [0, 2, 0, 4, 5, 0, 78, 0];
        let result = [2, 4, 5, 78, 0, 0, 0, 0];

        shiftZeros(items);
        expect(items).toEqual(result);
    });

    test("Array with all zeros to right", () => {
        let items = [2, -4, 5, 78, 0, 0, 0, 0];
        let result = [2, -4, 5, 78, 0, 0, 0, 0];

        shiftZeros(items);
        expect(items).toEqual(result);
    });

    test("Array without zeros", () => {
        let items  = [2, 4, 5, 78];
        let result = [2, 4, 5, 78];

        shiftZeros(items);
        expect(items).toEqual(result);
    });

    test("Empty array", () => {
        let items = [];
        let result = [];

        shiftZeros(items);
        expect(items).toEqual(result);
    });

    test("Array full of zeros", () => {
        let items = [0, 0, 0, 0];
        let result = [0, 0, 0, 0];

        shiftZeros(items);
        expect(items).toEqual(result);
    });
});
