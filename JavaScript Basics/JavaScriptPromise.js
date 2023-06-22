//Promises
//Promises allows us to write clean non-callback-centric-code and not worry about callback hell
//They are nested callback upon nested callback which are hard to read and understand.
//Promises are like catch and try methods.

//You first have to create a function or object.
//In this object I have a key that stores numbers.
//Inside that key has a value of 2.
//I have an if statement which states if a = 2, it returns resolve.
//If not it returns reject.
let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2){
        resolve('Success')
    } else{
        reject('Failed')
    }
})

//I then call the object and use .then() method. This means that if the code is resolved it runs through here.
p.then((message) => {
    console.log('This is in the then ' + message)
//If the code catches any errors, in this case a != 2.
//It get's caught in the .catch() method.
}).catch((message) =>{
    console.log('This is in the catch ' + message)
})

//We can also have multiple promises and test them using it's own methods.
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded.')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded.')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 1 recorded.')
})

//.all() method returns all results regardless if any of them is done before others.
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})

//.race() method returns the first result regardless if any of them are still going.
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})