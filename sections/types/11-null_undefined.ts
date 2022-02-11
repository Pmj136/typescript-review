//enable strictNullChecks config
//当在tsconfig.json 开启strictNullChecks 时，下面的函数参数x需要程序来检测是否是null
function doSomething1(x: string | null) {
    console.log("Hello, " + x.toUpperCase());
}

function doSomething2(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}


//非空断言符号 !
function doSomething(x?: string | null) {
    console.log(x!.toUpperCase())
}
