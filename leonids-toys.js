const train = {
    id: 1,
    name: "Henry",
    manufacturer: "Hasbro",
    price: 45,
    inventory: 30,
    age: 5
}

const bear = {
    id: 2,
    name: "Bernie",
    manufacturer: "Bear Buds",
    price: 25,
    inventory: 55,
    age: 3
}

const yoyo = {
    id: 3,
    name: "String Master",
    manufacturer: "Duncan",
    price: 15,
    inventory: 26,
    age: 10
}

const toys = [
    {
        id: 1,
        name: "Henry",
        manufacturer: "Hasbro",
        price: 45,
        inventory: 30,
        age: 5
    },
    {
        id: 2,
        name: "Bernie",
        manufacturer: "Bear Buds",
        price: 25,
        inventory: 55,
        age: 3
    },
    {
        id: 3,
        name: "String Master",
        manufacturer: "Duncan",
        price: 15,
        inventory: 26,
        age: 10
    }
]

for (const toy of toys) {
    console.log(toy.price)
}

const ball = {
    id: 4,
    name: "Spiraler",
    manufacturer: "Nerf",
    price: 10,
    inventory: 12,
    age: 8
}

const boardgame = {
    name: "Don't Break the Ice",
    manufacturer: "Mattell",
    price: 30,
    inventory: 77,
    age: 10
}

toys.push(ball) 
toys.push(boardgame)

console.log(toys)


for (const toy of toys) {
    console.log(`The ${toy.manufacturer} ${toy.name} costs $${toy.price} and we have ${toy.inventory} in stock.`)
}
 for (const toy of toys) {
     toy.price = toy.price + toy.price * .05
 }

for (const toy of toys) {
    console.log(`The ${toy.manufacturer} ${toy.name} costs $${toy.price} and we have ${toy.inventory} in stock.`)
}

const toyToFind = 3

for (const toy of toys) {
if (toy.id === toyToFind) {
    toy.price = toy.price + toy.price * .05
    console.log(`The ${toy.manufacturer} ${toy.name} costs $${toy.price} and we have ${toy.inventory} in stock.`)
    }
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}
 
addToyToInventory(boardgame)
for (const toy of toys) {
console.log(`The ${toy.manufacturer} ${toy.name} costs $${toy.price} and we have ${toy.inventory} in stock.`)
}




