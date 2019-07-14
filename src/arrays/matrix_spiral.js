
/**
 * Gets the 'spiral' components of given matrix
 * Assume that the matrix is s
 * @param {Array} matrix 
 */
export const getSpiral = (matrix) => {
    let spiral = [];

    let x1 = 0;
    let y1 = 0;
    let x2 = matrix.length - 1;
    let y2 = matrix[0].length - 1;
    let matrixSize = matrix.length * matrix[0].length;
    let i  = 0;
    let j  = 0;

    while (spiral.length < matrixSize) {
        if (x1 <= x2 && y1 <= y2) {
            for (i = x1; i <= x2; i++) {
                spiral.push(matrix[i][j]);
            }

            i--;
        }
        y1++; // Advance one row down

        if (x1 <= x2 && y1 <= y2) {
            for (j = y1; j <= y2; j++) {
                spiral.push(matrix[i][j])
            }

            j--;
        }
        x2--; // Advance one column to left
    
        if (x1 <= x2 && y1 <= y2) {
            for (i = x2; i >= x1; i--) {
                spiral.push(matrix[i][j]);
            }

            i++;
        }
        y2--; // Advance one row up

        if (x1 <= x2 && y1 <= y2) {
            for (j = y2; j >= y1; j--) {
                spiral.push(matrix[i][j]);
            }

            j++;
        }
        x1++; // Advance one column to right
    }

    return spiral;
}
