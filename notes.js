/* *************************************
ARRAYs are a type of object and can be referenced with dot notation.
Arrays have methods, numerical indices. has property length, is ordered, better for looping,

OBJECTS 
-don't have order or indices so can't be rearranged, length calculated, etc. Can't .push() to an object.
-anything that uses a dot in js is an OBJECT
- Dot Notation
    strings YES
    numbers NO
    quotations NO 
    weird characters NO
    expressions NO
    (Use dot notations for fewer characters to type)
- Brackets
    strings YES
    numbers YES
    quotations YES
    weird characters YES
    expressions YES

RECAP/Quiz:
What is an object? 
    A data structure
What is the difference between dot and bracket notation?
How do you add a property with a key that contains special characters?
How do you add a property whose key and value are stored in different variables?
How do we loop through objects to access the values?
When can you only use dot notation and not brackets?
When can you only use brackets and not dot notation?
How do you add a property with a key that is stored in a variable? 
How do you access an object that is inside another object?
How do you create an object that is nested inside another object? 
Destructuring:
    objects and arrays
********************************/
var person = {}
var person = {
    'name': "Mrs. White"
};
// dot notation, lookup
person.name = "Mrs. White";
person.name; // "Mrs. White"

//dot methods etc. 
array.prototype();
array.push();
array.merge();
// etc. 
//  access with dots, can reassign
var who = person.name; 
who; // "mrs. White" 
person.name = "Mr. White"; //
who; //"Mrs. White" string primitive value 

// Primitive value is : string, number, boolean, etc.
// Non-primitives are arrays, promises,
// Primitive values are passed by value, COPIED.
// Non-primitives are passed by reference. 
// Don't mutate data structures, copy them. ex how raw files always and only return a copy of the thing. 

who.story; 
var person = [];
person.name = "Mrs. white";
typeof person === 'array'; // false, it's an object!
var person = [
    "name": "Mrs. White",
    "0": "I was not in the library"
];
// person.0 would return syntax error because it's not a string literal, it's a number. 
// person[0] would work

// whatever is in [] is seen as something that can be evaluated.
// ex. box[1 + 1] = false; // box[2] = false

var plea = "wouldShe"; // property name
person.plea = "I would never"; // undefined
// but 
person['plea']; // "I would never"
person.0; // syntax error, change to: person['0'];

// Non-valid characters -- avoid!
var box ={};
box['material'] = 'cardboard'; // valid string
box[0] = 'meow'; // valid number, no quotes
box['^&*'] = 'testing 123'; // works if in quotes, but not a great idea
box[1] = true; 

var test = box['^&*'];
// chose arrays when you have a list of like items
// choose objects when you need to define things. 

/*  *****************************
    CLUE GAME 
    Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue.
*******************************/

var game ={};
game.murderer = "???"
game['weapons'] = [
    {type: 'angry cats', location: 'lab'},
    {type: 'snowballs', location: 'kitchen'}
    ];
game.name = [];
game.name[0] = 'Miss Scarlet'; 
game.name.push('bob', 'joe', 'sally', 'Professor Plum');

var characters = [];
var bob = {
    'name': 'bob',
    'age': 99,
    'color': 'blue',
    'likes icecream': true, 
    'room': 'kitchen',
    'weapon': 'kindness'
}
var joe = {
    'name': 'joe',
    'age': 12,
    'color': 'pink',
    'likes icecream': false,
    'room': 'mud room', 
    'weapon': 'snowballs'
}
var sally = {
    'name': 'sally',
    'age': 35,
    'color': 'black',
    'likes icecream': false,
    'room': 'garage', 
    'weapon': 'knife'
}
var donald = {
    'name': 'donald',
    'age': 78,
    'color': 'brown',
    'likes icecream': true,
    'room': 'bathroom', 
    'weapon': 'idiocy'
}
characters.push(bob, joe, sally, donald);

var weapons = [];
weapons.push('knife', 'gun', 'idiocy', 'snowballs', 'hot sauce', 'kindness');

var rooms = [];
rooms.push('bathroom', 'study', 'garage', 'kitchen', 'mud room');

var confidential = {
    'murderer': 'donald',
    'weapon': 'idiocy',
    'room': 'bathroom'
}
/*
 *  ES6 Destructuring, for getting values out of objects and arrays with less typing while keeping it readable.
 */
// Declarations: create in order blue: true, red:false, etc.
// Arrays  
const [a, b] = [true, false]; // can't be reassigned, can change properties of const object, can add new properties

let [c, d]  = [true, false]; // can be reassigned within block scope {} that are not an object, like a function() {}, try {} catch {}...

var [e, f]  = [true, false]; // can be reassigned 
Object.freeze(a); // can freeze an object's properties but only one level deep. 

// Assignments: When variables already exist 
// Target   =  Source (same number on either side or extra one will be undefined)
[c, d]  = ['this', 'that'];

//Objects-
// Declarations same deal
const {g, h} = {first: 0, second: 1};
let {i, j} = {first: 0, second: 1};
var {k, l} = {first: 0, second: 1};
//Assignments: names must match, but objects don't have order.
{k, l} = {second: 3, first: 2};

// CLUE example on one line:
suspect = {name, weapon, room } = { 'name': 'Rusty', 'room': 'kitchen', 'weapon': 'candlestick' };

// Essentially the same as writing 3 lines.
// const name = suspect.name;
// const room = suspect.room;
// const weapon = suspect.weapon;

/* 
 * NESTED DATA STRUCTURES
 */
// SPREAD
var [a, , b] = [1, 2, 3];
console.log(a, b); // 1 3

var [a, ...b] = [1, 2, 3]; // gathers all the rest of unassigned values and assigns to b, thus,
console.log(a, b); // returns 1 [2, 3] 

// can easily SWAP variables without using a temp variable to hold value of one while you reassign the other.

var a = 1, b = 2;
console.log(a, b); // 1 2 
// so that a === 2, b === 1;  simultaneously reassign variables. 
[b, a] = [a, b]; 
console.log(a, b); // 2 1 

// Deep nested arrays. This example is a hot mess! don't destructure, unreadable!
var what = [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]]; //what the hell is this?
console.log(what); 
// a = 1;
// b = 2;
// c =  (2) [Array(2), 5] so:
//      0: Array(2)
//          0: 3
//          1: 4
//      1: 5
// d = 6;

// Destructuring Objects -- other courses cover in detail
var{user: x} = {user: 5};
console.log(x);

// LIST transformations like using JSON
var game = [
    'suspects': [
        {
            name: 'rusty',
            color: 'orange'
        }, 
        {
            name: 'bob',
            color: 'blue'
        }
    ]
]

var gameLoop = function(game) {
    // loop through each object in suspects array
    for (let i = 0; i < game.suspects.length; i++) {
        console.log('outer loop');
        // for each one in array
        for (var key in game.suspects[i]) {
            console.log('inner loop');
            // check for value of rusty
            if (game.suspects[i][key] === "rusty") {
                console.log('got \em!');
            } else {
                console.log("Next time!");
            }
        }
    }
}
gameLoop(game);

// -------
var suspects = [
    {
        name: 'rusty',
        color: 'maroon'
    }, 
    {
        name: 'bob',
        color: 'puce'
    }
]
// one way to do this
var color1 = game.suspects[0].color;
var color2 = game.suspects[1].color;

// destructured way: 
var [color1, color2] = [suspects[0].color, suspects[1].color];
// this way, below, establishes variable color1 with the value of color: from whatever the first object in the array [suspects] is, and variable color2 from value of color: in second object in [suspects]. Yoda syntax.
var [{color: color1}, {color: color2}] = suspects;

/*
 * 
*/
function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        // ES6: a function can be added as a method on an object, don't need keyword: 
        speak() {
            console.log('my name is ', name);
        }
    };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White', ...];

//  
CreateSuspectObjects(suspects[0]);

// CREATE LIST OF OBJECTS that each have a name, a function.
var suspectsList = [];

//Looping with for()
for(var i = 0; i < suspects.length; i++) {
    // call the function that returns the suspect objects, add to suspectsList array
    suspectsList.push(CreateSuspectObjects([i]));
}

// looping with -.each, underscore is abstracting a loop into a function,
_.each(suspects, function(name)) {
    suspectsList.push(CreateSuspectObjects(name));
}

_.each(data, callback()); // this is a function that takes in an array and runs a callback function on it. Fewer mistakes. easier. https://underscorejs.org/#each
// vs
[array].foreach(function()); //this is a method on an array


