import { STORAGE_SIZE } from "./constants"

export function functionImpl(param: string) {
    const storage = Array<string>(STORAGE_SIZE).fill(param);

    function doSomething() {
        const first = storage.shift();
        storage.push(first!);
    }

    return {  storage, doSomething };
}
