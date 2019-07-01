import { validateArray, swap } from "./utils";
import { validate } from "@babel/types";


export const bubleSort = (numbers) => {
    validateArray(numbers);

    let swapped = true;
    while (swapped) {
        swapped = false;

        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] > numbers[i + 1]) {
                swapped = true
                swap(numbers, i, i + 1);
            }
        }
    }

    return numbers;
}

export const selectionSort = (numbers) => {
    validateArray(numbers);

    for (let i = 0; i < numbers.length; i++) {        
        let smallest = numbers[i];
        let smallestIdx = i;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < smallest) {
                smallest = numbers[j];
                smallestIdx = j;
            }
        }

        if (smallestIdx !== i) {
            const aux = numbers[i];
            numbers[i] = smallest;
            numbers[smallestIdx] = aux;
        }
    }

    return numbers;
}

export const insertionSort = (numbers) => {
    validateArray(numbers);

    for (let elementToSortIdx = 1; elementToSortIdx < numbers.length; elementToSortIdx++) {
        let prevElementIdx = elementToSortIdx - 1;
        let elementToSort = numbers[elementToSortIdx];

        while (prevElementIdx >= 0 && numbers[prevElementIdx] > elementToSort) {
            numbers[prevElementIdx + 1] = numbers[prevElementIdx];
            numbers[prevElementIdx] = elementToSort;
            prevElementIdx--;
        }
    }
    
    return numbers;
}

export const mergeSort = (numbers) => {
    validateArray(numbers);

    const merge = (list1, list2) => {
        let result = [];
        let list1Idx = 0;
        let list2Idx = 0;

        while (list1Idx < list1.length && list2Idx < list2.length) {
            if (list1[list1Idx] < list2[list2Idx]) {
                result.push(list1[list1Idx]);
                list1Idx++;
            } else {
                result.push(list2[list2Idx]);
                list2Idx++;
            }
        }
        
        // Push possible pending elements from either list
        result.push(...list1.slice(list1Idx));
        result.push(...list2.slice(list2Idx));

        return result;
    }

    const divideSort = (list) => {
        if (list.length === 1) {
            return list;
        }

        let middle = Math.ceil(list.length / 2);
        let list1 = divideSort(list.slice(0, middle));
        let list2 = divideSort(list.slice(middle));

        return merge(list1, list2);
    }

    return divideSort(numbers);
}

export const quickSort = (numbers) => {
    validateArray(numbers);

    /**
     * Takes a pivot between start and end indexes and move all
     * smallest elements to left of pivot and greater elements
     * to the right.
     * After that, invokes self recursively for subarrays of each
     * side of pivot
     * 
     * @param {Number} start Start index of subarray (Inclusive)
     * @param {Number} end End index of subarray (Exclusive)
     * @param {Array} items Array that contains the specified indixes
     */
    const sort = (start, end, items) => {
        if (end - start === 2) {
            if (items[start] > items[start + 1]) {
                swap(items, start, start + 1);
            }
        } else {
            let pivotIdx = Math.floor((end - start) / 2) + start;
            let leftIdx = start;
            let rightIdx = end - 1;

            while (leftIdx < pivotIdx && rightIdx > pivotIdx) {
                if (items[leftIdx] > items[pivotIdx]) {
                    if (items[rightIdx] < items[pivotIdx]) {
                        swap(items, leftIdx, rightIdx);

                        rightIdx--;
                        leftIdx++;
                    } else {
                        rightIdx--;
                    }
                } else {
                    leftIdx++;
                }
            }

            // Move all possible greater remainers from left side
            // to right of pivot
            while (leftIdx < pivotIdx) {
                if (items[leftIdx] > items[pivotIdx]) {
                    const value = items[leftIdx];
                    
                    // Move all elements since 'leftIdx' til before 'pivot'
                    // one position to left
                    for (let i = leftIdx; i < pivotIdx; i++) {
                        items[i] = items[i + 1];
                    }

                    // Put value where pivot was previously
                    items[pivotIdx] = value;

                    // Adjust pivotIdx and rightIdx to match new position
                    leftIdx--;
                    pivotIdx--;
                }

                leftIdx++;
            }

            // Move all posible smallest remainer from right side
            // to left of pivot
            while (rightIdx > pivotIdx) {
                if (items[rightIdx] < items[pivotIdx]) {
                    const value = items[rightIdx];

                    // Move all elements since pivot til before 'rightIdx'
                    // one position to right
                    for (let i = rightIdx; i > pivotIdx; i--) {
                        items[i] = items[i - 1];
                    }

                    // Put value where pivot was previously
                    items[pivotIdx] = value;

                    // Adjust pivotIdx and rightIdx to match new positions
                    rightIdx++;
                    pivotIdx++;
                }

                rightIdx--;
            }

            // Sort subarray from left side of pivot
            if (pivotIdx - start > 1) {
                sort(start, pivotIdx, items);
            }

            // Sort subarray from right side of pivot
            if (end - pivotIdx > 1) {
                sort(pivotIdx, end, items);
            }
        }
    }

    sort(0, numbers.length, numbers);
    return numbers;
}
