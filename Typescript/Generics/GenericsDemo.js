// Array generic class
let numArray = new Array();
numArray.push(56);
numArray.push(56, 12, 23, 4, 5);
//numArray.push('hi');
console.log(numArray);
numArray.pop();
let nameArray = new Array();
nameArray.push('fg', 'gh');
nameArray.push(new String('hi'));
nameArray.pop();
let idArray = new Array();
idArray.push(123);
idArray.push('neo123');
// arrays : indexed, ordered, duplicate allowed, collection of single value objects
// set : non-indexed, ordered, duplicate not allowed, collection of single value objects
//map  : non-indexed, ordered on keys, duplicate keys not allowed, collection of key-value pair objects
let idSet = new Set();
idSet.add(34);
idSet.add(34);
idSet.add(14);
idSet.add(42);
idSet.add(14);
idSet.add(56);
console.log(idSet);
let areaMap = new Map();
areaMap.set(123, 'Airoli');
areaMap.set(223, 'Thane');
areaMap.set(234, 'Noida');
areaMap.set(123, 'Rabale');
areaMap.set(111, 'Thane');
areaMap.set(333, 'Noida');
console.log(areaMap);
