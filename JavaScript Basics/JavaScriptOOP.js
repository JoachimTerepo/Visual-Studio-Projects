//Object Literals
//Compared to Java, there are different ways when creating objects.

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function() {
        console.log("draw");
    }
};

//Inside this object, we have properties and methods.
//radius and location are considered properties and draw is considered a method.
//What makes these completely unique is the difference between them.
//Properties holds values while methods are used to define logic.

circle.draw();
console.log(circle.location);
console.log(circle.radius);

//Factorie Objects
//When creating objects, we can hard code and create them.
//But if we wanted the objects with the same properties an methods, it would not work due to syntax error.
//What we can do instead is use factories, which are similar to constructors.

function createCricle(radius){
    return {
        radius,
        location: {
            x: 1,
            y: 1
        },
        draw: function(){
            console.log("draw");
        }
    };
}

const circle2 = createCricle(2);
const circle3 = createCricle(3);

console.log(circle2.radius);
console.log(circle3.radius);

//Constructors
//We can also create constructor to define objects.
//They are similar to Java constructors but have a different way of implementing them.

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

const another = new Circle(5);
console.log(another.radius)


//Declaration of Variables.
//In JavaScript we have to be precise when declaring objects.
//Due to JavaScript having no set primitive types to variables, we have to be careful when changing data.
//obj is an object, but we have no properties within it. We are trying to increment obj.
let obj = 20;

function increase(obj) {
    obj++;
}

increase(obj);
console.log(obj);

//We fail to increment obj, this is because it is technically not a reference type, but a primitive.
//obj is a number.
//What we have to do to change this is by adding properties within that object.

let obj2 = { value: 20 };

function increase(obj2) {
    obj2.value++;
}

increase(obj2);
console.log(obj2);

//Remember to be precise and know what to expect within objects.

//Adding and Removing properties.
//In JavaScript, we are able to add and remove properties real time.

another.location = { x: 1 };
console.log(another.location);

//We can also remove properties real time, using delete.

delete another.location;

//Private Properties
//We can have private properties within our constructors.
//To do this, we use let to define them as private.

function Circle(radius){
    this.radius = radius;
    let defaultLocation = { x: 0, y:0 };
    this.draw = function(){
        console.log("draw");
    }
}

const circle4 = new Circle(10);

//This stops us from accessing the private properties.

//Get and Set Methods
//Get and Set methods are different in JavaScript.
//Due to JavaScript having no classes, we are forced to put get and set methods within constructors.

function Circle(radius){
    this.radius = radius;
    let defaultLocation = { x: 0, y:0 };

    //Normal Get Method
    // this.getDefaultLocation = function(){
    //     return defaultLocation;
    // };

    this.draw = function(){
        console.log("draw");
    }

    //JavaScript Get and Set Method.
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
        return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y){
                throw new Error('Invalid location');
            }
            deafultLocation = value;
        }
    });
}

const circle5 = new Circle(30);
console.log(circle5.deafultLocation);
//Error occurs.
circle5.defaultLocation = 5;

//Exercise
//Simple Stopwatch Program.

function StopWatch(){
    let  startTime, endTime, running, duration = 0;

    this.reset = function(){
        duration = 0;
        startTime = null;
        endTime = null;
        running = false;
    }

    this.start = function(){
        if (running){
            throw new Error("Already Started");
        }
        else{
            running = true;
            startTime = new Date();
        }
    }

    this.stop = function(){
        if (!running){
            throw new Error("Has not Started");
        }
        else{
            running = false;
            endTime = new Date();
            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        }
    }

    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; }
    });
}