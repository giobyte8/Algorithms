import { anagramGrouper } from "./anagram_grouper";

describe("Anagram grouper", () => {
    test("Array with multiple anagrams groups", () => {
        let anagrams = [
            'aipr',
            'eslov',
            'apir',
            'evols',
            'losev',
            'apri',
            'lesov',
            'levos',
        ];
        let grouped = [
            'aipr',
            'apir',
            'apri',
            'eslov',
            'evols',
            'losev',
            'lesov',
            'levos',
        ];

        expect(anagramGrouper(anagrams)).toEqual(grouped);
    });

    test("Already grouped anagrams", () => {
        let anagrams = [
            'aipr',
            'apir',
            'apri',
            'eslov',
            'evols',
            'losev',
            'lesov',
            'levos',
        ];
        let grouped = [
            'aipr',
            'apir',
            'apri',
            'eslov',
            'evols',
            'losev',
            'lesov',
            'levos',
        ];

        expect(anagramGrouper(anagrams)).toEqual(grouped);
    });
});
