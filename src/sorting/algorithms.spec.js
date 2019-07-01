import { selectionSort } from "./algorithms";

describe('Selection sort', () => {
    test('Sort 1', () => {
        let unsorted = [5, 3, 2, 6, 98, 0];
        let sorted   = [0, 2, 3, 5, 6, 98];
        expect(selectionSort(unsorted)).toEqual(sorted);
    });

    test('Sort 2', () => {
        let unsorted = [9, 1, 8, 2, 3, 7, 6, 4, 5];
        let sorted   = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(selectionSort(unsorted)).toEqual(sorted);
    });
});
