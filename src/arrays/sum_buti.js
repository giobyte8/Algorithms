
/**
 * Given an array of integers, compute a new array such that each
 * element at index 'i' is the sum of all element at original array
 * except the element at index 'i'
 * 
 * @param {Array.Number} items List of integers
 */
export const sumAllButI = (items) => {
    let totalSum = 0;
    for (let item of items) {
        totalSum += item;
    }

    let result = [];
    for (let item of items) {
        result.push(totalSum - item);
    }

    return result;
}
