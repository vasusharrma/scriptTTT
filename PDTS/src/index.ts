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
  protected _totalAssign = 100;

  readonly city: string = "Saharanpur";
  constructor(
    public email: string,
    public name: string,
    private userId: number) {
  }

  get getTotalAssign(): number {
    return this._totalAssign;
  }

  set setTotalAssign(newAssign: number) {
    if (this._totalAssign < 1) {
      throw new Error("Course count should be more than 0");
    }
    this._totalAssign += newAssign;
  }

}


class subUser extends User {
  isFamily: boolean = true;
  changeAssign(newAssign: number) {
    this._totalAssign = newAssign;
  }

}


const vasu = new User("v@vs.com", "vasu", 101);

// vasu.city

console.log("last line")

var asc = vasu.getTotalAssign;
console.log(asc);
