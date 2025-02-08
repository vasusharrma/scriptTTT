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

function getDb(id: number | string) {
  //making api calls
  if (typeof (id) === "string") {
    id.toLowerCase();
  }

  if (typeof id === "number") {
    id.toFixed(3);
  }


  console.log(`Db id is : ${id}`);
}

getDb(3);
getDb("3");
