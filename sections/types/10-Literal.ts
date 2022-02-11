function printText(position: 'left' | 'bottom' | 'right') {

}

function test(a: string, b: string): -1 | 0 | 1 | void {

}

type Opt = {
    width: null
}

function write(opt: Opt | 'auto') {

}


//
function request(url: string, method: 'POST' | 'GET') {

}

//【1】
const entity1 = { url: 'http://localhost:8080', method: 'POST' }
//error
request(entity1.url, entity1.method)

//change
request(entity1.url, entity1.method as 'POST')


//【2】 use suffix 'const'
const entity2 = { url: 'http://localhost:8080', method: 'POST' } as const
request(entity2.url, entity2.method)
