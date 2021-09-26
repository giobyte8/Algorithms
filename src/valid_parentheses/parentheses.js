
/**
 * Checks if all left parentheses in given expression
 * are properly closed by right parentheses
 * @param {string} exp String expresion to validate
 */
export const isExpValid = (exp) => {
    const leftParentheses = [];
    const rightLeftRels = {
        "}": "{",
        "]": "[",
        ")": "("
    }

    for (const c of exp) {
        
        // Is right parentheses?
        if (c in rightLeftRels) {
            const lastLeftP = leftParentheses.pop();
            if (rightLeftRels[c] !== lastLeftP) {
                return false;
            }
        } else {
            leftParentheses.push(c);
        }
    }

    return leftParentheses.length === 0;
}