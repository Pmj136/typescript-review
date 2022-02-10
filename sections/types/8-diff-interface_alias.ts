/**
 * Differences Between Type Aliases and Interfaces
 */
//Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
// Almost all features of an interface are available in type,
// the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.


//【Interface】
// extending an interface
interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}

//Adding new fields to an existing interface
interface Window {
    title: string
}

interface Window {
    ts: string
}


//【Type】
// extending a type via intersections
type Animal2 = {
    name: string
}
type Bear2 = Animal2 & {
    honey: boolean
}
//A type cannot be changed  after created
type Window2 = {
    title: string
}
//duplicate
type Window2 = {
    ts: string
}

