import {
    subarrayMaxSum,
    subarrayMaxSumRecursive,
    subarrayMaxSumKadane,
    subarrayMaxSumKadane1
} from "./subarray_maxsum";

describe('[Raw] Subarray max sum', () => {
    test('Subarray 1', () => {
        let items = [-2, -5, 6, -2, -3, 1, 5, -6];
        expect(subarrayMaxSum(items)).toEqual(7);
    });

    test('Subarray 2', () => {
        let items = [-2, -3, 4, -1, -2, 1, 5, -3];
        expect(subarrayMaxSum(items)).toEqual(7);
    });

    test('Subarray 3', () => {
        let items = [-4, -5, -1, -2, -5];
        expect(subarrayMaxSum(items)).toEqual(-1);
    });
});

describe('[Recursive] Subarray max sum', () => {
    test('Subarray 1', () => {
        let items = [-2, -5, 6, -2, -3, 1, 5, -6];
        expect(subarrayMaxSumRecursive(items)).toEqual(7);
    });

    test('Subarray 2', () => {
        let items = [-2, -3, 4, -1, -2, 1, 5, -3];
        expect(subarrayMaxSumRecursive(items)).toEqual(7);
    });

    test('Subarray 3', () => {
        let items = [-4, -5, -1, -2, -5];
        expect(subarrayMaxSumRecursive(items)).toEqual(-1);
    });
});

describe('[Kadane] Subarray max sum', () => {
    test('Subarray 1', () => {
        let items = [-2, -5, 6, -2, -3, 1, 5, -6];
        expect(subarrayMaxSumKadane(items)).toEqual(7);
    });

    test('Subarray 2', () => {
        let items = [-2, -3, 4, -1, -2, 1, 5, -3];
        expect(subarrayMaxSumKadane(items)).toEqual(7);
    });

    test('Subarray 3', () => {
        let items = [-4, -5, -1, -2, -5];

        // This implementation does not handle arrays with all negatives
        expect(subarrayMaxSumKadane(items)).toEqual(0);
    });
});

describe('[Kadane 1] Subarray max sum', () => {
    test('Subarray 1', () => {
        let items = [-2, -5, 6, -2, -3, 1, 5, -6];
        expect(subarrayMaxSumKadane1(items)).toEqual(7);
    });

    test('Subarray 2', () => {
        let items = [-2, -3, 4, -1, -2, 1, 5, -3];
        expect(subarrayMaxSumKadane1(items)).toEqual(7);
    });

    test('Subarray 3', () => {
        let items = [-4, -5, -1, -2, -5];
        expect(subarrayMaxSumKadane1(items)).toEqual(-1);
    });
});
