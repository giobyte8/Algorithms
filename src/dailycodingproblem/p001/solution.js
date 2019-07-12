
/**
 * Check if 'items' array contains two numbers that
 * add up to 'k'
 * 
 * @param {Array} items Numbers
 * @param {Number} k Target sum
 */
export const containsSumFactors = (items, k) => {
    let possibleOkItems = new Set();

    for (let item of items) {
        if (possibleOkItems.has(item)) {
            return true;
        }

        possibleOkItems.add(k - item);
    }

    return false;
}
