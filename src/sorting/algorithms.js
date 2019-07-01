
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
