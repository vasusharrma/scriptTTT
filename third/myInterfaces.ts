interface Customer {
  readonly dbId: number,
  email: string,
  userId: number,
  // startTrial: () => string
  startTrial(): string,
  getCoupon(coupon: string, value: number): string
}


var Vs: Customer = {
  dbId: 3939, email: "vs@gmail.com", userId: 101, startTrial: () => {
    return "trial returned"
  },
  getCoupon: (name: "Vasu", age: 58) => {
    return name;
  }
}


Vs.email = "v@vs.com";
Vs.userId = 1001;

