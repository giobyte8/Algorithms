
export const bubleSort = (numbers) => {
    if (!numbers.length || numbers.length === 1) {
        return numbers;
    }

    let completellySorted = false;
    while (!completellySorted) {
        completellySorted = true;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers.length === i + 1) {
                break;
            }

            if (numbers[i] > numbers[i + 1]) {
                completellySorted = false;
                
                const aux = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = aux
            }
        }
    }

    return numbers;
}

export const selectionSort = (numbers) => {
    if (!numbers.length || numbers.length === 1) {
        return numbers;
    }

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
    if (!numbers.length || numbers.length === 1) {
        return numbers;
    }    

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
    if (!numbers.length || numbers.length === 1) {
        return numbers;
    }

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
