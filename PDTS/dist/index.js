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
        this._totalAssign = 100;
        this.city = "Saharanpur";
    }
    get getTotalAssign() {
        return this._totalAssign;
    }
    set setTotalAssign(newAssign) {
        if (this._totalAssign < 1) {
            throw new Error("Course count should be more than 0");
        }
        this._totalAssign += newAssign;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeAssign(newAssign) {
        this._totalAssign = newAssign;
    }
}
const vasu = new User("v@vs.com", "vasu", 101);
// vasu.city
console.log("last line");
var asc = vasu.getTotalAssign;
console.log(asc);
