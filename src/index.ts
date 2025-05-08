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

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    } else {
        const expensiveProduct = products.reduce((prev, current) => {
            return prev.price > current.price ? prev : current;
        });
        return expensiveProduct;
    }
}
