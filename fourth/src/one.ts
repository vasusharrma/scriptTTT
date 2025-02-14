function nam(firstname: string): void {
  console.log("hello" + firstname);
}

function sum(a: number, b: number): number {
  return a + b;
}

function isValid(age: number): boolean {
  if (age >= 18) return true;
  return false;
}
console.log(isValid(83));


const value = sum(4, 3);
console.log(value);

nam("Vasu");

//creatae a functino that takes anotehr functino as input and runs it after one second

function runAfter1S(fn: () => void): void {
  setTimeout(fn, 1000);

}


runAfter1S(() => {
  console.log("Hello after one Second");
})


const afunc: (a: number) => void = (b: number) => {
  console.log("Hello");
  return "Hello"
}

//interfacec






