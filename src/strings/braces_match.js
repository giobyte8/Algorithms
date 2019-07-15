
/**
 * Given a string check if for each '{' exists its corresponding
 * '}'. If '}' goes first than '{' the string is invalid
 * 
 * @param {string} expression Expression with braces
 */
export const bracesMatch = (expression) => {
    let openBraces = [];

    for (let i = 0; i < expression.length; i++) {
        if (expression.charAt(i) === '{') {
            openBraces.push('{');
        } else if (expression.charAt(i) === '}') {
            if (openBraces.length <= 0) {
                return false;
            }

            openBraces.pop();
        }
    }

    return openBraces.length === 0;
}