
export function swap(items, position1, position2) {
    const aux = items[position2];
    items[position2] = items[position1];
    items[position1] = aux;
}

export function validateArray(items) {
    if (!items.length) {
        throw Error("A valid array must be provied");
    }
}
