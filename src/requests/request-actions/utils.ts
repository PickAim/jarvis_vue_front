export function convertMoneyToPennie<T extends object, K extends keyof T>(data: T, keys: K[]): void {
    processObjectKeys(data, keys, (a) => Math.round(a) * 100);
}

export function convertMoneyToRoubles<T extends object, K extends keyof T>(data: T, keys: K[]): void {
    processObjectKeys(data, keys, (a) => Math.round(a) / 100);
}

function processObjectKeys<T extends object, K extends keyof T>(data: T, keys: K[], pred: (a: number) => number): void {
    Object.keys(data).forEach(key => {
        if (keys.includes(key as K)) {
            (data[key as K] as number) = pred(data[key as K]);
        }
    });
}
