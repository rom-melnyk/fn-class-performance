import { functionImpl } from "./function-impl";
import { ClassImpl } from "./class-impl";
import { OBJECT_COUNT } from "./constants";

function logTime(start: number, message: string) {
    console.info(`${message}: ${(Date.now() - start).toLocaleString('en')}`);
}

let start = Date.now();
for (let i = 0; i < OBJECT_COUNT; i++) {
    const obj = functionImpl("0123456789");
}
logTime(start, 'Function implementation / Simple instantiation');

start = Date.now();
for (let i = 0; i < OBJECT_COUNT; i++) {
    const obj = new ClassImpl("0123456789");
}
logTime(start, 'Class implementation / Simple instantiation');

// -------------------------------------------------------------------------------------

start = Date.now();
for (let i = 0; i < OBJECT_COUNT; i++) {
    const obj = functionImpl("0123456789");
    obj.doSomething();
}
logTime(start, 'Function implementation / Method invocation');

start = Date.now();
for (let i = 0; i < OBJECT_COUNT; i++) {
    const obj = new ClassImpl("0123456789");
    obj.doSomething();
}
logTime(start, 'Class implementation / Method invocation');
