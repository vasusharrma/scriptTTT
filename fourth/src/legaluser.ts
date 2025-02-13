
interface User {
  firstName: string
  lastName: string
  email: string
  age: number
}

function legalUser(user: User): boolean {
  if (user.age > 18) return true;
  return false;
}


const user: User = {
  firstName: "Vasu",
  lastName: "Sharma",
  email: "v@s.com",
  age: 21
}

legalUser(user);


