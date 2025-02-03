type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number
}


type CardNumber = {
  cardnumber: string
}

type CardDate = {
  carddate: string
}

type CardDetails = CardNumber & CardDate & {
  cvv: number
}

// readonly is for  only reading ? is optional  like  some user  who want  to  use  the  web and doesn't  have  the craditCard 


let myUser: User = {
  _id: "393kdk",
  name: "VS",
  email: "sharmavashu099@gmail.com",
  isActive: true
}


myUser.email = "ram@email.com";
// myUser._id = "dkslfjs";
