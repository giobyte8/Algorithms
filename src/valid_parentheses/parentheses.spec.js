import { isExpValid } from './parentheses';

describe("Valid Parentheses", () => {
    test("Wrong last right", () => {
        const exp = "([{}]}";
        expect(isExpValid(exp)).toBeFalsy();
    });

    test("Wrong characters", () => {
        const exp = "{}[]ab{}[a]";
        expect(isExpValid(exp)).toBeFalsy();
    });

    test("Wrong right", () => {
        const exp = "((}}";
        expect(isExpValid(exp)).toBeFalsy();
    });

    test("Only right parenthesis", () => {
        const exp = ")}]";
        expect(isExpValid(exp)).toBeFalsy();
    });

    test("Only left parenthesis", () => {
        const exp = "[{(";
        expect(isExpValid(exp)).toBeFalsy();
    });

    test("Valid simple string", () => {
        const exp = "()";
        expect(isExpValid(exp)).toBeTruthy();
    })

    test("Valid string", () => {
        const exp = "()[]{}";
        expect(isExpValid(exp)).toBeTruthy();
    })

    test("Valid string non continuous", () => {
        const exp = "{[]}";
        expect(isExpValid(exp)).toBeTruthy();
    })
});