//console.log is the way to print statements.
console.log('Hello World');

//let is the way to declare variables.
let name = "Joachim";
console.log(name);

//const variables: pretty much final variables.
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//Variable Primitive Types: Different types to declare variables
let nameTest = "Joachim";//Strings
let int = 30;//Numbers
let trueOrFalse = true;//Boolean
let firstName = undefined;//Undefined type
let selectedColour = null;//Object

//Dynamic Typing
//Comparing Javascript to Java. Javascript uses dynamic language while Java uses Static Language.
//Javascript doesn't have variable type declaration such as String, int or boolean.
//This is because they run real time, so that means Javascript variables can change whenever the program is running.
//So let nameTest might be declared as a string, but you can change the type later within the program.

//Objects
//Creating objects are quite different to Java.
let person = {
    name: "Joachim",
    age: 19
};

console.log(person);
//Similar to Java, we can use Dot operator to change data within objects.
person.name = "Dickie";
person.age = 18;
console.log(person);

//There's also another way to access and change data within objects.
//We can use Bracket Notations or Operator.
person['name'] = 'Joachim';
console.log(person.name);

//Arrays
//These are normal array code to add and select in arrays, similar to java.
let selectedColours = ['red', 'blue'];
selectedColours[2] = 'green'
console.log(selectedColours[2]);

//But there are major differences between these two languages.
//Javascript is a dyanamic language, meaning theres more freedom. We can add different types into arrays such as integers.
selectedColours[3] = 2;
console.log(selectedColours);

//Functions
//Function declaration are similar to Java.
function greet(){
    console.log("Hello World");
}

//Also calling it is similar. 
greet();

//We can also add variables parameters to our functions.
function greetName(name){
    console.log("Hello " + name + "!");
}

greetName("Joachim");

//But we are not forced to stick to certain types due to Javascript being a dynamic language.
//Inside our function, we are able to have different primitive types such as strings, numbers and booleans.
greetName("Joachim");
greetName(12);
greetName(true);

//Function types
//We can have functions to return data such as numbers, booleans or strings.

function square(number){
    return number * number;
}

console.log(square(3));
