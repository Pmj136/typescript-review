function doSomething(pair: readonly [string, number]) {
    const a = pair[0];

    const b = pair[1];

    // ...
}

doSomething(["hello", 42]);


type Ops<T> = {
    [Property in keyof T]: boolean
}

type A = {
    name: string
}
