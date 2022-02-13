type Fish = {
    swim: Function
}
type Bird = {
    fly: Function
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getSmallPet() {
    const pet: Bird = {
        fly() {
            console.log('fly')
        }
    }
    return pet
}

const pet = getSmallPet()
if (isFish(pet)) {
    pet.swim()
} else {
    pet.fly()
}
