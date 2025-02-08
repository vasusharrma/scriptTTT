interface Customer {
  readonly dbId: number,
  email: string,
  userId: number,
  // startTrial: () => string
  startTrial(): string,
  getCoupon(coupon: string, value: number): string,

}

// re-opening of the interface


interface Customer {
  githubToken?: string
}

interface Shoopkeeper extends Customer {
  name: string
}

var Vs: Customer = {
  dbId: 3939, email: "vs@gmail.com", userId: 101, startTrial: () => {
    return "trial returned"
  },
  getCoupon: (name: "Vasu", age: 58) => {
    return name;
  },
  githubToken: "ikd83kksl3i"
}


Vs.email = "v@vs.com";
Vs.userId = 1001;

