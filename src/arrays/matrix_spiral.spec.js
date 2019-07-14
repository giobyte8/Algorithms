import { getSpiral } from "./matrix_spiral";

describe('Get spiral of matrix', () => {
    test('Matrix m * n (m > n)', () => {

        // Matrix:
        // 0  1  2   3   4   5   6   7
        // 8  9  10  11  12  13  14  15
        // 16 17 18  19  20  21  22  23
        // 24 25 26  27  28  29  30  31
        // 32 33 34  35  36  37  38  39

        let value = 0;
        let matrix = [];
        while (value <= 39) {
            for (let i = 0; i <= 7; i++) {
                if (!matrix[i]) matrix.push([]);
                
                matrix[i].push(value++);
            }
        }

        let spiral = [
            0,1,2,3,4,5,6,7,
            15,23,31,39,
            38,37,36,35,34,33,32,
            24,16,8,
            9,10,11,12,13,14,
            22,30,
            29,28,27,26,25,
            17,
            18,19,20,21
        ];
        expect(getSpiral(matrix)).toEqual(spiral);
    });

    test('Matrix n * n', () => {

        // Matrix:
        // 0 1 2
        // 3 4 5
        // 6 7 8

        let value = 0;
        let matrix = [];
        while (value <= 8) {
            for (let i = 0; i <= 2; i++) {
                if (!matrix[i]) matrix.push([]);
                
                matrix[i].push(value++);
            }
        }

        let spiral = [
            0,1,2,5,8,7,6,3,4
        ];
        expect(getSpiral(matrix)).toEqual(spiral);
    });

    test('Matrix m * n (n > m)', () => {

        // Matrix:
        // 0  1  2   
        // 3  4  5  
        // 6  7  8 
        // 9  10 11
        // 12 13 14

        let value = 0;
        let matrix = [];
        while (value <= 14) {
            for (let i = 0; i <= 2; i++) {
                if (!matrix[i]) matrix.push([]);
                
                matrix[i].push(value++);
            }
        }

        let spiral = [
            0,1,2,5,8,11,14,13,12,9,6,3,4,7,10
        ];
        expect(getSpiral(matrix)).toEqual(spiral);
    });
});
