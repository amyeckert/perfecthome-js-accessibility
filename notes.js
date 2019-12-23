// Objects
// anything that uses a dot in js is an OBJECT
var person ={}
var person ={
    'name': "Mrs. White"
};
// dot notation, lookup
person.name = "Mrs. White";
person.name; // "Mrs. White"

//dot methods etc. 
array.prototype();
array.push();
// etc. 
//  access with dots, can reassign
var who = person.name; 
who; // "mrs. White" 
person.name = "Mr. White"; //
who; //"Mrs. White" string primitive value 

// Primitive value is : string, number, boolean, etc.
// Non-primitives are arrays, promises,
// Primitive values are passed by value, copied.
// Non-primitives are passed by reference. 
// don't mutate data structures, copy them. ex how raw files always return a copy of the thing. 

who.story; 

// ARRAYs are basically objects and can be referenced wiht dots. Arrays have methods 

var person = [];
person.name = "Mrs. white";
typeof person === 'array'; // false, it's an object!
var person = [
    "name" : "Mrs. White",
    "0" : "I was not in the library"
];
// person.0 would return syntax error because it's not a string literal, it's a number. 
// person[0] would work
var plea = "wouldShe"; // property name
person.plea = "I would never";
// or 
person['plea'];