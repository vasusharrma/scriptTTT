"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Saharanpur";
    }
}
const vasu = new User("v@vs.com", "vasu", 101);
// vasu.city
