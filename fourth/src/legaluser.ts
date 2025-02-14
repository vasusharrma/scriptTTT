
interface User {
  firstName: string
  lastName: string
  email?: string
  age: number
  doSomething?: () => void
}

function legalUser(user: User): boolean {
  if (user.age > 18) return true;
  return false;
}

function isUser(user: { firstName: string, lastName: string, email?: string, age: number }): void {
  console.log("Hello ", user.firstName)
}


const user: User = {
  firstName: "Vasu",
  lastName: "Sharma",
  email: "v@s.com",
  age: 21,
}

class Customer implements User {
  firstName
  lastName
  email
  age

  constructor(a: string, b: string, c: string, d: number) {
    this.firstName = a;
    this.lastName = b
    this.email = c
    this.age = d
  }

  doSomething = (): void => {
    console.log("did something");
  }
}

isUser(user);
legalUser(user);


const c = new Customer("VASU", "SHARMA", "V@S.COM", 21);
console.log(c.doSomething());

type ID = number | string | boolean;


function printId(id: ID) {
  console.log(id);
}

printId("30");
printId(23);
