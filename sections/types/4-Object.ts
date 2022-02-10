//example1
function print(pt: { x: number; y: number }) {

}

print({ x: 1, y: 2 })



//example2
//Optional Properties
function print2(pt: { x: number, y: number, z?: number }) {

}

print2({ x: 1, y: 2 })
print2({ x: 1, y: 2, z: 3 })



