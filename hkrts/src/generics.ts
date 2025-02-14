//Generics the important and the easiest part of typescript

type arrType = number | string;

function firstel(arr: arrType[]): arrType {
  return arr[0];
}

var rel: arrType = firstel(["vasu", "ashu"]);
var rel2: arrType = firstel(["hello", "ram", 2, 4])

console.log("\n simple :    ");
console.log(rel);
console.log(rel2)

function firstelGeneric<T>(arr: T[]): T {
  return arr[0];
}

let feG = firstelGeneric<string>(["all", "time", "high"]);
let seG = firstelGeneric<number>([2.39302, 3.9203, 4.38928, 5.932, 7.9293]);
let teG = firstelGeneric<boolean>([true, false, false, false, true, true]);
console.log("\nGenereicccc :    ");
console.log(feG.toUpperCase());
console.log(seG.toFixed(0));
console.log(teG);


function getSomething<T>(arg: T): T {
  return arg;
}


let first = getSomething<string>("Hello");

let second = getSomething<number>(3.93300328);

let third = getSomething<boolean>(true);

console.log("\nGenereicccc2 :    ");
console.log(first.toUpperCase());
console.log(second.toFixed(4));
console.log(third);


interface Useri {
  namee: string
  age: number
}

let some = firstelGeneric<Useri>([{ namee: "Vasu", age: 39 }]);


console.log("\nwith interfcae type of object :    ");
console.log(some.namee.toUpperCase());
