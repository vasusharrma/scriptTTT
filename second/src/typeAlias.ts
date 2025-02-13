type User = {
  name: string;
  email: string;
  isActive: boolean
}

function createUser(user: User): User {

  return { name: "", email: "", isActive: false }
}


createUser({ name: "Vasu Sharma", email: "sharmavashu099@gmail.com", isActive: false });



export { }
