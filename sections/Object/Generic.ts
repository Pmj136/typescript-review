interface Box<T> {
    contents: T
}

let box: Box<string> = {
    contents: 'hahaha'
}

type Circle<T> = {
    desc: T
}
let circle: Circle<string> = {
    desc: '呃呃呃呃'
}


