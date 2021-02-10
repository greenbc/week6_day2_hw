// Exercise 1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.keys(person3))

// Exercise 2

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printInfo = () => {return `Their name is ${this.name} and their age is ${this.age}`}

    addAge = (age) => this.age++

}

let ben = new Person('Ben', 28)
let joel = new Person('Joel', 31)

console.log(ben.printInfo())
let years = 3
for(let i = 0; i <= years; i++){
    console.log(ben.addAge(i))
}

// Exercise 3

let bigWord = (s) => {
    return new Promise( (resolve,reject) => {
        if(s.length > 10){
            resolve(console.log('Big Word'))
        } else {
            reject(console.log('Small Word'))
        }
    })
}

async function async_bigWord(s){
    let new_word = await bigWord(s)
    return new_word
}

async_bigWord('ThisIsALongWord')
async_bigWord('ThisIsnt')