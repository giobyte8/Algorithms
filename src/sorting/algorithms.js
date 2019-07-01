
export const selectionSort = (numbers) => {
    if (!numbers.length || numbers.length === 1) {
        return numbers;
    }

    let sorted = [];
    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++) {

        // Get the lowest number of remaining
        let minNumber = numbers[0];
        let minIdx = 0;
        if (numbers.length >= 2) {
            for (let j = 1; j < numbers.length; j++) {
                const number = numbers[j];

                if (number < minNumber) {
                    minNumber = number;
                    minIdx = j;
                }
            }
        }

        sorted.push(minNumber);
        numbers.splice(minIdx, 1);
    }

    return sorted;
}
