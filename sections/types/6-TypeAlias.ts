// 1
type Point = {
    x: number
    y: number
}
function print(pt: Point) {
}
print({ x: 1, y: 2 })



//2
type Id = number | string
function printId(id:Id){
}
printId(1)
printId('1')
