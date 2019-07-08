
/**
 * Checks if whether any two numbers from the list
 * add up specified target sum
 * @param {Array} items List of numbers
 * @param {Number} targetSum Target sum
 */
export const hasFactors = (items, targetSum) => {
    for (let i = 0; i < items.length - 1; i++) {
        for (let j = i + 1; j < items.length; j++) {
            if (items[i] + items[j] === targetSum) {
                return true;
            }            
        }        
    }

    return false;
}