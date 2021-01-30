// 26 - forEach With Set And Map:

// forEach(currentKey, currentValue, set):
/* const mySet = new Set([1,1,1,2,2,2,3,4,5]);
mySet.forEach((item1, item2) => {
    console.log(`${item1} - ${item2}`);
});

console.log("*".repeat(10));

// forEach(Value, Key, Map):
const myMap = new Map([["A", 1],["C", 3],["B", 2],["X", {}]]);

myMap.forEach((v, k) => {
    console.log(`${k} => ${v}`);
}); */

// ____________________________________

// 27 - Set vs WeakSet And Garbage Collection:

/* let mainObject = {A: 1};
let mySet = new Set([mainObject]);

let ObjectOne = {B: 2};
let objectTwo = {C: 3};

mySet.add(ObjectOne);
mySet.add(objectTwo);

console.log(mySet);

console.log(mySet.has(ObjectOne));
console.log(mySet.has(objectTwo));

console.log(mySet.size);
console.log(mySet.keys());

mySet.delete(ObjectOne);
console.log(mySet.has(ObjectOne));

objectTwo = null;
console.log(mySet.has(objectTwo));
console.log(mySet);

mySet.add("string");
mySet.add(12);
console.log(mySet);

console.log("*".repeat(10));

mySet.forEach(value => {
    console.log(value);
})
 */

// let mainObject = {A: 1};
// let myWeakSet = new WeakSet([mainObject]);

// let ObjectOne = {B: 2};
// let objectTwo = {C: 3};

// myWeakSet.add(ObjectOne);
// myWeakSet.add(objectTwo);

// console.log(myWeakSet);

// console.log(myWeakSet.has(ObjectOne));
// console.log(myWeakSet.has(objectTwo));

// console.log(myWeakSet.size); // undefined
// console.log(myWeakSet.keys()); // TypeError: myWeakSet.keys is not a function

// myWeakSet.delete(ObjectOne);
// console.log(myWeakSet.has(ObjectOne));

// objectTwo = null;
// console.log(myWeakSet.has(objectTwo));

// console.log(myWeakSet);

// myWeakSet.add("string"); 
/* TypeError: Invalid value used in weak set
at WeakSet.add (<anonymous>) */

// myWeakSet.add(12);
/* TypeError: Invalid value used in weak set
    at WeakSet.add (<anonymous>) */

// console.log("*".repeat(10));

// myWeakSet.forEach(value => {
//     console.log(value);
// })
// TypeError: myWeakSet.forEach is not a function

// ____________________________________

// 28 - Map vs Weakmap

/* // let myMap = new Map();
// let objectOne = {a: 1};
// myMap.set(objectOne, "test");
// myMap.set("b", 2);
// myMap.set("c", 3);
// myMap.set(1, 15);

// console.log(myMap);
// console.log(myMap.get("c"));
// console.log(myMap.get(objectOne));
// console.log(myMap.get(1));
// console.log(myMap.has("b"));
// myMap.delete("b");
// console.log(myMap.has("b"));

// objectOne = null;
// console.log(myMap.get(objectOne)); // undefined
// console.log(myMap.size);


let myWeakMap = new WeakMap();
let objectOne = {a: 1};
let objectTwo = {b: 2};
myWeakMap.set(objectOne, "test1");
myWeakMap.set(objectTwo, "test2");
// myWeakMap.set("b", 2); // invalid value 
// myWeakMap.set("c", 3); // invalid value 
// myWeakMap.set(1, 15);  // invalid value

console.log(myWeakMap); // WeakMap {{…} => "test"}

// TypeError: Invalid value used as weak map key at WeakMap.set (<anonymous>)

console.log(myWeakMap.get(objectOne));

console.log(myWeakMap.has(objectTwo));
myWeakMap.delete(objectTwo);
console.log(myWeakMap.has(objectTwo));

objectOne = null;
console.log(myWeakMap.get(objectOne)); // undefined
console.log(myWeakMap);
// console.log(myWeakMap.size); */

// ____________________________________

// 29 - Symbol Iterator And For Of Loop:

/* 

Iterable => Object Has Symbol.Iterator

Iterator:
Object With Interface Designed For Iteration
All Iterators Has Next() Method That Return Result Object
The Result Object Has Two Props
[1] Value => The Next Value
[2] Done => Boolean Value To Tell If  The Next Value Exists Or No

For ... Of Loop
[1] Call Symbol.Iterator With Next Method
[2] Save Value Inside Variable
[3] Check For Done If Its True => Exit The Loop

*/

/* let myArray = [1, 2, 3];
let myName = "Kinan";
let myNumber = 1000;
let myObject = {};

console.log(typeof myArray[Symbol.iterator]);
console.log(typeof myName[Symbol.iterator]);
console.log(typeof myNumber[Symbol.iterator]);
console.log(typeof myObject[Symbol.iterator]);

let theIterator = myName[Symbol.iterator]();
console.log(theIterator);
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());

for(let char of myName){
    console.log(char);
}

// for(let num of myNumber){
//     console.log(num); //  TypeError: myNumber is not iterable
// }

// for(let obj of myObject){
//     console.log(obj); //  TypeError: myObject is not iterable
// }

for(let arr of myArray){
    console.log(arr);
} */

// ____________________________________

// 30 - Custom Iterable Object:

/* const myObject = {
    name: "osama",
    age: 36,
    country: "egypt",
    favSkill: "javaScript",
    [Symbol.iterator] () {
        let step = 0;
        let properties = Object.keys(this);
        // console.log(properties);
        return {
            next() {
                return {
                    value: myObject[properties[step]],
                    done: step++ === properties.length
                }
            }
        }
    }
};

for(let prop of myObject){
    console.log(prop); 
}
// console.log(myObject["favSkill"]); */

// ____________________________________