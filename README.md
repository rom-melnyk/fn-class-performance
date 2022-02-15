# Typescript function vs. class: performance test

Both, function implementation and class return an object like this:
```
{
    storage: Array<string>;    // of size controlled in `constants.ts`
    doSomething(): void;       // shifts the `storage` circularly by one element
}
```

The performance load is controlled by the `constants.ts`.

Following options were analyzed:
- run the TS code via `ts-node`,
- compile TS → JS then run it via `node`,
- compile TS into browser-friendly code (open [the page](http://localhost:8033/) and reveal the console via F12).

## How to:

```
npm i
npm run      # to check the options
```

## TLDR
i7 ⨯ 16Gb + Node16 give **pretty similar results** for both function implementation and classes.

