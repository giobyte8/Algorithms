import { bracesMatch } from "./braces_match";

describe('Check matching braces', () => {
    test('Expression multiple', () => {
        let expression = '{{s}s{d{f}y}{utrfg[]}}';
        expect(bracesMatch(expression)).toEqual(true);
    });

    test('Expression with pure close', () => {
        expect(bracesMatch('}{}{')).toEqual(false);
    });

    test('Expression with no braces', () => {
        expect(bracesMatch('sdrghu')).toEqual(true);
    });

    test('Expression with an extra {', () => {
        expect(bracesMatch('{}{{{}{}}}{')).toEqual(false);
    });
});
