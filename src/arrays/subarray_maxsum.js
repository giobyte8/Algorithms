

/**
 * Finds the sum of contiguous subarray of numbers which has the largest sum
 * @param {Array} items Integers with positive and/or negative
 */
export const subarrayMaxSum = (items) => {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < items.length - 1; i++) {
        sum = items[i];
        if (sum > maxSum) {
            maxSum = sum;
        }
        
        for (let j = i + 1; j < items.length; j++) {
            sum += items[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
}

export const subarrayMaxSumRecursive = (items) => {
    const greater = (a, b) => a > b ? a : b;
    const max = (a, b, c) => greater(greater(a, b), c);

    const maxCrossingSum = (items, start, end, pivot) => {
        let sum = 0;
        let maxLeftSum = Number.MIN_SAFE_INTEGER;
        for (let i = pivot; i >= start; i--) {
            sum += items[i];
            if (sum > maxLeftSum) {
                maxLeftSum = sum;
            }
        }

        sum = 0;
        let maxRightSum = Number.MIN_SAFE_INTEGER;
        for (let i = pivot + 1; i <= end; i++) {
            sum += items[i];
            if (sum > maxRightSum) {
                maxRightSum = sum;
            }
        }

        return maxLeftSum + maxRightSum;
    }

    const maxSum = (items, start, end) => {
        if (start === end) {
            return items[start];
        }

        // Get pivot
        let pivot = Math.floor((start + end) / 2);

        /* Return maximum of following three possible cases 
            a) Maximum subarray sum in left half 
            b) Maximum subarray sum in right half 
            c) Maximum subarray sum such that the subarray crosses the midpoint */
        return max(
            maxSum(items, start, pivot), 
            maxSum(items, pivot + 1, end), 
            maxCrossingSum(items, start, end, pivot)
        ); 
    }

    return maxSum(items, 0, items.length - 1);
};

export const subarrayMaxSumKadane = (items) => {
    let currMax = 0;
    let maxSoFar = 0;

    for (let i = 0; i < items.length; i++) {
        currMax = currMax + items[i];
        if (currMax < 0) {
            currMax = 0;
        } else if (currMax > maxSoFar) {
            maxSoFar = currMax;
        }
    }

    return maxSoFar;
}

export const subarrayMaxSumKadane1 = (items) => {
    let currMax = items[0];
    let maxSoFar = items[0];

    const max = (a, b) => a > b ? a : b;

    for (let i = 1; i < items.length; i++) {
        currMax = max(items[i], currMax + items[i]);
        maxSoFar = max(currMax, maxSoFar);
    }

    return maxSoFar;
}
