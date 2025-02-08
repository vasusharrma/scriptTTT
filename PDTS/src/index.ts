//
// class User {
//
//   public email: string;
//   name: string;
//   private readonly city: string = "Nanauta"
//
//   constructor(email: string, name: string,) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  readonly city: string = "Saharanpur";
  constructor(
    public email: string,
    public name: string,
    private userId: number) {
  }
}


const vasu = new User("v@vs.com", "vasu", 101);

// vasu.city
