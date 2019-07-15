
export const matrixDiagonal = (matrix) => {
    let diagonal = [];

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length > i) {
            diagonal.push(matrix[i][i]);
        }
    }

    return diagonal;
}
