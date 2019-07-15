
/**
 * Given an array of integers, returns a new array such that
 * each element at index 'i' is the product of all the
 * numbers on the original array except number at 'i'
 * 
 * @param {Array.Number} items List of numbers
 */
export const subtractIFactor = (items) => {
    let totalProduct = 1;
    for(let item of items) {
        totalProduct *= item;
    }

    let results = [];
    for(let item of items) {
        if (item == 0) {
            results.push(0);
        } else {
            results.push(totalProduct/item);
        }
    }

    return results;
};

/**
 * Given an array of integers, returns a new array such that
 * each element at index 'i' is the product of all the
 * numbers on the original array except number at 'i'
 * 
 * Note: this implementation does not uses the '/' operator
 * 
 * @param {Array.Number} items List of numbers
 */
export const subtractIFactorWithoutDivide = (items) => {
    let totalProduct = 1;
    for(let item of items) {
        totalProduct *= item;
    }

    let results = [];
    for(let item of items) {
        if (item == 0) {
            results.push(0);
        } else {
            let divideResult = 0;
            let remaining = totalProduct;
            let negativeResult = false;

            while(remaining >= item) {
                if (item < 0) {
                    item = item * -1;
                    negativeResult = !negativeResult;
                }

                remaining -= item;
                divideResult++;
            }

            results.push(negativeResult ? -1 * divideResult : divideResult);
        }
    }

    return results;
}
