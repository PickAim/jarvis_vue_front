export function convertMoneyToPennie<T extends Record<string, any>>(data: T, keys: (keyof T)[]): void {
    Object.keys(data).forEach(key => {
        if (keys.includes(key)) {
            (data[key] as number) *= 100;
        }
    });
}

export function convertMoneyToRoubles<T extends Record<string, any>>(data: T, keys: (keyof T)[]): void {
    Object.keys(data).forEach(key => {
        if (keys.includes(key)) {
            (data[key] as number) /= 100;
        }
    });
}
