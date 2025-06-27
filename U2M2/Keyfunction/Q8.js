function personInfo(name, age) {
    console.log( `Name: ${name}, Age: ${age}`);
}
let person = { name: "John", age: 30 };
personInfo.call(person, person.name, person.age)