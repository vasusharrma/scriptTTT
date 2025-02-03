const User = {
  name: "Vasu",
  city: "Saharanpur",
  email: "sharmavashu099@gmail.com",
  isActive: true
}

function getCourse({ name: string }) {

}


getCourse({ name: "Vasu" })

function createUser({ name: string, isActive: boolean }): {} {
  return { name: "TypeScript" }
}

const newUser = { name: "Vasu", isActive: false, email: "sharmavashu099" }
createUser(newUser);

export { }
