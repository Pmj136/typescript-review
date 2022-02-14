export {}

/**
 * index signatures
 */
interface StringArray {
    [index: number]: unknown

    readonly length: number
}

const arr: StringArray = [1, 2, 3, '哈哈']

/**
 * extending types
 */
interface BasicAddress {
    name?: string;
    street?: string;
    city?: string;
    country?: string;
    postalCode?: string;
}

//bad
// interface AddressWithUnit {
//     name?: string;
//     unit: string;
//     street: string;
//     city: string;
//     country: string;
//     postalCode: string;
// }

//good
interface AddressWithUnit extends BasicAddress {
    unit?: string
}


/**
 * intersection Types
 */
interface A {
    color: string
}

interface B {
    size: string
}

type AB = A & B
