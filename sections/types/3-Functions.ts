//eg:
function great(name: string) {
    console.log(name)
}

//return type annotations
// usually don't need
function getNum(): number {
    return 1
}

//Anonymous
// the parameters of that function are automatically given types.
const names = ['a', 'b', 'c']
names.forEach(function (s) {
    console.log(s.toUpperCase())
})
