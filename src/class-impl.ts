import { STORAGE_SIZE } from "./constants"

export class ClassImpl {
    public storage: string[];
    
    constructor(param: string) {
        this.storage = Array<string>(STORAGE_SIZE).fill(param);
    }

    public doSomething() {
        const first = this.storage.shift();
        this.storage.push(first!);
    }
}
