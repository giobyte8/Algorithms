
const areEqual = (array1, array2) => {
    if (array1.length !== array2.length) return false;
    
    let equal = true;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            equal = false;
            break;
        }
    }

    return equal;
}

/**
 * Given an array of strings, group the anagrams together
 * @param {Array.string} words List of words
 */
export const anagramGrouper = (words) => {
    let groups = [];
    for (let word of words) {
        let sortedChars = word.split("").sort();
        
        // Look for a group with same chars
        let groupFound = false;
        for (let group of groups) {
            if (areEqual(group.sortedChars, sortedChars)) {
                groupFound = true;
                group.words.push(word);
            }
        }

        if (!groupFound) {
            let group = new AnagramsGroup(sortedChars);
            group.words.push(word);

            groups.push(group);
        }
    }

    let groupedWords = [];
    for (let group of groups) {
        groupedWords = [...groupedWords, ...group.words];
    }

    return groupedWords;
}

class AnagramsGroup {
    constructor(sortedChars) {
        this.sortedChars = sortedChars;
        this.words = [];
    }
}
