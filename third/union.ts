let balance: number | string = 395;

balance = "285";

type Cust = {
  name: string;
  id: number
}


type Admin = {
  username: string;
  id: number
}

let vasu: Cust | Admin = {
  name: "Vasu",
  id: 380
}

vasu = {
  username: "Vs.",
  id: 380
}



