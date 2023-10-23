export function convertMoneyToPennie<T extends Record<string, number>>(data: T, keys: (keyof T)[]): void {
    Object.keys(data).forEach(key => {
        if (keys.includes(key)) {
            (data[key] as number) = Math.round(data[key] * 100);
        }
    });
}

export function convertMoneyToRoubles<T extends Record<string, number>>(data: T, keys: (keyof T)[]): void {
    Object.keys(data).forEach(key => {
        if (keys.includes(key)) {
            (data[key] as number) = Math.round(data[key]) / 100;
        }
    });
}
