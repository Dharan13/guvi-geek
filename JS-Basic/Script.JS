// data types

// primitive Datatypes

// Number ->
console.log(typeof 5); //integer or float values
//string ->
console.log(typeof "5"); //chachter encoded in '' or ""
//Boolean
console.log(typeof true); // true or false

//Non primitive datatypes
let arr = [1, 2, 3, 4 ,5]; // Array
console.log(typeof arr, arr);

let obj = { 1: "1"}; // objects
console.log(typeof obj, obj);

let a = 10;
let b = a;
console.log(a); //10
console.log(b); //10
b = 15;
console.log(a);
console.log(b);

//Non primitive datatypes (arr, obj)
let sam_arr = [1, 2, 3];
let sam_arr2 = sam_arr;
console.log(sam_arr); // [1, 2, 3]
console.log(sam_arr2); // [1, 2, 3]
sam_arr2[1] = 4;
console.log(sam_arr); // [1, 2, 3]
console.log(sam_arr2); // [1, 2, 3]

//Deep copy
let ano_arr = [5, 6, 7];
let ano_arr2 = Object.assign([], ano_arr);
console.log(ano_arr);
console.log(ano_arr2);
ano_arr2[1] = 8;
console.log(ano_arr);
console.log(ano_arr2);
