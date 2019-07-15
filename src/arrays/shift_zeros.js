
/**
 * Given an array of numbers, shift all the zeros to the
 * right without disrupting order of non zero elements
 * @param {Array.Number} items List of integers
 */
export const shiftZeros = (items) => {

    /**
     * Moves each element in given range one position
     * to the left.
     * Note: The element at index 'start' will be overwritten while
     * the element at position 'end' will be duplicated.
     * 
     * @param {Number} start Begin index
     * @param {Number} end End index
     */
    const moveToLeft = (start, end) => {
        for (let i = start; i < end; i++) {
            items[i] = items[i + 1];
        }
    }

    // Look for last element of array that is not a zero
    let lastNonZeroIdx = items.length - 1;
    for (let i = items.length - 1; i >= 0; i--) {
        if (items[i] === 0) {
            lastNonZeroIdx--;
        } else {
            break;
        }
    }

    for (let i = 0; i <= lastNonZeroIdx; i++) {
        if (items[i] === 0) {
            moveToLeft(i, lastNonZeroIdx);
            items[lastNonZeroIdx] = 0;

            lastNonZeroIdx--;
            i--;
        }
    }
};
