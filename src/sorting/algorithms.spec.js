import { bubleSort, selectionSort } from "./algorithms";

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

    test('Sort 3', () => {
        let unsorted = [0, 0, 56, 6, 57, 6];
        let sorted   = [0, 0, 6, 6, 56, 57];

        expect(selectionSort(unsorted)).toEqual(sorted);
    });

    test('Sort 4', () => {
        let unsorted = [15, 6, 7, 1];
        let sorted   = [1, 6, 7, 15];

        expect(selectionSort(unsorted)).toEqual(sorted);
    });

    test('Sort 5', () => {
        let unsorted = [15, 14, 13, 12, 12, 12, 0];
        let sorted   = [0, 12, 12, 12, 13, 14, 15];

        expect(selectionSort(unsorted)).toEqual(sorted);
    });
});

describe('Buble sort', () => {
    test('Sort 1', () => {
        let unsorted = [5, 3, 2, 6, 98, 0];
        let sorted   = [0, 2, 3, 5, 6, 98];
        
        expect(bubleSort(unsorted)).toEqual(sorted);
    });

    test('Sort 2', () => {
        let unsorted = [9, 1, 8, 2, 3, 7, 6, 4, 5];
        let sorted   = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        expect(bubleSort(unsorted)).toEqual(sorted);
    });

    test('Sort 3', () => {
        let unsorted = [0, 0, 56, 6, 57, 6];
        let sorted   = [0, 0, 6, 6, 56, 57];

        expect(bubleSort(unsorted)).toEqual(sorted);
    });

    test('Sort 4', () => {
        let unsorted = [15, 6, 7, 1];
        let sorted   = [1, 6, 7, 15];

        expect(bubleSort(unsorted)).toEqual(sorted);
    });

    test('Sort 5', () => {
        let unsorted = [15, 14, 13, 12, 12, 12, 0];
        let sorted   = [0, 12, 12, 12, 13, 14, 15];

        expect(bubleSort(unsorted)).toEqual(sorted);
    });
});
