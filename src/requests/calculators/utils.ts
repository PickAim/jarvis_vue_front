// Decorator
// export function requestMethod(originalMethod: any, _context: any) {
//     console.log("decorator init");
//     async function replacementMethod(this: { isBusy: boolean }, ...args: any[]) {
//         console.log("run");
//         if (this.isBusy) return;
//         this.isBusy = true;
//         const result = await originalMethod.call(this, ...args);
//         this.isBusy = false;
//         return result;
//     }
//     return replacementMethod;
// }

export function checkAndConvert<T extends Record<string, any>> (pattern: T, data: T): T | string {
    Object.keys(pattern).forEach(key => {
        if (!(key in data)) return key;
        if (typeof pattern[key] === "number") {
            const parsed = parseFloat(data[key]);
            if (isNaN(parsed)) {
                return key;
            }
            (pattern[key] as unknown) = parsed;
        } else if (typeof pattern[key] === "string") {
            const parsed = data[key].toString();
            if (parsed === "") {
                return key;
            }
            (pattern[key] as unknown) = parsed;
        } else if (typeof pattern[key] === typeof data[key]) {
            (pattern[key] as unknown) = data[key];
        } else {
            return key
        }
        // TODO: add deep validation (object in object)
    });
    return pattern;
}

export function removeKeys<T extends Record<string, any>>(data: T, keys: (keyof T)[]): void {
    Object.keys(data).forEach(key => {
        if (keys.includes(key)) {
            delete data[key];
        }
    });
}