function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    const filteredItems = items.filter((item) => item.rating >= 4);
    return filteredItems;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result = [] as T[];
    for (let array of arrays) {
        result.push(...array);
    }
    return result;
}
